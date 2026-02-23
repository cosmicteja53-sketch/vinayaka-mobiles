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
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/hero/oppobrands',
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
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/hero/samsungbrand',
        badge: 'BEST SELLER',
        category: '● FLAGSHIP SERIES',
        headline: ['Galaxy,', 'Unleashed.'],
        caveat: 'with S Pen & beyond →',
        card: {
            title: 'SAMSUNG GALAXY',
            specs: ['S Series · A Series', '200MP ProVisual', 'Gaming · AI Camera'],
            footer: '✦ Pick of the Month'
        }
    },
    {
        id: 'vivo',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/hero/vivobrand',
        badge: 'CRAFTED FOR THOSE WHO NOTICE',
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
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/hero/h1',
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

export default function HeroDesktop() {
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
        <section className={`relative w-full h-screen overflow-hidden bg-[#080808] flex flex-col ${inter.variable} ${bebas.variable} ${cormorant.variable} ${caveatFont.variable} font-inter`}>
            {/* ── Background Layer ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-desktop-${current}`}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={`${slide.image.replace('/upload/', '/upload/f_auto,q_auto,w_1920/')}`}
                        alt="Hero background"
                        fill
                        className="object-cover object-center"
                        priority={current === 0}
                        sizes="100vw"
                    />
                    {/* Unique Overlays */}
                    {slide.id === 'vivo' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent h-full" />
                    )}
                    {slide.id === 'accessories' && (
                        <div className="absolute inset-0 bg-black/20" />
                    )}
                    {slide.id !== 'vivo' && slide.id !== 'accessories' && (
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* ── Top Level Accents ── */}
            <div className="absolute top-28 left-20 right-20 z-20 flex justify-between items-start pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`top-accents-desktop-${current}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="w-full flex justify-between items-start"
                    >
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

                        {slide.id === 'vivo' && (
                            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
                                <span className="font-inter text-[9px] text-black/50 tracking-[0.35em] uppercase whitespace-nowrap">
                                    {slide.badge}
                                </span>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Main Content Area ── */}
            <div className="flex-1 relative z-10 flex flex-col justify-end pb-32 px-20 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`main-content-desktop-${current}`}
                        className="flex flex-row items-end justify-between w-full"
                    >
                        <div className="flex flex-col items-start w-auto max-w-[50vw]">
                            {slide.id === 'accessories' && (
                                <motion.div
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="font-bebas text-[12px] text-white tracking-[0.2em] mb-4"
                                >
                                    {slide.label}
                                </motion.div>
                            )}

                            {slide.headline && (
                                <>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 60 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -40 }}
                                        transition={{ ...transition, delay: 0.4, duration: 0.5 }}
                                        className={`${slide.id === 'accessories' ? 'font-bebas text-[clamp(4rem,8vw,8rem)]' : 'font-cormorant italic font-[300] text-[clamp(3.5rem,7vw,7rem)]'} text-white leading-tight`}
                                    >
                                        {slide.headline[0]}
                                    </motion.h2>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 80 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -60 }}
                                        transition={{ ...transition, delay: 0.55, duration: 0.6 }}
                                        className={`${slide.id === 'accessories' ? 'font-cormorant italic opacity-35 text-[clamp(4rem,8vw,8rem)]' : 'font-cormorant italic font-[500] text-[clamp(3.5rem,7vw,7rem)]'} text-white leading-tight`}
                                        style={slide.id === 'samsung' ? { WebkitTextStroke: '1.5px white', color: 'transparent' } : {}}
                                    >
                                        {slide.headline[1]}{slide.id === 'accessories' ? '.' : ''}
                                    </motion.h2>
                                </>
                            )}

                            {slide.caveat && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="font-caveat text-[1.2rem] text-white/60 mt-6"
                                    style={{ transform: 'rotate(-1deg)' }}
                                >
                                    {slide.caveat}
                                </motion.p>
                            )}
                        </div>

                        <div className="w-auto flex justify-end">
                            {slide.card && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-[180px]"
                                >
                                    <div className={`h-[1px] w-full ${slide.id === 'vivo' ? 'bg-black/20' : 'bg-white/30'}`} />
                                    <p className={`font-bebas text-[11px] tracking-[0.25em] mt-2.5 ${slide.id === 'vivo' ? 'text-black/70' : 'text-white'}`}>
                                        {slide.card.title}
                                    </p>
                                    <div className={`h-[1px] w-full my-2.5 ${slide.id === 'vivo' ? 'bg-black/10' : 'bg-white/15'}`} />
                                    <div className="space-y-0">
                                        {slide.card.specs.map((spec) => (
                                            <p key={spec} className={`font-inter text-[11px] tracking-[0.05em] leading-[2] ${slide.id === 'vivo' ? 'text-black/45' : 'text-white/60'}`}>
                                                {spec}
                                            </p>
                                        ))}
                                    </div>
                                    <div className={`h-[1px] w-full mt-2.5 ${slide.id === 'vivo' ? 'bg-black/20' : 'bg-white/30'}`} />
                                    <p className={`font-inter text-[9px] tracking-[0.2em] mt-2.5 uppercase ${slide.id === 'vivo' ? 'text-black/25' : 'text-white/35'}`}>
                                        {slide.card.footer}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {slide.id === 'accessories' && (
                <div className="absolute bottom-0 left-0 right-0 z-20 h-[70px] bg-black/40 backdrop-blur-xl border-t border-white/10 flex items-center justify-center">
                    <div className="flex flex-row items-center gap-10 whitespace-nowrap overflow-hidden px-10">
                        {slide.strip?.map((item, i) => (
                            <div key={item.item} className="flex flex-row items-center gap-2">
                                <span className="font-bebas text-[12px] text-white/90 tracking-[0.2em]">{item.item}</span>
                                <span className="text-[10px] text-white/20 px-2">|</span>
                                <span className="font-inter text-[9px] text-white/50 tracking-wide uppercase">From {item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="absolute top-1/2 -translate-y-1/2 right-10 z-20 opacity-20">
                <span className="block font-inter text-[10px] text-white tracking-[0.25em] whitespace-nowrap uppercase" style={{ writingMode: 'vertical-rl' }}>
                    VINAYAKA MOBILES · KANIPAKAM · AP
                </span>
            </div>

            {/* Indicators & Progress */}
            <div className={`absolute left-0 right-0 z-40 px-6 flex items-center justify-center gap-4 bottom-12 transition-all duration-300`}>
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

            <div className="absolute bottom-0 left-0 right-0 z-50 h-[2px] bg-white/10">
                <motion.div
                    key={`progress-${progressKey}`}
                    className="h-full bg-white/40"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
            </div>
        </section>
    );
}
