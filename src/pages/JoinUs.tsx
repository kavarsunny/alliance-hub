
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Lightbulb, Target, TrendingUp } from "lucide-react";

const JoinUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    businessDescription: "",
    partnershipGoals: "",
    targetAudience: "",
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });

    // Reset form
    setFormData({
      fullName: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      website: "",
      businessType: "",
      businessDescription: "",
      partnershipGoals: "",
      targetAudience: "",
      consent: false
    });
  };

  const benefits = [
    {
      icon: Users,
      title: "Network Access",
      description: "Connect with our extensive network of partners across multiple domains"
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Accelerate your growth through strategic partnerships and collaborations"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Access cutting-edge solutions and innovative business strategies"
    },
    {
      icon: Target,
      title: "Strategic Support",
      description: "Receive ongoing guidance and resources to maximize partnership value"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Partnership Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Become part of a thriving network that connects businesses across Digital Commerce, 
            IT & Marketing, Financial Services, and Spiritual Wellness.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Partnership Application</CardTitle>
              <CardDescription>
                Fill out the form below to apply for partnership with 99 Partners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation</Label>
                    <Input
                      id="designation"
                      value={formData.designation}
                      onChange={(e) => handleInputChange("designation", e.target.value)}
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-2">
                  <Label htmlFor="businessType">Type of Business *</Label>
                  <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital-commerce">Digital Commerce</SelectItem>
                      <SelectItem value="it-marketing">IT & Marketing</SelectItem>
                      <SelectItem value="financial-services">Financial Services</SelectItem>
                      <SelectItem value="spiritual-wellness">Spiritual & Wellness</SelectItem>
                      <SelectItem value="multiple">Multiple Domains</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessDescription">Describe Your Business *</Label>
                  <Textarea
                    id="businessDescription"
                    placeholder="Tell us about your business, products, or services..."
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                    required
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnershipGoals">Partnership Goals *</Label>
                  <Textarea
                    id="partnershipGoals"
                    placeholder="What do you hope to achieve through this partnership?"
                    value={formData.partnershipGoals}
                    onChange={(e) => handleInputChange("partnershipGoals", e.target.value)}
                    required
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="Describe your target market and customer base..."
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Consent */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm">
                    I agree to the terms and conditions and consent to the processing of my data for partnership evaluation purposes. *
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Partnership Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
