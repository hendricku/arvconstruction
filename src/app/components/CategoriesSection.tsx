"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import categories from "../data/categories";

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function CategoriesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto mt-16 px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text content and three images below */}
        <div className="flex flex-col justify-center h-full gap-4 md:max-w-xl w-full">
          <span className="text-emerald-500 font-semibold text-sm flex items-center gap-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#10B981" /></svg>
            Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-2 break-words">
            Explore best properties&nbsp;
            <span className="whitespace-nowrap">with expert services.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-4">
           lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum loremm
          </p>
          <Link href="/properties">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full w-fit transition mb-4">
              View Properties
            </button>
          </Link>
          {/* Three small images below the button */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                href={`/categories/${categories[i].slug}`}
                aria-label={`View details for ${categories[i].title}`}
                className="group"
                tabIndex={0}
              >
                <motion.div
                  className="rounded-2xl overflow-hidden h-44 md:h-48 group relative cursor-pointer"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 0 4px #10B98133' }}
                  whileFocus={{ scale: 1.05, boxShadow: '0 0 0 4px #10B98133' }}
                >
                  <Image src={categories[i].img} alt={categories[i].title} width={200} height={200} className="w-full h-full object-cover" />
                  {/* Tap indicator for mobile/tablet */}
                  <div className="absolute bottom-2 right-2 sm:flex lg:hidden items-center gap-1 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded-full shadow-md pointer-events-none select-none animate-bounce">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m0 0l-5 5m5-5l5 5" /></svg>
                    Tap to view
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-neutral-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <span className="bg-white/80 hover:bg-white text-gray-900 hover:text-gray-900 rounded-full p-2 shadow transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                    <div>
                      <div className="text-grey text-lg font-semibold mb-1 drop-shadow">{categories[i].title}</div>
                      <div className="text-grey text-sm drop-shadow max-w-xs">{categories[i].desc}</div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        {/* Right: Large image, vertically centered */}
        <Link
          href={`/categories/${categories[0].slug}`}
          aria-label={`View details for ${categories[0].title}`}
          className="group"
        >
          <motion.div
            className="flex items-center justify-center w-full h-full group relative cursor-pointer"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 0 6px #10B98133' }}
            whileFocus={{ scale: 1.03, boxShadow: '0 0 0 6px #10B98133' }}
          >
            <div className="rounded-2xl overflow-hidden w-full h-56 md:h-96 lg:h-[420px] group relative">
              <Image src={categories[0].img} alt={categories[0].title} width={600} height={400} className="w-full h-full object-cover" />
              {/* Tap indicator for mobile/tablet */}
              <div className="absolute bottom-2 right-2 sm:flex lg:hidden items-center gap-1 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded-full shadow-md pointer-events-none select-none animate-bounce">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m0 0l-5 5m5-5l5 5" /></svg>
                Tap to view
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-neutral-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="bg-white/80 hover:bg-white text-gray-900 hover:text-gray-900 rounded-full p-2 shadow transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
                <div>
                  <div className="text-grey text-xl font-semibold mb-1 drop-shadow">{categories[0].title}</div>
                  <div className="text-grey text-sm drop-shadow max-w-xs">{categories[0].desc}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
} 