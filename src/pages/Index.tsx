import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyINKOGASection from "@/components/WhyINKOGASection";
import OperationalRealitySection from "@/components/OperationalRealitySection";
import SolutionSection from "@/components/SolutionSection";
import IncidentCoverageSection from "@/components/IncidentCoverageSection";
import ProgramsSection from "@/components/ProgramsSection";
import FilterSection from "@/components/FilterSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CursorGlow from "@/components/CursorGlow";
import GradientOrbs from "@/components/GradientOrbs";
import NoiseOverlay from "@/components/NoiseOverlay";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global Effects */}
      <CursorGlow color="gold" />
      <GradientOrbs />
      <NoiseOverlay />
      
      <Navbar />
      <HeroSection />
      <WhyINKOGASection />
      <OperationalRealitySection />
      <SolutionSection />
      <IncidentCoverageSection />
      <ProgramsSection />
      <FilterSection />
      <ResourcesSection />
      <FAQSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
