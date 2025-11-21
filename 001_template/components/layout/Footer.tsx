import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About John", href: "/about", external: true },
      { label: "Success Stories", href: "/success-stories", external: false },
      { label: "FAQ", href: "/faq", external: false },
      { label: "Contact", href: "/contact", external: true },
    ],
    legal: [
      { label: "Privacy Policy", href: "/", external: true },
      { label: "Terms of Service", href: "/", external: true },
      { label: "Refund Policy", href: "/", external: true },
      { label: "Accessibility", href: "/", external: true },
    ],
    resources: [
      { label: "Free Study Guide", href: "/#lead-magnet", external: false },
      { label: "ASWB Exam Info", href: "/", external: true },
      { label: "Blog", href: "/", external: true },
      { label: "Community", href: "/community", external: true },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-white relative z-10">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 max-w-content py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-heading font-heading-bold text-2xl mb-2">
                Stay Updated on ASWB Exam Tips
              </h3>
              <p className="text-white/80 font-body">
                Get weekly study tips, practice questions, and exam strategies
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:min-w-[400px]">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white"
              />
              <Button variant="primary" size="md">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 max-w-content py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-primary font-heading font-heading-bold text-xl">
                  J
                </span>
              </div>
              <span className="font-heading font-heading-bold text-xl">
                StudyWithJohn
              </span>
            </Link>
            <p className="text-white/80 font-body text-sm mb-6">
              Helping aspiring social workers pass their ASWB licensing exams
              with confidence. Join thousands who&aposve achieved their dreams
              of becoming licensed social workers.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-heading-semibold text-lg mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/80 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-heading font-heading-semibold text-lg mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/80 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-heading-semibold text-lg mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/80 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p className="font-body">
              © {currentYear} StudyWithJohn. All rights reserved.
            </p>
            <p className="font-body">
              Made with ❤️ for aspiring social workers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
