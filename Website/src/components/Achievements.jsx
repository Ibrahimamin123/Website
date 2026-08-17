import portfolio from "../data/portfolio";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">05.</span> My{" "}
          <span className="neon-text-cyan">Achievements</span>
        </h2>
        <div className="row g-4">
          {portfolio.achievements.map((a) => (
            <div className="col-12 col-sm-6 col-lg-3" key={a.title}>
              <article className="achievement-card neon-box h-100">
                <div className="achievement-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
