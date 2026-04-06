import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Code2, Brain, Sparkles, User, Terminal } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const highlights = [
        {
            icon: Database,
            title: 'Data Engineering',
            description: 'Building efficient data pipelines and ETL workflows',
            color: '#00ffcc',
            bg: 'rgba(0, 255, 204, 0.1)'
        },
        {
            icon: Code2,
            title: 'SQL Mastery',
            description: 'Advanced PostgreSQL queries, CTEs, and optimization',
            color: '#8b5cf6',
            bg: 'rgba(139, 92, 246, 0.1)'
        },
        {
            icon: Brain,
            title: 'Problem Solving',
            description: 'Algorithmic thinking & data-driven solutions',
            color: '#ffd700',
            bg: 'rgba(255, 215, 0, 0.1)'
        },
        {
            icon: Sparkles,
            title: 'Clean Code',
            description: 'Writing maintainable, well-documented code',
            color: '#ff6b6b',
            bg: 'rgba(255, 107, 107, 0.1)'
        }
    ];

    return (
        <section id="about" className="section bg-[#050508] relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#00ffcc]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Section Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc]/20 mb-8"
                        >
                            <User className="w-4 h-4 text-[#00ffcc]" />
                            <span className="text-sm text-[#00ffcc] font-medium">About Me</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Passionate About <span className="gradient-text">Data</span>
                        </h2>

                        <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 }}
                            >
                                I'm a passionate <span className="text-[#00ffcc] font-medium">Data Engineering student</span> with
                                a strong focus on building robust data solutions. My journey in tech started with
                                competitive programming, which gave me a solid foundation in algorithms.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 }}
                            >
                                I specialize in <span className="text-[#8b5cf6] font-medium">data cleaning and transformation
                                    using Pandas</span>, and I'm passionate about writing efficient
                                <span className="text-[#8b5cf6] font-medium"> PostgreSQL queries</span> optimized for performance.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 }}
                            >
                                My competitive programming background on <span className="text-[#ffd700] font-medium">Codeforces</span> and
                                <span className="text-[#ffd700] font-medium"> LeetCode</span> has sharpened my algorithmic thinking and
                                ability to tackle complex technical challenges.
                            </motion.p>
                        </div>

                        {/* Enhanced Code Snippet */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="mt-10"
                        >
                            <div className="code-block relative overflow-hidden">
                                <div className="pt-6">
                                    <pre className="text-sm leading-relaxed">
                                        <code>
                                            <span className="text-[#8b5cf6]">const</span>{' '}
                                            <span className="text-[#00ffcc]">omar</span> = {'{'}
                                            {'\n'}  <span className="text-gray-500">role:</span>{' '}
                                            <span className="text-[#98c379]">"Data Engineering Student"</span>,
                                            {'\n'}  <span className="text-gray-500">passion:</span>{' '}
                                            <span className="text-[#98c379]">"Building Data Pipelines"</span>,
                                            {'\n'}  <span className="text-gray-500">skills:</span> [
                                            <span className="text-[#98c379]">"Python"</span>,{' '}
                                            <span className="text-[#98c379]">"SQL"</span>,{' '}
                                            <span className="text-[#98c379]">"Pandas"</span>],
                                            {'\n'}  <span className="text-gray-500">status:</span>{' '}
                                            <span className="text-[#98c379]">"Always Learning 🚀"</span>
                                            {'\n'}{'}'};
                                        </code>
                                    </pre>
                                </div>
                                {/* Terminal Icon */}
                                <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/5">
                                    <Terminal className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid sm:grid-cols-2 gap-5"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -4,
                                    transition: { duration: 0.2, ease: "easeOut" }
                                }}
                                className="glass-card p-7 group cursor-default will-change-transform"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-200 ease-out group-hover:scale-105"
                                    style={{ backgroundColor: item.bg }}
                                >
                                    <item.icon
                                        className="w-7 h-7 transition-transform duration-200 ease-out group-hover:rotate-6"
                                        style={{ color: item.color }}
                                    />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-white transition-colors duration-200"
                                    style={{
                                        background: 'linear-gradient(90deg, ' + item.color + ', #ffffff)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    <span className="group-hover:text-transparent transition-colors duration-200">
                                        {item.title}
                                    </span>
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

                                {/* Hover indicator line */}
                                <div
                                    className="h-0.5 w-0 group-hover:w-full mt-4 transition-all duration-300 ease-out rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
