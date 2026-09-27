import React from "react";
import { MapPin, Navigation, Phone, Clock, ArrowUpRight, MessageCircle, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-20 lg:py-28 bg-[#0C1015] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Telemetry */}
        <div className="flex items-center justify-between pb-6 tech-border-b mb-12 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <MapPin className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">12 // PHYSICAL BASE COMMAND</span>
          </div>
          <a
            href={BUSINESS_INFO.mapsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9CA3AF] hover:text-[#FF6B2C] flex items-center gap-1.5 transition-colors"
          >
            <span>EXACT GOOGLE MAPS PROFILE ↗</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FF6B2C]" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Bold Architectural Address & Direct Triggers */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C]">
                SERVICE BASE & WORKSHOP
              </div>

              {/* High-Impact Address Display */}
              <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
                PIA Main Boulevard,
                <br />
                <span className="text-[#9CA3AF]">Block E,</span>
                <br />
                PIA Housing Scheme,
                <br />
                <span className="text-[#FF6B2C]">Lahore 54770,</span>
                <br />
                Pakistan
              </div>

              <div className="font-urdu text-lg text-[#9CA3AF]">
                پی آئی اے مین بلیوارڈ، بلاک ای، پی آئی اے ہاؤسنگ سکیم، لاہور
              </div>
            </div>

            {/* Direct Practical Status & Contact Points */}
            <div className="space-y-4 pt-4 tech-border-t text-xs font-mono">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <div>
                  <span className="text-[#6B7280] block uppercase">Current Listed Status</span>
                  <span className="text-white font-semibold text-sm">{BUSINESS_INFO.listedHours}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <div>
                  <span className="text-[#6B7280] block uppercase">Direct Calling Line</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-white hover:text-[#FF6B2C] font-semibold text-sm inline-flex items-center gap-1.5"
                  >
                    <span>{BUSINESS_INFO.phone}</span>
                    <span className="text-[10px] text-[#FF6B2C] uppercase tracking-wider font-mono">(Tap to Call)</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons: Exact Profile + Directions + Direct Call + WhatsApp */}
              <div className="pt-3 flex flex-col sm:flex-row flex-wrap gap-2.5">
                <a
                  href={BUSINESS_INFO.mapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open Google Maps Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-[#18222C] hover:bg-[#202D3A] text-white text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 tech-border"
                >
                  <Navigation className="w-4 h-4 text-[#FF6B2C]" />
                  <span>Get Directions (GPS)</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="px-4 py-3.5 bg-[#121820] hover:bg-[#18222C] text-white text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 tech-border"
                >
                  <Phone className="w-4 h-4 text-[#FF6B2C]" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map Station */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] bg-[#141C24] tech-border overflow-hidden shadow-2xl">
              <iframe
                title="Madina Cooling Service Point Location"
                src={BUSINESS_INFO.mapsEmbedUrl}
                className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Footer Link */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#0C1015]/95 backdrop-blur-xs text-xs font-mono flex items-center justify-between text-[#9CA3AF] tech-border-t">
                <span>BLOCK E · PIA HOUSING SCHEME</span>
                <a
                  href={BUSINESS_INFO.mapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF6B2C] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Open Exact Profile on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="text-[11px] font-mono text-[#9CA3AF] mt-2">
              Technician dispatches for on-site visits across PIA Housing Scheme and neighboring residential sectors in Lahore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
