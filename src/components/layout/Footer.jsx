import { ChevronDown } from "lucide-react";

export default function Footer({ github, email, linkedin }) {
  return (
    <footer className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-line px-[18px] py-6 pb-10 text-xs text-[#77776f] sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span>© 2026 Devacharya</span>
      <div className="flex flex-wrap gap-[18px]">
        <a className="focus-ring" href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="focus-ring" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="focus-ring" href={email}>Email</a>
        <a className="focus-ring inline-flex items-center gap-1" href="#top">Back to top <ChevronDown size={14} className="rotate-180" aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
