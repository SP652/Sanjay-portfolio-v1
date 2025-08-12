import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

interface ExperienceSectionProps {
  onBack: () => void;
}

const ExperienceSection = ({ onBack }: ExperienceSectionProps) => {
  const experiences = [
    {
      title: "Senior AI Software Engineer",
      company: "TechNova Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of multi-agent orchestration system handling 10M+ daily transactions",
        "Implemented AI-driven test automation reducing manual testing time by 85%",
        "Architected microservices infrastructure supporting 99.9% uptime",
        "Mentored team of 6 engineers in AI/ML best practices and system design"
      ]
    },
    {
      title: "Backend Systems Engineer",
      company: "DataFlow Inc",
      period: "2020 - 2022",
      location: "Austin, TX",
      achievements: [
        "Built scalable data processing pipelines handling 2TB+ daily data volume",
        "Optimized database performance resulting in 40% query time reduction",
        "Developed RESTful APIs serving 1M+ requests per day",
        "Implemented comprehensive testing framework with 95% code coverage"
      ]
    },
    {
      title: "Software Engineer",
      company: "CloudTech Innovations",
      period: "2018 - 2020",
      location: "Seattle, WA",
      achievements: [
        "Developed cloud-native applications using AWS and Docker",
        "Created automated deployment pipelines reducing release time by 60%",
        "Collaborated on machine learning model integration for real-time predictions",
        "Contributed to open-source projects with 500+ GitHub stars"
      ]
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
      <div className="glass-panel p-8 md:p-12 max-w-6xl w-full">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="menu-button mr-4 flex items-center gap-2 px-4 py-2"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <h2 className="text-3xl md:text-4xl font-bold glow-text">Mission Log</h2>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 timeline-connector"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                
                <div className="ml-16 md:ml-20">
                  <div className="project-card">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) + 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;