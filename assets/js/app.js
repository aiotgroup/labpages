(function () {
  const { SiteContent, SiteUI } = window;

  function localPaperHref(slug) {
    return `./papers/${encodeURIComponent(slug)}/index.html`;
  }

  function localNoteHref(slug) {
    return `./notes/${encodeURIComponent(slug)}/index.html`;
  }

  function buttonMarkup(action) {
    return `<a class="button ${action.kind === "secondary" ? "button-secondary" : "button-primary"}" href="${action.href}">${SiteUI.escapeHtml(action.label)}</a>`;
  }

  function headerMarkup(currentPage) {
    const brandMark = SiteContent.site.brandMark || "XJ";
    return `
      <header class="site-header">
        <div class="shell nav-shell">
          <a class="brand" href="./index.html" aria-label="${SiteUI.escapeHtml(SiteContent.site.title)} home">
            <span class="brand-mark">${SiteUI.escapeHtml(brandMark)}</span>
            <span class="brand-copy">
              <strong>${SiteUI.escapeHtml(SiteContent.site.title)}</strong>
              <small>${SiteUI.escapeHtml(SiteContent.site.tagline)}</small>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav id="site-nav" class="site-nav" aria-label="Primary">
            ${SiteContent.site.nav
              .map(
                (item) => `
                  <a class="nav-link${item.key === currentPage ? " is-active" : ""}" href="${item.href}">
                    ${SiteUI.escapeHtml(item.label)}
                  </a>
                `
              )
              .join("")}
          </nav>
        </div>
      </header>
    `;
  }

  function footerMarkup() {
    const footerMark = SiteContent.site.footerMark || SiteContent.site.brandMark || "XJ";
    return `
      <footer class="site-footer">
        <div class="shell footer-grid">
          <div class="footer-brand">
            <div class="footer-badge">${SiteUI.escapeHtml(footerMark)}</div>
            <div>
              <strong>${SiteUI.escapeHtml(SiteContent.site.title)}</strong>
              <p>${SiteUI.escapeHtml(SiteContent.site.description)}</p>
            </div>
          </div>
          <div>
            <p class="footer-title">Pages</p>
            <div class="footer-links">
              ${SiteContent.site.footerLinks
                .map((item) => `<a href="${item.href}">${SiteUI.escapeHtml(item.label)}</a>`)
                .join("")}
            </div>
          </div>
        </div>
        <div class="shell footer-meta">
          <p>${SiteUI.escapeHtml(SiteContent.site.copyright || "")}</p>
        </div>
      </footer>
    `;
  }

  function pageHeroMarkup(config, asideMarkup) {
    return `
      <section class="hero-section">
        <div class="shell hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">${SiteUI.escapeHtml(config.eyebrow || "")}</p>
            <h1>${SiteUI.escapeHtml(config.title || "").replace(/\n/g, "<br>")}</h1>
            ${
              config.descriptionHtml
                ? `<div class="hero-description">${config.descriptionHtml}</div>`
                : `<p class="hero-description">${SiteUI.escapeHtml(config.description || "")}</p>`
            }
            ${
              Array.isArray(config.actions)
                ? `<div class="button-row">${config.actions.map(buttonMarkup).join("")}</div>`
                : ""
            }
          </div>
          <aside class="${config.asideClass || "hero-panel"}">
            ${asideMarkup || ""}
          </aside>
        </div>
      </section>
    `;
  }

  function sectionHeading(title, eyebrow, extra) {
    return `
      <div class="section-heading">
        <div>
          <p class="eyebrow">${SiteUI.escapeHtml(eyebrow || "")}</p>
          <h2>${SiteUI.escapeHtml(title)}</h2>
        </div>
        ${extra || '<span class="heading-orbit" aria-hidden="true"></span>'}
      </div>
    `;
  }

  function renderAboutPage() {
    const about = SiteContent.about;
    const heroAside = `
      <div class="aside-card">
        <p class="eyebrow">Research Lens</p>
        <h3>AI meets ubiquitous computing in the real world.</h3>
        <p>We study how sensing, interaction, and edge intelligence systems can turn ambient signals and wearable devices into practical services for everyday environments.</p>
      </div>
      <div class="chip-row">
        <span>Wireless Sensing</span>
        <span>Wearables</span>
        <span>Multimodal AI</span>
        <span>Edge Intelligence</span>
      </div>
    `;

    return `
      ${pageHeroMarkup(about.hero, heroAside)}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Who We Are", "Overview")}
          <div class="panel stack-panel">
            ${about.intro.map((paragraph) => `<p>${SiteUI.escapeHtml(paragraph)}</p>`).join("")}
          </div>
          <div class="metric-grid">
            ${about.metrics
              .map(
                (item) => `
                  <article class="metric-card">
                    <strong>${SiteUI.escapeHtml(item.label)}</strong>
                    <p>${SiteUI.escapeHtml(item.value)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${sectionHeading("Research Directions", "Focus")}
          <div class="card-grid card-grid-2">
            ${about.highlights
              .map(
                (item) => `
                  <article class="panel info-card">
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.text)}</p>
                    ${
                      Array.isArray(item.details) && item.details.length
                        ? `<ul class="info-list">
                            ${item.details.map((detail) => `<li>${SiteUI.escapeHtml(detail)}</li>`).join("")}
                          </ul>`
                        : ""
                    }
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Latest News", "News", '<a class="inline-link" href="./publications.html">Browse papers</a>')}
          <div class="news-grid">
            ${about.news
              .map(
                (item) => `
                  <article class="panel news-card">
                    <span class="date-pill">${SiteUI.escapeHtml(item.date)}</span>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.summary)}</p>
                    <a class="inline-link" href="${localPaperHref(item.slug)}">Open paper page</a>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="shell">
          ${sectionHeading("Partners In the Dream", "Support")}
          <div class="marquee">
            <div class="marquee-track">
              ${[...about.sponsors, ...about.sponsors]
                .map((name) => `<span class="marquee-item">${SiteUI.escapeHtml(name)}</span>`)
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function publicationCardMarkup(paper) {
    const theme = SiteUI.publicationTheme(paper);
    return `
      <a class="panel publication-card publication-card-link" href="${localPaperHref(
        paper.slug
      )}" data-year="${paper.year || ""}" data-text="${SiteUI.escapeHtml(
        `${paper.title} ${paper.authors} ${paper.venue} ${theme.label}`.toLowerCase()
      )}">
        <span class="date-pill">${SiteUI.escapeHtml(String(paper.year || "Archive"))}</span>
        <h3>${SiteUI.escapeHtml(paper.title)}</h3>
        <p class="muted">${SiteUI.escapeHtml(paper.authors)}</p>
        <div class="meta-row">
          <span>${SiteUI.escapeHtml(paper.venue)}</span>
          <span>${SiteUI.escapeHtml(theme.label)}</span>
        </div>
        <span class="inline-link">Read paper page</span>
      </a>
    `;
  }

  function renderPublicationsPage() {
    const years = SiteUI.uniqueYears(SiteContent.publications);
    const featuredCount = SiteContent.publications.length;

    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Publications",
          title: "A local, editable publication archive.",
          description:
            "The list below is stored in a local data file, and each paper opens a dedicated detail page generated from a local Markdown document.",
          actions: [
            { label: "Open Example Paper", href: localPaperHref("qserve-w4a8kv4-quantization-and-system-co-design-for-efficient-llm-serving"), kind: "secondary" },
            { label: "Back To About", href: "./index.html", kind: "primary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Archive Stats</p>
            <h3>${featuredCount} papers</h3>
            <p>Grouped from the source publication list and rendered as local detail pages with Markdown-based body content.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Publication List", "Archive")}
          <div class="toolbar">
            <label class="search-field">
              <span>Search papers</span>
              <input id="publication-search" type="search" placeholder="Title, author, venue, topic">
            </label>
            <div class="filter-row" id="year-filters">
              <button class="filter-chip is-active" type="button" data-year="all">All years</button>
              ${years
                .map((year) => `<button class="filter-chip" type="button" data-year="${year}">${year}</button>`)
                .join("")}
            </div>
          </div>
          <p id="publication-results" class="toolbar-note">Showing ${featuredCount} papers.</p>
          <div id="publication-grid" class="publication-grid">
            ${SiteContent.publications.map(publicationCardMarkup).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderDatasetPage() {
    const datasets = SiteContent.datasets;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Datasets",
          title: "Datasets and benchmarks from XJTU AIoT Group.",
          description: datasets.intro,
          actions: [
            { label: "Browse Publications", href: "./publications.html", kind: "secondary" },
            { label: "Back To About", href: "./index.html", kind: "primary" }
          ]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Collection</p>
            <h3>${datasets.items.length} public resources</h3>
            <p>Each entry can link to a local paper page, project repository, DOI, and dataset download portal.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Featured Datasets", "Resources")}
          <div class="card-grid card-grid-2">
            ${datasets.items
              .map(
                (item) => `
                  <article class="panel info-card dataset-card">
                    ${
                      item.cover
                        ? `<img class="dataset-cover" src="${item.cover}" alt="${SiteUI.escapeHtml(item.coverAlt || item.title)}">`
                        : ""
                    }
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.year)}</span>
                      <span>${SiteUI.escapeHtml(item.venue)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.summary)}</p>
                    ${
                      Array.isArray(item.sensors) && item.sensors.length
                        ? `<div class="chip-row">
                            ${item.sensors.map((sensor) => `<span>${SiteUI.escapeHtml(sensor)}</span>`).join("")}
                          </div>`
                        : ""
                    }
                    ${
                      Array.isArray(item.highlights) && item.highlights.length
                        ? `<ul class="clean-list">
                            ${item.highlights.map((point) => `<li>${SiteUI.escapeHtml(point)}</li>`).join("")}
                          </ul>`
                        : ""
                    }
                    <div class="dataset-link-row">
                      <a class="chip-link" href="${localPaperHref(item.slug)}">Paper Page</a>
                      ${(Array.isArray(item.links) ? item.links : [])
                        .map((link) => {
                          const external = /^https?:\/\//i.test(link.href);
                          return `<a class="chip-link" href="${link.href}"${
                            external ? ' target="_blank" rel="noreferrer"' : ""
                          }>${SiteUI.escapeHtml(link.label)}</a>`;
                        })
                        .join("")}
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderFeiWangPage() {
    const profile = SiteContent.feiWang;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Fei Wang",
          title: `${profile.name}\n${profile.subtitle}`,
          asideClass: "hero-panel hero-panel-plain",
          descriptionHtml: `
            <p>${SiteUI.escapeHtml(profile.note)}</p>
            <p>${SiteUI.escapeHtml(profile.admissionsNote)}<a class="inline-link" href="${profile.admissionsLink.href}">${SiteUI.escapeHtml(profile.admissionsLink.label)}</a></p>
          `,
          actions: [
            { label: "View Courses", href: "./course.html", kind: "secondary" },
            { label: "Meet The Team", href: "./team.html", kind: "primary" }
          ]
        },
        `
          <div class="profile-card profile-card-compact">
            <img class="avatar-large" src="${SiteUI.portraitSrc({
              name: profile.name,
              role: "Faculty",
              palette: ["#264a72", "#d9ebff"],
              photo: profile.photo
            })}" alt="${SiteUI.escapeHtml(profile.photoAlt || profile.name)}">
            <ul class="clean-list">
              ${profile.quickFacts.map((item) => `<li>${SiteUI.escapeHtml(item)}</li>`).join("")}
            </ul>
            <div class="chip-row">
              ${profile.profileLinks
                .map((item) => `<a class="chip-link" href="${item.href}">${SiteUI.escapeHtml(item.label)}</a>`)
                .join("")}
            </div>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Biography", "Profile")}
          <div class="panel stack-panel">
            ${profile.bio.map((paragraph) => `<p>${SiteUI.escapeHtml(paragraph)}</p>`).join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Academic Service", "Service")}
          <div class="card-grid card-grid-2">
            ${profile.service
              .map(
                (item) => `
                  <article class="panel info-card">
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <ul class="clean-list">
                      ${item.items.map((entry) => `<li>${SiteUI.escapeHtml(entry)}</li>`).join("")}
                    </ul>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="shell">
          ${sectionHeading("Selected Grants As PI", "Funding")}
          <div class="card-grid card-grid-2">
            ${profile.grants
              .map(
                (item) => `
                  <article class="panel info-card">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.period)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p class="muted">${SiteUI.escapeHtml(item.sponsor)}</p>
                    <p>${SiteUI.escapeHtml(item.note)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Appointments And Education", "Timeline")}
          <div class="timeline-grid timeline-grid-single">
            ${profile.appointments
              .map(
                (item) => `
                  <article class="panel timeline-card">
                    <span class="date-pill">${SiteUI.escapeHtml(item.year)}</span>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.text)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderCoursePage() {
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Course",
          title: "Teaching efficient AI, from theory to deployment.",
          description:
            "This page collects course descriptions in a simple editable format, including topic lists, outcomes, and external links where available.",
          actions: [{ label: "Back To About", href: "./index.html", kind: "primary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Editing</p>
            <h3>Courses live in one array.</h3>
            <p>Add or reorder teaching entries from assets/js/data/site-content.js.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Course Offerings", "Teaching")}
          <div class="course-grid">
            ${SiteContent.courses
              .map(
                (course) => `
                  <article class="panel course-card">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(course.code)}</span>
                      <span>${SiteUI.escapeHtml(course.term)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(course.name)}</h3>
                    <p class="muted">${SiteUI.escapeHtml(course.level)}</p>
                    <p>${SiteUI.escapeHtml(course.overview)}</p>
                    <div class="chip-row">
                      ${course.topics.map((topic) => `<span>${SiteUI.escapeHtml(topic)}</span>`).join("")}
                    </div>
                    <ul class="clean-list">
                      ${course.outcomes.map((item) => `<li>${SiteUI.escapeHtml(item)}</li>`).join("")}
                    </ul>
                    ${course.link && course.link !== "#" ? `<a class="inline-link" href="${course.link}">Open course link</a>` : ""}
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function awardSectionMarkup(title, eyebrow, items) {
    return `
      <section class="section">
        <div class="shell">
          ${sectionHeading(title, eyebrow)}
          <div class="card-grid card-grid-2">
            ${items
              .map(
                (item) => `
                  <article class="panel award-card">
                    <div class="meta-row">
                      <span class="date-pill">${SiteUI.escapeHtml(item.year)}</span>
                      <span>${SiteUI.escapeHtml(item.people)}</span>
                    </div>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p class="muted">${SiteUI.escapeHtml(item.org)}</p>
                    <p>${SiteUI.escapeHtml(item.note)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderAwardsPage() {
    const awards = SiteContent.awards;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Awards",
          title: "Competition wins, paper awards, and honors.",
          description:
            "This page organizes awards by type so the lab can maintain a public record of recognition for systems work, publications, and individual milestones.",
          actions: [{ label: "Meet The Team", href: "./team.html", kind: "primary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Sections</p>
            <h3>Competition, paper awards, honors.</h3>
            <p>Each section is editable from the same structured content file.</p>
          </div>
        `
      )}
      ${awardSectionMarkup("Competition Awards", "Competition", awards.competition)}
      ${awardSectionMarkup("Paper and Demo Awards", "Recognition", awards.paperAwards)}
      ${awardSectionMarkup("Honors and Fellowships", "Honors", awards.honors)}
    `;
  }

  function memberCardMarkup(member) {
    const tagName = member.link ? "a" : "article";
    const href = member.link ? ` href="${member.link}" target="_blank" rel="noreferrer"` : "";
    return `
      <${tagName} class="panel member-card"${href}>
        <img class="member-avatar" src="${SiteUI.portraitSrc(member)}" alt="${SiteUI.escapeHtml(member.photoAlt || member.name)}">
        <div class="member-copy">
          <h3>${SiteUI.escapeHtml(member.name)}</h3>
          <p class="muted member-role">${SiteUI.escapeHtml(member.role)}</p>
          <p class="member-bio">${SiteUI.escapeHtml(member.bio)}</p>
          ${member.link ? `<span class="inline-link">Open profile</span>` : ""}
        </div>
      </${tagName}>
    `;
  }

  function renderTeamPage() {
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Team",
          title: "People building ubiquitous AI systems together.",
          description: SiteContent.team.intro,
          actions: [{ label: "View Awards", href: "./awards.html", kind: "secondary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Lab Members</p>
            <h3>Meet our researchers and students.</h3>
            <p>You can find all our team members here, including our graduates who remain a cherished part of our history.</p>
          </div>
        `
      )}
      ${SiteContent.team.groups
        .map(
          (group) => `
            <section class="section">
              <div class="shell">
                ${sectionHeading(group.title, "Team")}
                <div class="member-grid">
                  ${group.members.map(memberCardMarkup).join("")}
                </div>
              </div>
            </section>
          `
        )
        .join("")}
    `;
  }

  function renderGalleryPage() {
    const gallery = SiteContent.gallery;
    return `
      ${pageHeroMarkup(
        {
          eyebrow: "Gallery",
          title: "Research snapshots and lab notes.",
          description: gallery.intro,
          actions: [{ label: "Back To About", href: "./index.html", kind: "primary" }]
        },
        `
          <div class="aside-card">
            <p class="eyebrow">Gallery</p>
            <h3>Mix visuals and short writing.</h3>
            <p>The gallery showcases our group’s activities, daily moments, and individual posts, including conference highlights, group events, and informal snapshots of research life.</p>
          </div>
        `
      )}
      <section class="section">
        <div class="shell">
          ${sectionHeading("Snapshots", "Gallery")}
          <div class="gallery-grid">
            ${gallery.snapshots
              .map(
                (item) => `
                  <article class="panel snapshot-card">
                    <img class="snapshot-image" src="${SiteUI.snapshotSrc(item)}" alt="${SiteUI.escapeHtml(item.photoAlt || item.title)}">
                    <div class="snapshot-copy">
                      <div class="meta-row">
                        <span class="date-pill">${SiteUI.escapeHtml(item.tag)}</span>
                        <span>${SiteUI.escapeHtml(item.date)}</span>
                      </div>
                      <h3>${SiteUI.escapeHtml(item.title)}</h3>
                      <p>${SiteUI.escapeHtml(item.caption)}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      <section class="section section-muted">
        <div class="shell">
          ${sectionHeading("Lab Notes", "Writing")}
          <div class="card-grid card-grid-2">
            ${gallery.notes
              .map(
                (item) => `
                  <a class="panel info-card note-card" href="${localNoteHref(item.slug)}">
                    ${
                      item.cover
                        ? `<img class="note-card-cover" src="${item.cover}" alt="${SiteUI.escapeHtml(item.coverAlt || item.title)}">`
                        : ""
                    }
                    <span class="date-pill">${SiteUI.escapeHtml(item.date)}</span>
                    <h3>${SiteUI.escapeHtml(item.title)}</h3>
                    <p>${SiteUI.escapeHtml(item.text)}</p>
                    <span class="inline-link">Open note</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderPage(page) {
    switch (page) {
      case "publications":
        return renderPublicationsPage();
      case "dataset":
        return renderDatasetPage();
      case "fei-wang":
        return renderFeiWangPage();
      case "course":
        return renderCoursePage();
      case "awards":
        return renderAwardsPage();
      case "team":
        return renderTeamPage();
      case "gallery":
        return renderGalleryPage();
      case "about":
      default:
        return renderAboutPage();
    }
  }

  function setupNavToggle(shell) {
    const toggle = shell.querySelector(".nav-toggle");
    const nav = shell.querySelector(".site-nav");
    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  function setupPublicationFilters(shell) {
    const search = shell.querySelector("#publication-search");
    const resultLabel = shell.querySelector("#publication-results");
    const cards = Array.from(shell.querySelectorAll(".publication-card"));
    const filterButtons = Array.from(shell.querySelectorAll(".filter-chip"));
    let activeYear = "all";

    if (!search || !resultLabel || cards.length === 0) {
      return;
    }

    function update() {
      const query = search.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const yearMatch = activeYear === "all" || card.dataset.year === activeYear;
        const textMatch = !query || (card.dataset.text || "").includes(query);
        const visible = yearMatch && textMatch;
        card.hidden = !visible;
        if (visible) {
          visibleCount += 1;
        }
      });

      resultLabel.textContent = `Showing ${visibleCount} paper${visibleCount === 1 ? "" : "s"}.`;
    }

    search.addEventListener("input", update);

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeYear = button.dataset.year || "all";
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        update();
      });
    });

    update();
  }

  function init() {
    const shell = document.querySelector("#site-shell");
    const page = document.body.dataset.page || "about";
    if (!shell || !SiteContent || !SiteUI) {
      return;
    }

    shell.innerHTML = `
      <div class="page-shell">
        ${headerMarkup(page)}
        <main class="page-main">${renderPage(page)}</main>
        ${footerMarkup()}
      </div>
    `;

    setupNavToggle(shell);

    if (page === "publications") {
      setupPublicationFilters(shell);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
