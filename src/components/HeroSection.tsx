import React, { useState } from "react";
import { MessageCircle, Phone, Star, MapPin, ArrowRight, Activity, Eye, Maximize2 } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface HeroSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectService }) => {
  const [clarityMode, setClarityMode] = useState<boolean>(false);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden tech-border-b bg-[#0C1015]"
    >
      {/* COMPLETELY VISIBLE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_bg_ac_installation_1790531510104.jpg"
          alt="Outdoor residential air conditioning compressor units cleanly installed with insulated copper lines in Lahore"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            clarityMode
              ? "filter contrast-110 brightness-105 scale-102"
              : "filter contrast-105 brightness-95"
          }`}
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Directional Vignette Scrim: Left side darkened for text legibility, Right side completely clear & vivid */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            clarityMode
              ? "bg-gradient-to-r from-[#0C1015]/75 via-[#0C1015]/30 to-transparent"
              : "bg-gradient-to-r from-[#0C1015]/95 via-[#0C1015]/70 to-[#0C1015]/15"
          }`}
        />

        {/* Bottom edge blending */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0C1015] to-transparent pointer-events-none" />
      </div>

      {/* Top Telemetry Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#0C1015]/80 backdrop-blur-md tech-border text-[11px] font-mono text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-status" />
            <span className="text-white font-bold tracking-wider">COMMAND BASE:</span>
            <span>PIA MAIN BOULEVARD · BLOCK E · LAHORE</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setClarityMode(!clarityMode)}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#FF6B2C] transition-colors px-2 py-0.5 bg-[#18222C] tech-border"
              title="Toggle background clarity"
            >
              <Eye className="w-3 h-3 text-[#FF6B2C]" />
              <span>{clarityMode ? "STANDARD VIEW" : "MAX BACKGROUND CLARITY"}</span>
            </button>

            <a
              href={BUSINESS_INFO.mapsProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#FF6B2C] transition-colors"
              title="Open exact Google Maps profile"
            >
              <MapPin className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span className="underline decoration-[#FF6B2C]/40 hover:decoration-[#FF6B2C]">
                GOOGLE MAPS PROFILE ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Hero Content Area: High-Contrast HUD Console on the Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Console Card */}
          <div className="lg:col-span-8 xl:col-span-7 bg-[#0C1015]/90 backdrop-blur-md p-6 sm:p-8 lg:p-10 tech-border shadow-2xl space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#18222C] tech-border text-[11px] font-mono text-[#FF6B2C]">
                <Activity className="w-3 h-3" />
                <span className="tracking-wider uppercase">AIR CONDITIONING REPAIR & SERVICING</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight text-balance">
                Cooling problems need clear next steps.
              </h1>

              <p className="text-base sm:text-lg text-[#D1D5DB] max-w-xl leading-relaxed font-body">
                Madina Cooling Service Point provides AC repair, servicing, installation and gas-leak-related service in Lahore.
              </p>

              {/* Verified Trust Strip */}
              <div className="p-3.5 bg-[#141C24] tech-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center text-[#FF6B2C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B2C]" />
                    ))}
                  </div>
                  <div>
                    <span className="font-mono font-bold text-base text-white">4.8 / 5.0</span>
                    <span className="text-[11px] font-mono text-[#9CA3AF] block -mt-0.5">
                      405 Google Reviews
                    </span>
                  </div>
                </div>

                <div className="h-6 w-px bg-white/10 hidden sm:block" />

                <div className="text-xs font-mono text-[#9CA3AF]">
                  <span className="text-white font-semibold block">{BUSINESS_INFO.listedHours}</span>
                  <span>PIA Housing Scheme · Lahore</span>
                </div>
              </div>
            </div>

            {/* Direct High-Impact Action Buttons */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary WhatsApp Direct */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send on WhatsApp</span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="px-5 py-3.5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-xl"
                  title="Direct Phone Call"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                {/* Exact Google Maps */}
                <a
                  href={BUSINESS_INFO.mapsProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 bg-[#18222C] hover:bg-[#202D3A] text-white transition-colors text-xs font-mono inline-flex items-center gap-2 tech-border"
                >
                  <MapPin className="w-4 h-4 text-[#FF6B2C]" />
                  <span>Maps Profile ↗</span>
                </a>
              </div>

              {/* Fast Situational Switcher */}
              <div className="p-3 bg-[#121820] tech-border">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold mb-2 flex items-center justify-between">
                  <span>IDENTIFY SITUATION:</span>
                  <span className="text-[#9CA3AF]">ONE-PAGE JUMP</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) onSelectService("AC REPAIR");
                      handleScrollTo("#repair");
                    }}
                    className="p-2 text-left bg-[#18222C] hover:bg-[#202D3A] text-white hover:text-[#FF6B2C] tech-border transition-colors flex items-center justify-between group"
                  >
                    <span>01. REPAIR</span>
                    <ArrowRight className="w-3 h-3 text-[#9CA3AF] group-hover:text-[#FF6B2C]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) onSelectService("GAS LEAK REPAIR");
                      handleScrollTo("#gas-leak");
                    }}
                    className="p-2 text-left bg-[#18222C] hover:bg-[#202D3A] text-white hover:text-[#FF6B2C] tech-border transition-colors flex items-center justify-between group"
                  >
                    <span>02. GAS LEAK</span>
                    <ArrowRight className="w-3 h-3 text-[#9CA3AF] group-hover:text-[#FF6B2C]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) onSelectService("AC SERVICING");
                      handleScrollTo("#servicing");
                    }}
                    className="p-2 text-left bg-[#18222C] hover:bg-[#202D3A] text-white hover:text-[#FF6B2C] tech-border transition-colors flex items-center justify-between group"
                  >
                    <span>03. SERVICE</span>
                    <ArrowRight className="w-3 h-3 text-[#9CA3AF] group-hover:text-[#FF6B2C]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) onSelectService("AC INSTALLATION");
                      handleScrollTo("#installation");
                    }}
                    className="p-2 text-left bg-[#18222C] hover:bg-[#202D3A] text-white hover:text-[#FF6B2C] tech-border transition-colors flex items-center justify-between group"
                  >
                    <span>04. INSTALL</span>
                    <ArrowRight className="w-3 h-3 text-[#9CA3AF] group-hover:text-[#FF6B2C]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Visual Telemetry Callout on Large Screens */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col items-end justify-center pointer-events-none">
            <div className="bg-[#0C1015]/85 backdrop-blur-md p-4 tech-border space-y-2 max-w-xs text-xs pointer-events-auto">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
                <span>LIVE BACKGROUND VIEW</span>
                <span className="text-[#FF6B2C]">PIA HOUSING SCHEME</span>
              </div>
              <div className="font-semibold text-white font-display text-sm">
                Documented Outdoor Condenser Installation
              </div>
              <p className="text-[11px] text-[#9CA3AF] leading-normal font-body">
                Clean pipe runs, level bracket mounting, and proper line insulation in Lahore residential environment.
              </p>
              <div className="pt-1 text-[10px] font-mono text-[#FF6B2C] flex items-center gap-1">
                <span>Direct on-site service: +92 345 4805813</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-6">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
          <span>ONE CONTINUOUS SERVICE FLOW</span>
          <button
            type="button"
            onClick={() => handleScrollTo("#services")}
            className="hover:text-[#FF6B2C] inline-flex items-center gap-1 transition-colors"
          >
            <span>EXPLORE SERVICES ↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};
