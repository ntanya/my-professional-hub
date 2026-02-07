import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@johndoe.com", href: "mailto:hello@johndoe.com" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ];

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/articles", label: "Articles" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand & Tagline */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-3xl font-semibold mb-4">John Doe</h3>
              <p className="font-body text-background/70 leading-relaxed mb-6">
                Creating meaningful digital experiences that connect people and drive results.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block font-body text-background/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 font-body text-background/70 hover:text-accent transition-colors duration-300"
                  >
                    <contact.icon className="w-5 h-5 text-accent" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-body text-sm text-background/50">
                © {new Date().getFullYear()} John Doe. All rights reserved.
              </p>
              <p className="font-body text-sm text-background/50">
                Designed & Built with ♥
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
