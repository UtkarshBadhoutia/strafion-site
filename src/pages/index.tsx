import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProduct from '@/components/FeaturedProduct';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className="bg-bg text-white">
      <Head><title>Strafion – Precision Keyboards</title></Head>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-slate-900 text-center px-4">
        <motion.img src="/logo.svg" alt="Strafion Logo" className="w-32 h-32 mb-6" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} />
        <h1 className="text-5xl font-display text-accent mb-4">STRAFION</h1>
        <p className="text-lg text-gray-400 max-w-lg">Custom mechanical keyboards that blend power, rarity, and unmatched precision.</p>
        <a href="/shop" className="mt-6 px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-black transition">Explore Now</a>
      </section>
      <FeaturedProduct />
      <section className="py-16 px-4">
        <h2 className="text-3xl font-display text-center text-accent mb-8">New Arrivals</h2>
        <ProductGrid />
      </section>
      <Footer />
    </div>
  );
}