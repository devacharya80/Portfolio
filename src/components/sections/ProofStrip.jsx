import { PROOF_ITEMS } from "../../data/portfolio";

export default function ProofStrip() {
  return (
    <section aria-label="Quick profile summary" className="mx-auto grid max-w-[1180px] grid-cols-2 border-y border-line sm:grid-cols-4">
      {PROOF_ITEMS.map((item, index) => (
        <div key={item.title} className={`border-r border-line px-4 py-5 last:border-r-0 sm:px-5 sm:py-6 ${index === 1 ? "max-sm:border-r-0" : ""}`}>
          <strong className="font-display text-base sm:text-lg">{item.title}</strong>
          <span className="mt-1 block text-[12px] leading-5 text-[#72726c] sm:text-[13px]">{item.detail}</span>
        </div>
      ))}
    </section>
  );
}
