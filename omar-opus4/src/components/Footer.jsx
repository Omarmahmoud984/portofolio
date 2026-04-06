import { motion } from 'framer-motion';
import { Database, Github, Linkedin, Mail, Heart, ArrowUp, Zap } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Competitive', href: '#competitive' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Omarmahmoud984', label: 'GitHub', color: '#fff' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/omar-mahmoud-13458a371', label: 'LinkedIn', color: '#0077b5' },
        { icon: Mail, href: 'mailto:omarmahmod6327@gmail.com', label: 'Email', color: '#00ffcc' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#050508] relative overflow-hidden">
            {/* Wave Separator */}
            <div className="relative h-24 overflow-hidden">
                <svg
                    className="absolute bottom-0 w-full h-24"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#waveGradient)"
                        d="M0,40 C320,80 420,0 640,40 C880,80 1120,20 1440,60 L1440,100 L0,100 Z"
                    />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffcc]/30 to-transparent" />
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <motion.a
                            href="#"
                            className="flex items-center gap-3 text-2xl font-bold mb-6 w-fit"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#00ffcc]/20 to-[#8b5cf6]/20 border border-white/10">
                                <Database className="w-7 h-7 text-[#00ffcc]" />
                            </div>
                            <span className="gradient-text font-bold">Omar.dev</span>
                        </motion.a>
                        <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                            Data Engineering Student passionate about building efficient data pipelines,
                            solving algorithmic challenges, and creating impactful solutions.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Zap className="w-4 h-4 text-[#ffd700]" />
                            <span>Always learning, always growing</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#00ffcc] transition-colors text-sm flex items-center gap-2 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#00ffcc] transition-colors" />
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
                        <div className="flex gap-3 mb-6">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:border-[#00ffcc]/30 transition-all"
                                        style={{ '--hover-color': link.color }}
                                        aria-label={link.label}
                                    >
                                        <Icon className="w-5 h-5 hover:text-[var(--hover-color)]" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Back to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#00ffcc] transition-colors group"
                        >
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#00ffcc]/30 transition-all">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                            <span>Back to Top</span>
                        </motion.button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} <span className="text-[#00ffcc]">Omar Mahmoud</span>. All rights reserved.
                        </p>
                        <motion.p
                            className="text-gray-500 text-sm flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Crafted with
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            </motion.span>
                            using <span className="text-[#61dafb]">React</span> & <span className="text-[#38bdf8]">Tailwind</span>
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[#00ffcc]/5 to-transparent blur-3xl pointer-events-none" />
        </footer>
    );
};

export default Footer;
