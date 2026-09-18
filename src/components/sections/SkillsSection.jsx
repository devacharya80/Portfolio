import SectionHeading from "../ui/SectionHeading";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-wrap scroll-mt-24" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="TECHNICAL SKILLS"
        title="A practical full-stack toolkit."
        titleId="skills-title"
        description="Grouped by the kind of engineering work they support instead of a wall of logos."
      />
      <div className="grid border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article key={skill.title} className="bg-surface p-6">
            <h3 className="mb-[18px] font-display text-lg font-semibold">{skill.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span key={item} className="rounded-md border border-[#e4e4de] bg-[#f1f1ed] px-2 py-1.5 text-xs text-[#52524d]">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
