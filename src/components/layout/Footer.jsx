import { ChevronDown } from "lucide-react";
export default function Footer({ github, email }) {
  return (
    <footer className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-line px-[18px] py-6 pb-10 text-xs text-[#77776f] sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span>© 2026 Devacharya</span>
      <div className="flex gap-[18px]">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={email}>Email</a>
        <a href="#top" className="inline-flex items-center gap-1">Back to top <ChevronDown size={14} className="rotate-180" /></a>
      </div>
    </footer>
  );
}
