import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Star,
  Users,
  Clock,
  Award,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import trustImage from "@/assets/trust-image.jpg";

const WhyChooseUs = () => {
  const stats = [
    {
      icon: <Star className="h-8 w-8 text-gold" />,
      number: "5/5",
      label: "Google Rating",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: <Zap className="h-8 w-8 text-gold" />,
      number: "Best in Industry",
      label: "Fastest Processing",
    },
    {
      icon: <Award className="h-8 w-8 text-gold" />,
      number: "19+",
      label: "Years Experience",
    },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-gold" />,
      title: "Lightning Fast Service",
      description: "Best in Industry Delivery Time",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "100% Government Approved",
      description:
        "Official government channels with full security and authenticity guarantee",
    },
    {
      icon: <Star className="h-6 w-6 text-gold" />,
      title: "Highest Customer Satisfaction",
      description:
        "5/5 star rating from 500+ Google reviews, highest in Hyderabad attestation industry.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Team",
      description: "19+ years of experience",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-success-green" />,
      title: "Transparent Pricing",
      description:
        "No hidden fees, clear pricing structure with free consultation and quote",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-gold" />,
      title: "Track Record",
      description: "Successfully processed 50,000+ documents",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            Why should you choose Ummah Attestation Works?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Ummah Attestation, we specialize in providing reliable and
            professional Notary and Embassy attestation services. With a team of
            highly experienced legal experts, we not only process your
            attestations with precision but also offer expert legal guidance to
            ensure all your requirements are met efficiently and accurately.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-card transition-shadow"
            >
              <CardContent className="space-y-2">
                <div className="mx-auto w-fit">{stat.icon}</div>
                <div className="text-3xl font-bold text-navy">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center overflow-hidden">
          <div>
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 p-3 bg-secondary rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={trustImage}
              alt="Professional handshake representing trust and partnership"
              className="rounded-2xl shadow-elegant w-full h-auto max-w-full object-contain"
            />
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-card max-w-[90%]">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-gold fill-current" />
                <Star className="h-5 w-5 text-gold fill-current" />
                <Star className="h-5 w-5 text-gold fill-current" />
                <Star className="h-5 w-5 text-gold fill-current" />
                <Star className="h-5 w-5 text-gold fill-current" />
              </div>
              <p className="text-sm font-semibold mt-1">500+ 5-Star Reviews</p>
              <p className="text-xs text-muted-foreground">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Guarantee section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Our Guarantee to You</h3>
          <p className="text-xl mb-6 text-white/90">
            We stand behind our service with a 100% satisfaction guarantee
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Success Guarantee</h4>
              <p className="text-sm text-white/80">100% success rate</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Clock className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                Fastest Document Processing
              </h4>
              <p className="text-sm text-white/80">
                Fastest Delivery Time in Industry
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Shield className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Security Guarantee</h4>
              <p className="text-sm text-white/80">
                Full document security and confidentiality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
