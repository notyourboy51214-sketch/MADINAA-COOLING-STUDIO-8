import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "../data/businessData";
import { Play, ZoomIn, X, Camera } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = ["ALL", "EXTERIOR", "INSIDE", "VIDEOS", "BY OWNER"];

  const filteredItems =
    activeCategory === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#121820] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 tech-border-b gap-6 mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] mb-2 font-semibold flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span>11 // DOCUMENTARY GALLERY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Real business documentation.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-[#0C1015] p-1 tech-border">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#FF6B2C] text-black font-bold"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group cursor-pointer bg-[#18222C] tech-border overflow-hidden flex flex-col justify-between transition-all hover:border-[#FF6B2C]/70 shadow-lg"
              >
                <div className="relative overflow-hidden aspect-4/3 bg-[#0C1015]">
                  <img
                    src={item.imagePath}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0C1015]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-[#FF6B2C] text-black shadow-lg">
                      {item.isVideoMock ? (
                        <Play className="w-5 h-5 fill-black" />
                      ) : (
                        <ZoomIn className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0C1015]/90 text-white text-[10px] font-mono uppercase tracking-wider tech-border">
                    {item.tag}
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-display font-bold text-sm text-white group-hover:text-[#FF6B2C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-normal font-body">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs font-mono text-[#9CA3AF]">
          DOCUMENTING PRACTICAL RESIDENTIAL & COMMERCIAL WORK IN LAHORE
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-[#0C1015]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full bg-[#141C24] tech-border overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-10 p-2 bg-[#0C1015] text-white hover:bg-[#FF6B2C] hover:text-black transition-colors tech-border"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-16/9 bg-[#0C1015]">
              <img
                src={activeModalItem.imagePath}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-2 bg-[#18222C]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B2C]">
                {activeModalItem.category} // {activeModalItem.tag}
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-body">
                {activeModalItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
