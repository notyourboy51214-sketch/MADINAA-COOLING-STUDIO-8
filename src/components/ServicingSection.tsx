import React from "react";
import { Sparkles, Check, ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface ServicingSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicingSection: React.FC<ServicingSectionProps> = ({ onSelectService }) => {
  const handleProceed = () => {
    if (onSelectService) {
      onSelectService("AC SERVICING");
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const directWhatsAppUrl = `https://wa.me/923454805813?text=${encodeURIComponent(
    "Assalam o Alaikum, I would like to schedule an AC servicing / annual maintenance visit with Madina Cooling Service Point in Lahore."
  )}`;

  return (
    <section id="servicing" className="py-20 lg:py-28 bg-[#0C1015] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Telemetry */}
        <div className="flex items-center justify-between pb-6 tech-border-b mb-12 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">03 // PREVENTIVE CARE & ANNUAL SERVICING</span>
          </div>
          <span className="text-[#9CA3AF] uppercase">SEASONAL EFFICIENCY CARE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Context & Customer Record */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Good cooling starts with maintenance.
            </h2>

            <p className="text-base text-[#9CA3AF] leading-relaxed font-body">
              Regular servicing can be part of maintaining an AC system in Lahore. Ask the team about an appropriate servicing schedule for your unit. Dust layers on indoor mesh filters and outdoor aluminum fins impede thermal dissipation and force the compressor to operate under elevated head pressure.
            </p>

            {/* Customer Review Record: Hassan Zahoor */}
            <div className="p-4 bg-[#141C24] tech-border space-y-1.5 border-l-2 border-l-[#FF6B2C]">
              <div className="text-[11px] font-mono font-bold text-[#FF6B2C] uppercase">
                Customer Record — Hassan Zahoor (Google Review)
              </div>
              <p className="text-xs text-white italic font-body">
                “AC installation and annual servicing. Good work, competitive pricing, positive recommendation.”
              </p>
              <div className="text-[10px] text-[#9CA3AF] font-mono">
                Verified Google customer experience mentioning annual servicing
              </div>
            </div>

            {/* Practical Checklist */}
            <div className="space-y-2.5 pt-1 text-xs">
              {[
                "Indoor filter deep wash and biological clearing",
                "Evaporator coil comb check and condensate drain flushing",
                "Outdoor condenser fin jet washing to reduce compressor amperage",
                "Operating electrical check and terminal tightness verification",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-[#F3F4F6]">
                  <Check className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleProceed}
                className="flex-1 py-3 px-5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Service Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Service</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Component Specimen */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#141C24] tech-border overflow-hidden shadow-2xl group">
              <div className="px-4 py-2 bg-[#18222C] tech-border-b flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
                <span>MAINTENANCE SPECIMEN // EVAPORATOR FIN</span>
                <span className="text-[#FF6B2C]">FIN COMB & COIL CARE</span>
              </div>

              <div className="relative h-[360px] sm:h-[420px] overflow-hidden">
                <img
                  src="/src/assets/images/ac_coil_fin_cleaning_1790530494987.jpg"
                  alt="Documentary photo of technician inspecting aluminum condenser coil fins on an air conditioner unit"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015] via-transparent to-transparent opacity-75" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#121820]/95 backdrop-blur-xs tech-border text-xs space-y-1">
                  <div className="text-[10px] font-mono text-[#FF6B2C] uppercase">
                    SEASONAL SERVICING ADVICE
                  </div>
                  <div className="text-white font-semibold">
                    Periodic coil cleaning preserves heat dissipation under peak Lahore temperatures.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
