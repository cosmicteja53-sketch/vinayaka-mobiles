'use client';
import { motion } from 'framer-motion';

const stats = [
    { value: '500+', label: 'Customers' },
    { value: '5+', label: 'Years' },
    { value: '50+', label: 'Brands' },
];

export default function TrustBar() {
    return (
        <section className="bg-white py-8 border-b border-black/5">
            <div className="max-w-7xl mx-auto px-10 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="flex items-center gap-8 md:gap-24">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <span className="text-black font-black text-2xl md:text-3xl tracking-tighter">
                                    {stat.value}
                                </span>
                                <span className="text-[#888888] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] pt-1">
                                    {stat.label}
                                </span>
                            </motion.div>
                            {i < stats.length - 1 && (
                                <span className="hidden md:block text-black/10 text-xl font-light">·</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
