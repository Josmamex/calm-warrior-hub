import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OperationalRealitySection from "@/components/OperationalRealitySection";
import SolutionSection from "@/components/SolutionSection";
import ResourcesSection from "@/components/ResourcesSection";
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
      <OperationalRealitySection />
      <SolutionSection />
      <ResourcesSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
