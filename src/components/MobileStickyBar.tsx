import React from "react";
import { MessageCircle, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessData";

export const MobileStickyBar: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C1015]/95 backdrop-blur-md tech-border-t py-2 px-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-lg mx-auto">
        {/* Request Button */}
        <button
          type="button"
          onClick={handleScrollToContact}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#18222C] text-white text-[10px] font-bold uppercase tracking-wider tech-border transition-colors active:bg-[#202D3A]"
          aria-label="Request service form"
        >
          <div className="flex items-center gap-0.5">
            <span>REQUEST</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-[#FF6B2C]" />
          </div>
        </button>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[10px] font-bold uppercase tracking-wider transition-colors active:opacity-90 shadow-md"
          aria-label="Chat on WhatsApp"
        >
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
            <span>WHATSAPP</span>
          </div>
        </a>

        {/* Call Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#FF6B2C] hover:bg-[#FF8652] text-black text-[10px] font-bold uppercase tracking-wider transition-colors active:opacity-90 shadow-md"
          aria-label="Direct Phone Call to +92 345 4805813"
        >
          <div className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>CALL</span>
          </div>
        </a>

        {/* Google Maps Profile Button */}
        <a
          href={BUSINESS_INFO.mapsProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#141C24] hover:bg-[#1E293B] text-white text-[10px] font-bold uppercase tracking-wider transition-colors active:opacity-90 tech-border"
          aria-label="Open Google Maps business profile"
        >
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>MAPS</span>
          </div>
        </a>
      </div>
    </div>
  );
};
