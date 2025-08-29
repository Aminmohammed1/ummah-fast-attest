import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Carousel />
      <Contact />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
