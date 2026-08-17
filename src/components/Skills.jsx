import portfolio from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">02.</span> My <span className="neon-text-magenta">Skills</span>
        </h2>
        <div className="row g-4">
          {portfolio.skills.map((s) => (
            <div className="col-12 col-sm-6 col-lg-3" key={s.category}>
              <div className={`skill-card neon-box h-100 skill-${s.color}`}>
                <div className="skill-icon">{s.icon}</div>
                <h3>{s.category}</h3>
                <p>{s.items.join(", ")}</p>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.width}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
