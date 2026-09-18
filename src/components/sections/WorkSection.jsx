import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

function FeaturedProject({ project }) {
  return (
    <article className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
      <div className="min-h-[340px] border border-line bg-[#dfe0db] p-2.5 sm:min-h-[460px]">
        <div className="flex h-full flex-col">
          <div className="flex h-7 items-center gap-1 px-1.5" aria-hidden="true"><span className="dot" /><span className="dot" /><span className="dot" /></div>
          <div className="relative flex-1 overflow-hidden bg-[#e3e4df]">
            <div className="absolute inset-0 bg-map" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 w-[82%] border border-black/10 bg-white/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,.09)] sm:bottom-7 sm:left-7 sm:w-[330px] sm:p-[22px]">
              <span className="text-[10px] font-bold tracking-[.14em] text-[#4c6c64]">DISCOVER</span>
              <strong className="mt-2 block font-display text-[19px] leading-[1.13] sm:text-[22px]">Companies & jobs, around you.</strong>
              <p className="mt-2 text-[13px] leading-[1.55] text-[#66665f]">Map-based company discovery with jobs, profiles, applications, and verification workflows.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[11px] font-bold tracking-[.12em] text-[#787872]">
          <span>{project.number}</span><span>{project.label}</span>
        </div>
        <h3 className="mt-5 font-display text-[40px] font-bold tracking-[-.06em] sm:text-[48px]">{project.name}</h3>
        <p className="text-lg leading-[1.45] text-[#353530] sm:text-[19px]">{project.lead}</p>

        <div className="my-7 space-y-4">
          {project.bullets.map((bullet) => (
            <p key={bullet} className="relative pl-5 text-sm leading-6 text-[#5d5d57] before:absolute before:left-0 before:top-[.7em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-accent">
              {bullet}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-md border border-line bg-white/60 px-2 py-1.5 text-[11px] text-[#55554f]">{technology}</span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
          <a className="focus-ring text-link" href={project.repo} target="_blank" rel="noreferrer">
            View source <Github size={16} aria-hidden="true" />
          </a>
          <a className="focus-ring text-link" href="#contact">
            Discuss the project <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="focus-ring text-link" href={project.repo} target="_blank" rel="noreferrer">
            Open repo <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function PlaceholderProject({ project }) {
  return (
    <article className="border border-line bg-surface">
      <div className="flex h-[220px] items-center justify-center bg-[linear-gradient(135deg,#ecece8,#e3e4de)] text-[11px] font-bold tracking-[.15em] text-[#88887f] sm:h-[250px]">
        PROJECT {project.number}
      </div>
      <div className="p-[22px]">
        <span className="text-[11px] tracking-[.12em] text-[#8c8c83]">{project.number}</span>
        <h3 className="mt-2 font-display text-[25px] font-semibold leading-[1.15]">{project.name}</h3>
        <p className="text-sm leading-6 text-[#6a6a63]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <span key={tag} className="rounded-md border border-line bg-white/55 px-2 py-1.5 text-[11px]">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function WorkSection({ projects }) {
  return (
    <section id="work" className="section-wrap scroll-mt-24" aria-labelledby="work-title">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Projects that prove how I build."
        titleId="work-title"
        description="Show the problem, the engineering decisions, and the source code. Keep the strongest work easy to reach."
      />
      <FeaturedProject project={projects.featured} />
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{projects.placeholders.map((project) => <PlaceholderProject key={project.number} project={project} />)}</div>
    </section>
  );
}
