import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <AboutSection />
      <ProductsSection />
      <BlogSection />
      <Footer />
    </main>
  );
};

export default Index;
