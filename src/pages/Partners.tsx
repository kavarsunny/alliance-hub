
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      category: "E-Commerce",
      color: "bg-blue-100 text-blue-800",
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
      color: "bg-green-100 text-green-800",
      partners: [
        { name: "Biztech.one", description: "Enterprise technology solutions and digital transformation services" },
        { name: "Doctor Dairy", description: "Healthcare technology platform revolutionizing telemedicine" },
        { name: "eBranding Studio", description: "Creative digital branding and design agency for modern businesses" },
        { name: "ARKinfoserv", description: "Comprehensive information technology consulting and services" }
      ]
    },
    {
      category: "Finance",
      color: "bg-yellow-100 text-yellow-800",
      partners: [
        { name: "ICICI Bank", description: "Leading private sector bank offering comprehensive financial solutions" },
        { name: "Kotak Bank", description: "Premium banking services with innovative financial products" },
        { name: "Bank of Baroda (BOB)", description: "Trusted public sector banking with extensive reach" },
        { name: "Tata Capital", description: "Diversified financial services and customized lending solutions" }
      ]
    },
    {
      category: "Wellness",
      color: "bg-purple-100 text-purple-800",
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
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the exceptional organizations that make up our thriving ecosystem of partnerships.
          </p>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-12">
            {partnerCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-bold">{category.category} Partners</h2>
                  <Badge className={category.color}>{category.partners.length} Partners</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <Card key={partnerIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          {category.category}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {partner.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our network and unlock exclusive advantages for your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Network Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with a diverse network of businesses across multiple industries and domains.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Leverage our ecosystem to accelerate your business growth and reach new markets.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Strategic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive ongoing strategic guidance and resources to maximize partnership value.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to join our ecosystem of successful partnerships?
          </p>
          <Link to="/join-us">
            <Button variant="secondary" size="lg" className="text-lg px-8">
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
