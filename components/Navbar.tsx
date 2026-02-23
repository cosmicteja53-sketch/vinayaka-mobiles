'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['Products', 'Services', 'About', 'Contact'];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-6 left-6 right-6 z-50 transition-all duration-500 will-animate rounded-full ${scrolled
                        ? 'bg-black/70 backdrop-blur-lg border border-white/10 shadow-2xl'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-8 md:px-12 h-16 md:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex flex-col leading-none group text-white cursor-pointer transition-transform hover:scale-105 active:scale-95">
                        <div className="flex items-center gap-2">
                            <span
                                className="font-playfair text-xl md:text-2xl font-bold tracking-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                VM
                            </span>
                            <span className="text-[10px] md:text-xs font-light tracking-[0.2em] uppercase opacity-80">
                                Vinayaka Mobiles
                            </span>
                        </div>
                        <span className="text-white text-[9px] font-medium tracking-wider opacity-60 mt-0.5 ml-0.5" style={{ fontStyle: 'italic' }}>
                            వినాయక మొబైల్స్
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-white/70 text-[11px] font-bold tracking-[0.18em] uppercase hover:text-white transition-all duration-300 relative group cursor-pointer"
                            >
                                {link}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-400" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 transition-transform active:scale-90 cursor-pointer"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className="w-5 h-[1.5px] bg-white block" />
                        <span className="w-3 h-[1.5px] bg-white block self-end" />
                        <span className="w-5 h-[1.5px] bg-white block" />
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-[#080808] border-l border-white/5 flex flex-col p-12"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 35, stiffness: 350 }}
                        >
                            <button
                                className="self-end text-white/40 text-3xl mb-16 hover:text-white cursor-pointer"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                ✕
                            </button>
                            <div className="flex flex-col gap-10">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        className="text-white text-4xl tracking-tight font-playfair font-black"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 + 0.2 }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="mt-auto space-y-4 opacity-40">
                                <p className="text-white text-[10px] tracking-[0.4em] uppercase">Kanipakam, AP</p>
                                <p className="text-white text-[11px]">+91 99495 37581</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
