# XJTU AIoT Group Website

This project is a multi-page static website for `XJTU AIoT Group`.

## Structure

```text
.
|-- index.html
|-- publications.html
|-- paper.html
|-- note.html
|-- fei-wang.html
|-- course.html
|-- awards.html
|-- team.html
|-- gallery.html
|-- notes
|   |-- template
|   |   |-- index.md
|   |   `-- assets
|   |       |-- cover.svg
|   |       `-- README.txt
|   `-- <note-slug>
|       |-- index.md
|       |-- index.html
|       `-- assets
|           `-- ...
|-- papers
|   |-- template
|   |   |-- index.md
|   |   |-- index.html
|   |   `-- assets
|   |       |-- cover.svg
|   |       `-- README.txt
|   `-- <paper-slug>
|       |-- index.md
|       |-- index.html
|       `-- assets
|           `-- ...
|-- tools
|   `-- generate-paper-pages.js
`-- assets
    |-- media
    |   |-- gallery
    |   `-- people
    |-- css
    |   |-- note-page.css
    |   |-- paper-page.css
    |   `-- site.css
    `-- js
        |-- app.js
        |-- helpers.js
        `-- data
            |-- site-content.js
            `-- publications.js
```

## What To Edit

- Edit `assets/js/data/site-content.js` for:
  - about page copy and news
  - Fei Wang profile
  - courses
  - awards
  - team members
  - gallery snapshots
  - gallery note cards
- Edit `assets/js/data/publications.js` for the publication list.
- Use local image paths in `site-content.js` for:
  - `SiteContent.feiWang.photo`
  - team member `photo`
  - gallery snapshot `image` or `photo`

## Publications Workflow

Each paper lives in its own folder:

- `papers/<paper-slug>/index.md`
- `papers/<paper-slug>/index.html`
- `papers/<paper-slug>/assets/...`

The paper page is rendered as:

- HTML hero blocks for title, authors, venue, institution, and links
- Markdown body for the long-form article content

Use the template folder as a starting point:

- `papers/template/index.md`
- `papers/template/index.html`

After editing publication data or Markdown, regenerate the pages:

```bash
node tools/generate-paper-pages.js
```

If you want to refresh the publication list from the configured Google Scholar profile first:

```bash
python tools/fetch-scholar-publications.py
```

Use overwrite only when you want to refresh generated Markdown starter files and cover assets too:

```bash
node tools/generate-paper-pages.js --overwrite
```

## Notes Workflow

Each gallery note lives in its own folder:

- `notes/<note-slug>/index.md`
- `notes/<note-slug>/index.html`
- `notes/<note-slug>/assets/...`

The gallery cards link directly to `notes/<note-slug>/index.html`.

Use the template folder as a starting point:

- `notes/template/index.md`

After editing note Markdown, regenerate the static note pages:

```bash
node tools/generate-paper-pages.js
```

## Adding A Publication

Add a new row to `assets/js/data/publications.js` in the format:

```text
slug<TAB>title<TAB>authors<TAB>venue<TAB>year
```

Then run:

```bash
node tools/generate-paper-pages.js
```

That will create the paper folder if it does not already exist.

## Adding A Team Member

Add a new member object in `assets/js/data/site-content.js`:

```js
{
  name: "Example Name",
  role: "PhD Student",
  bio: "Short introduction here.",
  link: "https://example.com/",
  photo: "./assets/media/people/example.jpg",
  palette: ["#264a72", "#d9ebff"]
}
```

- `link` is optional.
- If `photo` is omitted, the site falls back to a generated portrait.

## Adding Gallery Content

For gallery snapshots:

- add or edit `SiteContent.gallery.snapshots`
- set `image` or `photo` to a local file when available

For lab notes:

- add or edit the note card entry in `SiteContent.gallery.notes`
- create `notes/<slug>/index.md`
- place related images or PDFs in `notes/<slug>/assets/`
- run the generator again

## Local Preview

Run a local server from the project root:

```bash
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Notes

- The site uses plain HTML, CSS, and JavaScript.
- Root pages are data-driven.
- Paper and note detail pages are static HTML generated from local Markdown sources.
- Each paper or note folder stays self-contained, so you can add figures, PDFs, and images without affecting other pages.
