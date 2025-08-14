import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  onBack: () => void;
}

const ProjectsSection = ({ onBack }: ProjectsSectionProps) => {
  const projects = [
    {
      title: "AgentFlow",
      description: "Multi-Modal Agentic AI Orchestration Platform that enables orchestrating autonomous AI agents with advanced workflow automation and multi-step reasoning.",
      tech: ["n8n", "LangChain", "OpenAI GPT-4", "Python FastAPI", "React", "Docker"],
      highlights: ["Modular platform", "Dynamic agent coordination", "Enterprise-ready infrastructure"],
      github: "#",
      demo: "#"
    },
    {
      title: "ConvoChat",
      description: "Real-Time Communication Platform with WebSocket-based messaging, user authentication, persistent messaging, and integrated AI features.",
      tech: ["MERN Stack", "Socket.IO", "Redis", "OpenAI API", "Docker"],
      highlights: ["Real-time messaging", "Scalable backend", "Responsive front-end"],
      github: "https://github.com/SP652/ConvoChat",
      demo: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-8 section-container"
    >
      <div className="glass-panel p-8 md:p-12 max-w-7xl w-full">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="menu-button mr-4 flex items-center gap-2 px-4 py-2"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h2 className="text-3xl md:text-4xl font-bold glow-text">Project Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="p-2 rounded-lg bg-secondary hover:bg-menu-hover transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 rounded-lg bg-secondary hover:bg-menu-hover transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="skill-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;