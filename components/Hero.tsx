'use client';
import { useState, useEffect } from 'react';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (!mounted) {
        return (
            <div className="w-full h-screen bg-[#080808]" />
        );
    }

    return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
