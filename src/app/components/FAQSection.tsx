"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does your design and build company offer?",
    answer:
      "We provide end-to-end solutions including architectural design, engineering, project management, and construction for residential, commercial, and institutional projects.",
  },
  {
    question: "How does the design and build process work?",
    answer:
      "Our process starts with a consultation to understand your needs, followed by design development, budgeting, permitting, and then construction. We manage every step to ensure a seamless experience.",
  },
  {
    question: "Can I make changes to the design during construction?",
    answer:
      "Yes, we encourage client collaboration. Minor changes can often be accommodated during construction, and we’ll always communicate any impact on timeline or budget.",
  },
];

const images = [
  "/arvcover.jpg",
  "/NewRegional1.jpg",
  "/ResidentialCare2.jpg",
  "/court2.jpg",
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      id="faqs"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Left: Images grid */}
      <motion.div className="grid grid-cols-2 grid-rows-2 gap-6 h-full" variants={itemVariants}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden shadow-lg h-44 md:h-52 lg:h-56 w-full bg-gray-100"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={img}
              alt={`FAQ visual ${i + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Right: FAQ content */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-500">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#10B981" /></svg>
          </span>
          <span className="font-semibold text-emerald-600 text-lg">FAQs</span>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">Everything about Design & Build</h2>
        <p className="text-gray-500 mb-8 max-w-xl">
          We know that building or renovating can be overwhelming. Here are some frequently asked questions to help guide you through the process.
        </p>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-xl"
              variants={itemVariants}
            >
              <button
                className="w-full flex  text-gray-900 justify-between items-center px-6 py-5 text-lg font-medium text-left focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{i + 1}. {faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${open === i ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <motion.div
                  className="px-6 pb-5 text-gray-600 text-base animate-fade-in"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
} 