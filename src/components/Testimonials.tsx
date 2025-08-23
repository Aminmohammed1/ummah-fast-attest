import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import review1 from "@/assets/review1.png";
import review2 from "@/assets/review2.png";
import review3 from "@/assets/review3.png";
import review4 from "@/assets/review4.png";
import review5 from "@/assets/review5.png";
import review6 from "@/assets/review6.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohd Asif",
      // role: "Customer",
      // location: "Hyderabad",
      rating: 5,
      // text: "I had an excellent experience with Ummah Attestation. Their team was highly professional, cooperative, and prompt in handling my documents. The entire attestation process was smooth and hassle-free, with regular updates and clear communication throughout. I truly appreciate their dedication and timely service. I would definitely recommend Ummah Attestation to anyone looking for trustworthy and efficient attestation services.",
      // date: "2 weeks ago",
      link: "https://share.google/cOCGhAwfyqtAt7jzh",
      img : review1
    },
    {
      // name: "Sarah Johnson",
      // role: "HR Manager",
      // location: "Abu Dhabi",
      // rating: 5,
      // text: "Used Ummah Attestation for our employee visa documents. Their speed and reliability is unmatched. Now our company's preferred attestation partner.",
      // date: "1 month ago",
      link: "https://share.google/sgk0FCtstSMQJyOFy",
      img : review2
    },
    {
      // name: "Dr. Mohammed Hassan",
      // role: "Medical Professional",
      // location: "Sharjah",
      // rating: 5,
      // text: "Needed urgent medical certificate attestation for Saudi Arabia. They delivered in 2 days with perfect quality. Highly recommended!",
      // date: "3 weeks ago",
      link: "https://share.google/LscwWvuVVqnri7gDg",
      img : review3
    },
    {
      // name: "Priya Sharma",
      // role: "Software Engineer",
      // location: "Dubai",
      // rating: 5,
      // text: "Best attestation service in UAE! Fast, reliable, and affordable. They handled my education certificates with complete professionalism.",
      // date: "1 week ago",
      link: "https://share.google/b8zeLDxVDxJZd8vxk",
      img : review4
    },
    {
      // name: "Ali Al-Mansoori",
      // role: "Project Manager",
      // location: "Dubai",
      // rating: 5,
      // text: "Outstanding customer service. They guided me through the entire process and delivered exactly as promised. Will definitely use again.",
      // date: "2 months ago",
      link: "https://share.google/sap7pcwjXJHSv3oSw",
      img : review5
    },
    {
      // name: "Maria Rodriguez",
      // role: "Teacher",
      // location: "Al Ain",
      // rating: 5,
      // text: "Impressed by their professionalism and speed. Attestation process was smooth and hassle-free. Great communication throughout.",
      // date: "3 weeks ago",
      link: "https://share.google/EwRZ5fDL3qQPUifaY",
      img : review6
    }
  ];

  const googleStats = {
    rating: "5",
    totalReviews: "500+",
    fiveStarPercentage: "95%"
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>

          {/* Google reviews stats */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-gold fill-current" />
                ))}
              </div>
              <div className="text-3xl font-bold text-navy">{googleStats.rating}/5</div>
              <div className="text-muted-foreground">Google Rating</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-navy">{googleStats.totalReviews}</div>
              <div className="text-muted-foreground">Total Reviews</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-green">{googleStats.fiveStarPercentage}</div>
              <div className="text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <a href={testimonial.link} target="_blank">
            <Card key={index} className="hover:shadow-card transition-shadow duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                {/* <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div> */}

                {/* <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div> */}

                <div className="relative">
                  <Quote className="h-6 w-6 text-gold absolute -top-2 -left-2" />
                  {/* <p className="text-muted-foreground italic pl-4">{testimonial.text}</p> */}
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                  <Badge variant="secondary" className="text-xs">
                    Verified Review
                  </Badge>
                  <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-navy">Experience the Difference</h3>
            <p className="text-muted-foreground mb-6">
              Join 10,000+ satisfied customers who chose Ummah Attestation for their document needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                target="_blank" href="https://www.google.com/search?client=firefox-b-d&sca_esv=8a0bc8a120541dc1&biw=1485&bih=703&sxsrf=AE3TifOzRIqlRvxJMNsaXOAZ8B2e95g5gg:1755932864690&si=AMgyJEvkVjFQtirYNBhM3ZJIRTaSJ6PxY6y1_6WZHGInbzDnMTLbI-E3flUowGrt3gyqt9I9A3qptTc5BrIyAsG5-Y-WJYU6NvoE_Zuhdw_XzBFeGoyO-KCX5CECqXA4QyFLnuHwmntm65gEe3AasFLbmJvLevr6hg%3D%3D&q=Ummah+Attestation+Works+Reviews&sa=X&ved=2ahUKEwiVpJjVr6CPAxV74TgGHdkXJK8Q0bkNegQIKRAD" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Star className="h-5 w-5" />
                View All Google Reviews
              </a>
              {/* <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy rounded-lg hover:bg-gold-light transition-colors"
              >
                Get Your Quote Now
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;