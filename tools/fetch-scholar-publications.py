#!/usr/bin/env python3
import argparse
import html
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "assets" / "js" / "data" / "publications.js"
DEFAULT_USER = "LKPpmXQAAAAJ"
PAGE_SIZE = 100
VENUE_MARKERS = (
    "IEEE",
    "Ieee",
    "arXiv",
    "Proceedings",
    "International",
    "PACM",
    "Sensors",
    "NAACL",
    "CVPR",
    "ICCV",
    "ICASSP",
    "IJCAI",
    "Mobile",
    "Progress",
    "ACM",
    "41st",
    "42th",
    "44th",
    "51st",
    "20th",
)


ROW_RE = re.compile(
    r'<tr class="gsc_a_tr">.*?<a href="(?P<href>[^"]+)" class="gsc_a_at">(?P<title>.*?)</a>'
    r'<div class="gs_gray">(?P<authors>.*?)</div><div class="gs_gray">(?P<venue>.*?)</div>.*?'
    r'<td class="gsc_a_y"><span[^>]*>(?P<year>\d{4})</span>',
    re.S,
)


def fetch_page(user_id: str, start: int) -> str:
    params = urllib.parse.urlencode(
        {
            "view_op": "list_works",
            "hl": "en",
            "user": user_id,
            "cstart": start,
            "pagesize": PAGE_SIZE,
        }
    )
    url = f"https://scholar.google.com/citations?{params}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read().decode("utf-8", errors="replace")


def strip_tags(value: str) -> str:
    return re.sub(r"<.*?>", "", value)


def normalize_space(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def normalize_text(value: str) -> str:
    text = html.unescape(strip_tags(value))
    replacements = {
        "\u2026": "...",
        "\u2013": "-",
        "\u2014": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\uff08": "(",
        "\uff09": ")",
        "\u202a": "",
        "\u202b": "",
        "\u202c": "",
        "\u202d": "",
        "\u202e": "",
        "\u2066": "",
        "\u2067": "",
        "\u2068": "",
        "\u2069": "",
        "\ufeff": "",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    return normalize_space(text)


def trim_decorative_prefix(value: str) -> str:
    text = value.lstrip()
    while text and not (text[0].isascii() and text[0].isalnum()):
        if text.startswith("(") and len(text) > 1 and text[1].isascii() and text[1].isalnum():
            break
        text = text[1:].lstrip()
    return text


def clean_title(value: str) -> str:
    text = normalize_text(value)
    return re.sub(r"^[^\w(]+", "", text)


def clean_field(value: str) -> str:
    text = trim_decorative_prefix(normalize_text(value))

    marker_indexes = [text.find(marker) for marker in VENUE_MARKERS if marker in text]
    marker_indexes = [index for index in marker_indexes if index > 0]
    if marker_indexes:
        first_index = min(marker_indexes)
        prefix = text[:first_index]
        has_noisy_prefix = any(
            not (ch.isascii() and (ch.isalnum() or ch in " ()-,:/&.'"))
            for ch in prefix
        )
        if has_noisy_prefix:
            text = text[first_index:].lstrip()

    return normalize_space(text)


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug or "paper"


def collect_publications(user_id: str):
    items = []
    seen_titles = set()

    for start in range(0, 1000, PAGE_SIZE):
        page = fetch_page(user_id, start)
        matches = list(ROW_RE.finditer(page))
        if not matches:
            break

        for match in matches:
            title = clean_title(match.group("title"))
            if not title or title in seen_titles:
                continue

            seen_titles.add(title)
            items.append(
                {
                    "slug": slugify(title),
                    "title": title,
                    "authors": clean_field(match.group("authors")),
                    "venue": clean_field(match.group("venue")),
                    "year": int(match.group("year")),
                }
            )

    items.sort(key=lambda item: (-item["year"], item["title"].lower()))
    return items


def build_output(rows) -> str:
    lines = [
        "(function () {",
        '  const SiteContent = (window.SiteContent = window.SiteContent || {});',
        "  const rows = `",
    ]

    for row in rows:
        title = row["title"].replace("`", "'")
        authors = row["authors"].replace("`", "'")
        venue = row["venue"].replace("`", "'")
        lines.append(f'{row["slug"]}\t{title}\t{authors}\t{venue}\t{row["year"]}')

    lines.extend(
        [
            "`;",
            "",
            "  SiteContent.publications = rows",
            "    .trim()",
            r"    .split(/\n/)",
            "    .map((row) => {",
            '      const [slug, title, authors, venue, year] = row.split("\\t");',
            '      const yearMatch = venue.match(/(20\\d{2}|19\\d{2})/);',
            "      return {",
            "        slug,",
            "        title,",
            "        authors,",
            "        venue,",
            "        year: year ? Number(year) : yearMatch ? Number(yearMatch[1]) : null",
            "      };",
            "    });",
            "})();",
            "",
        ]
    )

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Fetch Google Scholar publications into publications.js")
    parser.add_argument("--user", default=DEFAULT_USER, help="Google Scholar user id")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT), help="Output file path")
    args = parser.parse_args()

    rows = collect_publications(args.user)
    if not rows:
        raise SystemExit("No publications were parsed from Google Scholar.")

    output_path = Path(args.output)
    output_path.write_text(build_output(rows), encoding="utf-8")
    print(f"Wrote {len(rows)} publications to {output_path}")


if __name__ == "__main__":
    sys.exit(main())
