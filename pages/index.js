import AboutSections from "../components/AboutSection";
import FeaturedProducts from "../components/FeaturedProducts";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IngredientsSections from "../components/IngredientsSections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSections />
      <IngredientsSections />
      <FeaturedProducts />

      <ContactSection />

      <Footer />
    </div>
  );
}
