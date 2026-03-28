import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAnchor, FaBoxes, FaClipboardCheck, FaChevronRight } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const projects = [
  {
    id: 'cpdss',
    title: 'CPDSS',
    subtitle: 'Cargo Planning & Decision Support System',
    domain: 'Marine / Shipping',
    icon: FaAnchor,
    gradient: 'from-neon-green to-neon-cyan',
    description: 'System for cargo planning in VLCC vessels to optimize cargo load and reduce operational costs.',
    responsibilities: [
      'Designed and executed end-to-end test cases',
      'Performed functional, smoke, regression, and exploratory testing',
      'Automated End to End test scenarios using Robot Framework',
      'Supported UAT and production deployments',
      'Implemented automated watchers for Linux and Windows environments to trigger smoke testing after deployment by sending run files to the production environment and exporting run reports locally for result analysis',
    ],
    tools: ['Robot Framework', 'JIRA', 'Postman', 'SQL', 'ZAP', 'Azure DevOps'],
    metrics: { tests: '1000+', coverage: '95%', bugs: '500+' },
  },
  {
    id: 'aca',
    title: 'ACA',
    subtitle: 'Auto Cargo Allocation',
    domain: 'Logistics',
    icon: FaBoxes,
    gradient: 'from-neon-purple to-neon-pink',
    description: 'Automated system for efficient cargo allocation using vessel and commodity data.',
    responsibilities: [
      'Performed functional and compatibility testing',
      'Validated business rules and data-driven outputs',
      'Identified and tracked defects across modules',
    ],
    tools: ['JIRA'],
    metrics: { tests: '300+', coverage: '95%', bugs: '150+' },
  },
  {
    id: 'qaud',
    title: 'Q-Aud',
    subtitle: 'Audit Management System',
    domain: 'Enterprise',
    icon: FaClipboardCheck,
    gradient: 'from-neon-cyan to-neon-blue',
    description: 'Audit management platform for planning, execution, and reporting across departments.',
    responsibilities: [
      'Tested web and mobile applications',
      'Executed regression and exploratory testing',
      'Ensured cross-platform compatibility',
    ],
    tools: ['Web', 'Android', 'iOS', 'Bugzilla', 'Teslink'],
    metrics: { tests: '400+', coverage: '92%', bugs: '180+' },
  },
];

const ProjectCard = ({ project, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden group"
    >
      {/* Top gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="text-dark-950 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-500 text-xs mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20 uppercase tracking-wider">
            {project.domain}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="bg-dark-700/30 rounded-lg p-3 text-center">
              <div className="text-lg font-bold gradient-text">{value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                {key === 'tests' ? 'Test Cases' : key === 'coverage' ? 'Coverage' : 'Bugs Found'}
              </div>
            </div>
          ))}
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Responsibilities</h4>
          <ul className="space-y-2">
            {project.responsibilities.map((resp) => (
              <li key={resp} className="flex items-start gap-2 text-sm text-gray-400">
                <FaChevronRight className="text-neon-green text-[8px] mt-1.5 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-dark-700/40 text-gray-400 border border-white/5 hover:border-neon-green/20 hover:text-neon-green transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          number="04"
          title="Projects"
          subtitle="Real-world applications where I ensured quality and reliability"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
