export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="app-footer text-center py-4">
      <p className="mb-0">
        Designed &amp; Built by <span className="neon-text-cyan">Ibrahim Amin</span> · 2026
      </p>
      <button className="back-top" aria-label="Back to top" onClick={scrollTop}>
        ↑
      </button>
    </footer>
  );
}
