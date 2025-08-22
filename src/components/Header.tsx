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
              <a href="tel:+919652395028"><span>+91 9652395028</span></a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:ummah.attestation@gmail.com" className="text-muted-foreground">ummah.attestation@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <a href="https://maps.app.goo.gl/jAZnipPgXAhP52Df7" target="_blank"><span>Hyderabad, India</span></a>
            </div>
          </div>
          <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=ce44fb6aa5ce43e4&sxsrf=AE3TifOvTT8SQEXh6m0v5J3mAzuJ0IlBwQ:1755873260074&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMTLbI-E3flUowGrt3gyqt9I9A3qptTc5BrIyAsG5-Y-WJYU6NvoE_Zuhdw_XzBFeGoyO-KCX5CECqXA4QyFLnuHwmntm65gEe3AasFLbmJvLevr6hg%3D%3D&q=Ummah+Attestation+Works+Reviews&sa=X&ved=2ahUKEwjwzb_P0Z6PAxUicGwGHbwEGqgQ0bkNegQIHxAD&biw=1485&bih=703&dpr=1.25"><div className="text-success-green font-medium">
            ⭐ 5/5 Google Reviews
          </div></a>
          
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            {/* <div className="text-navy font-arabic text-2xl font-bold">الأمة</div> */}
            <div>
              <h1 className="text-xl font-bold text-black">Ummah Attestation</h1>
              <p className="text-sm text-muted-foreground mt-1">Notary. Attestation. Apostille.</p>
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

          <Button variant="hero" size="lg" className="invisible">
            Get Quote Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;