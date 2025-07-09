"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">ARV Construction</span>
          <span className="text-gray-400 text-sm">San Fernando, La Union</span>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
          <Link href="/properties" className="hover:text-emerald-400 transition">Properties</Link>
          <Link href="/#testimonials" className="hover:text-emerald-400 transition">Testimonials</Link>
          <Link href="/contacts" className="hover:text-emerald-400 transition">Contact</Link>
        </div>
        <div className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} ARV Construction. All rights reserved.</div>
      </div>
    </footer>
  );
} 