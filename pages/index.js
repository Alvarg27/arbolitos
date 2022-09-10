import AboutSections from "../components/AboutSections";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSections />
      <FeaturedProducts />
      <ContactSection />
      <Footer />
    </div>
  );
}
