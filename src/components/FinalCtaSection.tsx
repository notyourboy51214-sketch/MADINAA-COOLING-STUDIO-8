import React from "react";
import { MessageCircle, Phone, Navigation, ArrowUpRight, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0C1015] relative overflow-hidden tech-border-b bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF6B2C]" />
            <span>14 // DIRECT TRANSMISSION</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Need the next step?
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-body">
            Send the problem. The team can confirm the appropriate service and timing.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-6 py-3.5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call ({BUSINESS_INFO.phone})</span>
            </a>

            <a
              href={BUSINESS_INFO.mapsProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#141C24] hover:bg-[#1E293B] text-white text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2 tech-border"
            >
              <MapPin className="w-4 h-4 text-[#FF6B2C]" />
              <span>Google Maps Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={BUSINESS_INFO.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-transparent hover:bg-white/5 text-[#9CA3AF] hover:text-white text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center gap-2 tech-border"
            >
              <Navigation className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>Directions (GPS)</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-[#6B7280]">
            PIA MAIN BOULEVARD · BLOCK E · PIA HOUSING SCHEME · LAHORE 54770
          </div>
        </div>
      </div>
    </section>
  );
};
