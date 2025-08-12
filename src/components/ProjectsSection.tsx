import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  onBack: () => void;
}

const ProjectsSection = ({ onBack }: ProjectsSectionProps) => {
  const projects = [
    {
      title: "AI Agent Orchestrator",
      description: "Multi-agent system for complex workflow automation with natural language processing and decision-making capabilities.",
      tech: ["Python", "FastAPI", "LangChain", "Redis", "PostgreSQL", "Docker"],
      highlights: ["Handles 10M+ daily transactions", "99.9% uptime", "50% cost reduction"],
      github: "#",
      demo: "#"
    },
    {
      title: "Cloud Test Automation Platform",
      description: "Intelligent testing framework that uses AI to generate, execute, and analyze test cases across multiple environments.",
      tech: ["Java", "Selenium", "AWS", "Jenkins", "TestNG", "Machine Learning"],
      highlights: ["85% reduction in manual testing", "Cross-browser automation", "Predictive failure analysis"],
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Data Processing Engine",
      description: "High-performance data pipeline for processing streaming data with real-time analytics and anomaly detection.",
      tech: ["Node.js", "Apache Kafka", "MongoDB", "InfluxDB", "Grafana", "TensorFlow"],
      highlights: ["2TB+ daily processing", "Sub-second latency", "Real-time alerting"],
      github: "#",
      demo: "#"
    },
    {
      title: "Microservices Architecture Framework",
      description: "Comprehensive framework for building scalable microservices with built-in monitoring, logging, and security.",
      tech: ["Spring Boot", "Kubernetes", "Istio", "Prometheus", "ELK Stack", "OAuth2"],
      highlights: ["Auto-scaling capabilities", "Service mesh integration", "Zero-downtime deployments"],
      github: "#",
      demo: "#"
    },
    {
      title: "ML Model Deployment Platform",
      description: "End-to-end platform for training, versioning, and deploying machine learning models at scale.",
      tech: ["Python", "MLflow", "Kubeflow", "PyTorch", "AWS SageMaker", "Terraform"],
      highlights: ["Model versioning", "A/B testing", "Auto-rollback capabilities"],
      github: "#",
      demo: "#"
    },
    {
      title: "DevOps Automation Suite",
      description: "Complete DevOps toolkit with CI/CD pipelines, infrastructure as code, and automated monitoring.",
      tech: ["GitHub Actions", "Terraform", "Ansible", "Helm", "Datadog", "Vault"],
      highlights: ["60% faster deployments", "Infrastructure automation", "Security compliance"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 py-8"
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