import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Car,
  Building,
} from "lucide-react";

const Contact = () => {
  const [dict, setDict] = useState({
    full_name: '',
    phone: '',
    email: '',
    service_type: '',
    country: '',
    docs_details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDict(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const openWhatsApp = () => {
    const phoneNumber = "9849720295"; // Replace with your WhatsApp number
    const message = `Name: ${dict.full_name}\nPhone: ${dict.phone}\nEmail: ${dict.email}\nService: ${dict.service_type}\nCountry: ${dict.country}\nDetails: ${dict.docs_details}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation. Our experts are
            ready to help with all your document attestation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Business Hours */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-success-green/10 rounded-lg">
                  <p className="text-sm text-success-green font-medium">
                    Emergency services available 24/7 for urgent cases
                  </p>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-navy">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <a
                      href="tel:+919652395028"
                      className="text-muted-foreground"
                    >
                      +91 9652395028
                    </a>
                    <div></div>
                    <a
                      href="tel:+919849720295"
                      className="text-muted-foreground"
                    >
                      +91 9849720295
                    </a>
                    <p className="text-xs text-success-green mt-1">
                      Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <a
                      href="mailto:ummah.attestation@gmail.com"
                      className="text-muted-foreground"
                    >
                      ummah.attestation@gmail.com
                    </a>
                    <p className="text-xs text-success-green mt-1">
                      Response within 1 hour
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+91 9849720295</p>
                    <p className="text-xs text-success-green mt-1">
                      Instant support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      Hotel Anmol Continental, 5-9-20/A, Secretariat Rd,
                      Saifabad, Khairtabad, Hyderabad, Telangana 500004
                    </p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.087874988576!2d78.4703767!3d17.40757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975e90482797%3A0x1bb0d1151948a88e!2sUmmah%20Attestation%20Works!5e0!3m2!1sen!2sin!4v1755878715799!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">
                  Send us a message on <span className="text-[#25D366]">Whatsapp</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below to reach out to us on Whatsapp
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="full_name"
                      placeholder="Enter your full name"
                      value={dict.full_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      type="text"
                      name="phone"
                      placeholder="+91-XX-XXX-XXXX"
                      value={dict.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email Address{" "}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@gmail.com"
                    value={dict.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Service Type *
                    </label>
                    <select
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      name="service_type"
                      value={dict.service_type}
                      onChange={handleChange}
                    >
                      <option>Select service type</option>
                      <option>Educational Certificates</option>
                      <option>Personal Documents</option>
                      <option>Commercial Documents</option>
                      <option>Medical Certificates</option>
                      <option>Embassy Attestation</option>
                      <option>Family Visa Documents</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Destination Country
                    </label>
                    <select
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md"
                      name="country"
                      value={dict.country}
                      onChange={handleChange}
                    >
                      <option>Select destination</option>
                      <option>Saudi Arabia</option>
                      <option>Qatar</option>
                      <option>Kuwait</option>
                      <option>Oman</option>
                      <option>Bahrain</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Document Details
                  </label>
                  <Textarea
                    name="docs_details"
                    value={dict.docs_details}
                    onChange={handleChange}
                    placeholder="Please describe the documents you need attested (e.g., Degree certificate from XYZ University, Birth certificate, etc.)"
                    rows={4}
                  />
                </div>

                <div></div>
                <Button
                  className="w-full bg-[#25D366]"
                  size="lg"
                  variant="hero"
                  onClick={openWhatsApp}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you will open whatsapp with a message containing above entered details.
                  privacy policy. <br/>We'll contact you within 1 hour.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
