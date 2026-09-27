import React from "react";
import { Star, Shield, ExternalLink, MapPin } from "lucide-react";
import { BUSINESS_INFO, REVIEW_THEMES, CUSTOMER_REVIEWS } from "../data/businessData";

export const TrustAndReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0C1015] tech-border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 tech-border-b gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF6B2C] mb-2 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF6B2C]" />
              <span>07 & 08 // VERIFIED REPUTATION DATA</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Professional work. Clear communication.
            </h2>
          </div>

          {/* Aggregate Rating Console */}
          <div className="flex items-center gap-4 bg-[#141C24] p-4 tech-border">
            <div className="flex flex-col items-center justify-center pr-4 tech-border-r">
              <span className="font-mono text-3xl font-extrabold text-white">
                {BUSINESS_INFO.rating}
              </span>
              <div className="flex items-center text-[#FF6B2C] -mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FF6B2C]" />
                ))}
              </div>
            </div>

            <div className="text-xs text-[#9CA3AF]">
              <span className="font-mono font-bold text-white block uppercase">
                {BUSINESS_INFO.reviewCount} GOOGLE REVIEWS
              </span>
              <span>PIA Housing Scheme · Lahore</span>
              <a
                href={BUSINESS_INFO.mapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B2C] hover:underline flex items-center gap-1 font-mono text-[10px] mt-1"
              >
                <span>Read on Google Maps Profile</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Review Topic Metrics */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] font-semibold mb-4">
            RECURRING GOOGLE REVIEW TOPICS (SUPPLIED SCRAPE COUNTS):
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEW_THEMES.map((theme) => (
              <div
                key={theme.topic}
                className="p-5 bg-[#141C24] tech-border flex flex-col justify-between hover:border-[#FF6B2C]/50 transition-colors"
              >
                <div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FF6B2C] mb-1">
                    {theme.mentions}
                  </div>
                  <div className="font-mono text-xs font-bold text-white tracking-wider uppercase mb-2">
                    {theme.topic}
                  </div>
                </div>
                <div className="text-xs text-[#9CA3AF] leading-normal pt-2 tech-border-t font-body">
                  {theme.context}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-mono text-[#9CA3AF]/80 mt-3">
            * These numbers represent Google review-topic counts extracted from customer reviews. They are presented as review themes rather than percentage claims.
          </p>
        </div>

        {/* Verbatim Documented Customer Reviews */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold mb-4">
            DOCUMENTED CUSTOMER EXPERIENCES (GOOGLE CUSTOMER REVIEWS)
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#141C24] p-6 sm:p-7 tech-border flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Source tag */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] pb-3 tech-border-b">
                    <span className="uppercase text-[#FF6B2C] font-bold">
                      {rev.source}
                    </span>
                    <div className="flex items-center text-[#FF6B2C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#FF6B2C]" />
                      ))}
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display font-bold text-base text-white leading-snug">
                    “{rev.highlight}”
                  </h3>

                  {/* Verbatim Feedback */}
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-body">
                    {rev.feedback}
                  </p>
                </div>

                {/* Author & tags */}
                <div className="pt-4 tech-border-t space-y-2">
                  <div className="font-semibold text-sm text-white font-mono">
                    {rev.author}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rev.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase text-[#9CA3AF] bg-[#0C1015] px-2 py-0.5 tech-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integrity Note */}
          <div className="mt-8 p-4 bg-[#141C24] tech-border text-xs text-[#9CA3AF] leading-normal flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
            <span className="font-body">
              <strong>Review Integrity Note:</strong> The feedback above reflects genuine individual customer experiences on Google. They are not guarantees of identical outcomes, prices, or timelines for future jobs. Each AC system is quoted and scheduled based on on-site inspection.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
