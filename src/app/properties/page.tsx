import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import categories from "../data/categories";
import Link from "next/link";

export default function PropertiesPage() {
  return (
    <div className="w-full min-h-screen bg-white bg-grid flex flex-col items-center px-2">
      <Navbar />
      <div className="flex-1 w-full flex flex-col items-center">
        <div className="text-emerald-500 font-semibold text-sm flex items-center gap-2 mb-2 mt-8">
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#10B981" /></svg>
          Properties
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-900 text-center">Discover inspiring designed homes.</h1>
        <p className="text-gray-500 text-center max-w-2xl mb-8">
          Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col cursor-pointer">
              <div className="relative w-full h-48">
                <Image src={cat.img} alt={cat.title} fill className="object-cover object-center" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="font-semibold text-lg text-gray-900 mb-1">{cat.title}</div>
                <div className="text-gray-500 text-sm mb-2">{cat.address}</div>
                <div className="flex flex-wrap gap-4 text-xs text-gray-700 mt-auto">
                  {cat.details && cat.details.length > 0 && cat.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="font-semibold">{d.title}:</span> {d.desc}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 