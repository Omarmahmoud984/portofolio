import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Trophy, Target, Flame, TrendingUp, ExternalLink, Code, Cpu } from 'lucide-react';

// Animated Counter Hook
const useCounter = (end, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let startTime = null;
        const startValue = 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(startValue + (end - startValue) * easeOutQuart));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, startCounting]);

    return count;
};

const platforms = [
    {
        name: 'Codeforces',
        handle: '@omar_mh2',
        icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg',
        color: '#1da1f2',
        gradient: 'from-blue-500 to-cyan-400',
        stats: [
            { label: 'Problems Solved', value: 100, suffix: '+' },
            { label: 'Rank', value: 'Newbie', isText: true },
        ],
        link: 'https://codeforces.com/profile/omar_mh2',
        description: 'Focused on graph algorithms, dynamic programming, and number theory. Consistently improving problem-solving skills.',
    },
    {
        name: 'LeetCode',
        handle: '@omar_mh',
        icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg',
        color: '#ffa116',
        gradient: 'from-yellow-500 to-orange-400',
        stats: [
            { label: 'Problems Solved', value: 50, suffix: '+' },
            { label: 'Rank', value: 'Unranked', isText: true },
        ],
        link: 'https://leetcode.com/u/omar_mh/',
        description: 'Consistent practice for interview preparation. Strong focus on arrays, strings, and SQL problems.',
    },
];

const achievements = [
    {
        icon: Target,
        text: '150+ Algorithmic Problems Solved',
        color: '#00ffcc',
        bg: 'rgba(0, 255, 204, 0.1)'
    },
    {
        icon: Flame,
        text: 'Data Structures Mastery',
        color: '#ff6b6b',
        bg: 'rgba(255, 107, 107, 0.1)'
    },
    {
        icon: Trophy,
        text: 'SQL Query Optimization Expert',
        color: '#ffd700',
        bg: 'rgba(255, 215, 0, 0.1)'
    },
    {
        icon: TrendingUp,
        text: 'Continuous Learning & Growth',
        color: '#8b5cf6',
        bg: 'rgba(139, 92, 246, 0.1)'
    },
];

// Stat Card with Animated Counter
const StatCard = ({ stat, isInView, delay }) => {
    const count = useCounter(stat.value, 2000, isInView);

    if (stat.isText) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay }}
                className="text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all"
            >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all"
        >
            <div className="text-2xl font-bold text-white">
                {count}{stat.suffix}
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
        </motion.div>
    );
};

const Competitive = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="competitive" className="section bg-[#050508] relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00ffcc]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[120px]" />
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
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc]/20 mb-6"
                    >
                        <Code className="w-4 h-4 text-[#00ffcc]" />
                        <span className="text-sm text-[#00ffcc] font-medium">Problem Solving</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Competitive <span className="gradient-text">Programming</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Sharpening algorithmic thinking and problem-solving skills through consistent practice
                    </p>
                </motion.div>

                {/* Platforms */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="platform-card group"
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{ backgroundColor: `${platform.color}15` }}
                                    >
                                        <img
                                            src={platform.icon}
                                            alt={platform.name}
                                            className="w-8 h-8"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold" style={{ color: platform.color }}>
                                            {platform.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm font-mono">{platform.handle}</p>
                                    </div>
                                </div>
                                <motion.a
                                    href={platform.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </motion.a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {platform.stats.map((stat, statIndex) => (
                                    <StatCard
                                        key={stat.label}
                                        stat={stat}
                                        isInView={isInView}
                                        delay={index * 0.15 + statIndex * 0.1 + 0.3}
                                    />
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed">{platform.description}</p>

                            {/* Decorative Line */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${platform.color}, transparent)`
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00ffcc]/50" />
                        <h3 className="text-xl font-semibold text-center flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-[#00ffcc]" />
                            Key Highlights
                        </h3>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00ffcc]/50" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <motion.div
                                    key={achievement.text}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass-card p-5 flex items-center gap-4 cursor-default"
                                >
                                    <div
                                        className="p-3 rounded-xl shrink-0"
                                        style={{ backgroundColor: achievement.bg }}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: achievement.color }} />
                                    </div>
                                    <p className="text-sm text-gray-300 font-medium">{achievement.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm">
                        Always looking for new challenges to solve
                        <span className="text-[#00ffcc] mx-1">•</span>
                        Open to collaborations
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Competitive;
