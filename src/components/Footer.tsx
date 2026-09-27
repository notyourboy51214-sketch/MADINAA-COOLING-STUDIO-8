import React from "react";
import { MessageCircle, Phone, Navigation, ArrowUp, ExternalLink, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Repair", href: "#repair" },
    { label: "Gas Leak", href: "#gas-leak" },
    { label: "Servicing", href: "#servicing" },
    { label: "Installation", href: "#installation" },
    { label: "Reviews", href: "#reviews" },
    { label: "Process", href: "#process" },
    { label: "Location", href: "#visit" },
    { label: "Enquiry Form", href: "#contact" },
  ];

  return (
    <footer className="bg-[#080B0E] text-white pt-16 pb-24 md:pb-16 tech-border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 tech-border-b">
          {/* Brand Specimen */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight block">
                MADINA COOLING SERVICE POINT
              </span>
              <span className="font-urdu text-base text-[#9CA3AF] block mt-1">
                مدینہ کولنگ سروس پوائنٹ · پی آئی اے ہاؤسنگ سکیم
              </span>
            </div>

            <p className="text-xs text-[#9CA3AF] leading-relaxed max-w-sm font-body">
              Air conditioning repair service, servicing, installation and gas-leak-related service in Lahore.
            </p>

            <div className="text-xs font-mono text-[#9CA3AF] space-y-1 pt-2">
              <div>{BUSINESS_INFO.address.line1}</div>
              <div>{BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.postalCode}</div>
              <div>{BUSINESS_INFO.address.country}</div>
              <div className="pt-2 text-white font-bold">{BUSINESS_INFO.phone}</div>
            </div>
          </div>

          {/* One-Page Anchor Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] font-semibold">
              NAVIGATION (ONE-PAGE ARCHIVE)
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-[#9CA3AF] hover:text-[#FF6B2C] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* External Verified Profiles & Channels */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] font-semibold">
              VERIFIED CHANNELS
            </div>

            <div className="space-y-2 text-xs font-mono">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#25D366] transition-colors py-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Transmission</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#FF6B2C] transition-colors py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>Telephone (+92 345 4805813)</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors py-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>Google Maps Business Profile</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors py-1"
              >
                <Navigation className="w-3.5 h-3.5 text-[#9CA3AF]" />
                <span>Get Directions (GPS)</span>
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors py-1"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>Listed Facebook Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6B7280] gap-4">
          <div>
            © {new Date().getFullYear()} Madina Cooling Service Point. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>PIA HOUSING SCHEME, LAHORE</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#FF6B2C] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
