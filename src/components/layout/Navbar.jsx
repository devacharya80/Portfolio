import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ items, menuOpen, setMenuOpen, onNavigate, github }) {
  return (
    <header className="sticky top-0 z-20 h-16 border-b border-black/10 bg-paper/90 backdrop-blur-md sm:h-[72px]">
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-[18px] sm:px-6">
        <a className="font-display text-2xl font-bold tracking-[-0.08em]" href="#top" onClick={onNavigate}>D.</a>
        <nav className={`absolute left-0 right-0 top-16 hidden flex-col gap-4 border-b border-line bg-paper px-[18px] py-4 text-sm text-[#43433f] lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 ${menuOpen ? "!flex" : ""}`}>
          {items.map(([label, href]) => <a key={label} href={href} onClick={onNavigate} className="transition-colors hover:text-ink">{label}</a>)}
          <a className="flex items-center gap-1.5 font-semibold text-ink" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        </nav>
        <button className="p-2 text-ink lg:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
