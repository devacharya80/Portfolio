import SectionHeading from "../ui/SectionHeading";
export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading eyebrow="TECHNICAL SKILLS" title="What I work with." description="Grouped around the kind of work I want to do, not a wall of logos." />
      <div className="grid border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(skill => <article key={skill.title} className="bg-surface p-6"><h3 className="mb-[18px] font-display text-lg font-semibold">{skill.title}</h3><div className="flex flex-wrap gap-1.5">{skill.items.map(i => <span key={i} className="rounded-md border border-[#e4e4de] bg-[#f1f1ed] px-2 py-1.5 text-xs text-[#52524d]">{i}</span>)}</div></article>)}
      </div>
    </section>
  );
}
