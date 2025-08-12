import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

interface ContactSectionProps {
  onBack: () => void;
}

const ContactSection = ({ onBack }: ContactSectionProps) => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sanjaypsgowda@gmail.com",
      href: "mailto:sanjaypsgowda@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sanjayp",
      href: "https://github.com/sanjayp",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sanjayp",
      href: "https://linkedin.com/in/sanjayp",
      description: "Professional network"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      description: "Available for remote work"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="glass-panel p-8 md:p-12 max-w-4xl w-full">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="menu-button mr-4 flex items-center gap-2 px-4 py-2"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h2 className="text-3xl md:text-4xl font-bold glow-text">Start Mission</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to collaborate on your next AI-powered project? Let's connect and build something amazing together.
          </p>
          
          <motion.a
            href="mailto:sanjaypsgowda@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-button inline-flex items-center gap-3"
          >
            <Mail size={20} />
            Begin Mission
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="project-card block group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.label}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      {method.description}
                    </p>
                    <p className="text-primary font-mono text-sm">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-card border border-border rounded-xl p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-primary mb-3">Let's Build Something Great</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, 
            and collaborations in AI, backend systems, and test automation. Whether you have 
            a challenging technical problem to solve or want to explore the possibilities 
            of AI-driven solutions, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Response time: Usually within 24 hours
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;