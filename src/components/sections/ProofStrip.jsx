import { PROOF_ITEMS } from "../../data/portfolio";
export default function ProofStrip() {
  return (
    <section className="mx-auto grid max-w-[1180px] grid-cols-2 border-y border-line sm:grid-cols-4">
      {PROOF_ITEMS.map((item, index) => (
        <div key={item.title} className={`border-r border-line px-5 py-6 ${index === 1 ? "max-sm:border-r-0" : ""}`}>
          <strong className="font-display text-lg">{item.title}</strong><span className="mt-1 block text-[13px] text-[#72726c]">{item.detail}</span>
        </div>
      ))}
    </section>
  );
}
