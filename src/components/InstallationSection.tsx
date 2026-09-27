import React from "react";
import { ArrowRight, CheckCircle2, Home, MessageCircle, Layers } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface InstallationSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const InstallationSection: React.FC<InstallationSectionProps> = ({ onSelectService }) => {
  const handleProceed = () => {
    if (onSelectService) {
      onSelectService("AC INSTALLATION");
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const directWhatsAppUrl = `https://wa.me/923454805813?text=${encodeURIComponent(
    "Assalam o Alaikum, I would like to plan an AC installation with Madina Cooling Service Point in Lahore. Please let me know the procedure and scheduling."
  )}`;

  const stages = [
    {
      step: "01",
      name: "POSITIONING & LEVELING",
      detail: "Evaluating room airflow dynamics, wall load integrity, and spirit-level indoor bracket anchoring.",
    },
    {
      step: "02",
      name: "PIPE RUN & CORE DRILL",
      detail: "Clean core drilling with proper fall angle for gravity drainage and continuous copper insulation.",
    },
    {
      step: "03",
      name: "OUTDOOR BRACKET & FINISH",
      detail: "Vibration-damped outdoor condenser mount, neat UV-protective taping, and orderly copper route.",
    },
    {
      step: "04",
      name: "VACUUM & PERFORMANCE RUN",
      detail: "Line evacuation, service valve opening, and supply-to-return temperature delta verification.",
    },
  ];

  return (
    <section id="installation" className="py-20 lg:py-28 bg-[#121820] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Telemetry */}
        <div className="flex items-center justify-between pb-6 tech-border-b mb-12 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <Layers className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">04 // INSTALLATION & FITOUT BLUEPRINT</span>
          </div>
          <span className="text-[#9CA3AF] uppercase">MULTI-ROOM RESIDENTIAL EXPERIENCE</span>
        </div>

        {/* Feature Specimen: Subhan Nadeem's 5-Unit Review with Big Numerical '05' */}
        <div className="bg-[#18222C] tech-border p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Giant '05' numerical typography */}
            <div className="lg:col-span-4 flex flex-col items-start lg:border-r tech-border-r lg:pr-8">
              <span className="font-mono text-7xl sm:text-8xl lg:text-9xl font-extrabold text-[#FF6B2C] tracking-tighter leading-none">
                05
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mt-2 block">
                AC units mentioned in one customer installation review
              </span>
              <div className="mt-4 pt-4 tech-border-t text-sm font-mono text-white flex items-center gap-2">
                <span className="text-[#FF6B2C] font-bold">4 BEDROOMS</span>
                <span>+</span>
                <span className="text-white font-bold">1 TV LOUNGE</span>
              </div>
            </div>

            {/* Reported Customer Experience Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono text-[#FF6B2C] uppercase tracking-wider flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>CUSTOMER REPORTED EXPERIENCE — SUBHAN NADEEM</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-display font-medium text-white leading-relaxed">
                “Installed five air conditioners across four bedrooms and a TV lounge. Good finishing, neat and tidy external work, and the work was completed on schedule. Would recommend Madina Cooling Service Point.”
              </blockquote>

              <p className="text-xs text-[#9CA3AF] leading-normal pt-1 font-body">
                Note: This is one customer’s reported real-world experience and is presented as documented feedback. Individual residential layouts and installation schedules vary.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Stage Architectural Installation Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Indoor Split Mount */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#0C1015] tech-border overflow-hidden shadow-2xl group">
              <div className="px-4 py-2 bg-[#18222C] tech-border-b flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
                <span>FITOUT SPECIMEN // INDOOR FINISH</span>
                <span className="text-[#FF6B2C]">NEAT LEVEL MOUNT</span>
              </div>

              <div className="relative h-[360px] sm:h-[440px] overflow-hidden">
                <img
                  src="/src/assets/images/ac_indoor_clean_mount_1790530451274.jpg"
                  alt="Modern split-system indoor AC unit mounted cleanly on an off-white wall in a contemporary living space"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015] via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#121820]/95 backdrop-blur-xs tech-border text-xs flex items-center justify-between">
                  <span className="font-mono text-white font-semibold">Clean Plaster Finishing</span>
                  <span className="font-mono text-[#FF6B2C] text-[10px]">CONCEALED DRAIN RUN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Stage Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Clean installation finishing makes the difference.
            </h3>

            <p className="text-sm text-[#9CA3AF] leading-relaxed font-body">
              Poor installation causes water seepage through walls, refrigerant leakage at overtightened flare joints, and compressor vibration rattles. We focus on level indoor mounts and tidy outdoor line paths.
            </p>

            <div className="space-y-3 pt-1">
              {stages.map((st) => (
                <div
                  key={st.step}
                  className="p-3.5 bg-[#18222C] tech-border flex items-start gap-4"
                >
                  <span className="font-mono text-sm font-bold text-[#FF6B2C] pt-0.5">
                    {st.step}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">
                      {st.name}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] mt-0.5 leading-normal font-body">
                      {st.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleProceed}
                className="flex-1 py-3 px-5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Plan Your Installation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Fitout Scope</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
