import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Repair", href: "#repair" },
    { label: "Gas Leak", href: "#gas-leak" },
    { label: "Servicing", href: "#servicing" },
    { label: "Installation", href: "#installation" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#visit" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#0C1015]/95 backdrop-blur-md tech-border-b py-3 shadow-2xl"
          : "bg-[#0C1015] tech-border-b py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Terminal Identification */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 bg-[#18222C] tech-border flex items-center justify-center text-[#FF6B2C] font-mono font-bold text-xs tracking-tighter group-hover:border-[#FF6B2C] transition-colors">
            MC
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-[#FF6B2C] transition-colors">
                MADINA COOLING
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-status" title="Active Technical Base" />
            </div>
            <span className="font-urdu text-[11px] text-[#9CA3AF] leading-none -mt-0.5">
              مدینہ کولنگ سروس پوائنٹ · لاہور
            </span>
          </div>
        </a>

        {/* Engineering Monospace Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wide text-[#9CA3AF]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`transition-colors relative py-1 uppercase ${
                  isActive
                    ? "text-[#FF6B2C] font-semibold"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B2C]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Direct Action Cluster */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Direct Call */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F3F4F6] bg-[#141C24] hover:bg-[#1E293B] tech-border px-3 py-1.5 transition-colors"
            title="Direct Phone Call"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          {/* Direct WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-xs"
            title="Instant WhatsApp Chat"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Service Dispatch CTA */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="inline-flex items-center justify-center gap-1 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FF6B2C] hover:bg-[#FF8652] transition-colors shadow-xs"
          >
            <span>Enquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu and instant touch targets */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-[#25D366] text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="p-1.5 bg-[#FF6B2C] text-black"
            aria-label="Call"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#F3F4F6] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121820] tech-border-t px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="p-2 text-[#9CA3AF] hover:text-white bg-[#18222C] tech-border"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-mono font-bold text-white bg-[#18222C] tech-border"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send WhatsApp Message</span>
            </a>

            <a
              href={BUSINESS_INFO.mapsProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 text-xs font-mono text-[#9CA3AF] hover:text-white bg-[#141C24] tech-border"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>Exact Google Maps Profile ↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
