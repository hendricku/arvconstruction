import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <div className="mb-16" />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
