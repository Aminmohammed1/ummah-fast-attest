import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <>
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-gold font-arabic text-2xl font-bold">الأمة</div>
              <div>
                <h3 className="text-xl font-bold">Ummah Attestation</h3>
                <p className="text-white/80 text-sm">Trusted Document Services</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              UAE's most trusted certificate attestation service with 10+ years of experience. 
              Professional, fast, and reliable document attestation services.
            </p>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-gold fill-current" />
              ))}
              <span className="text-sm text-white/80 ml-2">4.9/5 (500+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-gold transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Track Document</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Educational Certificates</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Personal Documents</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Commercial Documents</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Medical Certificates</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Embassy Attestation</a></li>
              <li><a href="#" className="text-white/80 hover:text-gold transition-colors">Family Visa Documents</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/80">+971-4-XXX-XXXX</p>
                  <p className="text-white/80">+971-50-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/80">info@ummah-attestation.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/80">Business Bay, Dubai<br />United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white/80">Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-white/80">Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-white/10 rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">Need Urgent Attestation?</h4>
            <p className="text-white/80 mb-4">24/7 emergency services available for urgent document processing</p>
            <Button variant="gold" size="lg">
              Call Emergency Line: +971-50-XXX-XXXX
            </Button>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <span className="text-white/80">Follow us:</span>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-white/80 text-sm">
              <p>&copy; 2024 Ummah Attestation. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.087874988576!2d78.4703767!3d17.40757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975e90482797%3A0x1bb0d1151948a88e!2sUmmah%20Attestation%20Works!5e0!3m2!1sen!2sin!4v1755878715799!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
</>
  );
};

export default Footer;