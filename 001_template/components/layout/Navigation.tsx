"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, User, BookOpen, Award, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: null },
    { href: "/sales", label: "Course", icon: BookOpen },
    { href: "/success-stories", label: "Success Stories", icon: Award },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-lg",
          isScrolled ? "py-3" : "py-4",
        )}
      >
        <div className="container mx-auto px-4 max-w-content">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-heading font-heading-bold text-xl">
                  J
                </span>
              </div>
              <span className="font-heading font-heading-bold text-xl text-text-primary">
                StudyWithJohn
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body font-body-medium text-base transition-colors relative group",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-gray-900 hover:text-primary",
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                  )}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA / User Menu */}
            <div className="hidden lg:flex items-center gap-4">
              {isAuthenticated && user ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="/course/dashboard"
                    className="font-body font-body-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    My Course
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-heading font-heading-semibold">
                      {user.name.charAt(0)}
                    </div>
                    <button
                      onClick={() => logout()}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="font-body font-body-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => (window.location.href = "/checkout")}
                  >
                    Enroll Now
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-text-primary p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-neutral-border pt-4 animate-slide-down">
              <div className="flex flex-col gap-4 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-body font-body-medium text-base py-2 transition-colors flex items-center gap-2",
                      isActive(link.href) ? "text-primary" : "text-white-900",
                    )}
                  >
                    {link.icon && <link.icon size={20} />}
                    {link.label}
                  </Link>
                ))}
                {isAuthenticated && user ? (
                  <>
                    <Link
                      href="/course/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-body font-body-medium text-base py-2 text-gray-900 text-center"
                    >
                      My Course
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="font-body font-body-medium text-base py-2 text-center text-gray-900"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-body font-body-medium text-base py-2 text-gray-900 text-center"
                    >
                      Login
                    </Link>
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      onClick={() => {
                        window.location.href = "/sales";
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Enroll Now
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-[72px]" />
    </>
  );
}
