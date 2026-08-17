import portfolio from "../data/portfolio";

export default function Projects() {
  const fp = portfolio.featuredProject;
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">04.</span> Featured{" "}
          <span className="neon-text-magenta">Projects</span>
        </h2>

        <article className="featured-project neon-box mb-4">
          <div className="row align-items-start gy-3">
            <div className="col-12 col-md-8">
              <span className="featured-badge">{fp.badge}</span>
              <h3 className="featured-title">{fp.name}</h3>
              <p className="featured-subtitle">{fp.subtitle}</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column flex-sm-row flex-md-column gap-2 justify-content-md-end">
                <a href={fp.demoLink}  target="_blank" className="btn app-btn-outline btn-sm">↗ Live Demo</a>
                <a href={fp.codeLink} className="btn app-btn-primary btn-sm">⌘ GitHub</a>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-2">
            <div className="col-12 col-md-6">
              <h4>Overview</h4>
              <p>{fp.overview}</p>
              <h4>Purpose &amp; Business Goals</h4>
              <p>{fp.purpose}</p>
            </div>
            <div className="col-12 col-md-6">
              <h4>Key Features</h4>
              <ul className="featured-list">
                {fp.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <h4>Challenges &amp; Solutions</h4>
              <ul className="featured-list">
                {fp.challenges.map((c) => (
                  <li key={c.label}>
                    <strong>{c.label}</strong> — {c.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-tech featured-tech mt-3">
            {fp.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p className="link-note mb-0 mt-2">{fp.note}</p>
        </article>

        <div className="row g-4">
          {portfolio.projects.map((p) => (
            <div className="col-12 col-sm-6 col-lg-3" key={p.name}>
              <article className="project-card neon-box h-100">
                <div className={`project-image ${p.gradient}`}>
                  <span className="project-tag">{p.tag}</span>
                </div>
                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
