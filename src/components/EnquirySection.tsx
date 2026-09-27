import React, { useState, useEffect, useMemo } from "react";
import { MessageCircle, Phone, ArrowRight, Copy, Terminal, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

interface EnquirySectionProps {
  initialService?: string;
  initialDetail?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialService,
  initialDetail,
}) => {
  const [selectedService, setSelectedService] = useState<string>("AC REPAIR");
  const [selectedDetail, setSelectedDetail] = useState<string>("AC not cooling");
  const [customDetailText, setCustomDetailText] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [selectedTime, setSelectedTime] = useState<string>("Morning (9 AM – 12 PM)");
  const [customerName, setCustomerName] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const referenceCode = useMemo(() => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `MCS-${randomNum}`;
  }, []);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialDetail) {
      setSelectedDetail(initialDetail);
    }
  }, [initialDetail]);

  const serviceOptions = [
    "AC REPAIR",
    "GAS LEAK REPAIR",
    "AC SERVICING",
    "AC INSTALLATION",
    "NOT SURE",
  ];

  const detailOptions = [
    "AC not cooling",
    "Water leakage",
    "Noise",
    "Installation requirement",
    "Annual servicing",
    "Other",
  ];

  const dayOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Today",
    "Tomorrow",
  ];

  const timeOptions = [
    "Morning (9 AM – 12 PM)",
    "Afternoon (12 PM – 4 PM)",
    "Evening (4 PM – 7 PM)",
    "Flexible",
  ];

  const effectiveDetail =
    selectedDetail === "Other" && customDetailText.trim().length > 0
      ? customDetailText.trim()
      : selectedDetail;

  const generatedMessage = useMemo(() => {
    const greeting = "Assalam o Alaikum, I’d like to enquire about Madina Cooling Service Point.";
    const namePart = customerName.trim() ? ` My name is ${customerName.trim()}.` : "";
    const servicePart = ` I need help with ${selectedService}.`;
    const detailPart = ` My concern is ${effectiveDetail}.`;
    const dayPart = ` Preferred day: ${selectedDay}.`;
    const timePart = ` Preferred time: ${selectedTime}.`;
    const closing = ` Ref: ${referenceCode}. Please let me know the available options.`;

    return `${greeting}${namePart}${servicePart}${detailPart}${dayPart}${timePart}${closing}`;
  }, [customerName, selectedService, effectiveDetail, selectedDay, selectedTime, referenceCode]);

  const encodedWhatsAppUrl = useMemo(() => {
    return `https://wa.me/923454805813?text=${encodeURIComponent(generatedMessage)}`;
  }, [generatedMessage]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#121820] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 tech-border-b gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] mb-2 font-semibold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>13 // DIRECT ENQUIRY TERMINAL</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Tell us what your AC needs.
            </h2>
          </div>

          <div className="text-xs font-mono text-[#9CA3AF] space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-status" />
              <span className="text-white font-bold">Direct WhatsApp Transmission</span>
            </div>
            <div>Ref Session: <span className="font-bold text-[#FF6B2C]">{referenceCode}</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 5-Step Selector Form */}
          <div className="lg:col-span-7 bg-[#18222C] p-6 sm:p-8 tech-border space-y-7 shadow-2xl">
            {/* STEP 1: What do you need? */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#FF6B2C] text-black font-bold flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span>What do you need?</span>
                </label>
                <span className="text-[10px] font-mono text-[#FF6B2C]">REQUIRED</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedService(opt)}
                    className={`px-3 py-2.5 text-xs font-semibold text-left transition-colors tech-border ${
                      selectedService === opt
                        ? "bg-[#FF6B2C] text-black font-bold border-[#FF6B2C]"
                        : "bg-[#121820] text-[#9CA3AF] hover:text-white hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: Optional Details */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#FF6B2C] text-black font-bold flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span>Optional Details & Symptoms</span>
                </label>
                <span className="text-[10px] font-mono text-[#9CA3AF]">NO REMOTE DIAGNOSIS</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono">
                {detailOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedDetail(opt)}
                    className={`px-3 py-2 text-xs font-medium text-left transition-colors tech-border ${
                      selectedDetail === opt
                        ? "bg-white text-black font-bold border-white"
                        : "bg-[#121820] text-[#9CA3AF] hover:text-white hover:border-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {selectedDetail === "Other" && (
                <div className="pt-2">
                  <input
                    type="text"
                    placeholder="Briefly state observed issue (e.g. odor, tripped breaker)..."
                    value={customDetailText}
                    onChange={(e) => setCustomDetailText(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#121820] text-white tech-border focus:outline-none focus:border-[#FF6B2C] font-mono"
                  />
                </div>
              )}
            </div>

            {/* STEP 3 & STEP 4: Day & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#FF6B2C] text-black font-bold flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span>Preferred Day</span>
                </label>
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-[#121820] text-white tech-border focus:outline-none focus:border-[#FF6B2C] font-mono"
                >
                  {dayOptions.map((d) => (
                    <option key={d} value={d} className="bg-[#121820] text-white">
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#FF6B2C] text-black font-bold flex items-center justify-center text-[10px]">
                    4
                  </span>
                  <span>Preferred Time</span>
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-[#121820] text-white tech-border focus:outline-none focus:border-[#FF6B2C] font-mono"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t} className="bg-[#121820] text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* STEP 5: Name */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-mono uppercase tracking-wider font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 bg-[#FF6B2C] text-black font-bold flex items-center justify-center text-[10px]">
                  5
                </span>
                <span>Your Name (Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Subhan, Hanzala, Tariq"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-[#121820] text-white tech-border focus:outline-none focus:border-[#FF6B2C] font-mono"
              />
            </div>

            {/* Restrained Trust Observation */}
            <div className="p-3 bg-[#121820] tech-border border-l-2 border-l-[#FF6B2C] text-xs text-[#9CA3AF] font-body">
              <span className="text-white font-semibold">Review Observation: </span>
              <span>Customers frequently mention reasonable charges in Google feedback.</span>
            </div>
          </div>

          {/* Right Column: Dynamic WhatsApp Message Terminal Preview */}
          <div className="lg:col-span-5 bg-[#0C1015] p-6 sm:p-8 tech-border flex flex-col justify-between space-y-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] pb-4 tech-border-b">
                <span>WHATSAPP TELEMETRY PAYLOAD</span>
                <span className="text-[#FF6B2C] font-bold">READY</span>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-[#9CA3AF]">ENQUIRY REFERENCE</span>
                <span className="text-white font-bold bg-[#18222C] px-2 py-0.5 tech-border">
                  {referenceCode}
                </span>
              </div>

              {/* Message Payload Box */}
              <div className="mt-4 p-4 bg-[#141C24] tech-border font-mono text-xs text-white leading-relaxed">
                <p>"{generatedMessage}"</p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="mt-3 text-[11px] text-[#FF6B2C] hover:text-white flex items-center gap-1.5 focus:outline-none transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? "Copied to clipboard!" : "Copy Payload"}</span>
                </button>
              </div>

              <p className="mt-4 text-[11px] text-[#9CA3AF] leading-normal font-body">
                This prepares your enquiry for WhatsApp. Service timing must be confirmed by the business.
              </p>
            </div>

            {/* Direct Send Buttons */}
            <div className="space-y-3 pt-4 tech-border-t">
              <a
                href={encodedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full py-3 bg-[#18222C] hover:bg-[#202D3A] text-white text-xs font-mono uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 tech-border"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>Call Now ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
