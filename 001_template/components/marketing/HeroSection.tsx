"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Award, Users, TrendingUp } from "lucide-react";

declare global {
  interface Window {
    VANTA: any;
  }
}

export function HeroSection() {
  useEffect(() => {
    // Detect if running in a headless browser or screenshot context
    const isHeadless = () => {
      // Check for query parameter override
      if (window.location.search.includes("no-animations")) {
        return true;
      }

      // Check for headless browser indicators (Puppeteer, Playwright, Selenium)
      if (navigator.webdriver) {
        return true;
      }

      // Check for headless Chrome/Puppeteer in user agent
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes("headless")) {
        return true;
      }

      // Respect user preference for reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return true;
      }

      return false;
    };

    // Skip animation in headless environments
    if (isHeadless()) {
      return;
    }

    // Initialize Vanta.js animation when scripts are loaded
    const initVanta = () => {
      if (window.VANTA && typeof window.VANTA.FOG === "function") {
        window.VANTA.FOG({
          el: "#hero-bg-animation",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x2c5f7f,
          midtoneColor: 0x1e4459,
          lowlightColor: 0x0a1929,
          blurFactor: 0.73,
          speed: 1.5,
          zoom: 0.6,
        });
      }
    };

    // Check if scripts are already loaded
    if (window.VANTA) {
      initVanta();
    } else {
      // Wait for scripts to load with timeout safety
      const timer = setTimeout(initVanta, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnrollClick = () => {
    window.location.href = "/sales";
  };

  const handleFreeGuideClick = () => {
    const element = document.getElementById("lead-magnet");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-bg-animation"
      className="relative lg:sticky lg:top-0 bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden min-h-screen flex items-center z-0 -mt-[72px]"
    >
      {/* Wave backgrounds */}
      <div className="absolute inset-x-0 bottom-0 h-64 wave-bg-bottom -z-10 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-64 wave-bg-top -z-10 opacity-70" />

      <div className="container mx-auto px-4 max-w-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in relative bg-white/60 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/40 order-2 lg:order-1">
            {/* Decorative floating elements */}
            <div className="hidden lg:block absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float -z-10" />
            <div
              className="hidden lg:block absolute -bottom-20 right-10 w-32 h-32 bg-success/10 rounded-full blur-2xl animate-float -z-10"
              style={{ animationDelay: "1s" }}
            />
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="success" size="md">
                <Award className="w-4 h-4 mr-1" />
                89% Pass Rate
              </Badge>
              <Badge variant="primary" size="md">
                <Users className="w-4 h-4 mr-1" />
                2,000+ Students
              </Badge>
              <Badge variant="accent" size="md">
                <TrendingUp className="w-4 h-4 mr-1" />
                #1 ASWB Prep
              </Badge>
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-heading font-heading-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 drop-shadow-lg">
                Pass Your ASWB Exam{" "}
                <span className="text-primary drop-shadow-lg">
                  with Confidence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-body font-body-normal drop-shadow-sm">
                Prep smarter, not harder. Join thousands of social workers who
                passed on their first try with John&apos;s proven methodology.
              </p>
            </div>

            {/* Value Props */}
            <ul className="space-y-3">
              {[
                "Unique memory frameworks & study techniques",
                "Real practice questions from actual exams",
                "Personalized support from a licensed social worker",
                "Study at your own pace with lifetime access",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-success flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg text-gray-800 font-body drop-shadow-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in">
              <Button size="lg" variant="primary" onClick={handleEnrollClick}>
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleFreeGuideClick}
              >
                Get Free Study Guide
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-4 animate-fade-in">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  src="https://randomuser.me/api/portraits/women/62.jpg"
                  alt="Student"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Student"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Student"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Student"
                />
              </div>
              <p className="text-sm text-gray-700 font-body drop-shadow-sm">
                Join{" "}
                <span className="font-heading-semibold text-accent">
                  2,000+
                </span>{" "}
                people finding their path
              </p>
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative animate-slide-up order-1 lg:order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card-hover">
              {/* YouTube Video */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Iwcdnyqf6zU?controls=1&loop=1&playlist=Iwcdnyqf6zU&enablejsapi=1"
                title="Meet John - ASWB Exam Preparation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl shadow-card-hover p-4 lg:p-6 border border-neutral-border max-w-[160px] lg:max-w-[200px]">
              <div className="text-center">
                <p className="font-accent font-accent-bold text-3xl lg:text-4xl text-primary mb-1">
                  89%
                </p>
                <p className="text-xs lg:text-sm text-text-secondary font-body">
                  Pass Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
