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
      <div className="relative z-10 flex flex-col justify-center h-full pl-4 pr-4 md:pl-16 max-w-2xl w-full items-start text-left">
        <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-3 drop-shadow">
          San Fernando, La Union
        </span>
        <h1 className="text-white font-extrabold leading-tight mb-3 drop-shadow-lg text-4xl sm:text-8xl md:text-10xl">
          Design and<br />
          Build
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-3xl font-medium mb-5 drop-shadow-lg">
          Transforming blueprints into reality.
        </p>
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 w-full md:w-auto items-center justify-start">
          <Link href="/contacts">
            <button className="bg-white text-gray-900 font-semibold px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full shadow hover:bg-gray-100 transition text-sm sm:text-base">
              Get in touch
            </button>
          </Link>
          <button className="border border-white text-white font-semibold px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full hover:bg-white hover:text-gray-900 transition text-sm sm:text-base">
            View Details
          </button>
        </div>
      </div>
    </motion.section>
  );
}