import { useEffect, useState } from "react";
import portfolio from "../data/portfolio";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = portfolio.roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = currentRole.slice(0, text.length + 1);
        setText(next);
        if (next === currentRole) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = currentRole.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % portfolio.roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <p className="hero-greeting neon-text-cyan mb-2">{portfolio.hero.greeting}</p>
            <h1 className="hero-title">
              I&apos;m <span className="neon-text-magenta">{portfolio.personal.name}</span>
            </h1>
            <h2 className="hero-subtitle">
              <span>{text}</span>
              <span className="cursor" aria-hidden="true">|</span>
            </h2>
            <p className="hero-desc mx-auto mx-lg-0">{portfolio.hero.tagline}</p>
            <div className="hero-cta d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-primary app-btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn app-btn-outline">
                Contact Me
              </a>
            </div>
            <div className="row hero-stats-row gx-3 gy-3 mt-4 justify-content-center justify-content-lg-start">
              {portfolio.hero.stats.map((s) => (
                <div className="col-4 col-sm-3 col-lg-4" key={s.label}>
                  <div className="stat">
                    <span className="stat-num">{s.value}+</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5 order-1 order-lg-2">
            <div className="hero-visual mx-auto">
              <div className="profile-frame mx-auto">
                <div className="profile-ring ring-1" aria-hidden="true"></div>
                <div className="profile-ring ring-2" aria-hidden="true"></div>
                <div className="profile-image-wrap">
                  <img
                    src={portfolio.personal.profileImage}
                    alt={`${portfolio.personal.name} — profile photo`}
                    className="profile-image"
                    width="260"
                    height="260"
                    loading="eager"
                  />
                  <span className="profile-badge">Available for Work</span>
                </div>
              </div>
              <div className="floating-badge badge-1 d-none d-md-block">React</div>
              <div className="floating-badge badge-2 d-none d-md-block">Node.js</div>
              <div className="floating-badge badge-3 d-none d-md-block">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
