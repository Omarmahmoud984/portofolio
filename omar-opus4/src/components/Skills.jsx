import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Sparkles } from 'lucide-react';

// Skills with real logos from CDN
const skills = [
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        color: '#3776AB',
        description: 'Data Analysis & Automation',
        level: 90
    },
    {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        color: '#336791',
        description: 'Advanced SQL & Analytics',
        level: 88
    },
    {
        name: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        color: '#150458',
        description: 'Data Manipulation',
        level: 85
    },
    {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        color: '#ED8B00',
        description: 'OOP & Algorithms',
        level: 80
    },
    {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        color: '#00599C',
        description: 'Competitive Programming',
        level: 75
    },
    {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        color: '#4479A1',
        description: 'Database Management',
        level: 85
    },
    {
        name: 'Matplotlib',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
        color: '#11557C',
        description: 'Data Visualization',
        level: 80
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        color: '#F05032',
        description: 'Version Control',
        level: 78
    },
];

const learningTech = ['NumPy', 'Docker', 'REST APIs', 'Linux', 'Jupyter', 'VS Code', 'JSON', 'Seaborn'];

// Skill Card Component
const SkillCard = ({ skill, index, isInView }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
            duration: 0.5,
            delay: index * 0.08,
            type: "spring",
            stiffness: 100
        }}
        whileHover={{
            scale: 1.02,
            y: -6,
            transition: { duration: 0.2, ease: "easeOut" }
        }}
        className="group relative will-change-transform"
    >
        <div className="glass-card p-6 h-full flex flex-col items-center justify-center gap-5 text-center cursor-pointer relative overflow-hidden">
            {/* Animated Border Gradient */}
            <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(135deg, ${skill.color}20, transparent, ${skill.color}20)`,
                }}
            />

            {/* Glow Effect */}
            <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
                style={{ backgroundColor: `${skill.color}30` }}
            />

            {/* Logo Container */}
            <motion.div
                className="relative"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Orbiting Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                    />
                </motion.div>

                {/* Logo */}
                <div className="relative z-10 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg transition-transform duration-200 ease-out group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Subtle glow on hover */}
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color, filter: 'blur(8px)' }}
                />
            </motion.div>

            {/* Name */}
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{
                    '--tw-gradient-from': skill.color,
                    '--tw-gradient-to': '#fff',
                }}
            >
                <span className="group-hover:bg-gradient-to-r group-hover:from-[var(--tw-gradient-from)] group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent">
                    {skill.name}
                </span>
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors font-medium">
                {skill.description}
            </p>

            {/* Skill Level Bar */}
            <div className="w-full mt-auto">
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="section bg-[#050508] relative overflow-hidden" ref={ref}>
            {/* Background Decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ffcc]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[130px]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-6"
                    >
                        <Layers className="w-4 h-4 text-[#8b5cf6]" />
                        <span className="text-sm text-[#8b5cf6] font-medium">Technologies</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Technologies and tools I use to build data pipelines, analyze data, and solve complex problems
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Learning Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#ffd700]/50" />
                        <div className="flex items-center gap-2 text-[#ffd700]">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wider">Also Exploring</span>
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#ffd700]/50" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {learningTech.map((tech, idx) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.9 + idx * 0.05 }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -2,
                                    transition: { duration: 0.15, ease: "easeOut" }
                                }}
                                className="px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-gray-400 border border-white/10 hover:border-[#00ffcc]/50 hover:text-[#00ffcc] transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 }}
                    className="flex justify-center mt-16"
                >
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span>Continuously learning</span>
                        <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            ⚡
                        </motion.span>
                        <span>Always evolving</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
