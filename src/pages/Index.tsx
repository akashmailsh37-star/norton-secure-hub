import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductsSection from "@/components/ProductsSection";
import AboutUs from "@/components/AboutUs";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <ProductsSection />
        <AboutUs />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
