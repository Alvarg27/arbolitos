import AboutSections from "../components/AboutSections";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSections />
      <FeaturedProducts />
      <ContactSection />
      <Footer />
    </div>
  );
}
