
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@99partners.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Business District, Innovation Hub",
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9AM - 6PM",
      description: "We're here to help"
    }
  ];

  const domains = [
    {
      title: "Digital Commerce",
      email: "commerce@99partners.com",
      domain: "99digicom.com"
    },
    {
      title: "IT & Marketing",
      email: "tech@99partners.com",
      domain: "99infosource.com"
    },
    {
      title: "Financial Services",
      email: "finance@99partners.com",
      domain: "99finserv.com"
    },
    {
      title: "Spiritual Ecosystem",
      email: "wellness@99partners.com",
      domain: "harmonyhights.com"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to explore partnership opportunities or learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-1">{info.details}</p>
                    <CardDescription>{info.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Domain-Specific Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Domain-Specific Inquiries</CardTitle>
                <CardDescription>
                  Contact our specialized teams directly for domain-specific questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {domains.map((domain, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <h4 className="font-semibold text-lg mb-1">{domain.title}</h4>
                      <p className="text-sm text-primary font-medium mb-1">{domain.domain}</p>
                      <p className="text-sm text-muted-foreground">{domain.email}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Partnership Inquiries</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Interested in becoming a partner? We'd love to hear from you.
                  </p>
                  <a href="/join-us">
                    <Button variant="outline" className="w-full">
                      Apply for Partnership
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
