import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Star, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center bg-gradient-hero">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust badges */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=ce44fb6aa5ce43e4&sxsrf=AE3TifOvTT8SQEXh6m0v5J3mAzuJ0IlBwQ:1755873260074&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMTLbI-E3flUowGrt3gyqt9I9A3qptTc5BrIyAsG5-Y-WJYU6NvoE_Zuhdw_XzBFeGoyO-KCX5CECqXA4QyFLnuHwmntm65gEe3AasFLbmJvLevr6hg%3D%3D&q=Ummah+Attestation+Works+Reviews&sa=X&ved=2ahUKEwjwzb_P0Z6PAxUicGwGHbwEGqgQ0bkNegQIHxAD&biw=1485&bih=703&dpr=1.25" target="_blank"><Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Star className="h-4 w-4 mr-1 text-gold" />
              5/5 Google Reviews
            </Badge></a>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="h-4 w-4 mr-1 text-gold" />
              10+ Years Experience
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hyderabad's Most Trusted
            <span className="text-gold block">Certificate Attestation</span>
            Service
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional document attestation services with the fastest processing time in Hyderabad. 
            Trusted by thousands, rated highest on Google reviews.
          </p>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fastest Processing</h3>
              <p className="text-white/80">Fastest Delivery in the Industry</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-white/80">Government approved process with full document security</p>
            </div>
            <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=ce44fb6aa5ce43e4&sxsrf=AE3TifOvTT8SQEXh6m0v5J3mAzuJ0IlBwQ:1755873260074&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMTLbI-E3flUowGrt3gyqt9I9A3qptTc5BrIyAsG5-Y-WJYU6NvoE_Zuhdw_XzBFeGoyO-KCX5CECqXA4QyFLnuHwmntm65gEe3AasFLbmJvLevr6hg%3D%3D&q=Ummah+Attestation+Works+Reviews&sa=X&ved=2ahUKEwjwzb_P0Z6PAxUicGwGHbwEGqgQ0bkNegQIHxAD&biw=1485&bih=703&dpr=1.25" target="_blank"><div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Star className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Highest Rated</h3>
              <p className="text-white/80">5/5 stars from 500+ satisfied customers</p>
            </div>
            </a>
          </div>

          {/* Call to action */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
            {/* <Button variant="gold" size="lg" className="text-lg px-8 py-4">
              Get Free Quote
            </Button> */}
            {/* <a href="#services"><Button variant="trust" size="lg" className="text-lg px-8 py-4">
              View Our Services
            </Button></a> */}
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Trusted by leading organizations:</p>
            <div className="flex justify-center items-center gap-8 text-white/60">
              <span>Emirates Airlines</span>
              <span>•</span>
              <span>Dubai Municipality</span>
              <span>•</span>
              <span>ADNOC</span>
              <span>•</span>
              <span>500+ Individual Clients</span>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;