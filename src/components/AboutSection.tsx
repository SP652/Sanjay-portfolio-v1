import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface AboutSectionProps {
  onBack: () => void;
}

const AboutSection = ({ onBack }: AboutSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center px-4 section-container"
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
          <h2 className="text-3xl md:text-4xl font-bold glow-text">About Me</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p className="text-foreground">
            AI-focused Software Engineer skilled in multi-agent orchestration, scalable backend systems, and test automation.
            Delivers production-grade solutions with modern frameworks (LangChain, n8n, FastAPI, Docker) and collaborates
            effectively in Agile teams.
          </p>
          
          <p className="text-muted-foreground">
            At Cisco Systems, I architected robust automation frameworks using Playwright.js and Robot Framework, 
            achieving 95% test coverage and reducing manual effort by 60%. I engineered multi-modal test orchestration, 
            accelerating regression cycles from 3 days to 6 hours with 99.8% reliability.
          </p>
          
          <p className="text-muted-foreground">
            I've led cross-functional teams for CCMP TPSD triage, developed ML-powered applications including recommendation 
            engines and real-time chat platforms with WebSocket optimization, and spearheaded AI integration research for 
            workflow automation, contributing strategies for 30% operational overhead reduction.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Tech Stack</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Python, Java, JavaScript, SQL</li>
                  <li>• React, Node.js, Express, FastAPI</li>
                  <li>• AWS (Bedrock, Lambda, EC2)</li>
                  <li>• MongoDB, MySQL, Redis, Pinecone</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">AI & Automation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• LangChain, n8n, OpenAI APIs</li>
                  <li>• TensorFlow, scikit-learn, spaCy</li>
                  <li>• Playwright.js, Robot Framework</li>
                  <li>• Git, CI/CD, Jenkins, Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;