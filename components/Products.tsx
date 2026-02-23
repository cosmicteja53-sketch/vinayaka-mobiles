'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

const phones = [
    // Samsung
    { brand: "Samsung", model: "Galaxy S25 FE", image: "samsung-galaxy-s25-fe", price: "₹34,999" },
    { brand: "Samsung", model: "Galaxy S24", image: "s24", price: "₹74,999" },
    { brand: "Samsung", model: "Galaxy A17 5G", image: "samsung-galaxy-a17-5g", price: "₹15,999" },
    { brand: "Samsung", model: "Galaxy A17", image: "samsung-galaxy-a17", price: "₹12,999" },
    { brand: "Samsung", model: "Galaxy A07 5G", image: "samsung-galaxy-a07-5g", price: "₹11,999" },
    // OPPO
    { brand: "OPPO", model: "Reno 15 Pro", image: "oppo-reno15-pro", price: "₹39,999" },
    { brand: "OPPO", model: "K13x 5G", image: "oppo-k13x-5g", price: "₹14,999" },
    { brand: "OPPO", model: "F31 Pro", image: "oppo-f31-pro", price: "₹22,999" },
    { brand: "OPPO", model: "A6t", image: "oppo-a6t-", price: "₹10,999" },
    // Vivo
    { brand: "Vivo", model: "Y500 Pro", image: "vivo-y500-pro", price: "₹24,999" },
    { brand: "Vivo", model: "Y31 Pro", image: "vivo-y31-pro", price: "₹16,999" },
    { brand: "Vivo", model: "T4 Pro", image: "vivo-t4-pro", price: "₹29,999" },
    { brand: "Vivo", model: "iQOO Z10R", image: "vivo-iqoo-z10r-", price: "₹18,999" },
    // Tecno
    { brand: "Tecno", model: "Spark Go 2", image: "tecno-spark-go2", price: "₹7,999" },
    { brand: "Tecno", model: "Pova 7 5G", image: "tecno-pova7-5g", price: "₹13,999" },
    { brand: "Tecno", model: "Camon 50 Pro 4G", image: "tecno-camon-50-pro-4g", price: "₹17,999" },
];

const categories = ['All', 'Samsung', 'OPPO', 'Vivo', 'Tecno'];

export default function Products() {
    const [filter, setFilter] = useState('All');
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

    const filteredPhones = filter === 'All'
        ? phones
        : phones.filter(phone => phone.brand === filter);

    return (
        <section id="products" className="py-20 md:py-32 bg-white px-4 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-20" ref={titleRef}>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[#999] text-[11px] tracking-[0.4em] uppercase font-bold">Our Collection</span>
                        <div className="relative">
                            <span className="text-[#080808] text-[10px] font-bold tracking-wider opacity-60 px-2 py-0.5 border border-black/10">15 DEVICES</span>
                            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#FFD700]" />
                        </div>
                    </div>

                    <h2
                        className="text-[#080808] font-black leading-none mb-10 md:mb-16"
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: '-0.04em'
                        }}
                    >
                        {"Find Your Perfect Phone".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                className="inline-block mr-[0.2em]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>

                    {/* Category Filter Bar */}
                    <div className="relative -mx-4 md:mx-0">
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />

                        <div
                            className="flex items-center gap-3 overflow-x-auto no-scrollbar md:justify-center px-4 md:px-0 scroll-smooth"
                            style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`flex-shrink-0 px-6 py-2 text-[13px] font-bold tracking-[0.1em] uppercase transition-all duration-300 border ${filter === cat
                                        ? 'bg-black text-white border-black'
                                        : 'bg-transparent text-black border-[#e5e5e5] hover:border-black'
                                        }`}
                                    style={{ borderRadius: 0, whiteSpace: 'nowrap' }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#f0f0f0] border border-[#f0f0f0]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPhones.map((phone, index) => (
                            <motion.div
                                layout
                                key={`${phone.brand}-${phone.model}`}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{
                                    duration: 0.4,
                                    delay: (index % 10) * 0.05,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.10)",
                                    zIndex: 20
                                }}
                                className="group bg-white flex flex-col will-animate relative transition-all duration-300 border border-transparent hover:border-[#f0f0f0]"
                            >
                                {/* Phone Image Container */}
                                <div className="h-[220px] md:h-[280px] w-full relative bg-white overflow-hidden p-6 md:p-10">
                                    <Image
                                        src={`https://res.cloudinary.com/dzuua38cd/image/upload/vinayaka-mobiles/${phone.image}.jpg`}
                                        alt={`${phone.brand} ${phone.model}`}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-110"
                                        style={{ mixBlendMode: 'multiply' }}
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between bg-white">
                                    <div>
                                        <span className="block text-[11px] text-[#999] font-bold tracking-[0.12em] uppercase mb-1.5">
                                            {phone.brand}
                                        </span>
                                        <h3 className="text-[#080808] text-[14px] md:text-[15px] font-semibold leading-tight mb-2">
                                            {phone.model}
                                        </h3>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <p className="text-[#080808] text-[14px] md:text-[16px] font-bold">
                                            {phone.price}
                                        </p>
                                        <span className="text-[10px] text-[#888888] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden md:block tracking-tighter">
                                            Visit store →
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Note at bottom */}
                <div className="mt-16 text-center">
                    <p className="text-[#888888] text-[10px] italic font-medium opacity-50">
                        "Prices shown are approximate. Visit store for exact pricing and availability."
                    </p>
                </div>
            </div>

            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
