import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ items, menuOpen, setMenuOpen, onNavigate, github, resume }) {
  return (
    <header className="sticky top-0 z-20 h-16 border-b border-black/10 bg-paper/90 backdrop-blur-md sm:h-[72px]">
      <div className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-[18px] sm:px-6">
        <a className="focus-ring font-display text-2xl font-bold tracking-[-0.08em]" href="#top" onClick={onNavigate} aria-label="Back to top">D.</a>

        <nav aria-label="Primary navigation" className={`absolute left-0 right-0 top-16 hidden flex-col gap-4 border-b border-line bg-paper px-[18px] py-4 text-sm text-[#43433f] lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 ${menuOpen ? "!flex" : ""}`}>
          {items.map(([label, href]) => (
            <a key={label} href={href} onClick={onNavigate} className="focus-ring py-1 transition-colors hover:text-ink">{label}</a>
          ))}
          <a className="focus-ring flex items-center gap-1.5 py-1 font-semibold text-ink" href={resume}>
            Resume <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a className="focus-ring flex items-center gap-1.5 py-1 font-semibold text-ink" href={github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            GitHub <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>

        <button
          id="mobile-navigation"
          type="button"
          className="focus-ring rounded-md p-2 text-ink lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
