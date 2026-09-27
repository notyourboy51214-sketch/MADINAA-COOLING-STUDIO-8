import React from "react";
import { Check, MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0C1015] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative Signals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF6B2C]" />
              <span>10 // LOCAL ROOTS & SIGNALS</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Built around practical service.
            </h2>

            <div className="font-urdu text-base sm:text-lg text-[#9CA3AF] leading-relaxed pb-1">
              مدینہ کولنگ سروس پوائنٹ — پی آئی اے ہاؤسنگ سکیم، لاہور
            </div>

            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-body">
              Madina Cooling Service Point operates in PIA Housing Scheme, Lahore, providing direct household and commercial AC repair, servicing, and installation. Rather than relying on generic slogans or exaggerated claims, our reputation is defined strictly by the practical feedback shared by local residents.
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Customer-Reported Signals:
              </div>

              {[
                {
                  label: "Professional & Cooperative Service",
                  detail: "Frequently highlighted in customer feedback for respectful, neat on-site interaction.",
                },
                {
                  label: "Reasonable Charges Feedback",
                  detail: "21 Google review mentions highlight competitive and transparent service costs.",
                },
                {
                  label: "Multi-Unit Installation Experience",
                  detail: "Documented jobs involving up to 5 AC units across multiple bedrooms and lounges.",
                },
                {
                  label: "Annual Servicing Engagement",
                  detail: "Customers engage for recurring seasonal maintenance and chemical fin decontamination.",
                },
              ].map((sig) => (
                <div key={sig.label} className="p-3.5 bg-[#141C24] tech-border flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block font-mono">
                      {sig.label}
                    </span>
                    <span className="text-xs text-[#9CA3AF] font-body">
                      {sig.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Profile Spec Sheet */}
          <div className="lg:col-span-5 bg-[#141C24] p-7 sm:p-8 tech-border shadow-2xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold border-b tech-border-b pb-3 flex items-center justify-between">
              <span>VERIFIED BUSINESS SPEC SHEET</span>
              <span className="text-emerald-500 font-bold">ACTIVE</span>
            </div>

            <div className="space-y-4 text-xs font-mono text-[#9CA3AF]">
              <div>
                <span className="text-[10px] uppercase text-[#6B7280] block">Trading Name</span>
                <span className="text-sm font-bold text-white">{BUSINESS_INFO.name}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase text-[#6B7280] block">Urdu Inscription</span>
                <span className="font-urdu text-sm text-[#FF6B2C]">{BUSINESS_INFO.urduName}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase text-[#6B7280] block">Category</span>
                <span className="text-white font-semibold">{BUSINESS_INFO.category}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase text-[#6B7280] block">Address</span>
                <span className="text-white font-body text-xs leading-relaxed block mt-0.5">
                  {BUSINESS_INFO.address.full}
                </span>
                <a
                  href={BUSINESS_INFO.mapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#FF6B2C] hover:underline inline-flex items-center gap-1 font-mono mt-1.5"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Open Exact Profile on Google Maps ↗</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase text-[#6B7280] block">Listed Hours</span>
                <span className="text-white font-semibold">{BUSINESS_INFO.listedHours}</span>
                <span className="text-[10px] text-[#6B7280] block mt-0.5">
                  (Official listing status; not marketed as 24/7)
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase text-[#6B7280] block">Primary Telephone</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-sm font-bold text-[#FF6B2C] hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-4 tech-border-t flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-center text-[#9CA3AF] hover:text-white pt-1 flex items-center justify-center gap-1"
              >
                <span>External Listed Profile (Facebook)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
