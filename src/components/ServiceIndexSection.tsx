import React from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle, Wrench, Gauge, Sparkles, Home } from "lucide-react";
import { SERVICES_INDEX, BUSINESS_INFO } from "../data/businessData";

interface ServiceIndexSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServiceIndexSection: React.FC<ServiceIndexSectionProps> = ({ onSelectService }) => {
  const handleScrollTo = (id: string, serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return Wrench;
      case 1:
        return Gauge;
      case 2:
        return Sparkles;
      default:
        return Home;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#121820] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Telemetry Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 tech-border-b gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] mb-2 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF6B2C]" />
              <span>02 // SERVICE DIRECTORY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Four practical service pillars.
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#9CA3AF] leading-relaxed font-body">
            Every customer arrives with a specific cooling scenario. We separate mechanical repair, gas-leak checking, seasonal servicing, and installation so you discuss the exact service required.
          </div>
        </div>

        {/* 4 Distinct Engineering Service Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_INDEX.map((service, idx) => {
            const targetAnchor = `#${service.id}`;
            const Icon = getServiceIcon(idx);

            const directWhatsAppUrl = `https://wa.me/923454805813?text=${encodeURIComponent(
              `Assalam o Alaikum, I would like to enquire about ${service.title} at Madina Cooling Service Point in Lahore.`
            )}`;

            return (
              <div
                key={service.number}
                className="bg-[#18222C] tech-border p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF6B2C]/60 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-4 tech-border-b mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white/30 group-hover:text-[#FF6B2C] transition-colors">
                      {service.number}
                    </span>
                    <div className="p-2.5 bg-[#121820] tech-border text-[#FF6B2C]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B2C] block mb-1">
                    {service.subtitle}
                  </span>

                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 font-body">
                    {service.description}
                  </p>

                  {/* Technical Signal Tags */}
                  <div className="space-y-2 mb-6">
                    {service.keySignals.map((signal) => (
                      <div key={signal} className="flex items-center gap-2 text-xs font-mono text-[#F3F4F6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B2C] shrink-0" />
                        <span>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-6 tech-border-t flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleScrollTo(targetAnchor, service.title)}
                    className="flex-1 px-4 py-2.5 bg-[#121820] hover:bg-[#202D3A] text-white text-xs font-mono font-bold uppercase tracking-wider tech-border inline-flex items-center justify-between transition-colors"
                  >
                    <span>{service.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B2C]" />
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors shadow-xs"
                    title={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
