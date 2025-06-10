
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, TrendingUp, DollarSign, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Digital Commerce",
      domain: "99digicom.com",
      description: "Comprehensive e-commerce solutions and marketplace integration",
      services: ["ONDC integration", "Co-branding for e-commerce products", "Marketplace optimization"],
      partners: ["99bowls", "Nutraio", "GudGoodlife", "Perlmillet", "CHAAH Tea"]
    },
    {
      icon: TrendingUp,
      title: "IT & Marketing",
      domain: "99infosource.com",
      description: "Technology infrastructure and digital marketing excellence",
      services: ["KPO, BPO, LPO services", "Digital strategy consulting", "IT infrastructure development"],
      partners: ["eBranding Studio", "Biztech.one", "Doctor Dairy", "ARKinfoserv"]
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      domain: "99finserv.com",
      description: "Strategic financial solutions and funding facilitation",
      services: ["SME loan facilitation", "Customized funding support", "Financial planning & advisory"],
      partners: ["ICICI Bank", "BOB", "Kotak Bank", "Tata Capital"]
    },
    {
      icon: Heart,
      title: "Spiritual Ecosystem",
      domain: "harmonyhights.com",
      description: "Holistic wellness and spiritual growth services",
      services: ["Yoga & meditation programs", "Panchkarma & Ayurveda", "Astrology, Rituals (Karmkand), Star Gazing"],
      partners: ["Joshidada.com", "BigBirthday.in", "Lilvan.com", "Yoga Studio"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across four dynamic domains to accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {service.domain}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Featured Partners:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.partners.map((partner, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block">
              <button className="bg-primary-foreground text-primary px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                Contact Us Today
              </button>
            </a>
            <a href="/join-us" className="inline-block">
              <button className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary-foreground hover:text-primary transition-colors">
                Become a Partner
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
