import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Button from "../ui/Button";

export default function Hero({ profile, links }) {
  return (
    <section aria-labelledby="hero-title" className="section-wrap grid min-h-[620px] grid-cols-1 items-center gap-12 pt-14 sm:min-h-[680px] sm:pt-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
      <div>
        <p className="eyebrow">SOFTWARE ENGINEER · BENGALURU</p>
        <h1 id="hero-title" className="hero-title max-w-[900px]">
          I build practical software
          <br />
          <span>from product idea to backend.</span>
        </h1>
        <p className="mt-7 max-w-[680px] text-base leading-7 text-muted sm:text-lg">
          I’m Devacharya, a 2026 Computer Science graduate focused on full-stack development,
          backend engineering, TypeScript, PostgreSQL, and strong data-structures fundamentals.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#work">View projects <ArrowUpRight size={17} /></Button>
          <Button href={links.resume} variant="light">Resume <Download size={17} /></Button>
          <Button href={links.email} variant="light">Contact <Mail size={17} /></Button>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#555550]">
          <a className="focus-ring inline-flex items-center gap-1.5" href={links.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a className="focus-ring inline-flex items-center gap-1.5" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
            <Linkedin size={16} aria-hidden="true" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} aria-hidden="true" /> {profile.location}
          </span>
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[.12em] text-[#76766f]">
          Open to software engineering opportunities
        </p>
      </div>

      <div className="w-full max-w-[390px] justify-self-center lg:justify-self-end">
        <div className="aspect-[4/5] border border-line bg-surface p-2.5 shadow-[0_20px_60px_rgba(0,0,0,.06)]">
          <div className="flex h-full flex-col items-center justify-center border border-dashed border-[#c4c4bc] px-6 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[.14em] text-[#7c7c76]">Profile photo</span>
            <small className="mt-2 text-xs text-[#9a9a92]">Add your final image here</small>
          </div>
        </div>
      </div>
    </section>
  );
}
