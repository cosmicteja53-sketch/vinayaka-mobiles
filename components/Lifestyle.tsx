'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const BlockHeader = ({ label, title, subtext }: { label: string; title: string; subtext?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div className="text-center mb-16 md:mb-20" ref={ref}>
            <motion.p
                className="text-[#999999] text-[11px] tracking-[0.15em] uppercase font-medium mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                {label}
            </motion.p>
            <h2
                className="text-[#111111] leading-tight mb-6"
                style={{
                    fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                }}
            >
                {title.split('\n').map((line, i) => (
                    <motion.span
                        key={i}
                        className="block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                    >
                        {line}
                    </motion.span>
                ))}
            </h2>
            {subtext && (
                <motion.p
                    className="text-[#666666] text-sm font-medium tracking-wide max-w-[280px] mx-auto leading-relaxed opacity-80"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    {subtext}
                </motion.p>
            )}
        </div>
    );
};

export default function Lifestyle() {
    const watchRef = useRef(null);
    const audioRef = useRef(null);
    const frameRef = useRef(null);

    const watchInView = useInView(watchRef, { once: true, margin: '-100px' });
    const audioInView = useInView(audioRef, { once: true, margin: '-100px' });
    const frameInView = useInView(frameRef, { once: true, margin: '-100px' });

    return (
        <section className="bg-[#F5F0EB] py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <BlockHeader
                    label="BEYOND PHONES"
                    title={"Everything You\nNeed. All in\nOne Place."}
                    subtext="From premium audio to timeless watches and memories worth framing."
                />

                {/* BLOCK 1: Watches */}
                <div className="py-16 md:py-24 border-t border-[#E8E0D5]" ref={watchRef}>
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        {/* Left: Images */}
                        <div className="relative w-full md:w-[55%] h-[350px] md:h-[500px]">
                            <motion.div
                                className="absolute left-0 top-0 w-full h-[90%] z-10"
                                initial={{ opacity: 0, x: -40 }}
                                animate={watchInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/wristwatch.png"
                                    alt="Wrist Watch"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                            <motion.div
                                className="absolute right-0 bottom-0 w-[42%] h-[55%] z-20 shadow-xl"
                                initial={{ opacity: 0, x: -20 }}
                                animate={watchInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/wallclock.png"
                                    alt="Wall Clock"
                                    fill
                                    className="object-contain bg-[#F5F0EB]/90 backdrop-blur-sm"
                                />
                            </motion.div>
                        </div>

                        {/* Right: Text */}
                        <motion.div
                            className="w-full md:w-[45%] space-y-7"
                            initial={{ opacity: 0, x: 40 }}
                            animate={watchInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-[#999999] text-[11px] tracking-[0.15em] uppercase font-medium">TIMEPIECES</p>
                            <h3 className="text-[#111111] leading-none italic font-playfair text-5xl md:text-6xl">
                                Time.<br />Elevated.
                            </h3>
                            <p className="text-[#666666] text-[14px] leading-relaxed max-w-[280px]">
                                From classic Titan wrist watches to handcrafted wall clocks — every second tells your story. Style that never goes out of time.
                            </p>
                            <div className="pt-2">
                                <p className="text-[#111111] text-3xl font-playfair font-bold">20+</p>
                                <p className="text-[#999999] text-[10px] tracking-widest uppercase mt-1">Watch styles in store</p>
                            </div>
                            <a href="#contact" className="inline-block text-[#666666] text-xs font-bold tracking-[0.1em] uppercase border-b border-black/10 pb-1 hover:text-black transition-colors">
                                Explore Watches →
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* BLOCK 2: Audio */}
                <div className="py-16 md:py-24 border-t border-[#E8E0D5]" ref={audioRef}>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
                        {/* Left: Text */}
                        <motion.div
                            className="w-full md:w-[45%] space-y-7 text-right md:text-left flex flex-col items-center md:items-start"
                            initial={{ opacity: 0, x: -40 }}
                            animate={audioInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-[#999999] text-[11px] tracking-[0.15em] uppercase font-medium">AUDIO</p>
                            <h3 className="text-[#111111] leading-none italic font-playfair text-5xl md:text-6xl">
                                Sound.<br />Perfected.
                            </h3>
                            <p className="text-[#666666] text-[14px] leading-relaxed max-w-[280px]">
                                boAt earbuds to premium over-ear headsets — studio-grade audio for every mood. Feel every beat.
                            </p>
                            <div className="pt-2">
                                <p className="text-[#111111] text-3xl font-playfair font-bold">15+</p>
                                <p className="text-[#999999] text-[10px] tracking-widest uppercase mt-1">Audio accessories available</p>
                            </div>
                            <a href="#contact" className="inline-block text-[#666666] text-xs font-bold tracking-[0.1em] uppercase border-b border-black/10 pb-1 hover:text-black transition-colors">
                                Explore Audio →
                            </a>
                        </motion.div>

                        {/* Right: Images */}
                        <div className="relative w-full md:w-[55%] h-[350px] md:h-[500px]">
                            <motion.div
                                className="absolute right-0 top-0 w-full h-[90%] z-10"
                                initial={{ opacity: 0, x: 40 }}
                                animate={audioInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/headset.png"
                                    alt="Headset"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                            <motion.div
                                className="absolute left-0 bottom-0 w-[42%] h-[55%] z-20 shadow-xl"
                                initial={{ opacity: 0, x: 20 }}
                                animate={audioInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            >
                                <Image
                                    src="https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/boatearbuds.png"
                                    alt="boAt Earbuds"
                                    fill
                                    className="object-contain bg-[#F5F0EB]/90 backdrop-blur-sm"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* BLOCK 3: Frames Collage */}
                <div className="py-20 md:py-32 border-t border-[#E8E0D5]" ref={frameRef}>
                    <div className="text-center">
                        <motion.p
                            className="text-[#999999] text-[11px] tracking-[0.15em] uppercase font-medium mb-7"
                            initial={{ opacity: 0 }}
                            animate={frameInView ? { opacity: 1 } : {}}
                        >
                            MEMORIES
                        </motion.p>
                        <h3
                            className="text-[#111111] italic font-playfair leading-none mb-20 md:mb-24"
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
                        >
                            {"Frame Every Memory.".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block mr-[0.25em]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={frameInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h3>

                        {/* Editorial Collage Area */}
                        <div className="relative w-full max-w-[680px] mx-auto h-[280px] md:h-[400px] mb-12">

                            {/* Image 1: Love (Top Left) */}
                            <motion.div
                                className="absolute top-0 left-0 w-[62%] md:w-[58%] aspect-[4/5] z-[2]"
                                initial={{ opacity: 0, x: -40 }}
                                animate={frameInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                                style={{
                                    filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.12))",
                                }}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src="https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto/vinayaka-mobiles/lifestyle/love"
                                        alt="Memories Love"
                                        fill
                                        className="object-contain"
                                        style={{ transform: 'rotate(-2deg)' }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            {/* Decorative Accent Removed */}

                            {/* Image 2: Love2 (Bottom Right) */}
                            <motion.div
                                className="absolute bottom-0 right-0 w-[55%] md:w-[52%] aspect-[4/5] z-[1]"
                                initial={{ opacity: 0, x: 40 }}
                                animate={frameInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                                style={{
                                    filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.08))",
                                }}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                        src="https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto/vinayaka-mobiles/lifestyle/love2"
                                        alt="Memories Love 2"
                                        fill
                                        className="object-contain"
                                        style={{ transform: 'rotate(1.5deg)' }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                        </div>

                        {/* Text Group */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 w-full max-w-[680px] mx-auto px-4 mt-8">
                            <motion.p
                                className="text-[#666666] text-[12px] md:text-[13px] font-medium uppercase tracking-[0.14em] max-w-full md:max-w-[150px] leading-relaxed opacity-70 text-center md:text-left"
                                initial={{ opacity: 0, x: -20 }}
                                animate={frameInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Love frames, family portraits, wedding memories.
                            </motion.p>
                            <motion.p
                                className="text-[#666666] text-[12px] md:text-[13px] font-medium uppercase tracking-[0.14em] max-w-full md:max-w-[150px] leading-relaxed opacity-70 text-center md:text-right"
                                initial={{ opacity: 0, x: 20 }}
                                animate={frameInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Perfect for gifting, home décor, and much more.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
