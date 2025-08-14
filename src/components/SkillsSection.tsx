import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface SkillsSectionProps {
  onBack: () => void;
}

const SkillsSection = ({ onBack }: SkillsSectionProps) => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"]
    },
    {
      category: "Frameworks",
      skills: ["React", "Node.js", "Express", "Playwright.js", "Robot Framework", "LangChain", "n8n", "FastAPI"]
    },
    {
      category: "Cloud/AI",
      skills: ["AWS Bedrock", "AWS Lambda", "AWS EC2", "OpenAI API", "LangChain", "n8n"]
    },
    {
      category: "ML/Analytics",
      skills: ["TensorFlow", "scikit-learn", "spaCy", "Deep Learning", "NLP"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Redis", "Pinecone"]
    },
    {
      category: "DevOps/Tools",
      skills: ["Git", "CI/CD", "Jenkins", "Docker", "Cursor", "Windsurf"]
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
      <div className="glass-panel p-8 md:p-12 max-w-6xl w-full">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="menu-button mr-4 flex items-center gap-2 px-4 py-2"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h2 className="text-3xl md:text-4xl font-bold glow-text">Skill Inventory</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-primary mb-4">Certifications & Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
              <ul className="space-y-1 text-sm">
                <li>• Cisco CYBEROPS Associate (Planned – August 2025)</li>
                <li>• Agile & Scrum Fundamentals (Completed, Cisco Internal)</li>
                <li>• Full-Stack MERN Bootcamp (Completed, Cisco Internal)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Education</h4>
              <ul className="space-y-1 text-sm">
                <li>• B.E., Computer Science Engineering - Visvesvaraya Technological University</li>
                <li>• CGPA: 8.1/10.0 - July 2023</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;