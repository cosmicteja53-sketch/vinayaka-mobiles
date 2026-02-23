'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Scroll Progress Bar
 */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-[#080808] z-[100] origin-left"
            style={{ scaleX }}
        />
    );
}

/**
 * Custom Lag Cursor
 * REMOVED AS PER USER REQUEST
 */
export function CustomCursor() {
    return null;
}

/**
 * Enhanced Footer with 3-Column Layout
 */
export function FooterSection() {
    return (
        <footer className="py-12 bg-[#080808] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                    {/* Left: Nav Links */}
                    <div className="order-2 md:order-1 flex justify-center md:justify-start">
                        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
                            {['PRODUCTS', 'SERVICES', 'ABOUT', 'CONTACT'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-white/40 text-[10px] tracking-[0.15em] font-bold hover:text-white transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Center: Branding */}
                    <div className="order-1 md:order-2 text-center">
                        <motion.p
                            className="text-white opacity-50 text-xl italic font-playfair mb-3"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.5 }}
                            transition={{ duration: 1 }}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            వినాయక మొబైల్స్
                        </motion.p>
                        <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase font-bold">
                            © 2026 VINAYAKA MOBILES · KANIPAKAM
                        </p>
                    </div>

                    {/* Right: Location */}
                    <div className="order-3 text-center md:text-right">
                        <p className="text-white/30 text-[10px] tracking-[0.1em] font-medium">
                            Kanipakam, Andhra Pradesh
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
