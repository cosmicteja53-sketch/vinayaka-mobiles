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
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-50px" });

    const filteredPhones = filter === 'All'
        ? phones
        : phones.filter(phone => phone.brand === filter);

    return (
        <section id="products" className="py-24 md:py-40 bg-white px-6 md:px-20 overflow-hidden font-inter">
            <div className="max-w-[1440px] mx-auto">
                {/* ── Section Header ── */}
                <header ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-32">
                    <div className="flex flex-col items-start translate-x-[-20px] opacity-0 animate-[fade-in-left_0.6s_ease-out_forwards]">
                        <motion.h2
                            initial={{ opacity: 0, x: -40 }}
                            animate={headerInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="font-cormorant italic font-[300] text-[#111] leading-[0.95]"
                            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
                        >
                            Find Your
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, x: -40 }}
                            animate={headerInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-cormorant italic font-[500] text-[#111] leading-[0.95]"
                            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
                        >
                            Perfect Phone.
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={headerInView ? { width: 60 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-[1px] bg-[#111] my-5 md:my-7"
                        />
                        <span className="text-[11px] font-bold tracking-[0.15em] text-[#999] uppercase">
                            Curated selection · Updated regularly
                        </span>
                    </div>

                    <div className="flex flex-col items-end opacity-20 pointer-events-none">
                        <span className="font-cormorant text-[5rem] md:text-[8rem] text-[#f0f0f0] leading-none -mb-4 font-[300]">
                            {phones.length}
                        </span>
                        <span className="text-[11px] text-[#999] uppercase tracking-[0.15em] font-medium mr-2">devices</span>
                    </div>
                </header>

                {/* ── Category Filter Bar ── */}
                <div className="mb-16 md:mb-24 relative overflow-x-auto no-scrollbar py-4 px-1 -mx-1">
                    <div className="flex items-center gap-8 md:gap-12 min-w-max pb-2">
                        {categories.map((cat) => {
                            const isActive = filter === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`relative text-[13px] tracking-[0.12em] uppercase transition-all duration-300 ${isActive ? 'text-[#111] font-bold' : 'text-[#999] hover:text-[#111]'
                                        }`}
                                >
                                    {cat}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -bottom-2 left-0 right-0 h-[2px]"
                                            style={{ background: 'var(--premium-gradient)' }}
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ── Product Grid ── */}
                <motion.div
                    layout
                    className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPhones.map((phone, index) => (
                            <motion.div
                                key={`${phone.brand}-${phone.model}`}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
                                className="group relative flex flex-col bg-white overflow-hidden rounded-[16px] transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] translated-shadow"
                                style={{
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)'
                                }}
                            >
                                {/* Bottom Accent Line (Hover Action) */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-400 z-20"
                                    style={{ background: 'var(--premium-gradient)' }} />

                                {/* Image Area */}
                                <div className="h-[170px] md:h-[200px] w-full bg-[#fafafa] relative p-6">
                                    <Image
                                        src={`https://res.cloudinary.com/dzuua38cd/image/upload/f_auto,q_auto/vinayaka-mobiles/${phone.image}.jpg`}
                                        alt={`${phone.brand} ${phone.model}`}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                        style={{ mixBlendMode: 'multiply' }}
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="p-5 md:p-6 pb-7">
                                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#999] uppercase">
                                        {phone.brand}
                                    </span>
                                    <h3 className="text-[14px] font-bold text-[#111] mt-1 mb-3 leading-tight">
                                        {phone.model}
                                    </h3>
                                    <p
                                        className="text-[18px] font-cormorant italic"
                                        style={{
                                            background: 'var(--premium-gradient)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        {phone.price}
                                    </p>
                                </div>

                                <style jsx>{`
                                    .translated-shadow:hover {
                                        transform: translateY(-8px);
                                        box-shadow: 0 20px 60px rgba(15, 52, 96, 0.12), 0 8px 24px rgba(83, 52, 131, 0.08);
                                    }
                                `}</style>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── Footer Note ── */}
                <div className="mt-20 md:mt-32">
                    <div className="w-full h-[1px] bg-[#f0f0f0] mb-12" />
                    <p className="text-center text-[11px] font-bold tracking-[0.1em] text-[#bbb] uppercase">
                        Prices vary · Visit store for availability
                    </p>
                </div>
            </div>

        </section>
    );
}
