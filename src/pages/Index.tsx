
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Users, TrendingUp, Heart } from "lucide-react";

const Index = () => {
  const highlights = [
    {
      title: "Digital Commerce",
      description: "ONDC integration and e-commerce solutions",
      icon: Globe,
      link: "/domains#digital-commerce"
    },
    {
      title: "IT & Marketing",
      description: "KPO, BPO, LPO and digital strategy",
      icon: TrendingUp,
      link: "/domains#it-marketing"
    },
    {
      title: "Financial Services",
      description: "SME loan facilitation and funding support",
      icon: Users,
      link: "/domains#financial-services"
    },
    {
      title: "Spiritual Ecosystem",
      description: "Yoga, meditation, and wellness services",
      icon: Heart,
      link: "/domains#spiritual"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Empowering Businesses with 
            <span className="text-primary"> Strategic Partnerships</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connecting you with the right partners to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partners">
              <Button size="lg" className="text-lg px-8">
                Find Your Perfect Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            99 Partners is a dynamic ecosystem connecting businesses across 
            <strong> Digital Commerce</strong>, <strong>IT & Marketing</strong>, 
            <strong> Financial Services</strong>, and the <strong>Spiritual Wellness</strong> domain.
          </p>
        </div>
      </section>

      {/* Quick Links / Highlights */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <Link to={highlight.link}>
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our network of successful partnerships and unlock new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-us">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Apply for Partnership
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
