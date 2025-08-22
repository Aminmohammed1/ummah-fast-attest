import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Car,
  Building
} from "lucide-react";

const Contact = () => {
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
            Contact us today for a free consultation and quote. Our experts are ready to help 
            with all your document attestation needs.
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
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
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
              <h3 className="text-2xl font-bold mb-6 text-navy">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <a href="tel:+919652395028" className="text-muted-foreground">+91 9652395028</a>
                    <div></div>
                    <a href="tel:+919849720295" className="text-muted-foreground">+91 9849720295</a>
                    <p className="text-xs text-success-green mt-1">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <a href="mailto:xyz@gmail.com" className="text-muted-foreground">ummah.attestation@gmail.com</a>
                    <p className="text-xs text-success-green mt-1">Response within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+91 9849720295</p>
                    <p className="text-xs text-success-green mt-1">Instant support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Additional Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-navy">Additional Services</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-primary" />
                  <span className="text-sm">Free pickup & delivery in Dubai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm">Corporate consultation services</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Real-time status updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-navy">Get Free Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1 hour with a detailed quote.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input placeholder="+91-XX-XXX-XXXX" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address *</label>
                  <Input type="email" placeholder="your.email@gmail.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Type *</label>
                    <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
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
                    <label className="text-sm font-medium mb-2 block">Destination Country</label>
                    <select className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md">
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
                  <label className="text-sm font-medium mb-2 block">Document Details</label>
                  <Textarea 
                    placeholder="Please describe the documents you need attested (e.g., Degree certificate from XYZ University, Birth certificate, etc.)"
                    rows={4}
                  />
                </div>

                <div>
                </div>
                <Button className="w-full" size="lg" variant="hero">
                  <Send className="h-5 w-5 mr-2" />
                  Send Quote Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our terms of service and privacy policy.
                  We'll contact you within 1 hour with a detailed quote.
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