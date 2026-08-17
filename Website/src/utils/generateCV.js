import { jsPDF } from "jspdf";
import portfolio from "../data/portfolio";

const COLORS = {
  dark: [15, 18, 26],
  cyan: [0, 212, 255],
  magenta: [255, 0, 170],
  text: [40, 42, 54],
  muted: [100, 105, 120],
  line: [220, 222, 230],
};

export function generateCV() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const marginX = 48;
  let y = 0;

  // ---- Header band ----
  doc.setFillColor(...COLORS.dark);
  doc.rect(0, 0, pageW, 108, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  doc.text(portfolio.personal.name, marginX, 48);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12.5);
  doc.setTextColor(...COLORS.cyan);
  doc.text(portfolio.personal.title, marginX, 68);

  doc.setFontSize(9.5);
  doc.setTextColor(210, 212, 220);
  const contactLine = `${portfolio.personal.email}   |   ${portfolio.personal.phoneDisplay}   |   ${portfolio.personal.location}`;
  doc.text(contactLine, marginX, 88);

  y = 132;

  const sectionTitle = (title) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12.5);
    doc.setTextColor(...COLORS.dark);
    doc.text(title.toUpperCase(), marginX, y);
    doc.setDrawColor(...COLORS.magenta);
    doc.setLineWidth(1.4);
    doc.line(marginX, y + 5, marginX + 36, y + 5);
    doc.setDrawColor(...COLORS.line);
    doc.setLineWidth(0.6);
    doc.line(marginX + 40, y + 5, pageW - marginX, y + 5);
    y += 20;
  };

  const paragraph = (text, size = 10, color = COLORS.text, lineH = 13.5) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, pageW - marginX * 2);
    doc.text(lines, marginX, y);
    y += lines.length * lineH;
  };

  const bullet = (text, size = 10) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...COLORS.text);
    const indent = marginX + 14;
    const lines = doc.splitTextToSize(text, pageW - indent - marginX);
    doc.setFillColor(...COLORS.magenta);
    doc.circle(marginX + 4, y - 3.5, 1.6, "F");
    doc.text(lines, indent, y);
    y += lines.length * 13 + 2;
  };

  const checkPageBreak = (needed = 60) => {
    if (y + needed > pageH - 40) {
      doc.addPage();
      y = 48;
    }
  };

  // ---- Summary ----
  sectionTitle("Profile Summary");
  paragraph(portfolio.about.paragraphs.join(" "));
  y += 6;

  // ---- Core Skills ----
  checkPageBreak(90);
  sectionTitle("Core Skills");
  portfolio.skills.forEach((s) => {
    checkPageBreak(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.dark);
    doc.text(`${s.category}:`, marginX, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.muted);
    const label = `${s.category}: `;
    const labelW = doc.getTextWidth(label) + 2;
    const lines = doc.splitTextToSize(s.items.join(", "), pageW - marginX * 2 - labelW);
    doc.text(lines, marginX + labelW, y);
    y += lines.length * 13 + 4;
  });
  y += 4;

  // ---- Experience ----
  checkPageBreak(90);
  sectionTitle("Experience");
  portfolio.experience.forEach((e) => {
    checkPageBreak(60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.dark);
    doc.text(e.role, marginX, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLORS.muted);
    doc.text(e.period, pageW - marginX, y, { align: "right" });
    y += 14;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.muted);
    doc.text(e.company, marginX, y);
    y += 14;
    paragraph(e.description, 9.8);
    y += 6;
  });

  // ---- Education ----
  checkPageBreak(90);
  sectionTitle("Education");
  portfolio.education.forEach((ed) => {
    checkPageBreak(40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.dark);
    doc.text(ed.degree, marginX, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...COLORS.muted);
    doc.text(ed.period, pageW - marginX, y, { align: "right" });
    y += 14;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.text(ed.note ? `${ed.institution} — ${ed.note}` : ed.institution, marginX, y);
    y += 18;
  });

  // ---- Projects ----
  checkPageBreak(100);
  sectionTitle("Projects");
  const fp = portfolio.featuredProject;
  checkPageBreak(60);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(...COLORS.dark);
  doc.text(`${fp.name} (Featured)`, marginX, y);
  y += 14;
  paragraph(fp.overview, 9.6);
  paragraph(`Tech: ${fp.tech.join(", ")}`, 9, COLORS.muted);
  y += 6;

  portfolio.projects.forEach((p) => {
    checkPageBreak(45);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...COLORS.dark);
    doc.text(p.name, marginX, y);
    y += 13;
    paragraph(p.description, 9.6);
    paragraph(`Tech: ${p.tech.join(", ")}`, 9, COLORS.muted);
    y += 4;
  });

  // ---- Achievements ----
  checkPageBreak(90);
  sectionTitle("Achievements");
  portfolio.achievements.forEach((a) => {
    checkPageBreak(30);
    bullet(`${a.title} — ${a.description}`, 9.6);
  });

  // ---- Languages ----
  checkPageBreak(40);
  sectionTitle("Languages");
  paragraph(portfolio.about.languages.join(", "));

  doc.save("Ibrahim_Amin_CV.pdf");
}

export default generateCV;
