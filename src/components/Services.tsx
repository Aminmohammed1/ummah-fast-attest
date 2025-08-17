import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  FileText, 
  Users, 
  Building, 
  Heart, 
  Briefcase,
  Clock,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Educational Certificates",
      description: "Degree, diploma, transcripts attestation for UAE, Saudi Arabia, Qatar, and other GCC countries.",
      features: ["University Degrees", "School Certificates", "Transcripts", "Professional Courses"],
      processingTime: "2-3 Days",
      price: "Starting from AED 150"
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Personal Documents",
      description: "Birth certificates, marriage certificates, and other personal document attestation.",
      features: ["Birth Certificates", "Marriage Certificates", "Death Certificates", "Passport Copies"],
      processingTime: "2-3 Days",
      price: "Starting from AED 120"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Commercial Documents",
      description: "Business registration, MOA, power of attorney and commercial document attestation.",
      features: ["Trade License", "MOA & AOA", "Power of Attorney", "Commercial Invoices"],
      processingTime: "3-4 Days",
      price: "Starting from AED 200"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Medical Certificates",
      description: "Medical fitness, vaccination certificates and health document attestation.",
      features: ["Medical Fitness", "Vaccination Records", "Medical Reports", "Health Certificates"],
      processingTime: "2-3 Days",
      price: "Starting from AED 130"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Embassy Attestation",
      description: "Complete embassy attestation services for all GCC and international destinations.",
      features: ["UAE Embassy", "Saudi Embassy", "Qatar Embassy", "Other Embassies"],
      processingTime: "5-7 Days",
      price: "Starting from AED 300"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Family Visa Documents",
      description: "Complete family visa documentation and attestation services.",
      features: ["Family Visa Papers", "Relationship Proof", "Income Certificates", "Housing Documents"],
      processingTime: "3-4 Days",
      price: "Starting from AED 180"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            Complete Attestation Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional document attestation services covering all types of certificates 
            with the fastest processing time in UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow duration-300 border-0 shadow-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success-green" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{service.processingTime}</span>
                  </div>
                  <Badge variant="secondary" className="bg-gold/20 text-gold">
                    {service.price}
                  </Badge>
                </div>

                <Button className="w-full" variant="outline">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-navy">Simple 4-Step Process</h3>
            <p className="text-muted-foreground">Professional attestation made easy</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Submit Documents", desc: "Drop off your documents at our office or schedule pickup" },
              { step: "2", title: "Verification", desc: "We verify and prepare your documents for attestation" },
              { step: "3", title: "Processing", desc: "Documents processed through official government channels" },
              { step: "4", title: "Delivery", desc: "Receive your attested documents with tracking" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;