import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+971-XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@ummah-attestation.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Dubai, UAE</span>
            </div>
          </div>
          <div className="text-success-green font-medium">
            ⭐ 4.9/5 Google Reviews
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="text-navy font-arabic text-2xl font-bold">الأمة</div>
            <div>
              <h1 className="text-xl font-bold text-navy">Ummah Attestation</h1>
              <p className="text-sm text-muted-foreground">Trusted Document Services</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="hero" size="lg">
            Get Quote Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;