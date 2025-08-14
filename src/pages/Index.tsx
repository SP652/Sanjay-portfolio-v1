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
    <div className="min-h-screen bg-background relative overflow-hidden max-w-[100vw] flex flex-col">
      <FloatingParticles />
      
      <div className="flex-grow">
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
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-2 mt-auto text-[10px] md:text-xs text-muted-foreground border-t border-border/30 bg-background/70 backdrop-blur-sm">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Sanjay P • Built with React, TailwindCSS, Framer Motion
        </div>
      </footer>
    </div>
  );
};

export default Index;
