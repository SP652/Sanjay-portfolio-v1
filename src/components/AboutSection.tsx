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
          <h2 className="text-3xl md:text-4xl font-bold glow-text">About Me</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p className="text-foreground">
            As an AI-focused Software Engineer with expertise in multi-agent orchestration and backend systems, 
            I specialize in building intelligent, scalable solutions that bridge the gap between cutting-edge AI 
            technologies and robust software architecture.
          </p>
          
          <p className="text-muted-foreground">
            My experience spans across developing sophisticated test automation frameworks, implementing 
            cloud-native architectures, and orchestrating complex AI agent workflows. I have a proven track 
            record of delivering high-performance systems that can handle enterprise-scale demands while 
            maintaining code quality and system reliability.
          </p>
          
          <p className="text-muted-foreground">
            With a deep understanding of modern development practices, I've successfully architected and 
            implemented solutions using technologies like Python, Java, Node.js, and various cloud platforms. 
            My passion for AI and machine learning drives me to continuously explore new ways to integrate 
            intelligent automation into traditional software systems.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">AI & Automation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Multi-Agent System Design</li>
                  <li>• AI Workflow Orchestration</li>
                  <li>• Machine Learning Integration</li>
                  <li>• Intelligent Test Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Backend Systems</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Scalable Architecture Design</li>
                  <li>• Cloud-Native Development</li>
                  <li>• API Design & Implementation</li>
                  <li>• Performance Optimization</li>
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