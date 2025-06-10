
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      category: "E-Commerce",
      color: "bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-700 border-blue-200",
      icon: Globe,
      partners: [
        { name: "Nutraio", description: "Health and nutrition supplement marketplace with premium product lines" },
        { name: "99bowls", description: "Premium food delivery platform connecting restaurants with customers" },
        { name: "GudGoodlife", description: "Lifestyle and wellness product ecosystem for modern living" },
        { name: "Perlmillet", description: "Organic and sustainable food products for health-conscious consumers" },
        { name: "CHAAH Tea", description: "Premium tea and beverage solutions with authentic flavors" }
      ]
    },
    {
      category: "IT & Marketing",
      color: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200",
      icon: Zap,
      partners: [
        { name: "Biztech.one", description: "Enterprise technology solutions and digital transformation services" },
        { name: "Doctor Dairy", description: "Healthcare technology platform revolutionizing telemedicine" },
        { name: "eBranding Studio", description: "Creative digital branding and design agency for modern businesses" },
        { name: "ARKinfoserv", description: "Comprehensive information technology consulting and services" }
      ]
    },
    {
      category: "Finance",
      color: "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200",
      icon: Sparkles,
      partners: [
        { name: "ICICI Bank", description: "Leading private sector bank offering comprehensive financial solutions" },
        { name: "Kotak Bank", description: "Premium banking services with innovative financial products" },
        { name: "Bank of Baroda (BOB)", description: "Trusted public sector banking with extensive reach" },
        { name: "Tata Capital", description: "Diversified financial services and customized lending solutions" }
      ]
    },
    {
      category: "Wellness",
      color: "bg-gradient-to-r from-orange-100 to-rose-100 text-orange-700 border-orange-200",
      icon: Sparkles,
      partners: [
        { name: "Joshidada.com", description: "Vedic astrology and spiritual guidance platform for life insights" },
        { name: "Panchkarma Kutir", description: "Authentic Ayurvedic treatments and holistic healing center" },
        { name: "BigBirthday.in", description: "Celebration and ritual planning services for special occasions" },
        { name: "Lilvan.com", description: "Wellness and lifestyle coaching platform for personal growth" },
        { name: "Yoga Studio", description: "Comprehensive yoga and meditation center for mind-body wellness" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-futuristic py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Partnership Ecosystem</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the exceptional organizations that make up our thriving ecosystem of partnerships.
          </p>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {partnerCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        {category.category} Partners
                      </h2>
                    </div>
                    <Badge className={`${category.color} px-4 py-2 text-sm font-semibold rounded-full border`}>
                      {category.partners.length} Partners
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <Card key={partnerIndex} className="group hover:shadow-xl transition-all duration-300 border-0 gradient-card hover:scale-[1.02] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <CardHeader className="relative z-10">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {partner.name}
                            </CardTitle>
                            <Badge variant="outline" className={`${category.color} border-0 text-xs`}>
                              {category.category}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                            {partner.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 gradient-futuristic relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Partnership Benefits</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Partnership Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our network and unlock exclusive advantages for your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 gradient-card hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Network Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Connect with a diverse network of businesses across multiple industries and domains.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 gradient-card hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Leverage our ecosystem to accelerate your business growth and reach new markets.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 gradient-card hover:scale-105 transition-transform duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Strategic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Receive ongoing strategic guidance and resources to maximize partnership value.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to join our ecosystem of successful partnerships?
          </p>
          <Link to="/join-us">
            <Button variant="secondary" size="lg" className="text-lg px-8 rounded-full hover:scale-105 transition-transform bg-white text-primary hover:bg-white/90">
              Apply for Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
