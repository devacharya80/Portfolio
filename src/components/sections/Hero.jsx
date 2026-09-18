import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Button from "../ui/Button";
export default function Hero({ profile, links }) {
  return (
    <section className="section-wrap grid min-h-[670px] grid-cols-1 items-center gap-14 pt-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-20 lg:pt-24">
      <div>
        <p className="eyebrow">SOFTWARE ENGINEER · BENGALURU</p>
        <h1 className="hero-title">Building useful software,<br /><span>from the backend up.</span></h1>
        <p className="mt-7 max-w-[650px] text-base text-muted sm:text-lg">I’m Devacharya, a 2026 Computer Science graduate focused on full-stack development, backend engineering, and strong fundamentals in data structures and algorithms.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#work">View my work <ArrowUpRight size={17} /></Button>
          <Button href={links.email} variant="light">Get in touch <Mail size={17} /></Button>
        </div>
        <div className="mt-7 flex flex-wrap gap-4 text-sm text-[#555550]">
          <a className="inline-flex items-center gap-1.5" href={links.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          <a className="inline-flex items-center gap-1.5" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <span className="inline-flex items-center gap-1.5"><MapPin size={16} /> {profile.location}</span>
        </div>
      </div>
      <div className="w-full max-w-[360px] lg:justify-self-end">
        <div className="aspect-[4/5] border border-line bg-surface p-2.5 shadow-[0_16px_50px_rgba(0,0,0,.05)]">
          <div className="flex h-full flex-col items-center justify-center border border-dashed border-[#c4c4bc] text-center text-[11px] uppercase tracking-[.1em] text-[#7c7c76]">
            <span>Profile photo</span><small className="mt-1 normal-case tracking-normal text-xs text-[#a0a098]">add image from GitHub</small>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-[#555550]"><span className="h-2 w-2 rounded-full bg-[#2f8d70]" />Open to software engineering opportunities</div>
      </div>
    </section>
  );
}
