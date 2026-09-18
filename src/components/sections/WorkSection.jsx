import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

function FeaturedProject({ project }) {
  return (
    <article className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
      <div className="min-h-[360px] border border-line bg-[#dfe0db] p-2.5 sm:min-h-[480px]">
        <div className="flex h-full flex-col">
          <div className="flex h-7 items-center gap-1 px-1.5"><span className="dot" /><span className="dot" /><span className="dot" /></div>
          <div className="relative flex-1 overflow-hidden bg-[#e3e4df]">
            <div className="absolute inset-0 bg-map" />
            <div className="absolute bottom-4 left-4 w-[82%] border border-black/10 bg-white/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,.09)] sm:bottom-7 sm:left-7 sm:w-[330px] sm:p-[22px]">
              <span className="text-[10px] font-bold tracking-[.14em] text-[#4c6c64]">DISCOVER</span>
              <strong className="mt-2 block font-display text-[19px] leading-[1.13] sm:text-[22px]">Companies & jobs, around you.</strong>
              <p className="mt-2 text-[13px] leading-[1.55] text-[#66665f]">Map-based company discovery with jobs, profiles, applications and verification workflows.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-[11px] font-bold tracking-[.12em] text-[#787872]"><span>{project.number}</span><span>{project.label}</span></div>
        <h3 className="mt-5 font-display text-[40px] font-bold tracking-[-.06em] sm:text-[48px]">{project.name}</h3>
        <p className="text-lg leading-[1.45] text-[#353530] sm:text-[19px]">{project.lead}</p>
        <div className="my-7">{project.bullets.map(b => <p key={b} className="relative my-4 pl-5 text-sm text-[#5d5d57] before:absolute before:left-0 before:top-[.7em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent">{b}</p>)}</div>
        <div className="flex flex-wrap gap-1.5">{project.technologies.map(t => <span key={t} className="rounded-md border border-line bg-white/55 px-2 py-1.5 text-[11px] text-[#55554f]">{t}</span>)}</div>
        <div className="mt-7 flex flex-wrap gap-5">
          <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View on GitHub <Github size={16} /></a>
          <a className="text-link" href="#contact">Ask me about it <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </article>
  );
}

function PlaceholderProject({ project }) {
  return (
    <article className="border border-line bg-surface">
      <div className="flex h-[220px] items-center justify-center bg-[linear-gradient(135deg,#ecece8,#e3e4de)] text-[11px] font-bold tracking-[.15em] text-[#88887f] sm:h-[250px]">PROJECT {project.number}</div>
      <div className="p-[22px]">
        <span className="text-[11px] tracking-[.12em] text-[#8c8c83]">{project.number}</span>
        <h3 className="mt-2 font-display text-[25px] font-semibold leading-[1.15]">{project.name}</h3>
        <p className="text-sm text-[#6a6a63]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">{project.tags.map(t => <span key={t} className="rounded-md border border-line bg-white/55 px-2 py-1.5 text-[11px]">{t}</span>)}</div>
      </div>
    </article>
  );
}

export default function WorkSection({ projects }) {
  return (
    <section id="work" className="section-wrap">
      <SectionHeading eyebrow="SELECTED WORK" title="Projects that show how I build." description="Source code and technical context first. Visual polish second." />
      <FeaturedProject project={projects.featured} />
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{projects.placeholders.map(p => <PlaceholderProject key={p.number} project={p} />)}</div>
    </section>
  );
}
