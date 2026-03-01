import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Dribbble } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/tanyanam/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Mail, text: "ntanya@gmail.com", href: "mailto:ntanya@gmail.com" },
    { icon: MapPin, text: "New York, NY", href: "#" },
  ];

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    // { href: "/articles", label: "Articles" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <footer className="bg-foreground text-background py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
            {/* Brand & Tagline */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-3xl italic mb-6">Tanya Nam</h3>
              <p className="font-body text-sm text-background/60 leading-relaxed mb-8"></p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block font-body text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-body text-xs uppercase tracking-[0.2em] mb-8">Contact</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-body text-xs text-background/40 tracking-wide">© {new Date().getFullYear()}</p>
              <p className="font-body text-xs text-background/40 tracking-wide"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
