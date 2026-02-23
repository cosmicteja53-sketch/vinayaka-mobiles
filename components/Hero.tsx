'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Cormorant_Garamond, Bebas_Neue, Caveat, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant'
});

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas'
});

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-caveat'
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const slides = [
    {
        id: 'oppo',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/oppobrands.png',
        watermark: 'OPPO',
        badge: 'NEW ARRIVALS · 2025',
        headline: ['The Art', 'of Camera.'],
        caveat: 'crafted for every shot →',
        card: {
            title: 'OPPO SERIES',
            specs: ['AI Portrait Mode', '50MP Triple Cam', 'Zeiss Co-Engineered'],
            footer: '✦ Trending Now'
        }
    },
    {
        id: 'samsung',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/samsungbrand.png',
        watermark: 'GALAXY',
        badge: 'PICK',
        badgeLabel: "EDITOR'S",
        category: '● FLAGSHIP SERIES',
        headline: ['Galaxy,', 'Unleashed.'],
        headlineStyle: [{}, { WebkitTextStroke: '1px white', color: 'transparent' }],
        caveat: 'with S Pen & beyond →',
        pills: ['5G READY', 'S PEN INCLUDED'],
        card: {
            title: 'SAMSUNG GALAXY',
            specs: ['S Series · A Series', '200MP ProVisual', 'Gaming · AI Camera'],
            footer: '✦ Best Seller'
        }
    },
    {
        id: 'vivo',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/vivobrand.png',
        watermark: 'VIVO',
        badge: 'CRAFTED FOR THOSE WHO NOTICE THE DIFFERENCE',
        headline: ['Elegance,', 'Evolved.'],
        caveat: 'designed to be felt, not just seen →',
        card: {
            title: 'VIVO X SERIES',
            specs: ['ZEISS Optics', '120Hz AMOLED', 'Portrait Master'],
            footer: '✦ Most Loved'
        }
    },
    {
        id: 'accessories',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/h1.jpeg',
        headline: ['SOUND', 'LIFE'],
        label: '● NOW IN STORE',
        strip: [
            { item: 'Earbuds', price: '₹499' },
            { item: 'Neckbands', price: '₹799' },
            { item: 'Headsets', price: '₹999' },
            { item: 'Speakers', price: '₹599' }
        ]
    }
];

const SLIDE_DURATION = 5000;

export default function Hero() {
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

    const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

    return (
        <section className={`relative w-full h-screen overflow-hidden bg-black flex flex-col ${inter.variable} ${bebas.variable} ${cormorant.variable} ${caveat.variable} font-inter`}>
            {/* ── Background Layer ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-${current}`}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={slide.image}
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Unique Overlays */}
                    {slide.id === 'vivo' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent h-full" />
                    )}
                    {slide.id === 'accessories' && (
                        <div className="absolute inset-0 bg-black/20" />
                    )}
                    {slide.id !== 'vivo' && slide.id !== 'accessories' && (
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* ── Watermark Layer ── */}
            <AnimatePresence mode="wait">
                {slide.watermark && (
                    <motion.div
                        key={`watermark-${current}`}
                        className={`absolute inset-0 z-0 flex items-center justify-center pointer-events-none hidden md:flex ${slide.id === 'vivo' ? 'justify-start pl-0' : ''
                            }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {slide.id === 'oppo' && (
                            <span className="font-bebas text-[28vw] text-white/5 tracking-[-0.02em] select-none">
                                {slide.watermark}
                            </span>
                        )}
                        {slide.id === 'samsung' && (
                            <span className="absolute bottom-[-2rem] left-0 font-bebas text-[22vw] text-white/[0.03] select-none">
                                {slide.watermark}
                            </span>
                        )}
                        {slide.id === 'vivo' && (
                            <span
                                className="font-bebas text-[40vw] text-transparent select-none absolute left-[-2rem]"
                                style={{
                                    writingMode: 'vertical-rl',
                                    WebkitTextStroke: '1px rgba(0,0,0,0.08)'
                                }}
                            >
                                {slide.watermark}
                            </span>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Top Level Accents ── */}
            <div className="absolute top-28 left-0 right-0 z-20 px-10 md:px-20 flex justify-between items-start pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`top-accents-${current}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="w-full flex justify-between items-start"
                    >
                        {/* Left Side Label/Badge */}
                        <div className="flex flex-col gap-4">
                            {slide.id === 'oppo' && (
                                <div className="px-[14px] py-[6px] border border-white rounded-none bg-transparent">
                                    <span className="font-bebas text-[11px] text-white tracking-[0.2em] leading-none uppercase">
                                        {slide.badge}
                                    </span>
                                </div>
                            )}
                            {slide.id === 'samsung' && (
                                <div className="flex items-center gap-2">
                                    <span className="font-bebas text-[12px] text-white/80 tracking-[0.2em] uppercase">
                                        {slide.category}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Top Center Stamp (Vivo) */}
                        {slide.id === 'vivo' && (
                            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
                                <span className="font-inter text-[9px] text-black/50 tracking-[0.35em] uppercase whitespace-nowrap">
                                    {slide.badge}
                                </span>
                            </div>
                        )}

                        {/* Top Right Accents */}
                        {slide.id === 'samsung' && (
                            <motion.div
                                className="w-[80px] h-[80px] border border-white rounded-full flex flex-col items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            >
                                <span className="font-inter text-[8px] text-white tracking-[0.1em] mb-[-2px]">{slide.badgeLabel}</span>
                                <span className="font-bebas text-[18px] text-white">{slide.badge}</span>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 flex flex-col justify-end pb-20 md:pb-32 px-10 md:px-20 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`main-content-${current}`}
                        className="flex flex-col md:flex-row items-end justify-between w-full"
                    >
                        {/* Headline Group */}
                        <div className="flex flex-col items-start w-full md:w-auto">
                            {/* Slide 4 Special Label */}
                            {slide.id === 'accessories' && (
                                <motion.div
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="font-bebas text-[12px] text-white tracking-[0.2em] mb-4"
                                >
                                    {slide.label}
                                </motion.div>
                            )}

                            {/* Headline Lines */}
                            {slide.headline && (
                                <>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 60 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ delay: 0.4, duration: 0.5, ...transition }}
                                        className={`${slide.id === 'accessories' ? 'font-bebas' : 'font-cormorant italic font-[300]'} text-white leading-none ${slide.id === 'accessories' ? 'text-[clamp(5rem,14vw,13rem)]' : 'text-[clamp(3.5rem,9vw,8rem)]'
                                            }`}
                                    >
                                        {slide.headline[0]}
                                    </motion.h2>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 80 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -60 }}
                                        transition={{ delay: 0.55, duration: 0.6, ...transition }}
                                        className={`${slide.id === 'accessories' ? 'font-cormorant italic opacity-40' : 'font-cormorant italic font-[500]'} text-white leading-none ${slide.id === 'accessories' ? 'text-[clamp(5rem,14vw,13rem)]' : 'text-[clamp(4rem,11vw,10rem)]'
                                            }`}
                                        style={slide.id === 'samsung' ? (slide.headlineStyle as any)[1] : {}}
                                    >
                                        {slide.headline[1]}
                                    </motion.h2>
                                </>
                            )}

                            {/* Caveat Accent */}
                            {slide.caveat && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="font-caveat text-[1.1rem] text-white/60 mt-4"
                                    style={{ transform: 'rotate(-1deg)' }}
                                >
                                    {slide.caveat}
                                </motion.p>
                            )}

                            {/* Slide 2 Pills */}
                            {slide.pills && (
                                <motion.div
                                    className="flex gap-4 mt-8 hidden md:flex"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    {slide.pills.map((pill) => (
                                        <div key={pill} className="px-4 py-1.5 border border-white/40">
                                            <span className="font-inter text-[11px] text-white tracking-[0.1em] font-bold">{pill}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Right Side Info Card / Strip */}
                        <div className="mt-12 md:mt-0 w-full md:w-auto">
                            {slide.card && (
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ delay: 0.6, duration: 0.5, ...transition }}
                                    className="w-full md:w-[220px] bg-white/10 backdrop-blur-[20px] border border-white/20 p-5 rounded-none"
                                >
                                    <p className="font-bebas text-[13px] text-white tracking-[0.15em] mb-4">
                                        {slide.card.title}
                                    </p>
                                    <div className="w-full h-[1px] bg-white/30 mb-4" />
                                    <div className="space-y-1 mb-6">
                                        {slide.card.specs.slice(0, 3).map((spec, i) => (
                                            <p key={spec} className="font-inter text-[12px] text-white/80 leading-tight">
                                                {spec}
                                            </p>
                                        ))}
                                    </div>
                                    <p className="font-inter text-[11px] text-white/50 font-bold uppercase tracking-tight">
                                        {slide.card.footer}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Slide 4 Accessories Strip ── */}
            <AnimatePresence mode="wait">
                {slide.id === 'accessories' && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 z-20 h-[100px] md:h-[80px] bg-black/40 backdrop-blur-xl border-t border-white/10"
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <div className="h-full max-w-7xl mx-auto px-10 flex items-center justify-center">
                            <div className="grid grid-cols-2 md:flex md:flex-row items-center gap-6 md:gap-12 text-center">
                                {slide.strip?.map((item, i) => (
                                    <div key={item.item} className="flex flex-col md:flex-row items-center gap-0 md:gap-2">
                                        <div className="flex items-center">
                                            <span className="font-bebas text-[14px] text-white/90 tracking-[0.2em]">{item.item}</span>
                                            {i < (slide.strip?.length || 0) - 1 && (
                                                <span className="hidden md:block mx-6 text-white/20 font-light">|</span>
                                            )}
                                        </div>
                                        <span className="font-inter text-[9px] text-white/50 tracking-wide uppercase">From {item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Right Edge Vertical Text ── */}
            <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-10 z-20 hidden md:block">
                <span className="block font-inter text-[10px] text-white/20 tracking-[0.25em] whitespace-nowrap uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(0deg)' }}>
                    VINAYAKA MOBILES · KANIPAKAM · AP
                </span>
            </div>

            {/* ── Indicators & Progress (Bottom) ── */}
            <div className="absolute bottom-6 left-0 right-0 z-30 px-10 md:px-20 flex items-center justify-center gap-4">
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-[1.5]' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
                <span className="font-bebas text-[10px] text-white/60 tracking-widest mt-[1px]">
                    0{current + 1} / 0{slides.length}
                </span>
            </div>

            {/* ── Progress Bar Line ── */}
            <div className="absolute bottom-0 left-0 right-0 z-40 h-[1.5px] bg-white/10">
                <motion.div
                    key={`progress-${progressKey}`}
                    className="h-full bg-white/50"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
            </div>
        </section>
    );
}
