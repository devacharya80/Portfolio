import { Github, Mail } from "lucide-react";
import Button from "../ui/Button";
export default function ContactSection({ email, github }) {
  return <section id="contact" className="section-wrap pb-32 text-center"><p className="eyebrow">CONTACT</p><h2 className="font-display text-5xl font-bold leading-[1.05] tracking-[-.055em] sm:text-[7vw]">Have a role that fits?</h2><p className="mx-auto my-6 max-w-[620px] text-[#62625d]">I’m interested in software engineering opportunities where I can contribute, learn fast, and work on real products.</p><div className="flex justify-center gap-3"><Button href={email}><Mail size={17} /> Email me</Button><Button href={github} variant="light" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</Button></div><div className="mt-6 flex flex-wrap justify-center gap-2.5 text-[13px] text-[#6b6b65]"><a href={email} className="underline underline-offset-4">dhanudeva80@gmail.com</a><span>·</span><span>Bengaluru, India</span></div></section>;
}
