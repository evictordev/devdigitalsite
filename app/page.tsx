import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
