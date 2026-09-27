import React from "react";
import { Gauge, ShieldCheck, ArrowRight, MessageCircle, AlertTriangle } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface GasLeakSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const GasLeakSection: React.FC<GasLeakSectionProps> = ({ onSelectService }) => {
  const handleProceed = () => {
    if (onSelectService) {
      onSelectService("GAS LEAK REPAIR");
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const directWhatsAppUrl = `https://wa.me/923454805813?text=${encodeURIComponent(
    "Assalam o Alaikum, I suspect a refrigerant or gas issue with my AC. I would like to schedule an on-site physical check at Madina Cooling Service Point."
  )}`;

  return (
    <section id="gas-leak" className="py-20 lg:py-28 bg-[#121820] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-6 tech-border-b mb-12 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <Gauge className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">02 // PRESSURE & REFRIGERANT STATION</span>
          </div>
          <div className="px-2.5 py-1 bg-[#18222C] tech-border text-[#FF6B2C]">
            GOOGLE REVIEW RECURRING THEME: 10 MENTIONS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Macro Manifold Gauge Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#0C1015] tech-border overflow-hidden shadow-2xl group">
              <div className="px-4 py-2 bg-[#18222C] tech-border-b flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
                <span>GAUGE TELEMETRY // MANIFOLD TEST</span>
                <span className="text-[#FF6B2C]">SUCTION / DISCHARGE CHECK</span>
              </div>

              <div className="relative h-[360px] sm:h-[420px] overflow-hidden">
                <img
                  src="/src/assets/images/ac_manifold_gauge_inspect_1790531266111.jpg"
                  alt="Professional documentary photograph of dual HVAC manifold pressure gauges and brass valves on air conditioning unit"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015] via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#121820]/95 backdrop-blur-xs tech-border text-xs">
                  <div className="flex items-center justify-between text-[#FF6B2C] font-mono mb-1 text-[10px]">
                    <span>PHYSICAL MEASUREMENT REQUIRED</span>
                    <span>PSI GAUGING</span>
                  </div>
                  <div className="text-white font-semibold">
                    Accurate refrigerant assessment requires calibrated pressure manifolds on-site.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Protocol & Restrained Truth */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#18222C] tech-border text-xs font-mono text-[#FF6B2C]">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Physical Assessment Protocol</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Gas-related problems require proper checking.
            </h2>

            <p className="text-base text-[#9CA3AF] leading-relaxed font-body">
              A gradual reduction in room heat absorption or ice forming along copper lines often indicates compromised refrigerant pressure. Gas leaks cannot be diagnosed through digital guess-work—technicians must inspect flare nuts, brazed joints, and suction pressure with physical gauges.
            </p>

            {/* 3 Practical Steps */}
            <div className="space-y-3 pt-1">
              <div className="p-3.5 bg-[#18222C] tech-border flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#FF6B2C] pt-0.5">01</span>
                <div>
                  <span className="font-semibold text-white text-xs block">Symptom Description</span>
                  <span className="text-xs text-[#9CA3AF] font-body">
                    You report whether cooling is weak or ice has accumulated on external pipework.
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[#18222C] tech-border flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-white pt-0.5">02</span>
                <div>
                  <span className="font-semibold text-white text-xs block">Physical Line & Pressure Evaluation</span>
                  <span className="text-xs text-[#9CA3AF] font-body">
                    Technician checks flare connections and service valve ports with manifold gauges.
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[#18222C] tech-border flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#FF6B2C] pt-0.5">03</span>
                <div>
                  <span className="font-semibold text-white text-xs block">Transparent Resolution</span>
                  <span className="text-xs text-[#9CA3AF] font-body">
                    Joint tightening, flare rework, or refrigerant charging is discussed clearly on-site.
                  </span>
                </div>
              </div>
            </div>

            {/* Verified Google Review Metric */}
            <div className="p-4 bg-[#18222C] tech-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-extrabold text-[#FF6B2C]">10</span>
                <div>
                  <span className="font-mono text-xs font-bold text-white uppercase block">
                    GAS LEAK REPAIR
                  </span>
                  <span className="text-xs text-[#9CA3AF] font-body">
                    Appears as a recurring Google review topic in customer reviews.
                  </span>
                </div>
              </div>
              <ShieldCheck className="w-5 h-5 text-[#FF6B2C] shrink-0" />
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleProceed}
                className="flex-1 py-3.5 px-5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Ask About Gas-Leak Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Gas Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
