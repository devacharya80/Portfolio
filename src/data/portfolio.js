export const PROFILE = {
  name: "Devacharya",
  initials: "D.",
  title: "Software Engineer",
  location: "Bengaluru, India",
  education: "B.E. CSE · VTU · 2026",
  focus: "Software engineering · Full stack · Backend",
  email: "mailto:dhanudeva80@gmail.com",
  emailText: "dhanudeva80@gmail.com",
  github: "https://github.com/devacharya80",
  discover: "https://github.com/devacharya80/Discover",
  linkedin: "https://www.linkedin.com/",
};

export const NAV_ITEMS = [
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export const PROOF_ITEMS = [
  { title: "2026", detail: "CSE graduate" },
  { title: "Full-stack", detail: "React · Node · TypeScript" },
  { title: "Backend", detail: "PostgreSQL · Prisma · APIs" },
  { title: "DSA", detail: "Python · problem solving" },
];

export const PROJECTS = {
  featured: {
    number: "01",
    label: "MAIN PROJECT",
    name: "Discover",
    lead: "A location-first company and job discovery platform built for students, freshers, and software engineers.",
    bullets: [
      "Interactive MapLibre company discovery with browser geolocation, distance-aware markers, search, and city/industry filtering.",
      "Full job platform flow: applications, saved jobs, expiration, external application links, and recruiter/company management.",
      "External job ingestion through Adzuna with normalization, validation, deduplication, company resolution, and direct application links.",
    ],
    technologies: ["React 19", "TypeScript", "Node.js", "Express 5", "PostgreSQL", "Prisma 7", "MapLibre", "Docker", "GitHub Actions"],
    repo: "https://github.com/devacharya80/Discover",
  },
  placeholders: [
    { number: "02", name: "Project placeholder", description: "Reserved for another project with a clear problem, implementation details, and source code.", tags: ["Add stack", "Add demo"] },
    { number: "03", name: "Project placeholder", description: "Reserved for another project. Keep only work you can explain deeply in an interview.", tags: ["Add stack", "Add repo"] },
  ],
};

export const SKILLS = [
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "Java"] },
  { title: "Frontend", items: ["React", "Vite", "Tailwind CSS", "HTML", "CSS", "Bootstrap", "MapLibre"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "Zod", "JWT"] },
  { title: "Data", items: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "MySQL", "Neon"] },
  { title: "DevOps & tools", items: ["Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "Linux", "VS Code"] },
  { title: "CS foundations", items: ["Data Structures", "Algorithms", "Recursion", "Trees", "Graphs", "Dynamic Programming"] },
];

export const ABOUT_FACTS = [
  ["Education", "B.E. CSE · VTU · 2026"],
  ["Base", "Bengaluru, Karnataka"],
  ["Focus", "Software engineering · Full stack · Backend"],
];
