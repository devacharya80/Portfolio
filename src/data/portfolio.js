export const PROFILE = {
  name: "Devacharya",
  initials: "D.",
  title: "Software Engineer",
  location: "Bengaluru, India",
  education: "B.E. CSE · VTU · 2026",
  focus: "Full-stack · Backend · TypeScript",
  email: "mailto:dhanudeva80@gmail.com",
  emailText: "dhanudeva80@gmail.com",
  github: "https://github.com/devacharya80",
  discover: "https://github.com/devacharya80/Discover",
  linkedin: "https://www.linkedin.com/",
  resume: "#resume",
};

export const NAV_ITEMS = [
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export const PROOF_ITEMS = [
  { title: "B.E. CSE", detail: "VTU · 2026" },
  { title: "Full-stack", detail: "React · Node · TypeScript" },
  { title: "Backend", detail: "PostgreSQL · Prisma · APIs" },
  { title: "DSA", detail: "Python · algorithms · problem solving" },
];

export const PROJECTS = {
  featured: {
    number: "01",
    label: "FEATURED PROJECT",
    name: "Discover",
    lead: "A location-first company and job discovery platform for students, freshers, and software engineers.",
    bullets: [
      "Built interactive company discovery with MapLibre, browser geolocation, distance-aware markers, search, and city/industry filtering.",
      "Implemented job workflows covering applications, saved jobs, expiration, external application links, and company/recruiter management.",
      "Integrated external job ingestion with normalization, validation, deduplication, company resolution, and direct application links.",
    ],
    technologies: ["React 19", "TypeScript", "Node.js", "Express 5", "PostgreSQL", "Prisma 7", "MapLibre", "Docker", "GitHub Actions"],
    repo: "https://github.com/devacharya80/Discover",
  },
  placeholders: [
    { number: "02", name: "Project placeholder", description: "Reserved for another strong project. Add a concise problem statement, your contribution, stack, and source/demo links.", tags: ["Add stack", "Add demo"] },
    { number: "03", name: "Project placeholder", description: "Reserved for another strong project. Keep only work you can explain deeply in an interview.", tags: ["Add stack", "Add repo"] },
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
