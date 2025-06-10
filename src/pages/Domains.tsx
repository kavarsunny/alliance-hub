
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, TrendingUp, DollarSign, Heart } from "lucide-react";

const Domains = () => {
  const domains = [
    {
      id: "digital-commerce",
      title: "Digital Commerce",
      domain: "99digicom.com",
      icon: Globe,
      overview: "Leading the digital transformation of commerce through innovative e-commerce solutions and marketplace integrations.",
      services: [
        "ONDC (Open Network for Digital Commerce) integration",
        "E-commerce platform development",
        "Co-branding partnerships for product lines",
        "Marketplace optimization and management",
        "Digital commerce strategy consulting"
      ],
      partners: [
        { name: "99bowls", description: "Premium food delivery and restaurant solutions" },
        { name: "Nutraio", description: "Health and nutrition supplement marketplace" },
        { name: "GudGoodlife", description: "Lifestyle and wellness product ecosystem" },
        { name: "Perlmillet", description: "Organic and sustainable food products" },
        { name: "CHAAH Tea", description: "Premium tea and beverage solutions" }
      ]
    },
    {
      id: "it-marketing",
      title: "IT & Marketing",
      domain: "99infosource.com",
      icon: TrendingUp,
      overview: "Empowering businesses with cutting-edge technology infrastructure and comprehensive digital marketing strategies.",
      services: [
        "Knowledge Process Outsourcing (KPO)",
        "Business Process Outsourcing (BPO)",
        "Legal Process Outsourcing (LPO)",
        "Digital strategy development and implementation",
        "IT infrastructure consulting and setup"
      ],
      partners: [
        { name: "eBranding Studio", description: "Creative digital branding and design agency" },
        { name: "Biztech.one", description: "Enterprise technology solutions provider" },
        { name: "Doctor Dairy", description: "Healthcare technology and telemedicine platform" },
        { name: "ARKinfoserv", description: "Information technology consulting and services" }
      ]
    },
    {
      id: "financial-services",
      title: "Financial Services",
      domain: "99finserv.com",
      icon: DollarSign,
      overview: "Facilitating business growth through strategic financial partnerships and customized funding solutions.",
      services: [
        "SME loan facilitation and processing",
        "Customized funding solutions for startups",
        "Financial planning and advisory services",
        "Investment guidance and portfolio management",
        "Banking partnership coordination"
      ],
      partners: [
        { name: "ICICI Bank", description: "Leading private sector banking solutions" },
        { name: "BOB (Bank of Baroda)", description: "Comprehensive public sector banking services" },
        { name: "Kotak Bank", description: "Premium banking and financial services" },
        { name: "Tata Capital", description: "Diversified financial services and lending solutions" }
      ]
    },
    {
      id: "spiritual",
      title: "Spiritual Ecosystem",
      domain: "harmonyhights.com",
      icon: Heart,
      overview: "Creating a holistic wellness ecosystem that nurtures mind, body, and spirit through ancient wisdom and modern practices.",
      services: [
        "Yoga and meditation program development",
        "Panchkarma and Ayurvedic treatment coordination",
        "Astrology consultation and guidance",
        "Spiritual rituals and Karmkand services",
        "Star gazing and cosmic awareness programs"
      ],
      partners: [
        { name: "Joshidada.com", description: "Vedic astrology and spiritual guidance platform" },
        { name: "BigBirthday.in", description: "Celebration and ritual planning services" },
        { name: "Lilvan.com", description: "Wellness and lifestyle coaching platform" },
        { name: "Yoga Studio", description: "Comprehensive yoga and meditation center" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Domains
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our four specialized domains, each designed to address unique business needs and opportunities.
          </p>
        </div>
      </section>

      {/* Domains Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="digital-commerce" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {domains.map((domain) => {
                const IconComponent = domain.icon;
                return (
                  <TabsTrigger 
                    key={domain.id} 
                    value={domain.id}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-xs font-medium">{domain.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {domains.map((domain) => {
              const IconComponent = domain.icon;
              return (
                <TabsContent key={domain.id} value={domain.id} className="space-y-8">
                  {/* Domain Header */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl">{domain.title}</CardTitle>
                          <CardDescription className="text-lg text-primary font-medium">
                            {domain.domain}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground">{domain.overview}</p>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Services */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Services Offered</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {domain.services.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Partners */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Key Partners</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {domain.partners.map((partner, index) => (
                            <div key={index} className="border-l-4 border-primary/20 pl-4">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-sm">{partner.name}</h4>
                                <Badge variant="outline" className="text-xs">Partner</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{partner.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Domains;
