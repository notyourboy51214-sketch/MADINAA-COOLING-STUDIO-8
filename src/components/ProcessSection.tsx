import React from "react";
import { MessageSquare, PhoneCall, CalendarCheck, CheckSquare, Info } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "DESCRIBE",
      desc: "Tell us what is happening.",
      detail:
        "Select the observed symptom—loss of cooling, water drip, unusual noise, or installation scope—via WhatsApp or telephone.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "DISCUSS",
      desc: "Share the relevant service type.",
      detail:
        "We clarify whether the job is an on-site physical check, refrigerant leak inspection, periodic servicing, or unit fitout.",
      icon: PhoneCall,
    },
    {
      step: "03",
      title: "CONFIRM",
      desc: "The business confirms timing & details.",
      detail:
        "The technician reviews current scheduling in PIA Housing Scheme and agrees on a mutual day and visit window with you.",
      icon: CalendarCheck,
    },
    {
      step: "04",
      title: "SERVICE",
      desc: "Proceed with the agreed service.",
      detail:
        "On-site assessment takes place. Work begins once the scope and charges are transparently understood.",
      icon: CheckSquare,
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#121820] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Telemetry */}
        <div className="pb-8 tech-border-b mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] mb-2 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FF6B2C]" />
            <span>09 // DISPATCH PROTOCOL</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            How the request works.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9CA3AF] max-w-2xl font-body">
            A practical four-stage journey from your initial message to verified on-site service.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="bg-[#18222C] p-6 sm:p-7 tech-border flex flex-col justify-between hover:border-[#FF6B2C]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-extrabold text-[#FF6B2C]">
                      {st.step}
                    </span>
                    <div className="p-2 bg-[#121820] tech-border text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-mono font-bold text-xs tracking-wider uppercase text-white mb-1">
                    {st.title}
                  </h3>
                  <div className="text-sm font-semibold text-white mb-3 font-display">
                    {st.desc}
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed font-body">
                    {st.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 tech-border-t text-[10px] font-mono text-[#9CA3AF] uppercase">
                  Stage {st.step} Protocol
                </div>
              </div>
            );
          })}
        </div>

        {/* Confirmation Transparency Notice */}
        <div className="mt-8 p-4 bg-[#18222C] tech-border border-l-2 border-l-[#FF6B2C] flex items-start gap-3 text-xs text-[#9CA3AF]">
          <Info className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
          <p className="leading-normal font-body">
            <strong>Important Notice:</strong> Sending a WhatsApp enquiry or inquiry form does not automatically create a confirmed appointment. All service visits and timings must be mutually confirmed by the business based on technician availability.
          </p>
        </div>
      </div>
    </section>
  );
};
