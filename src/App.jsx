import { useState } from "react";
import { NAV_ITEMS, PROFILE, PROJECTS, SKILLS, ABOUT_FACTS } from "./data/portfolio";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import ProofStrip from "./components/sections/ProofStrip";
import WorkSection from "./components/sections/WorkSection";
import SkillsSection from "./components/sections/SkillsSection";
import AboutSection from "./components/sections/AboutSection";
import BuildSection from "./components/sections/BuildSection";
import ContactSection from "./components/sections/ContactSection";

export const LINKS = {
  github: PROFILE.github,
  discover: PROFILE.discover,
  linkedin: PROFILE.linkedin,
  email: PROFILE.email,
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <Navbar items={NAV_ITEMS} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={closeMenu} github={LINKS.github} />
      <main id="top">
        <Hero profile={PROFILE} links={LINKS} />
        <ProofStrip />
        <WorkSection projects={PROJECTS} />
        <SkillsSection skills={SKILLS} />
        <AboutSection profile={PROFILE} facts={ABOUT_FACTS} />
        <BuildSection />
        <ContactSection email={LINKS.email} github={LINKS.github} />
      </main>
      <Footer github={LINKS.github} email={LINKS.email} />
    </div>
  );
}
