import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PracticeAreasSection from "./components/PracticeAreasSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen font-open-sans">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
