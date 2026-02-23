'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        num: '01',
        title: 'Mobile Sales',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/services/mobile-sales',
        desc: 'Latest smartphones from Samsung, OPPO, Vivo, Tecno and more. Always in stock, always authentic.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <path d="M12 18h.01" />
            </svg>
        )
    },
    {
        num: '02',
        title: 'Repair & Service',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/services/repair-service',
        desc: 'Screen, battery, software — we fix it all, same day. Certified technicians, genuine parts.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
            </svg>
        )
    },
    {
        num: '03',
        title: 'Accessories',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/services/accessories',
        desc: 'Cases, earbuds, chargers and more. Premium accessories at honest prices. All top brands available.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M3 18v-8a9 9 0 0 1 18 0v8" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        )
    },
];

function ServiceBlock({ service, index }: { service: any; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-20px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover="hover"
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="group relative bg-[#ffffff] overflow-hidden cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-all duration-300"
            style={{ borderRadius: 0 }}
        >
            {/* TOP — Small image area (220px) */}
            <div className="relative h-[220px] w-full overflow-hidden">
                <motion.div
                    className="relative w-full h-full"
                    variants={{
                        hover: { scale: 1.04 }
                    }}
                    transition={{ duration: 6, ease: "easeOut" }}
                >
                    <Image
                        src={`${service.image.replace('/upload/', '/upload/f_auto,q_auto/')}`}
                        alt={service.title}
                        fill
                        className="object-cover filter saturate-[0.85]"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </motion.div>
            </div>

            {/* MIDDLE — Thin accent line */}
            <motion.div
                className="h-[2px] bg-[#111] mt-6 mb-5 ml-6"
                initial={{ width: 40 }}
                variants={{
                    hover: { width: 80 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* BOTTOM — Content area */}
            <div className="px-6 pb-8 relative z-20">
                {/* Small label */}
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#999] mb-2.5">
                    Service {service.num}
                </p>

                {/* Service Name */}
                <h3 className="text-[#111] text-[1.6rem] font-medium italic font-cormorant leading-tight mb-3">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#666] text-[13px] font-inter leading-[1.75] max-w-[260px]">
                    {service.desc}
                </p>

                {/* Bottom link */}
                <div className="mt-5 inline-block border-b border-[#111] pb-0.5 group-hover:border-b-2 transition-all">
                    <span className="font-inter text-[11px] font-bold text-[#111] tracking-[0.1em]">
                        Learn more →
                    </span>
                </div>
            </div>

            {/* Faded Number Background */}
            <span
                className="absolute bottom-[-10px] right-[16px] font-bebas text-[7rem] leading-none text-black/[0.04] select-none z-10 pointer-events-none"
            >
                {service.num}
            </span>
        </motion.div>
    );
}

export default function Services() {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    return (
        <section id="services" className="py-24 md:py-36 px-6 md:px-20 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-20" ref={titleRef}>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <ServiceBlock key={s.num} service={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
