import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'omarmahmod6327@gmail.com',
            href: 'mailto:omarmahmod6327@gmail.com',
            color: '#00ffcc',
            bg: 'rgba(0, 255, 204, 0.1)'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/Omarmahmoud984',
            href: 'https://github.com/Omarmahmoud984',
            color: '#fff',
            bg: 'rgba(255, 255, 255, 0.05)'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/omar-mahmoud-13458a371',
            href: 'https://www.linkedin.com/in/omar-mahmoud-13458a371',
            color: '#0077b5',
            bg: 'rgba(0, 119, 181, 0.1)'
        },
    ];

    return (
        <section id="contact" className="section bg-[#050508] relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#00ffcc]/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[120px]" />
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffcc]/10 border border-[#00ffcc]/20 mb-6"
                    >
                        <MessageSquare className="w-4 h-4 text-[#00ffcc]" />
                        <span className="text-sm text-[#00ffcc] font-medium">Get In Touch</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a question or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-[#ffd700]" />
                            Let's Connect
                        </h3>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            I'm currently looking for <span className="text-[#00ffcc]">internship opportunities</span> in
                            data engineering and analytics. Whether you have a question, a project idea, or just
                            want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-5 mb-10">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="flex items-center gap-5 p-5 glass-card group"
                                    >
                                        <div
                                            className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: item.bg }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: item.color }} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                                            <p className="text-white font-semibold">{item.value}</p>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#00ffcc] transition-colors" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 text-gray-400 p-4 rounded-xl bg-white/5 border border-white/5"
                        >
                            <MapPin className="w-5 h-5 text-[#8b5cf6]" />
                            <span className="text-sm font-medium">Open to Remote Opportunities Worldwide 🌍</span>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
                            <div className="space-y-7">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                                        Your Name
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-[#00ffcc]/50' : ''}`}>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffcc]/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                                        Email Address
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-[#00ffcc]/50' : ''}`}>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffcc]/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                                        Your Message
                                    </label>
                                    <div className={`relative rounded-xl transition-all duration-300 ${focusedField === 'message' ? 'ring-2 ring-[#00ffcc]/50' : ''}`}>
                                        <textarea
                                            id="message"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows={5}
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffcc]/50 transition-all resize-none"
                                            placeholder="Tell me about your project or just say hi..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-xl font-bold text-[#050508] flex items-center justify-center gap-3 transition-all duration-300 ${isSubmitted
                                            ? 'bg-green-500'
                                            : 'bg-gradient-to-r from-[#00ffcc] to-[#8b5cf6] hover:shadow-[0_0_30px_rgba(0,255,204,0.4)]'
                                        }`}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent Successfully!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
