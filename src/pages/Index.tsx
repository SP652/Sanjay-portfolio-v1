import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingParticles from '@/components/FloatingParticles';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleBack = () => {
    setCurrentSection('hero');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingParticles />
      
      <AnimatePresence mode="wait">
        {currentSection === 'hero' && (
          <HeroSection key="hero" onSectionChange={handleSectionChange} />
        )}
        {currentSection === 'about' && (
          <AboutSection key="about" onBack={handleBack} />
        )}
        {currentSection === 'experience' && (
          <ExperienceSection key="experience" onBack={handleBack} />
        )}
        {currentSection === 'projects' && (
          <ProjectsSection key="projects" onBack={handleBack} />
        )}
        {currentSection === 'skills' && (
          <SkillsSection key="skills" onBack={handleBack} />
        )}
        {currentSection === 'contact' && (
          <ContactSection key="contact" onBack={handleBack} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground z-10">
        © 2024 Sanjay P • Built with React, TailwindCSS, Framer Motion
      </footer>
    </div>
  );
};

export default Index;
