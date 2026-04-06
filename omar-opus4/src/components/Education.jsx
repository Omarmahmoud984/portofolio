import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Award, Code2, Lightbulb, Rocket } from 'lucide-react';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const learningAreas = [
        {
            icon: BookOpen,
            title: 'Data Engineering Fundamentals',
            items: ['ETL Pipeline Design', 'Data Warehousing', 'Data Quality & Validation'],
            color: '#00ffcc',
            bg: 'rgba(0, 255, 204, 0.1)'
        },
        {
            icon: Code2,
            title: 'Programming & Development',
            items: ['Python Best Practices', 'SQL Mastery', 'Version Control (Git)'],
            color: '#8b5cf6',
            bg: 'rgba(139, 92, 246, 0.1)'
        },
        {
            icon: Award,
            title: 'Algorithms & DSA',
            items: ['Advanced Data Structures', 'Algorithm Design', 'Complexity Analysis'],
            color: '#ffd700',
            bg: 'rgba(255, 215, 0, 0.1)'
        },
    ];

    return (
        <section id="education" className="section bg-[#0a0a12] relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#00ffcc]/5 rounded-full blur-[120px]" />
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
                        <GraduationCap className="w-4 h-4 text-[#8b5cf6]" />
                        <span className="text-sm text-[#8b5cf6] font-medium">Education</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Education & <span className="gradient-text">Learning</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Combining formal education with continuous self-learning
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Main Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-card p-8 md:p-10 group"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-5 mb-8">
                            <motion.div
                                className="p-4 rounded-2xl bg-gradient-to-br from-[#00ffcc]/20 to-[#8b5cf6]/20 border border-white/10"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <GraduationCap className="w-10 h-10 text-[#00ffcc]" />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Data Engineering Student</h3>
                                <p className="text-[#8b5cf6] font-medium">Bachelor's Degree Program</p>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-4 mb-8">
                            {[
                                { label: 'Focus Area', value: 'Data Engineering & Analytics', color: '#00ffcc' },
                                { label: 'Specialization', value: 'Database Systems & SQL', color: '#8b5cf6' },
                                { label: 'Key Courses', value: 'Algorithms, DBMS, Statistics', color: '#ffd700' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all group/item"
                                >
                                    <span className="text-gray-400">{item.label}</span>
                                    <span className="text-white font-semibold flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                                        {item.value}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Currently pursuing a degree with strong emphasis on practical data engineering skills,
                            database management, and analytical thinking. Supplementing coursework with
                            self-directed learning and hands-on projects.
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between text-sm mb-3">
                                <span className="text-gray-500">Learning Journey</span>
                                <span className="text-[#00ffcc] font-medium">In Progress</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#00ffcc] to-[#8b5cf6] rounded-full"
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: '65%' } : {}}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Self-Learning Areas */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-5 h-5 text-[#ffd700]" />
                            <h3 className="text-xl font-bold text-white">Continuous Learning Focus</h3>
                        </div>

                        {learningAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="glass-card p-6 group cursor-default"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: area.bg }}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: area.color }} />
                                        </div>
                                        <h4 className="font-bold text-white">{area.title}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {area.items.map((item) => (
                                            <motion.span
                                                key={item}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-white/20 transition-all"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Learning Philosophy */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.7 }}
                            className="p-5 rounded-2xl bg-gradient-to-r from-[#00ffcc]/10 via-[#8b5cf6]/10 to-[#ffd700]/10 border border-white/10"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-[#ffd700]/20 shrink-0">
                                    <Lightbulb className="w-5 h-5 text-[#ffd700]" />
                                </div>
                                <p className="text-sm text-gray-300 italic leading-relaxed">
                                    "I believe in learning by doing — every project is an opportunity to master new concepts
                                    and refine my understanding of data engineering principles."
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
