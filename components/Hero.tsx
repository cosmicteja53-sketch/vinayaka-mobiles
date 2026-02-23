'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        label: 'FLAGSHIP',
        headline: 'Power.',
        headline2: 'Redefined.',
        subtext: 'The most powerful Android ever made.',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/Samsung%20Galaxy%20S24%20Ultra.png',
    },
    {
        id: 2,
        label: 'PORTRAIT',
        headline: 'Portrait.',
        headline2: 'Perfect.',
        subtext: '50MP front camera. Every moment flawless.',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/vivo%20v30.png',
    },
    {
        id: 3,
        label: 'DESIGN',
        headline: 'Bold.',
        headline2: 'Beautiful.',
        subtext: 'Slim. Powerful. Stunning.',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/oppo%20reno%2011.png',
    },
    {
        id: 4,
        label: 'AUDIO',
        headline: 'Pure Sound.',
        headline2: 'Zero Noise.',
        subtext: 'Studio-grade audio in your pocket.',
        image: 'https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/earbuds.png',
    },
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

    const touchStartX = useRef<number | null>(null);
    const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            goTo(diff > 0 ? (current + 1) % slides.length : (current - 1 + slides.length) % slides.length);
        }
        touchStartX.current = null;
    };

    const slide = slides[current];

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* ── Background Image Layer (Wallpaper) ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`img-${current}`}
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <Image
                        src={slide.image}
                        alt={slide.headline}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                </motion.div>
            </AnimatePresence>

            {/* ── Text Content (Center-left) ── */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-10 md:px-20 max-w-4xl pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`content-${current}`}
                        className="will-animate"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Label */}
                        <motion.p
                            className="text-white/60 text-xs tracking-[0.4em] uppercase font-medium mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {slide.label}
                        </motion.p>
                        {/* Headline */}
                        <motion.h1
                            className="text-white font-black leading-none mb-6"
                            style={{
                                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                                fontFamily: "'Playfair Display', serif",
                                lineHeight: 0.95,
                            }}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -60 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {slide.headline}
                            <br />
                            {slide.headline2}
                        </motion.h1>
                        {/* Subtext */}
                        <motion.p
                            className="text-white opacity-80 text-lg md:text-xl font-light max-w-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            {slide.subtext}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── Indicators & Progress (Bottom) ── */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center gap-6">
                {/* Indicators */}
                <div className="flex items-center gap-6">
                    <div className="flex gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-125' : 'bg-white/20'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <span className="text-white/40 text-[10px] tracking-[0.3em] font-light">
                        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* ── White Progress Bar at very bottom ── */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-[2px] bg-white/10">
                <motion.div
                    key={`progress-${progressKey}`}
                    className="h-full bg-white"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                />
            </div>
        </section>
    );
}
