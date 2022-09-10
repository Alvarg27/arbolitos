import AboutSections from "../components/AboutSections";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSections />
      <FeaturedProducts />
    </div>
  );
}
