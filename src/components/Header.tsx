import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, X, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden w-full flex justify-center items-center">
        <a
          href="https://www.google.com/search?q=Ummah+Attestation+Works+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <div className="text-success-green font-medium">
            ⭐⭐⭐⭐⭐ 5/5 Google Reviews
          </div>
        </a>
      </div>
      <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top contact bar - hidden on mobile */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+919652395028">
                  <span>+91 9652395028</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:ummah.attestation@gmail.com"
                  className="text-muted-foreground"
                >
                  ummah.attestation@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <a
                  href="https://maps.app.goo.gl/jAZnipPgXAhP52Df7"
                  target="_blank"
                >
                  <span>Hyderabad, India</span>
                </a>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=Ummah+Attestation+Works+Reviews"
              target="_blank"
            >
              <div className="text-success-green font-medium">
                ⭐⭐⭐⭐⭐ 5/5 Google Reviews
              </div>
            </a>
          </div>

          {/* Main navigation */}

          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold text-black">
                  Ummah Attestation
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Notary. Attestation. Apostille.
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center flex-1 justify-center gap-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Hamburger Icon (Mobile only) */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-border shadow-lg p-4 space-y-4">
              {/* Nav Links */}
              <nav className="flex flex-col gap-4">
                <a href="#home" className="hover:text-primary">
                  Home
                </a>
                <a href="#services" className="hover:text-primary">
                  Services
                </a>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
                <a href="#testimonials" className="hover:text-primary">
                  Reviews
                </a>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </nav>

              {/* Contact Section (moved here for mobile) */}
              <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+919652395028">+91 9652395028</a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:ummah.attestation@gmail.com">
                    ummah.attestation@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <a
                    href="https://maps.app.goo.gl/jAZnipPgXAhP52Df7"
                    target="_blank"
                  >
                    Hyderabad, India
                  </a>
                </div>
                <a
                  href="https://www.google.com/search?q=Ummah+Attestation+Works+Reviews"
                  target="_blank"
                >
                  <div className="text-success-green font-medium">
                    ⭐⭐⭐⭐⭐ 5/5 Google Reviews
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
