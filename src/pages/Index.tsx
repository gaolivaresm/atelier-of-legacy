import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Process from "@/components/Process";
import Niches from "@/components/Niches";
import SocialProof from "@/components/SocialProof";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProps />
      <Process />
      <Niches />
      <SocialProof />
      <LeadMagnet />
      <Footer />
    </main>
  );
};

export default Index;
