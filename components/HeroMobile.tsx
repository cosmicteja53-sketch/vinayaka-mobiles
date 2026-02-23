'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Cormorant_Garamond, Bebas_Neue, Caveat, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant',
    display: 'swap'
});

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
    display: 'swap'
});

const caveatFont = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-caveat',
    display: 'swap'
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const slides = [
    {
        id: 'oppo',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto,w_1080/vinayaka-mobiles/hero/mobile/oppobrands-mobile',
        label: '● OPPO',
        headline: ['The Art', 'of Camera.'],
        subtext: 'AI-enhanced portraits with Zeiss.',
        caveat: 'crafted for every shot →',
        specs: ['AI Portrait', '50MP Cam', 'Zeiss Lens'],
        badge: '✦ TRENDING'
    },
    {
        id: 'samsung',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto,w_1080/vinayaka-mobiles/hero/mobile/samsungbrand-mobile',
        label: '● SAMSUNG',
        headline: ['Galaxy,', 'Unleashed.'],
        subtext: 'Flagship power. S Pen precision.',
        caveat: 'with S Pen & beyond →',
        specs: ['S Series', 'S Pen', '200MP'],
        badge: '✦ BEST SELLER'
    },
    {
        id: 'vivo',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto,w_1080/vinayaka-mobiles/hero/mobile/vivobrand-mobile',
        label: '● VIVO',
        headline: ['Elegance,', 'Evolved.'],
        subtext: 'ZEISS optics. 120Hz AMOLED.',
        caveat: 'designed to be felt →',
        specs: ['ZEISS', '120Hz', 'Portrait'],
        badge: '✦ MOST LOVED'
    },
    {
        id: 'accessories',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto,w_1080/vinayaka-mobiles/hero/mobile/h1-mobile',
        label: '● NOW IN STORE',
        headline: ['Sound.', 'Perfected.'],
        subtext: 'Earbuds to headsets. All top brands.',
        strip: [
            { l: 'Earbuds', p: '₹499' },
            { l: 'Neckbands', p: '₹799' },
            { l: 'Headsets', p: '₹999' },
            { l: 'Speakers', p: '₹599' }
        ]
    }
];

const SLIDE_DURATION = 5000;

export default function HeroMobile() {
    const [current, setCurrent] = useState(0);
    const [progressKey, setProgressKey] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
            setProgressKey((k) => k + 1);
        }, SLIDE_DURATION);
    }, []);

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoPlay]);

    const goTo = (index: number) => {
        setCurrent(index);
        setProgressKey((k) => k + 1);
        startAutoPlay();
    };

    const slide = slides[current];

    return (
        <section className={`relative w-full h-[100svh] overflow-hidden bg-[#080808] ${inter.variable} ${bebas.variable} ${cormorant.variable} ${caveatFont.variable} font-inter`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={`mobile-slide-${current}`}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slide.image}
                            alt="Mobile Hero"
                            fill
                            className="object-cover object-center"
                            priority={current === 0}
                            sizes="100vw"
                        />
                    </motion.div>

                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-20 h-full w-full pointer-events-none">
                        {/* TOP LABEL */}
                        <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.75 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute top-[80px] left-[20px]"
                        >
                            <span className="font-bebas text-[11px] tracking-[0.2em] text-white brightness-125">
                                {slide.label}
                            </span>
                        </motion.div>

                        {/* BOTTOM CONTENT */}
                        <div className="absolute bottom-[90px] left-[20px] max-w-[78vw]">
                            <motion.h2
                                initial={{ y: 25, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="font-cormorant italic text-[clamp(2.5rem,8vw,3.2rem)] text-white leading-[1.0]"
                            >
                                {slide.headline[0]}
                            </motion.h2>
                            <motion.h2
                                initial={{ y: 25, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className={`font-cormorant italic text-[clamp(2.5rem,8vw,3.2rem)] text-white leading-[1.0] ${slide.id === 'samsung' ? 'outline-text-mobile' : ''}`}
                                style={slide.id === 'samsung' ? { WebkitTextStroke: '1px white', color: 'transparent' } : {}}
                            >
                                {slide.headline[1]}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.65 }}
                                transition={{ delay: 0.65, duration: 0.5 }}
                                className="font-inter text-[12px] text-white mt-[10px] max-w-[72vw]"
                            >
                                {slide.subtext}
                            </motion.p>

                            {slide.caveat && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="font-caveat text-[0.9rem] text-white mt-[8px] -rotate-[1deg]"
                                >
                                    {slide.caveat}
                                </motion.p>
                            )}
                        </div>

                        {/* RIGHT SIDE SPEC (Hide on tiny screens) */}
                        {slide.specs && (
                            <div className="absolute bottom-[90px] right-[16px] w-[90px] hidden min-[380px]:block">
                                <div className="h-[1px] w-full bg-white/20" />
                                <div className="py-2 space-y-1">
                                    {slide.specs.map((s, i) => (
                                        <motion.p
                                            key={s}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.7 + i * 0.1 }}
                                            className="font-inter text-[10px] text-white font-medium"
                                        >
                                            {s}
                                        </motion.p>
                                    ))}
                                </div>
                                <div className="h-[1px] w-full bg-white/10" />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="block font-inter text-[9px] font-bold tracking-[0.1em] text-white/50 pt-2 uppercase"
                                >
                                    {slide.badge}
                                </motion.span>
                            </div>
                        )}

                        {/* ACCESSORIES STRIP */}
                        {slide.id === 'accessories' && (
                            <motion.div
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="absolute bottom-0 w-full bg-black/45 backdrop-blur-md border-t border-white/10 p-[14px_20px] grid grid-cols-2 gap-[6px_0] z-10"
                            >
                                {slide.strip?.map((item) => (
                                    <div key={item.l}>
                                        <p className="font-bebas text-[12px] tracking-[0.1em] text-white">{item.l}</p>
                                        <p className="font-inter text-[9px] text-white/45 uppercase leading-none mt-0.5">From {item.p}</p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* SHARED UI Elements */}
            <div className={`absolute left-0 right-0 z-[40] flex items-center justify-center gap-4 transition-all duration-300 ${current === 3 ? 'bottom-[90px]' : 'bottom-[40px]'}`}>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-[1.5]' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
                <span className="font-bebas text-[12px] text-white/60 tracking-widest mt-[2px]">
                    0{current + 1} / 0{slides.length}
                </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-[50] h-[2px] bg-white/10">
                <motion.div
                    key={`progress-mobile-${progressKey}`}
                    className="h-full bg-white/40"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
            </div>

            <style jsx global>{`
                .outline-text-mobile {
                    -webkit-text-stroke: 1px white;
                    color: transparent;
                }
            `}</style>
        </section>
    );
}
