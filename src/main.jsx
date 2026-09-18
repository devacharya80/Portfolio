import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, Download, ExternalLink, ChevronDown } from "lucide-react";
import "./styles.css";

const GITHUB = "https://github.com/devacharya80";
const DISCOVER = "https://github.com/devacharya80/Discover";
const LINKEDIN = "https://www.linkedin.com/";
const EMAIL = "mailto:dhanudeva80@gmail.com";

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  const nav = [
    ["Work", "#work"],
    ["Skills", "#skills"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>D.</a>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href={GITHUB} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER · BENGALURU</p>
            <h1>Building useful software,<br/><span>from the backend up.</span></h1>
            <p className="hero-text">
              I’m Devacharya, a 2026 Computer Science graduate focused on full-stack development,
              backend engineering, and strong fundamentals in data structures and algorithms.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">View my work <ArrowUpRight size={17}/></a>
              <a className="button button-light" href={EMAIL}>Get in touch <Mail size={17}/></a>
            </div>
            <div className="quick-links">
              <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
              <span><MapPin size={16}/> Bengaluru, India</span>
            </div>
          </div>

          <div className="hero-profile">
            <div className="profile-frame">
              <div className="profile-placeholder">
                <span>Profile photo</span>
                <small>add image from GitHub</small>
              </div>
            </div>
            <div className="availability">
              <span className="availability-dot"></span>
              Open to software engineering opportunities
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div><strong>2026</strong><span>CSE graduate</span></div>
          <div><strong>Full-stack</strong><span>React · Node · TypeScript</span></div>
          <div><strong>Backend</strong><span>PostgreSQL · Prisma · APIs</span></div>
          <div><strong>DSA</strong><span>Python · problem solving</span></div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects that show how I build.</h2>
            </div>
            <p>Source code and technical context first. Visual polish second.</p>
          </div>

          <article className="project-feature">
            <div className="project-visual">
              <div className="window-bar"><span></span><span></span><span></span></div>
              <div className="project-screen">
                <div className="fake-map"></div>
                <div className="screen-card">
                  <span className="mini-label">DISCOVER</span>
                  <strong>Companies & jobs, around you.</strong>
                  <p>Map-based company discovery with jobs, profiles, applications and verification workflows.</p>
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta"><span>01</span><span>MAIN PROJECT</span></div>
              <h3>Discover</h3>
              <p className="project-lead">A location-first company and job discovery platform built for students, freshers, and software engineers.</p>
              <div className="project-points">
                <p>Interactive MapLibre company discovery with browser geolocation, distance-aware markers, search, and city/industry filtering.</p>
                <p>Full job platform flow: applications, saved jobs, expiration, external application links, and recruiter/company management.</p>
                <p>External job ingestion through Adzuna with normalization, validation, deduplication, company resolution, and direct application links.</p>
              </div>
              <div className="tech-row">
                {["React 19","TypeScript","Node.js","Express 5","PostgreSQL","Prisma 7","MapLibre","Docker","GitHub Actions"].map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-actions">
                <a className="text-link" href={DISCOVER} target="_blank" rel="noreferrer">View on GitHub <Github size={16}/></a>
                <a className="text-link" href="#contact">Ask me about it <ArrowUpRight size={16}/></a>
              </div>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-card placeholder-card">
              <div className="placeholder-visual"><span>PROJECT 02</span></div>
              <div className="project-card-body">
                <span className="project-number">02</span>
                <h3>Project placeholder</h3>
                <p>Reserved for another project with a clear problem, implementation details, and source code.</p>
                <div className="tech-row"><span>Add stack</span><span>Add demo</span></div>
              </div>
            </article>
            <article className="project-card placeholder-card">
              <div className="placeholder-visual"><span>PROJECT 03</span></div>
              <div className="project-card-body">
                <span className="project-number">03</span>
                <h3>Project placeholder</h3>
                <p>Reserved for another project. Keep only work you can explain deeply in an interview.</p>
                <div className="tech-row"><span>Add stack</span><span>Add repo</span></div>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TECHNICAL SKILLS</p>
              <h2>What I work with.</h2>
            </div>
            <p>Grouped around the kind of work I want to do, not a wall of logos.</p>
          </div>
          <div className="skills-grid">
            <Skill title="Languages" items={["Python","JavaScript","TypeScript","SQL","Java"]}/>
            <Skill title="Frontend" items={["React","Vite","Tailwind CSS","HTML","CSS","Bootstrap","MapLibre"]}/>
            <Skill title="Backend" items={["Node.js","Express.js","REST APIs","Socket.IO","Zod","JWT"]}/>
            <Skill title="Data" items={["PostgreSQL","Prisma","MongoDB","Mongoose","MySQL","Neon"]}/>
            <Skill title="DevOps & tools" items={["Git","GitHub","Docker","Kubernetes","CI/CD","Linux","VS Code"]}/>
            <Skill title="CS foundations" items={["Data Structures","Algorithms","Recursion","Trees","Graphs","Dynamic Programming"]}/>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-image">
            <div className="about-placeholder">PHOTO</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>I like understanding the whole system.</h2>
            <p>
              I’m a Computer Science graduate who enjoys moving between product ideas and the engineering underneath them.
              Most of my recent work has been around React, TypeScript, Node.js, PostgreSQL, and practical backend design.
            </p>
            <p>
              I spend a lot of time on DSA as well. I don’t want to just recognize patterns — I want to be able to reason about
              why a solution works, its trade-offs, and how I would improve it.
            </p>
            <div className="about-facts">
              <div><strong>Education</strong><span>B.E. CSE · VTU · 2026</span></div>
              <div><strong>Base</strong><span>Bengaluru, Karnataka</span></div>
              <div><strong>Focus</strong><span>Software engineering · Full stack · Backend</span></div>
            </div>
          </div>
        </section>

        <section className="section build-section">
          <div className="build-card">
            <div>
              <p className="eyebrow">HOW I THINK ABOUT PROJECTS</p>
              <h2>Problem → architecture → implementation → verification.</h2>
            </div>
            <div className="build-lines">
              <p><span>01</span> Define the actual user problem before choosing tools.</p>
              <p><span>02</span> Keep boundaries clear between UI, API, data, and auth.</p>
              <p><span>03</span> Write the boring pieces well: validation, errors, tests, migrations, CI.</p>
              <p><span>04</span> Keep enough technical context in the repo that another engineer can understand it.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">CONTACT</p>
          <h2>Have a role that fits?</h2>
          <p className="contact-text">I’m interested in software engineering opportunities where I can contribute, learn fast, and work on real products.</p>
          <div className="contact-actions">
            <a className="button button-dark" href={EMAIL}>Email me <Mail size={17}/></a>
            <a className="button button-light" href={GITHUB} target="_blank" rel="noreferrer">GitHub <Github size={17}/></a>
          </div>
          <div className="contact-details">
            <a href={EMAIL}>dhanudeva80@gmail.com</a>
            <span>·</span>
            <span>Bengaluru, India</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Devacharya</span>
        <div>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a href={EMAIL}>Email</a>
          <a href="#top">Back to top <ChevronDown size={14} className="rotate"/></a>
        </div>
      </footer>
    </div>
  );
}

function Skill({title, items}) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      <div>{items.map(item => <span key={item}>{item}</span>)}</div>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);
