import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import Comparison from "@/components/sections/Comparison";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <Process />
        <Reviews />
        <Comparison />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
