import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Products from '@/components/Products';
import Lifestyle from '@/components/Lifestyle';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { ScrollProgress, FooterSection } from '@/components/Global';

export default function Home() {
    return (
        <main className="relative">
            <ScrollProgress />
            <Navbar />
            <Hero />
            <TrustBar />
            <Products />
            <Lifestyle />
            <Services />
            <About />
            <Contact />
            <FooterSection />
        </main>
    );
}
