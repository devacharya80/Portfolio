export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-9 flex flex-col gap-4 lg:mb-[52px] lg:flex-row lg:items-end lg:justify-between lg:gap-8">
      <div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></div>
      {description && <p className="max-w-[310px] text-sm text-muted">{description}</p>}
    </div>
  );
}
