import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, Search, BarChart3, Server, Clock, Layers, Terminal, ChevronRight } from 'lucide-react';

const highlights = [
    {
        icon: Zap,
        title: 'SQL Query Optimization',
        description: 'Writing efficient queries by analyzing execution plans, avoiding N+1 problems, and using appropriate indexes.',
        code: 'EXPLAIN ANALYZE SELECT * FROM ...',
        color: '#00ffcc',
        bg: 'rgba(0, 255, 204, 0.1)'
    },
    {
        icon: Search,
        title: 'Index Strategy',
        description: 'Understanding B-tree, Hash, and GIN indexes to accelerate query performance on large tables.',
        code: 'CREATE INDEX idx_name ON table(col);',
        color: '#8b5cf6',
        bg: 'rgba(139, 92, 246, 0.1)'
    },
    {
        icon: BarChart3,
        title: 'Window Functions',
        description: 'Leveraging ROW_NUMBER, RANK, LAG, LEAD for complex analytical queries without subqueries.',
        code: 'ROW_NUMBER() OVER (PARTITION BY ...)',
        color: '#00b4ff',
        bg: 'rgba(0, 180, 255, 0.1)'
    },
    {
        icon: Clock,
        title: 'Pandas Performance',
        description: 'Optimizing dataframe operations with vectorization, avoiding iterrows, and using efficient dtypes.',
        code: 'df.apply(np.vectorize(func))',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)'
    },
    {
        icon: Layers,
        title: 'CTEs & Subqueries',
        description: 'Breaking complex queries into readable Common Table Expressions for maintainability.',
        code: 'WITH cte AS (...) SELECT ...',
        color: '#ffd700',
        bg: 'rgba(255, 215, 0, 0.1)'
    },
    {
        icon: Server,
        title: 'Data Pipeline Design',
        description: 'Designing robust ETL workflows with proper error handling, logging, and data validation.',
        code: 'extract() -> transform() -> load()',
        color: '#ff6b6b',
        bg: 'rgba(255, 107, 107, 0.1)'
    }
];

const HighlightCard = ({ item, index, isInView }) => {
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-card p-7 group relative overflow-hidden cursor-default will-change-transform hover:scale-[1.01] hover:-translate-y-1 transition-transform duration-200 ease-out"
        >
            {/* Animated Background Gradient on Hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `linear-gradient(135deg, ${item.bg}, transparent)`,
                }}
            />

            {/* Top Glow Line */}
            <div
                className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                style={{ backgroundColor: item.color }}
            />

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                    <div
                        className="p-3 rounded-xl transition-transform duration-200 ease-out group-hover:scale-105 group-hover:rotate-3"
                        style={{ backgroundColor: item.bg }}
                    >
                        <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <h3
                        className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-[var(--highlight-color)]"
                        style={{ '--highlight-color': item.color }}
                    >
                        {item.title}
                    </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {item.description}
                </p>

                {/* Code Snippet */}
                <div className="relative group/code">
                    <div className="font-mono text-xs bg-[#0a0a12] px-4 py-3 rounded-xl border border-white/5 text-gray-400 overflow-x-auto flex items-center gap-3">
                        <Terminal className="w-4 h-4 shrink-0 text-gray-600" />
                        <code
                            className="transition-colors duration-200 group-hover:text-[var(--item-color)]"
                            style={{ '--item-color': item.color }}
                        >
                            {item.code}
                        </code>
                    </div>
                    {/* Copy indicator on hover */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Highlights = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="highlights" className="section bg-[#0a0a12] relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#00ffcc]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
                <div className="bg-grid absolute inset-0 opacity-20" />
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/20 mb-6"
                    >
                        <Zap className="w-4 h-4 text-[#ffd700]" />
                        <span className="text-sm text-[#ffd700] font-medium">Expertise</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Data Engineering <span className="gradient-text">Highlights</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Key areas of expertise that define my approach to building robust data solutions
                    </p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {highlights.map((item, index) => (
                        <HighlightCard
                            key={item.title}
                            item={item}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="relative max-w-3xl mx-auto">
                        {/* Quote marks */}
                        <span className="absolute -top-8 left-0 text-6xl text-[#00ffcc]/20 font-serif">"</span>
                        <blockquote className="text-xl text-gray-300 italic leading-relaxed px-10">
                            Premature optimization is the root of all evil – but knowing when to optimize is the mark of a good engineer.
                        </blockquote>
                        <span className="absolute -bottom-4 right-0 text-6xl text-[#8b5cf6]/20 font-serif">"</span>
                    </div>
                    <motion.p
                        className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 }}
                    >
                        <span className="w-8 h-px bg-gray-700" />
                        Adapted from Donald Knuth
                        <span className="w-8 h-px bg-gray-700" />
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Highlights;
