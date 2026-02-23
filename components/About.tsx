'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const quote = "Kanipakam's most trusted mobile destination.".split(' ');

export default function About() {
    const ref = useRef(null);
    const infoRef = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const infoInView = useInView(infoRef, { once: true, margin: '-100px' });

    return (
        <section id="about" className="py-24 md:py-40 px-10 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
                    {/* Left */}
                    <div ref={ref}>
                        <p className="text-[#080808]/30 text-[11px] tracking-[0.4em] uppercase mb-8 font-bold">
                            Information
                        </p>
                        <h2
                            className="leading-tight font-black text-[#080808]"
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                fontFamily: "'Playfair Display', serif",
                            }}
                        >
                            {quote.map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block mr-[12px]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h2>
                        <motion.p
                            className="text-[#666666] text-lg leading-relaxed mt-12 max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            For over a decade, we have been the premier destination for technology in Kanipakam. Our commitment to authenticity and excellence remains unchanged.
                        </motion.p>
                    </div>

                    {/* Right */}
                    <motion.div
                        ref={infoRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={infoInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Address */}
                        <div className="border-l border-[#080808]/10 pl-10 group cursor-default">
                            <p className="text-[10px] tracking-[0.3em] uppercase text-[#080808]/40 mb-3 font-semibold group-hover:text-black transition-colors">Location</p>
                            <p className="text-[#080808] font-medium text-lg leading-relaxed">
                                Main Road, Near Kanipakam Temple,<br />
                                Kanipakam, Chittoor District,<br />
                                Andhra Pradesh — 517 131
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="border-l border-[#080808]/10 pl-10 group cursor-default">
                            <p className="text-[10px] tracking-[0.3em] uppercase text-[#080808]/40 mb-3 font-semibold group-hover:text-black transition-colors">Contact</p>
                            <a
                                href="tel:+919949537581"
                                className="text-[#080808] font-bold text-2xl hover:opacity-60 transition-opacity underline underline-offset-8 decoration-black/10 cursor-pointer"
                            >
                                +91 99495 37581
                            </a>
                        </div>

                        {/* Hours */}
                        <div className="border-l border-[#080808]/10 pl-10 group cursor-default">
                            <p className="text-[10px] tracking-[0.3em] uppercase text-[#080808]/40 mb-3 font-semibold group-hover:text-black transition-colors">Avalaible</p>
                            <p className="text-[#080808] font-medium text-lg">Mon – Sun / 9:00 AM – 9:00 PM</p>
                        </div>

                        {/* Payments */}
                        <div className="border-l border-[#080808]/10 pl-10">
                            <p className="text-[10px] tracking-[0.3em] uppercase text-[#080808]/40 mb-4 font-semibold">Payment</p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-60">
                                {['UPI', 'Visa/Mastercard', 'EMI Options', 'Cash'].map((m) => (
                                    <span key={m} className="text-xs uppercase tracking-tighter font-bold border-b border-black/20 pb-1">
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
