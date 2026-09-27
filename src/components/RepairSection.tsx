import React, { useState } from "react";
import { AlertCircle, ArrowRight, Wrench, Droplets, Volume2, HelpCircle, MessageCircle, Check } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface RepairSectionProps {
  onSelectSymptom?: (symptom: string) => void;
}

export const RepairSection: React.FC<RepairSectionProps> = ({ onSelectSymptom }) => {
  const [selectedIssue, setSelectedIssue] = useState<string>("NOT COOLING");

  const symptoms = [
    {
      id: "NOT COOLING",
      label: "Loss of Cooling",
      desc: "Airflow has lost temperature drop; room remains warm despite running unit.",
      inspectionCheck: "Compressor draw, capacitor microfarad rating, and thermal overload sensor check.",
      icon: Wrench,
    },
    {
      id: "LEAKING WATER",
      label: "Indoor Water Leakage",
      desc: "Moisture dripping from split casing or overflow from internal drainage canal.",
      inspectionCheck: "Drain slope evaluation, condensed tray flush, and insulation rupture inspection.",
      icon: Droplets,
    },
    {
      id: "MAKING UNUSUAL NOISE",
      label: "Abnormal Operating Noise",
      desc: "Rattling, squealing, buzzing, or heavy vibration from indoor fan or outdoor condenser.",
      inspectionCheck: "Fan blade balance check, rubber damper bushing wear, and bearing noise test.",
      icon: Volume2,
    },
    {
      id: "OTHER",
      label: "Electrical / Intermittent Fault",
      desc: "Circuit breaker tripping, remote sensor unresponsiveness, or sudden unit shutdown.",
      inspectionCheck: "Main PCB terminal connectivity, voltage variance inspection, and magnetic contactor check.",
      icon: HelpCircle,
    },
  ];

  const currentSymptomData = symptoms.find((s) => s.id === selectedIssue) || symptoms[0];

  const handleSelectAndProceed = (issueId: string) => {
    setSelectedIssue(issueId);
    if (onSelectSymptom) {
      onSelectSymptom(issueId);
    }
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const directWhatsAppUrl = `https://wa.me/923454805813?text=${encodeURIComponent(
    `Assalam o Alaikum, I need AC repair assistance from Madina Cooling Service Point in Lahore. The observed symptom is: ${currentSymptomData.label}. Please let me know technician availability.`
  )}`;

  return (
    <section id="repair" className="py-20 lg:py-28 bg-[#0C1015] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Telemetry */}
        <div className="flex items-center justify-between pb-6 tech-border-b mb-10 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#FF6B2C]">
            <Wrench className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">01 // REPAIR CONSOLE</span>
          </div>
          <span className="text-[#9CA3AF] uppercase">PRIMARY SERVICE CATEGORY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Technical Context & Policy */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              When the system isn’t behaving normally.
            </h2>

            <p className="text-base text-[#9CA3AF] leading-relaxed font-body">
              Air conditioners in Lahore face severe heat peaks and environmental dust. When an indoor blower or outdoor compressor experiences mechanical or electrical failure, clear symptom logging accelerates the technician’s diagnostic plan.
            </p>

            {/* Mandatory Non-Diagnosis Protocol Box */}
            <div className="p-4 bg-[#141C24] tech-border border-l-2 border-l-[#FF6B2C] text-xs text-[#9CA3AF] space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-white uppercase">
                <AlertCircle className="w-4 h-4 text-[#FF6B2C]" />
                <span>On-Site Physical Inspection Standard</span>
              </div>
              <p className="leading-relaxed font-body">
                Descriptions help the technician understand your enquiry. They do not replace an on-site assessment.
              </p>
            </div>

            <div className="p-4 bg-[#121820] tech-border space-y-2 text-xs font-mono">
              <div className="text-[#FF6B2C] uppercase font-bold">Technician Service Base:</div>
              <div className="text-white">PIA Housing Scheme, Block E, Lahore</div>
              <div className="text-[#9CA3AF]">Direct Dispatch: +92 345 4805813</div>
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Selector */}
          <div className="lg:col-span-7 bg-[#141C24] tech-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 tech-border-b">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold">
                DIAGNOSTIC SYMPTOM SELECTOR
              </span>
              <span className="text-[11px] font-mono text-[#9CA3AF]">STEP 01</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {symptoms.map((symptom) => {
                const Icon = symptom.icon;
                const isSelected = selectedIssue === symptom.id;

                return (
                  <button
                    key={symptom.id}
                    type="button"
                    onClick={() => setSelectedIssue(symptom.id)}
                    className={`p-4 text-left tech-border transition-all ${
                      isSelected
                        ? "bg-[#1E293B] border-[#FF6B2C] shadow-lg"
                        : "bg-[#18222C] border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm tracking-wide text-white">
                        {symptom.label}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          isSelected ? "text-[#FF6B2C]" : "text-[#9CA3AF]"
                        }`}
                      />
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed font-body">
                      {symptom.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Protocol Output Preview */}
            <div className="p-4 bg-[#121820] tech-border space-y-2 text-xs font-mono">
              <div className="text-[#FF6B2C] uppercase tracking-wider font-bold">
                ON-SITE INSPECTION TARGET FOR "{currentSymptomData.label}":
              </div>
              <div className="text-white flex items-start gap-2">
                <Check className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                <span>{currentSymptomData.inspectionCheck}</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleSelectAndProceed(selectedIssue)}
                className="flex-1 py-3 px-5 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Complete Service Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Symptom</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
