
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const domains = [
    {
      name: "99digicom.com",
      title: "Digital Commerce",
      description: "Leading e-commerce solutions and ONDC integration services"
    },
    {
      name: "99infosource.com",
      title: "IT & Marketing",
      description: "Comprehensive IT infrastructure and digital marketing strategies"
    },
    {
      name: "99finserv.com",
      title: "Financial Services",
      description: "SME loan facilitation and customized funding solutions"
    },
    {
      name: "harmonyhights.com",
      title: "Spiritual Ecosystem",
      description: "Holistic wellness through yoga, meditation, and spiritual practices"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve extraordinary results."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries and embracing new technologies and methodologies."
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Creating opportunities for businesses of all sizes and backgrounds to thrive."
    },
    {
      icon: Target,
      title: "Impact",
      description: "Measuring our success by the positive impact we create for our partners."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About 99 Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses and individuals with robust partnerships and cutting-edge solutions across multiple domains.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At 99 Partners, we are dedicated to creating a comprehensive ecosystem that connects 
            businesses across diverse industries. Our mission is to facilitate meaningful partnerships 
            that drive growth, innovation, and success for all stakeholders involved.
          </p>
        </div>
      </section>

      {/* Our Domains */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{domain.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {domain.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{domain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced team brings together decades of expertise across technology, 
            finance, commerce, and wellness industries to guide our partners toward success.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
