import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import HybridGym from "@/components/HybridGym";
import Programs from "@/components/Programs";
import Hours from "@/components/Hours";
import Coaches from "@/components/Coaches";
import Stats from "@/components/Stats";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <HybridGym />
      <Programs />
      <Hours />
      <Coaches />
      <Stats />
      <Shop />
      <Contact />
      <Footer />
    </main>
  );
}
