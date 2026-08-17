const portfolio = {
  personal: {
    name: "Ibrahim Amin",
    title: "MERN Stack Developer",
    email: "ibrahimamin01032004@gmail.com",
    phone: "03252531990",
    phoneDisplay: "+92 325 2531990",
    location: "M-189 Molaram Compound, Malir, Karachi",
    profileImage: "/assets/ibbi.jpeg",
    github: "#",
    linkedin: "#",
  },

  roles: [
    "MERN Stack Developer",
    "Software Engineer",
    "Full Stack Developer",
    "Programming Instructor",
  ],

  hero: {
    greeting: "Hello, World!",
    tagline:
      "Passionate about building efficient, reliable, and user-friendly applications with modern web technologies.",
    stats: [
      { value: 5, label: "Projects Built" },
      { value: 4, label: "Years Learning" },
      { value: 4, label: "Achievements" },
    ],
  },

  about: {
    paragraphs: [
      "My name is Ibrahim Amin. I have completed a diploma in Software Engineering from Aptech, which is equivalent to the intermediate level. During my studies, I gained strong knowledge of various programming languages and developed a solid foundation in software development concepts.",
      "I am passionate about technology and continuously improving my skills to build efficient, reliable, and user-friendly applications. I am always eager to learn new tools and frameworks to enhance my expertise in the field of software development.",
    ],
    highlights: [
      "MERN Stack & full-stack web development",
      "Teaching & mentoring programming students",
      "Responsive UI with modern UX practices",
      "Database design & RESTful API development",
    ],
    languages: ["English", "Urdu"],
  },

  skills: [
    {
      category: "Frontend",
      icon: "⚡",
      color: "cyan",
      width: 90,
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "React", "Angular", "Flutter"],
      tags: ["React", "Angular", "Flutter"],
    },
    {
      category: "Backend",
      icon: "🔧",
      color: "magenta",
      width: 88,
      items: ["Node.js", "Express.js", "PHP", "Laravel", "ASP.NET", "C#", "Python", "Dart"],
      tags: ["Node.js", "Laravel", "ASP.NET"],
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "purple",
      width: 85,
      items: ["MongoDB", "MySQL", "SQL", "Firebase"],
      tags: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      category: "Tools & Version Control",
      icon: "🚀",
      color: "green",
      width: 82,
      items: ["Git", "GitHub", "REST APIs", "Responsive Design"],
      tags: ["GitHub", "REST API", "Responsive"],
    },
  ],

  experience: [
    {
      period: "2025 – 2026",
      role: "Teacher Assistant",
      company: "Aptech Learning",
      description:
        "Worked as an instructor for one year, helping students understand programming concepts clearly and guiding them in developing semester-end projects. Worked closely with students to improve practical skills and ensure successful completion of coursework with confidence.",
    },
  ],

  education: [
    {
      period: "2021 – 2025",
      degree: "Diploma in Software Engineering",
      institution: "Aptech Learning",
      note: "Equivalent to Intermediate level",
    },
    {
      period: "2020 – 2021",
      degree: "Matriculation in Computer Science",
      institution: "The Citizen Foundation",
      note: "",
    },
  ],

  achievements: [
    {
      icon: "🏆",
      title: "1st Position — Tech-Rank Speed Programming",
      description:
        "Achieved 1st position at Aptech by writing a functional program faster than any competitor.",
    },
    {
      icon: "💻",
      title: "Backend Developer — IT-Vision Aptech",
      description:
        "Presented an inventory management project built with strong teamwork and practical backend implementation.",
    },
    {
      icon: "✍️",
      title: "1st Position — Creative Literature Contest",
      description:
        "Won 1st position crafting a dramatic story inspired by a visual prompt shown to all participants.",
    },
    {
      icon: "🎮",
      title: "Ace Rank — Future Fight E-Sport",
      description:
        "Maintained Ace rank for more than a season across the server in Future Fight competitions.",
    },
  ],

  featuredProject: {
    name: "BazazTech",
    badge: "★ Featured Live Project",
    subtitle: "Full-stack MERN platform — deployed & production-ready",
    overview:
      "A fully deployed MERN Stack platform built to showcase modern web development with a premium user experience and scalable architecture.",
    purpose:
      "Designed to establish a professional digital presence for BazazTech — delivering business visibility, client engagement, and streamlined service communication.",
    features: [
      "Fully responsive design across desktop, tablet, and mobile",
      "Admin dashboard for content and user management",
      "Integrated contact system with validation & UX improvements",
      "RESTful API architecture with secure data handling",
      "Performance-optimized & SEO-friendly structure",
    ],
    challenges: [
      { label: "Performance vs. animations", text: "lazy loading & optimized assets" },
      { label: "Flexible admin panel", text: "modular React components with role-based views" },
      { label: "Cross-device consistency", text: "mobile-first CSS & responsive testing" },
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    demoLink: "https://bazaztech.com",
    codeLink: "#",
    note: "Demo & GitHub links will be updated soon.",
  },

  projects: [
    {
      name: "Inventory Management System",
      tag: "ASP.NET Core MVC",
      gradient: "grad-1",
      description:
        "Tri-role restaurant management demo for customers, handlers, and admins across multi-branch operations.",
      tech: ["ASP.NET Core", "MVC", "C#"],
    },
    {
      name: "E-Commerce Web Application",
      tag: "ASP.NET Core MVC",
      gradient: "grad-2",
      description:
        "Multi-role online store with carts, favorites, wishlists, order management, and admin controls.",
      tech: ["ASP.NET Core", "MVC", "C#"],
    },
    {
      name: "School Administration System",
      tag: "Laravel",
      gradient: "grad-3",
      description:
        "School admin app for student data, communication channels, and streamlined institutional operations.",
      tech: ["Laravel", "PHP", "MySQL"],
    },
    {
      name: "MTB Cinema",
      tag: "PHP Core",
      gradient: "grad-4",
      description:
        "Cinema app for browsing movies, showtimes, and seamless ticket bookings with interactive UI.",
      tech: ["PHP", "MySQL", "JavaScript"],
    },
    {
      name: "BazazTech — Organization Website",
      tag: "MERN Stack",
      gradient: "grad-1",
      description:
        "Corporate website built for BazazTech organization; independently hosted and deployed end-to-end.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Old.BazazTech.com",
      tag: "WordPress",
      gradient: "grad-2",
      description:
        "Legacy WordPress site for BazazTech, independently configured, customized, and self-deployed.",
      tech: ["WordPress", "PHP", "MySQL"],
    },
  ],
};

export default portfolio;
