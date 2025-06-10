
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                99 Partners
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with strategic partnerships across Digital Commerce, 
              IT & Marketing, Financial Services, and Spiritual Wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                Services
              </Link>
              <Link to="/domains" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                Domains
              </Link>
              <Link to="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                Partners
              </Link>
            </div>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Domains</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                99digicom.com - Digital Commerce
              </span>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                99infosource.com - IT & Marketing
              </span>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                99finserv.com - Financial Services
              </span>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                harmonyhights.com - Spiritual Ecosystem
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                Get in Touch
              </Link>
              <Link to="/join-us" className="text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 99 Partners. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
