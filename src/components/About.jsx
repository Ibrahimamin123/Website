import { useState } from "react";
import portfolio from "../data/portfolio";

export default function About() {
  const { about, personal } = portfolio;
  const [loadingCV, setLoadingCV] = useState(false);

  const handleDownloadCV = async () => {
    setLoadingCV(true);
    try {
      const { default: generateCV } = await import("../utils/generateCV");
      generateCV();
    } finally {
      setLoadingCV(false);
    }
  };
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">01.</span> About <span className="neon-text-cyan">Me</span>
        </h2>
        <div className="row gy-4 align-items-start">
          <div className="col-12 col-lg-7">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="about-para">{p}</p>
            ))}
            <ul className="about-list">
              {about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="language-tags mb-4">
              <span className="lang-label">Languages:</span>
              {about.languages.map((l) => (
                <span className="lang-tag" key={l}>{l}</span>
              ))}
            </div>
            <button className="btn app-btn-primary" onClick={handleDownloadCV} disabled={loadingCV}>
              {loadingCV ? "Preparing CV…" : "⬇ Download CV"}
            </button>
          </div>

          <div className="col-12 col-lg-5">
            <div className="about-card neon-box">
              <div className="about-card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <pre className="about-code">
                <code>
{`const developer = {
  name: "${personal.name}",
  role: "${personal.title}",
  location: "Karachi, PK",
  email: "${personal.email}",
  available: true
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
