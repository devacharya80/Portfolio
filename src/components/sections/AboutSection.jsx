export default function AboutSection({ facts }) {
  return (
    <section id="about" className="section-wrap grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-[85px]">
      <div className="max-w-[360px]"><div className="flex aspect-[4/5] items-center justify-center border border-dashed border-[#c5c5bc] bg-[#ecece7] text-xs tracking-[.15em] text-[#8b8b83]">PHOTO</div></div>
      <div>
        <p className="eyebrow">A LITTLE ABOUT ME</p><h2 className="section-title">I like understanding the whole system.</h2>
        <p className="mt-6 max-w-[720px] text-base text-[#5f5f59]">I’m a Computer Science graduate who enjoys moving between product ideas and the engineering underneath them. Most of my recent work has been around React, TypeScript, Node.js, PostgreSQL, and practical backend design.</p>
        <p className="max-w-[720px] text-base text-[#5f5f59]">I spend a lot of time on DSA as well. I don’t want to just recognize patterns — I want to be able to reason about why a solution works, its trade-offs, and how I would improve it.</p>
        <div className="mt-8 border-t border-line">{facts.map(([label,value]) => <div key={label} className="flex justify-between gap-7 border-b border-line py-3 text-[13px]"><strong>{label}</strong><span className="text-right text-[#66665f]">{value}</span></div>)}</div>
      </div>
    </section>
  );
}
