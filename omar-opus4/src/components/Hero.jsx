import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Sparkles, Zap, Terminal, Database, Code2 } from 'lucide-react';

// Platform icons with their links
const platformLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Omarmahmoud984',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: '#fff'
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/omar-mahmoud-13458a371',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
        color: '#0077b5'
    },
    {
        name: 'LeetCode',
        href: 'https://leetcode.com/u/omar_mh/',
        icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg',
        color: '#ffa116'
    },
    {
        name: 'Codeforces',
        href: 'https://codeforces.com/profile/omar_mh2',
        icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg',
        color: '#1da1f2'
    },
];

// Typewriter effect hook
const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (isPaused) {
                setIsPaused(false);
                setIsDeleting(true);
                return;
            }

            if (!isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                if (displayText === currentWord) {
                    setIsPaused(true);
                }
            } else {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isPaused ? pauseTime : isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, isPaused, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
};

// Floating Particle Component
const FloatingParticle = ({ delay, size, x, y, duration }) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
            background: `radial-gradient(circle, rgba(0, 255, 204, 0.6) 0%, transparent 70%)`,
        }}
        animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

// Pipeline function labels that orbit around the circle
const pipelineLabels = [
    { text: 'extract()', color: '#00ffcc', angle: 30 },
    { text: 'transform()', color: '#8b5cf6', angle: 90 },
    { text: 'load()', color: '#ffd700', angle: 150 },
    { text: 'validate()', color: '#00b4ff', angle: 210 },
    { text: 'optimize()', color: '#ff6b6b', angle: 270 },
    { text: 'deploy()', color: '#10b981', angle: 330 },
];

const Hero = () => {
    const typedText = useTypewriter([
        'Data Engineering Student',
        'SQL & Python Enthusiast',
        'Problem Solver',
        'Pipeline Builder',
    ], 80, 40, 2000);

    // Generate particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: i * 0.3,
        size: Math.random() * 8 + 4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 4,
    }));

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Morphing Gradient Blobs */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[120px] animate-morph"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.15), rgba(139, 92, 246, 0.15))',
                        top: '10%',
                        left: '10%',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[100px] animate-morph"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(255, 107, 107, 0.1))',
                        bottom: '10%',
                        right: '10%',
                        animationDelay: '-4s'
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[80px]"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 180, 255, 0.1), transparent)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Floating Particles */}
                {particles.map((particle) => (
                    <FloatingParticle key={particle.id} {...particle} />
                ))}

                {/* Floating Tech Icons */}
                <motion.div
                    animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[8%] p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:flex items-center justify-center"
                >
                    <Database className="w-8 h-8 text-[#00ffcc]" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[25%] left-[5%] p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:flex items-center justify-center"
                >
                    <Terminal className="w-8 h-8 text-[#8b5cf6]" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[35%] right-[8%] p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:flex items-center justify-center"
                >
                    <Code2 className="w-8 h-8 text-[#ffd700]" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-[40%] right-[12%] p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hidden lg:flex items-center justify-center"
                >
                    <Zap className="w-8 h-8 text-[#ff6b6b]" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc]/30 mb-8"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ffcc]"></span>
                            </span>
                            <span className="text-sm text-[#00ffcc] font-semibold tracking-wide">Available for Opportunities</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-white">Hi, I'm </span>
                            <span className="gradient-text relative inline-block">
                                Omar Mahmoud
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                                    className="absolute -bottom-1 left-0 h-1.5 bg-gradient-to-r from-[#00ffcc] via-[#8b5cf6] to-[#00b4ff] rounded-full"
                                />
                            </span>
                        </motion.h1>

                        {/* Typewriter Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-xl md:text-2xl font-medium mb-6 h-10"
                        >
                            <span className="text-[#00ffcc] font-mono">
                                {typedText}
                                <span className="animate-[blink_1s_infinite] ml-1 text-[#8b5cf6]">|</span>
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Building efficient <span className="text-[#00ffcc]">data pipelines</span>,
                            crafting complex <span className="text-[#8b5cf6]">SQL queries</span>,
                            and solving <span className="text-[#ffd700]">algorithmic challenges</span>.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-10"
                        >
                            <a href="#about" className="btn-primary group">
                                <Sparkles className="w-5 h-5" />
                                <span>Explore My Work</span>
                                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a href="#contact" className="btn-secondary group">
                                <Mail className="w-5 h-5" />
                                <span>Get In Touch</span>
                            </a>
                        </motion.div>

                        {/* Platform Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex items-center justify-center lg:justify-start gap-4"
                        >
                            <span className="text-sm text-gray-500 mr-2">Find me on</span>
                            {platformLinks.map((platform, index) => (
                                <motion.a
                                    key={platform.name}
                                    href={platform.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                                    whileHover={{
                                        scale: 1.2,
                                        y: -5,
                                        boxShadow: `0 10px 30px ${platform.color}40`
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/30"
                                    title={platform.name}
                                >
                                    <img
                                        src={platform.icon}
                                        alt={platform.name}
                                        className="w-6 h-6 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side — Unified Profile: Human + Pipeline + System */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.9, type: "spring", stiffness: 80, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-80 h-80 md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">

                            {/* Outer Hexagonal Frame */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                <defs>
                                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00ffcc" />
                                        <stop offset="50%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#00b4ff" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                {/* Outer Hexagon - rotating */}
                                <motion.polygon
                                    points="200,20 350,110 350,290 200,380 50,290 50,110"
                                    fill="none"
                                    stroke="url(#hexGradient)"
                                    strokeWidth="2"
                                    filter="url(#glow)"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    style={{ transformOrigin: 'center' }}
                                />
                                {/* Inner Hexagon - counter-rotating */}
                                <motion.polygon
                                    points="200,50 320,125 320,275 200,350 80,275 80,125"
                                    fill="none"
                                    stroke="#00ffcc"
                                    strokeWidth="1"
                                    opacity="0.5"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{ transformOrigin: 'center' }}
                                />
                                {/* Dashed circle */}
                                <motion.circle
                                    cx="200" cy="200" r="150"
                                    fill="none"
                                    stroke="#8b5cf6"
                                    strokeWidth="1"
                                    strokeDasharray="10 5"
                                    opacity="0.4"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    style={{ transformOrigin: 'center' }}
                                />
                            </svg>

                            {/* PIPELINE: Orbiting function labels */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="absolute inset-0 z-10"
                            >
                                {pipelineLabels.map((label, i) => {
                                    const rad = (label.angle * Math.PI) / 180;
                                    const radius = 48; // percentage from center
                                    const cx = 50 + radius * Math.cos(rad);
                                    const cy = 50 + radius * Math.sin(rad);
                                    return (
                                        <motion.span
                                            key={label.text}
                                            className="absolute font-mono text-[10px] font-bold whitespace-nowrap pointer-events-none"
                                            style={{
                                                left: `${cx}%`,
                                                top: `${cy}%`,
                                                transform: 'translate(-50%, -50%)',
                                                color: label.color,
                                                textShadow: `0 0 10px ${label.color}60`,
                                            }}
                                            animate={{
                                                opacity: [0.4, 0.9, 0.4],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                        >
                                            {label.text}
                                        </motion.span>
                                    );
                                })}
                            </motion.div>

                            {/* SYSTEM: Orbiting dots */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                                    <motion.div
                                        key={deg}
                                        className="absolute w-3 h-3 rounded-full"
                                        style={{
                                            background: i % 2 === 0 ? '#00ffcc' : '#8b5cf6',
                                            boxShadow: `0 0 15px ${i % 2 === 0 ? '#00ffcc' : '#8b5cf6'}`,
                                            top: '50%',
                                            left: '50%',
                                            transform: `rotate(${deg}deg) translateY(-${170 + (i % 2) * 20}px) translateX(-50%)`,
                                        }}
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    />
                                ))}
                            </motion.div>

                            {/* Floating Code Symbols */}
                            <div className="absolute inset-0">
                                {['</', '/>', '{ }', '( )', '[ ]', '= >'].map((symbol, i) => (
                                    <motion.span
                                        key={symbol}
                                        className="absolute text-[#00ffcc]/30 font-mono text-sm font-bold"
                                        style={{
                                            top: `${15 + (i * 15)}%`,
                                            left: i % 2 === 0 ? '5%' : '85%',
                                        }}
                                        animate={{
                                            y: [0, -15, 0],
                                            opacity: [0.2, 0.5, 0.2]
                                        }}
                                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                                    >
                                        {symbol}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Main Circle Container — slightly bigger */}
                            <div className="absolute inset-8 rounded-full group cursor-pointer">
                                {/* Rotating Gradient Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        background: 'conic-gradient(from 0deg, #00ffcc, transparent, #8b5cf6, transparent, #ffd700, transparent, #00ffcc)',
                                        padding: '3px',
                                    }}
                                >
                                    <div className="w-full h-full rounded-full bg-[#050508]" />
                                </motion.div>

                                {/* Inner Content — Profile Photo with system overlays */}
                                <div className="absolute inset-1 rounded-full overflow-hidden border border-white/5" style={{ backgroundColor: '#0a0a15' }}>
                                    {/* HUMAN: Profile Photo */}
                                    <img
                                        src="/profile.jpg"
                                        alt="Omar Mahmoud"
                                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                                        style={{ objectPosition: 'top center', transform: 'scale(1.3) translateY(-25%)', transformOrigin: 'top center' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback OM text if no image */}
                                    <div
                                        className="absolute inset-0 items-center justify-center bg-gradient-to-br from-[#0a0a15] to-[#050508]"
                                        style={{ display: 'none' }}
                                    >
                                        <motion.div
                                            className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-black leading-none select-none"
                                            animate={{
                                                x: [0, -2, 2, -1, 0],
                                                textShadow: [
                                                    '0 0 30px rgba(0, 255, 204, 0.3)',
                                                    '3px 0 0 rgba(255, 0, 255, 0.3), -3px 0 0 rgba(0, 255, 255, 0.3)',
                                                    '0 0 30px rgba(0, 255, 204, 0.3)',
                                                ]
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                repeat: Infinity,
                                                repeatDelay: 4,
                                                repeatType: "loop"
                                            }}
                                            style={{
                                                background: 'linear-gradient(135deg, #00ffcc 0%, #8b5cf6 50%, #00b4ff 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                filter: 'drop-shadow(0 0 40px rgba(0, 255, 204, 0.4))'
                                            }}
                                        >
                                            OM
                                        </motion.div>
                                    </div>

                                    {/* SYSTEM: Scan Line Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ffcc]/10 to-transparent"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                                    />

                                    {/* SYSTEM: Grid Overlay */}
                                    <div className="absolute inset-0 opacity-10" style={{
                                        backgroundImage: `linear-gradient(#00ffcc 1px, transparent 1px), linear-gradient(90deg, #00ffcc 1px, transparent 1px)`,
                                        backgroundSize: '20px 20px'
                                    }} />

                                    {/* SYSTEM: Subtle vignette overlay for depth */}
                                    <div className="absolute inset-0 rounded-full"
                                        style={{ background: 'radial-gradient(circle, transparent 50%, rgba(5,5,8,0.6) 100%)' }}
                                    />

                                    {/* SYSTEM: Glitch flicker */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(139,92,246,0.1), transparent, rgba(0,255,204,0.05))',
                                        }}
                                        animate={{
                                            opacity: [0, 0.4, 0, 0.2, 0],
                                        }}
                                        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 5 }}
                                    />

                                    {/* Center Glow */}
                                    <div className="absolute inset-0 bg-radial-gradient from-[#00ffcc]/20 via-transparent to-transparent" />

                                    {/* PIPELINE: Status badge at bottom of circle */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#050508]/80 backdrop-blur-sm border border-[#00ffcc]/30">
                                        <span className="text-[10px] font-mono text-[#00ffcc] whitespace-nowrap tracking-wider">
                                            STATUS: ONLINE
                                        </span>
                                    </div>

                                    {/* Hover Energy Burst */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-4 border-[#00ffcc]/0 group-hover:border-[#00ffcc]/60"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </div>

                            {/* Floating AI Agent 1 — top-left */}
                            <motion.div
                                className="absolute -top-4 -left-8 md:-left-14 w-12 h-12 md:w-16 md:h-16 z-10 pointer-events-none"
                                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <motion.img
                                    src="/agents.png"
                                    alt="AI Agent"
                                    className="w-full h-full object-contain"
                                    animate={{
                                        filter: [
                                            'drop-shadow(0 0 4px rgba(0,255,204,0.6)) drop-shadow(0 0 8px rgba(139,92,246,0.3))',
                                            'drop-shadow(0 0 6px rgba(0,255,204,0.9)) drop-shadow(0 0 12px rgba(139,92,246,0.5))',
                                            'drop-shadow(0 0 4px rgba(0,255,204,0.6)) drop-shadow(0 0 8px rgba(139,92,246,0.3))',
                                        ]
                                    }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </motion.div>



                            {/* Pulsing Energy Core */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#00ffcc] -z-10"
                                animate={{
                                    scale: [1, 15, 1],
                                    opacity: [0.8, 0, 0.8]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                                style={{ filter: 'blur(20px)' }}
                            />

                            {/* Corner Accents */}
                            {[0, 90, 180, 270].map((rotation) => (
                                <motion.div
                                    key={rotation}
                                    className="absolute w-6 h-6 border-l-2 border-t-2 border-[#00ffcc]"
                                    style={{
                                        top: rotation === 0 || rotation === 270 ? '0%' : 'auto',
                                        bottom: rotation === 90 || rotation === 180 ? '0%' : 'auto',
                                        left: rotation === 0 || rotation === 90 ? '0%' : 'auto',
                                        right: rotation === 180 || rotation === 270 ? '0%' : 'auto',
                                        transform: `rotate(${rotation}deg)`,
                                    }}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: rotation / 360 }}
                                />
                            ))}

                            {/* Data Stream Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                {[0, 1, 2].map((i) => (
                                    <motion.line
                                        key={i}
                                        x1={100 + i * 80}
                                        y1="0"
                                        x2={100 + i * 80}
                                        y2="400"
                                        stroke="#00ffcc"
                                        strokeWidth="1"
                                        strokeDasharray="5 15"
                                        opacity="0.2"
                                        animate={{ strokeDashoffset: [0, -40] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                                    />
                                ))}
                            </svg>

                            {/* Background Glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ffcc]/20 via-[#8b5cf6]/20 to-[#00b4ff]/20 blur-3xl -z-10 scale-150" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">Scroll Down</span>
                    <div className="w-7 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2.5">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                            className="w-2 h-2 bg-[#00ffcc] rounded-full shadow-[0_0_10px_#00ffcc]"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
