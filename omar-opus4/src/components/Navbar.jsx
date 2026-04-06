import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Database, Zap } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Competitive', href: '#competitive' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Scroll state
            setIsScrolled(window.scrollY > 50);

            // Scroll progress
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / docHeight) * 100;
            setScrollProgress(progress);

            // Active section detection
            const sections = navLinks.map(link => link.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#00ffcc] via-[#8b5cf6] to-[#00b4ff] z-[60]"
                style={{ width: `${scrollProgress}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolled ? 1 : 0 }}
            />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/5 py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="flex items-center gap-3 text-xl font-bold group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative">
                                <div className="p-2 rounded-xl bg-gradient-to-br from-[#00ffcc]/20 to-[#8b5cf6]/20 border border-white/10 group-hover:border-[#00ffcc]/30 transition-all">
                                    <Database className="w-6 h-6 text-[#00ffcc]" />
                                </div>
                                <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00ffcc]"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                />
                            </div>
                            <span className="gradient-text font-bold tracking-tight">Omar.dev</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${activeSection === link.href.replace('#', '')
                                            ? 'text-[#00ffcc]'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {link.name}
                                    {activeSection === link.href.replace('#', '') && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-[#00ffcc]/10 rounded-lg -z-10"
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00ffcc] to-[#8b5cf6] text-[#050508] font-semibold text-sm rounded-xl"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 204, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Zap className="w-4 h-4" />
                            <span>Hire Me</span>
                        </motion.a>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-3 rounded-xl bg-white/5 text-gray-300 hover:text-[#00ffcc] border border-white/10 hover:border-[#00ffcc]/30 transition-all"
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                        >
                            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${activeSection === link.href.replace('#', '')
                                                ? 'bg-[#00ffcc]/10 text-[#00ffcc]'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-4 text-center px-5 py-3 bg-gradient-to-r from-[#00ffcc] to-[#8b5cf6] text-[#050508] font-bold rounded-xl"
                                >
                                    Get In Touch
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
