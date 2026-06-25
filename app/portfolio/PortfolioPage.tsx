"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

import termosistemData from "@/data/portfolio/termosistem.json";
import finisajeData from "@/data/portfolio/finisaje.json";
import ceramicaData from "@/data/portfolio/ceramica.json";
import structuriData from "@/data/portfolio/structuri.json";

type Photo = { image: string; title: string };

const portfolioData: Record<string, { photos: Photo[] }> = {
  termosistem: termosistemData,
  finisaje: finisajeData,
  ceramica: ceramicaData,
  structuri: structuriData,
};

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("termosistem");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: "termosistem", label: t.portfolio.categories.termosistem },
    { id: "finisaje", label: t.portfolio.categories.finisaje },
    { id: "ceramica", label: t.portfolio.categories.ceramica },
    { id: "structuri", label: t.portfolio.categories.structuri },
  ];

  const filtered: Photo[] = portfolioData[activeCategory]?.photos ?? [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <AnimatedSection animation="fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.portfolio.tag}
            </span>
            <h1 className="text-display-xl-mobile md:text-display-xl font-bold text-charcoal mb-6">
              {t.portfolio.title}
            </h1>
            <p className="text-body-base text-on-surface-variant leading-relaxed" style={{ maxWidth: "640px", margin: "0 auto" }}>
              {t.portfolio.desc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 md:py-8 bg-surface border-b border-outline-variant/20 sticky top-20 z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-wrap gap-2 md:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase px-3 py-2 md:px-6 md:py-3 transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-pure-white"
                    : "bg-transparent text-on-surface-variant border border-outline-variant/40 hover:border-charcoal hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 md:py-24 bg-surface">
        <div className="max-w-content mx-auto px-1 md:px-margin-desktop">
          <div key={activeCategory} className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
            {filtered.map((photo, i) => {
              const isLarge = i === 0;
              const catLabel = categories.find((c) => c.id === activeCategory)?.label ?? activeCategory;
              return (
                <AnimatedSection
                  key={`${activeCategory}-${i}`}
                  animation="fade-up"
                  delay={i * 0.03}
                  className={`group cursor-pointer ${isLarge ? "col-span-3 md:col-span-2 lg:col-span-2" : "col-span-1"}`}
                >
                  <div
                    onClick={() => openLightbox(i)}
                    className={`relative overflow-hidden ${isLarge ? "aspect-[16/9]" : "aspect-square md:aspect-[4/3]"}`}
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover md:group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 md:group-hover:bg-charcoal/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 translate-y-4 md:group-hover:translate-y-0 hidden md:flex">
                      <span className="text-gold-ochre text-xs font-semibold tracking-widest uppercase mb-1">{catLabel}</span>
                      <h3 className="text-pure-white font-bold text-lg">{photo.title}</h3>
                    </div>
                  </div>
                  <div className="pt-4 pb-2 border-b border-outline-variant/20 hidden md:flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-charcoal text-base mb-1">{photo.title}</h3>
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-gold-ochre whitespace-nowrap ml-4">{catLabel}</span>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white hover:text-gold-ochre p-4 z-50 transition-colors" onClick={closeLightbox} aria-label="Close">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gold-ochre p-2 md:p-4 z-50 transition-colors" onClick={prevImage} aria-label="Previous">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="relative w-full h-[70vh] md:h-[85vh] max-w-6xl mx-auto px-16 md:px-24 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title} fill className="object-contain" priority />
          </div>

          <button className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gold-ochre p-2 md:p-4 z-50 transition-colors" onClick={nextImage} aria-label="Next">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center px-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold text-lg md:text-xl text-white mb-1">{filtered[lightboxIndex].title}</h3>
            <p className="text-white/60 text-sm tracking-widest uppercase">{lightboxIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
