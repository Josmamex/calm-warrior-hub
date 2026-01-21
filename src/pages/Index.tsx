import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyINKOGASection from "@/components/WhyINKOGASection";
import OperationalRealitySection from "@/components/OperationalRealitySection";
import SolutionSection from "@/components/SolutionSection";
import ProgramsSection from "@/components/ProgramsSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyINKOGASection />
      <OperationalRealitySection />
      <SolutionSection />
      <ProgramsSection />
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
