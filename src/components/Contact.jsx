import { useState } from "react";
import portfolio from "../data/portfolio";

const initialForm = { name: "", email: "", phone: "", message: "", website: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Please enter a valid email.";
  if (!/^[\d+\s-]{7,15}$/.test(form.phone)) errors.phone = "Please enter a valid phone number.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="section-num">06.</span> Get In{" "}
          <span className="neon-text-magenta">Touch</span>
        </h2>
        <div className="row g-5">
          <div className="col-12 col-lg-5">
            <p className="contact-lead">
              Have a project in mind or want to collaborate? I&apos;m always open to discussing
              new opportunities and interesting ideas.
            </p>
            <ul className="contact-details list-unstyled">
              <li>
                <span className="contact-icon">📧</span>
                <a href={`mailto:${portfolio.personal.email}`}>{portfolio.personal.email}</a>
              </li>
              <li>
                <span className="contact-icon">📱</span>
                <a href={`tel:+92${portfolio.personal.phone.slice(1)}`}>
                  {portfolio.personal.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>{portfolio.personal.location}</span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-7">
            <form className="contact-form neon-box" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control app-input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label className="form-label" htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control app-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control app-input"
                    placeholder="03252531990"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-control app-input"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>
              <input
                type="text"
                name="website"
                className="d-none"
                tabIndex="-1"
                autoComplete="off"
                value={form.website}
                onChange={handleChange}
              />
              <button type="submit" className="btn app-btn-primary w-100">
                Send Message
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
