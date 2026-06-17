"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "ceramica": { EN: `Ceramics ${id}`, DE: `Keramik ${id}`, FR: `Céramique ${id}`, RO: `Ceramică ${id}`, IT: `Ceramica ${id}` },
      "fatade-blocuri": { EN: `Block Facade ${id}`, DE: `Blockfassade ${id}`, FR: `Façade Immeuble ${id}`, RO: `Fațadă Bloc ${id}`, IT: `Facciata Condominio ${id}` },
      "fatade-case": { EN: `House Facade ${id}`, DE: `Hausfassade ${id}`, FR: `Façade Maison ${id}`, RO: `Fațadă Casă ${id}`, IT: `Facciata Casa ${id}` },
      "structuri": { EN: `Structure ${id}`, DE: `Struktur ${id}`, FR: `Structure ${id}`, RO: `Structură ${id}`, IT: `Struttura ${id}` },
    };
    return titles[category]?.[language] || `Project ${id}`;
  };

  const getTranslatedTitle = (project: any) => {
    return generateTitle(project.baseCat, project.id);
  };

  const categories = [
    { id: "All", label: t.portfolio.categories.all },
    { id: "ceramica", label: t.portfolio.categories.ceramica },
    { id: "fatade-blocuri", label: t.portfolio.categories.fatadeBlocuri },
    { id: "fatade-case", label: t.portfolio.categories.fatadeCase },
    { id: "structuri", label: t.portfolio.categories.structuri },
  ];

  const projects = [
    { id: 1, title: "Project 1", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-1.jpeg", size: "small" },
    { id: 2, title: "Project 2", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-2.jpeg", size: "small" },
    { id: 3, title: "Project 3", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-3.jpeg", size: "small" },
    { id: 4, title: "Project 4", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-4.jpeg", size: "small" },
    { id: 5, title: "Project 5", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-5.jpeg", size: "small" },
    { id: 6, title: "Project 6", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-6.jpeg", size: "small" },
    { id: 7, title: "Project 7", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-7.jpeg", size: "small" },
    { id: 8, title: "Project 8", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-8.jpeg", size: "small" },
    { id: 9, title: "Project 9", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-9.jpeg", size: "small" },
    { id: 10, title: "Project 10", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-10.jpeg", size: "small" },
    { id: 11, title: "Project 11", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-11.jpeg", size: "small" },
    { id: 12, title: "Project 12", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-12.jpeg", size: "small" },
    { id: 13, title: "Project 13", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-13.jpeg", size: "small" },
    { id: 14, title: "Project 14", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-14.jpeg", size: "small" },
    { id: 15, title: "Project 15", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-15.jpeg", size: "small" },
    { id: 16, title: "Project 16", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-16.jpeg", size: "small" },
    { id: 17, title: "Project 17", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-17.jpeg", size: "small" },
    { id: 18, title: "Project 18", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-18.jpeg", size: "small" },
    { id: 19, title: "Project 19", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-19.jpeg", size: "small" },
    { id: 20, title: "Project 20", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-20.jpeg", size: "small" },
    { id: 21, title: "Project 21", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-21.jpeg", size: "small" },
    { id: 22, title: "Project 22", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-22.jpeg", size: "small" },
    { id: 23, title: "Project 23", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-23.jpeg", size: "small" },
    { id: 24, title: "Project 24", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-24.jpeg", size: "small" },
    { id: 25, title: "Project 25", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-25.jpeg", size: "small" },
    { id: 26, title: "Project 26", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-26.jpeg", size: "small" },
    { id: 27, title: "Project 27", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-27.jpeg", size: "small" },
    { id: 28, title: "Project 28", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-28.jpeg", size: "small" },
    { id: 29, title: "Project 29", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-1.jpeg", size: "small" },
    { id: 30, title: "Project 30", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-2.jpeg", size: "small" },
    { id: 31, title: "Project 31", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-3.jpeg", size: "small" },
    { id: 32, title: "Project 32", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-4.jpeg", size: "small" },
    { id: 33, title: "Project 33", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-5.jpeg", size: "small" },
    { id: 34, title: "Project 34", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-6.jpeg", size: "small" },
    { id: 35, title: "Project 35", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-7.jpeg", size: "small" },
    { id: 36, title: "Project 36", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-8.jpeg", size: "small" },
    { id: 37, title: "Project 37", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-9.jpeg", size: "small" },
    { id: 38, title: "Project 38", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-10.jpeg", size: "small" },
    { id: 39, title: "Project 39", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-11.jpeg", size: "small" },
    { id: 40, title: "Project 40", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-12.jpeg", size: "small" },
    { id: 41, title: "Project 41", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-13.jpeg", size: "small" },
    { id: 42, title: "Project 42", baseCat: "fatade-blocuri", category: "fatade-blocuri", img: "/images/fatade-blocuri/fatade-blocuri-14.jpeg", size: "small" },
    { id: 43, title: "Project 43", baseCat: "fatade-case", category: "fatade-case", img: "/images/fatade-case/fatade-case-1.jpeg", size: "small" },
    { id: 44, title: "Project 44", baseCat: "fatade-case", category: "fatade-case", img: "/images/fatade-case/fatade-case-2.jpeg", size: "small" },
    { id: 45, title: "Project 45", baseCat: "fatade-case", category: "fatade-case", img: "/images/fatade-case/fatade-case-3.jpeg", size: "small" },
    { id: 46, title: "Project 46", baseCat: "fatade-case", category: "fatade-case", img: "/images/fatade-case/fatade-case-4.jpeg", size: "small" },
    { id: 47, title: "Project 47", baseCat: "fatade-case", category: "fatade-case", img: "/images/fatade-case/fatade-case-5.jpeg", size: "small" },
  ];

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          {/* Changed grid-cols-1 to grid-cols-3 for mobile, very small gap */}
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
            {filtered.map((project, i) => {
              const filterObj = categories.find(f => f.id === project.category);
              return (
                <AnimatedSection
                  key={project.id}
                  animation="fade-up"
                  delay={i * 0.03}
                  className={`group cursor-pointer ${
                    project.size === "large" ? "col-span-3 md:col-span-2 lg:col-span-2" : "col-span-1"
                  }`}
                >
                  {/* Changed aspect ratios for mobile vs desktop */}
                  <div 
                    onClick={() => openLightbox(i)}
                    className={`relative overflow-hidden ${project.size === "large" ? "aspect-[16/9]" : "aspect-square md:aspect-[4/3]"}`}
                  >
                    <Image
                      src={project.img}
                      alt={getTranslatedTitle(project)}
                      fill
                      className="object-cover md:group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 md:group-hover:bg-charcoal/50 transition-colors duration-500" />
                    
                    {/* Hover text only visible on desktop */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 translate-y-4 md:group-hover:translate-y-0 hidden md:flex">
                      <span className="text-gold-ochre text-xs font-semibold tracking-widest uppercase mb-1">
                        {filterObj ? filterObj.label : project.category}
                      </span>
                      <h3 className="text-pure-white font-bold text-lg">{getTranslatedTitle(project)}</h3>
                    </div>
                  </div>
                  
                  {/* Title under image only visible on desktop */}
                  <div className="pt-4 pb-2 border-b border-outline-variant/20 hidden md:flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-charcoal text-base mb-1">{getTranslatedTitle(project)}</h3>
                    </div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-gold-ochre whitespace-nowrap ml-4">
                      {filterObj ? filterObj.label : project.category}
                    </span>
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
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gold-ochre p-4 z-50 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {/* Prev button */}
          <button 
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gold-ochre p-2 md:p-4 z-50 transition-colors"
            onClick={prevImage}
            aria-label="Previous"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          {/* Main Image Container */}
          <div 
            className="relative w-full h-[70vh] md:h-[85vh] max-w-6xl mx-auto px-16 md:px-24 flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].img}
              alt={getTranslatedTitle(filtered[lightboxIndex])}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next button */}
          <button 
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gold-ochre p-2 md:p-4 z-50 transition-colors"
            onClick={nextImage}
            aria-label="Next"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          
          {/* Caption */}
          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center px-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold text-lg md:text-xl text-white mb-1">
              {getTranslatedTitle(filtered[lightboxIndex])}
            </h3>
            <p className="text-white/60 text-sm tracking-widest uppercase">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
