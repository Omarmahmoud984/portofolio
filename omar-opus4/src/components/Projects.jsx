import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Database, FileCode2, Workflow, Trophy } from 'lucide-react';

const projects = [
    {
        title: 'PostgreSQL Analytics Engine',
        description: 'Advanced SQL analytics project featuring complex queries with CTEs, window functions, and performance optimization techniques for large datasets.',
        problem: 'Analyzing large datasets efficiently requires optimized SQL queries and proper indexing strategies.',
        tech: ['PostgreSQL', 'SQL', 'CTEs', 'Window Functions', 'Indexing'],
        icon: Database,
        color: 'cyan',
        github: 'https://github.com/OmarMahmoud/postgresql-analytics',
        featured: true,
    },
    {
        title: 'Data Cleaning Pipeline with Pandas',
        description: 'End-to-end data cleaning solution that transforms raw CSV files into clean, structured datasets ready for analysis.',
        problem: 'Raw data often contains missing values, duplicates, and inconsistent formats that need systematic handling.',
        tech: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'CSV'],
        icon: FileCode2,
        color: 'purple',
        github: 'https://github.com/OmarMahmoud/pandas-data-cleaning',
        featured: true,
    },
    {
        title: 'Python + PostgreSQL ETL Pipeline',
        description: 'Full ETL pipeline that extracts data from multiple sources, transforms with Pandas, and loads into PostgreSQL.',
        problem: 'Integrating data from multiple sources requires a robust Extract-Transform-Load workflow.',
        tech: ['Python', 'Pandas', 'PostgreSQL', 'ETL', 'psycopg2'],
        icon: Workflow,
        color: 'blue',
        github: 'https://github.com/OmarMahmoud/python-etl-pipeline',
        featured: true,
    },
    {
        title: 'Algorithmic Problem Solver',
        description: 'Repository of solved competitive programming problems from Codeforces and LeetCode with detailed explanations.',
        problem: 'Practicing algorithms systematically improves problem-solving skills and interview preparation.',
        tech: ['Python', 'Java', 'Algorithms', 'Data Structures'],
        icon: Trophy,
        color: 'yellow',
        github: 'https://github.com/OmarMahmoud/competitive-solutions',
        featured: false,
    },
];

const getColorClasses = (color) => {
    const colors = {
        cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 hover:border-cyan-400',
        purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30 hover:border-purple-400',
        blue: 'text-blue-400 bg-blue-500/10 border-blue-500/30 hover:border-blue-400',
        yellow: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-400',
    };
    return colors[color] || colors.cyan;
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="section bg-[#0a0a0f]" ref={ref}>
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Data-focused projects showcasing my expertise in Pandas, PostgreSQL, and data engineering
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => {
                        const colorClasses = getColorClasses(project.color);
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`glass-card p-6 group relative overflow-hidden ${project.featured ? 'md:col-span-1' : ''}`}
                            >
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl ${colorClasses.split(' ').slice(1, 3).join(' ')} border ${colorClasses.split(' ')[3]}`}>
                                            <Icon className={`w-6 h-6 ${colorClasses.split(' ')[0]}`} />
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Problem Statement */}
                                    <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <p className="text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">Problem</p>
                                        <p className="text-sm text-gray-300">{project.problem}</p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <a
                        href="https://github.com/OmarMahmoud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        View all projects on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
