'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="py-32 md:py-48 px-10 md:px-20 bg-[#080808]">
            <div className="max-w-5xl mx-auto text-center" ref={ref}>
                <motion.p
                    className="text-white/30 text-xs tracking-[0.5em] uppercase mb-10"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.p>

                <h2
                    className="text-white font-black leading-none mb-20 md:mb-24"
                    style={{
                        fontSize: 'clamp(3.5rem, 12vw, 10rem)',
                        fontFamily: "'Playfair Display', serif",
                    }}
                >
                    {"Get in Touch.".split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-[0.2em]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br />
                    <motion.span
                        className="italic font-normal opacity-40 inline-block"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Touch.
                    </motion.span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16 px-6">
                    <motion.a
                        href="tel:+919949537581"
                        className="w-full md:w-auto px-12 py-6 bg-white text-[#080808] text-[13px] font-black tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-400 flex items-center justify-center gap-3 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Call to Connect
                    </motion.a>
                    <motion.a
                        href="https://wa.me/919949537581"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto px-12 py-6 border border-white/20 text-white text-[13px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-400 flex items-center justify-center gap-3 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        WhatsApp Message
                    </motion.a>
                </div>

                {/* Store Details Section */}
                <motion.div
                    className="relative flex flex-col items-center gap-12 pt-20"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    {/* Watermark/Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10 select-none pointer-events-none overflow-hidden">
                        <span
                            className="text-white opacity-[0.08] font-playfair italic whitespace-nowrap"
                            style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}
                        >
                            Visit Us Today.
                        </span>
                    </div>

                    {/* Divider line */}
                    <div className="w-16 h-px bg-white/10" />

                    {/* Address, Phone, Hours */}
                    <div className="space-y-4 relative z-10">
                        <p className="text-white opacity-[0.55] text-[13px] tracking-[0.06em] leading-relaxed max-w-md mx-auto">
                            72HP+26M, Kanipakam Rd, Kanipakam, AP 517131
                        </p>
                        <p className="text-white opacity-[0.55] text-[13px] tracking-[0.06em]">
                            +91 99495 37581 &nbsp;·&nbsp; Open Daily &nbsp;·&nbsp; Closes 9 PM
                        </p>
                    </div>

                    {/* Payments */}
                    <p className="text-white opacity-30 text-[11px] tracking-[0.12em] uppercase relative z-10">
                        Accepted Payments: &nbsp;Credit Card · Debit Card · UPI · NFC
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
