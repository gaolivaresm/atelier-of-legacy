import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ServiceIncludes from "@/components/ServiceIncludes";
import Process from "@/components/Process";
import Niches from "@/components/Niches";
import SocialProof from "@/components/SocialProof";
import PricingComparison from "@/components/PricingComparison";
import PartnersProgram from "@/components/PartnersProgram";
import FAQ from "@/components/FAQ";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProps />
      <ServiceIncludes />
      <Process />
      <Niches />
      <SocialProof />
      <PricingComparison />
      <PartnersProgram />
      <FAQ />
      <LeadMagnet />
      <Footer />
    </main>
  );
};

export default Index;
