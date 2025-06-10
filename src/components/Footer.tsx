
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">99 Partners</h3>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with strategic partnerships across Digital Commerce, 
              IT & Marketing, Financial Services, and Spiritual Wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/domains" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Domains
              </Link>
              <Link to="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Partners
              </Link>
            </div>
          </div>

          {/* Domains */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Domains</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">99digicom.com - Digital Commerce</span>
              <span className="text-sm text-muted-foreground">99infosource.com - IT & Marketing</span>
              <span className="text-sm text-muted-foreground">99finserv.com - Financial Services</span>
              <span className="text-sm text-muted-foreground">harmonyhights.com - Spiritual Ecosystem</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Get in Touch
              </Link>
              <Link to="/join-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 99 Partners. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
