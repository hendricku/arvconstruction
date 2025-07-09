"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "solid ng design shesshh grabeeeee ",
    author: "Daniel Cobrado",
    role: "Client",
    img: "/daniel.jpg",
  },
  {
    text: "Sheshhhhhhhhh crazy ",
    author: "Daniel Cobrado",
    role: "Client",
    img: "/daniel.jpg",
  },

];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="w-full bg-gray-900 py-16 px-4 flex flex-col items-center">
      <div className="text-emerald-400 font-semibold text-sm flex items-center gap-2 mb-2">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#10B981" /></svg>
        Testimonials
      </div>
      <h2 className="text-4xl font-bold text-white mb-10 text-center">What our clients say</h2>
      <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-8 relative">
        {/* Left: Testimonial text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <p className="text-white text-2xl md:text-3xl font-medium mb-6">{testimonials[index].text}</p>
          <div className="mt-4">
            <div className="text-white font-semibold">{testimonials[index].author}</div>
            <div className="text-gray-400 text-sm">{testimonials[index].role}</div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 ml-0 md:ml-8 mt-8 md:mt-0">
          <Image src={testimonials[index].img} alt={testimonials[index].author} width={180} height={180} className="rounded-2xl object-cover w-44 h-44" />
        </div>
        {/* Carousel controls */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-emerald-400" : "bg-gray-600"}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 