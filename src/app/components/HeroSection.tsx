// Add this line at the very top of the file
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[80vh] flex items-center overflow-hidden pt-[120px]"
    >
      <Image
        src="/arvcovertwo.png"
        alt="Futuristic Building"
        fill
        className="object-cover object-right opacity-90 pointer-events-none select-none"
        priority
        quality={100}
      />
      <div className="relative z-10 flex flex-col justify-center h-full pl-16 max-w-2xl">
        <span className="text-white text-lg font-medium mb-2">
         San Fernando, La Union
        </span>
        <h1 className="text-white text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
         Design and<br />
        
          Build
        </h1>
        <div className="flex gap-4">
          <Link href="/contacts">
            <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Get in touch
            </button>
          </Link>
          <button className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition">
            View Details
          </button>
        </div>
      </div>
    </motion.section>
  );
}