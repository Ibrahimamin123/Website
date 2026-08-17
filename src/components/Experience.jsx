import portfolio from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">03.</span> Experience &amp;{" "}
          <span className="neon-text-cyan">Education</span>
        </h2>
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h3 className="timeline-heading neon-text-magenta">Experience</h3>
            <div className="timeline">
              {portfolio.experience.map((e) => (
                <article className="timeline-item neon-box" key={e.role}>
                  <span className="timeline-date">{e.period}</span>
                  <h4>{e.role}</h4>
                  <p className="timeline-org">{e.company}</p>
                  <p className="timeline-desc">{e.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h3 className="timeline-heading neon-text-cyan">Education</h3>
            <div className="timeline">
              {portfolio.education.map((ed) => (
                <article className="timeline-item neon-box" key={ed.degree}>
                  <span className="timeline-date">{ed.period}</span>
                  <h4>{ed.degree}</h4>
                  <p className="timeline-org">{ed.institution}</p>
                  {ed.note && <p className="timeline-desc">{ed.note}</p>}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
