export type Skill={name:string;icon:string;category:string};
export type Project={title:string;description:string;stack:string[];liveUrl?:string;repoUrl?:string;image?:string};

export const profile={
  name:"Devacharya",
  role:"Software Engineer",
  headline:"I build full-stack and AI-powered products with a focus on backend systems and real-world engineering.",
  email:"dhanudeva80@gmail.com",
  phone:"9986382391",
  github:"https://github.com/devacharya80/devacharya80",
  linkedin:"https://www.linkedin.com/in/deva-charya",
  leetcode:"https://leetcode.com/u/devacharya/",
};

export const skills:Skill[]=[
  {name:"TypeScript",icon:"/skills/typescript.svg",category:"Language"},
  {name:"JavaScript",icon:"/skills/javascript.svg",category:"Language"},
  {name:"Python",icon:"/skills/python.svg",category:"Language"},
  {name:"React",icon:"/skills/react.svg",category:"Frontend"},
  {name:"Tailwind CSS",icon:"/skills/tailwind.svg",category:"Frontend"},
  {name:"Node.js",icon:"/skills/node.svg",category:"Backend"},
  {name:"Express.js",icon:"/skills/express.svg",category:"Backend"},
  {name:"PostgreSQL",icon:"/skills/postgresql.svg",category:"Database"},
  {name:"Prisma",icon:"/skills/prisma.svg",category:"Database"},
  {name:"MongoDB",icon:"/skills/mongodb.svg",category:"Database"},
  {name:"Docker",icon:"/skills/docker.svg",category:"Infrastructure"},
  {name:"Kubernetes",icon:"/skills/kubernetes.svg",category:"Infrastructure"}
];

export const projects:Project[]=[
  {title:"DISCOVER",description:"[PLACEHOLDER: verified project summary, impact, and current deployment status]",stack:["React","TypeScript","Node.js","PostgreSQL","Prisma","MapLibre"],repoUrl:"https://github.com/devacharya80/Discover"},
  {title:"POINTERAI",description:"[PLACEHOLDER: verified project summary, impact, and current deployment status]",stack:["React","TypeScript","Node.js","Express","PostgreSQL","LLM","SSE"],repoUrl:"[PLACEHOLDER: repository URL]"},
  {title:"[PLACEHOLDER PROJECT]",description:"[PLACEHOLDER: add your strongest third project]",stack:["[STACK]"],liveUrl:"[PLACEHOLDER]",repoUrl:"[PLACEHOLDER]"}
];

export const experience=[
  {company:"[PLACEHOLDER]",role:"[PLACEHOLDER ROLE]",period:"[PLACEHOLDER]",details:"[PLACEHOLDER: verified responsibilities and impact]"}
];

export const education=[
  {institution:"Visvesvaraya Technological University (VTU)",degree:"B.E. Computer Science & Engineering",period:"2026",details:"[PLACEHOLDER: add verified academic details]"}
];
