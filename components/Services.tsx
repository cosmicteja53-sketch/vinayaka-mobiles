'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
    {
        num: '01',
        icon: '📱',
        title: 'Mobile Sales',
        desc: 'Latest smartphones from top brands — Samsung, Vivo, OPPO, Realme and more. Always in stock, always authentic.',
    },
    {
        num: '02',
        icon: '🔧',
        title: 'Repair & Service',
        desc: 'Screen, battery, software — we fix it all, same day. Certified technicians, genuine spare parts.',
    },
    {
        num: '03',
        icon: '🎧',
        title: 'Accessories',
        desc: 'Cases, earbuds, chargers, screen protectors and more. Premium accessories at honest prices.',
    },
];

function ServiceBlock({ service, index }: { service: any; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative pt-12 pb-14 border-t border-[#d4d4d4] cursor-default will-animate px-6"
        >
            <span
                className="absolute -top-4 right-6 font-black select-none pointer-events-none transition-colors duration-400 opacity-10 group-hover:opacity-20"
                style={{
                    fontSize: 'clamp(6rem, 12vw, 9rem)',
                    fontFamily: "'Playfair Display', serif",
                    color: '#080808',
                    lineHeight: 1,
                }}
            >
                {service.num}
            </span>

            <motion.div
                className="relative z-10 will-animate"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.4 }}
            >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3
                    className="text-[#080808] text-3xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {service.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed max-w-sm">{service.desc}</p>
            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-24 md:py-36 px-10 md:px-20 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20" ref={titleRef}>
                    <p className="text-[#080808]/40 text-[11px] tracking-[0.4em] uppercase mb-4 font-bold">
                        Services
                    </p>
                    <h2
                        className="text-[#080808] text-5xl md:text-7xl font-black leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {"We've Got You Covered.".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                className={`inline-block mr-[0.25em] ${word === 'Covered.' ? 'italic font-normal' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {services.map((s, i) => (
                        <ServiceBlock key={s.num} service={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
