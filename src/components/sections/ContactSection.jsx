import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../ui/Button";

export default function ContactSection({ email, github, linkedin }) {
  return (
    <section id="contact" className="section-wrap scroll-mt-24 pb-28 text-center" aria-labelledby="contact-title">
      <p className="eyebrow">CONTACT</p>
      <h2 id="contact-title" className="font-display text-5xl font-bold leading-[1.05] tracking-[-.055em] sm:text-[7vw]">Let’s talk about the role.</h2>
      <p className="mx-auto my-6 max-w-[620px] leading-7 text-[#62625d]">I’m interested in software engineering opportunities where I can contribute to real products, learn quickly, and take ownership of meaningful engineering work.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href={email}><Mail size={17} aria-hidden="true" /> Email</Button>
        <Button href={github} variant="light" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub</Button>
        <Button href={linkedin} variant="light" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn</Button>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-[13px] text-[#6b6b65]">
        <a href={email} className="focus-ring underline underline-offset-4">dhanudeva80@gmail.com</a>
        <span aria-hidden="true">·</span><span>Bengaluru, India</span>
      </div>
    </section>
  );
}
