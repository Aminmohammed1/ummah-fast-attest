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
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Star className="h-4 w-4 mr-1 text-gold" />
              4.9/5 Google Reviews
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="h-4 w-4 mr-1 text-gold" />
              10+ Years Experience
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            UAE's Most Trusted
            <span className="text-gold block">Certificate Attestation</span>
            Service
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Professional document attestation services with the fastest processing time in UAE. 
            Trusted by thousands, rated highest on Google reviews.
          </p>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fastest Processing</h3>
              <p className="text-white/80">Complete attestation in 2-3 days vs industry standard 7-10 days</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-white/80">Government approved process with full document security</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Star className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Highest Rated</h3>
              <p className="text-white/80">4.9/5 stars from 500+ satisfied customers</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4">
              Get Free Quote
            </Button>
            <Button variant="trust" size="lg" className="text-lg px-8 py-4">
              View Our Services
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;