"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

    const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "Finisaje Interioare": { EN: `Interior Finish ${id}`, DE: `Innenausbau ${id}`, FR: `Finition Intérieure ${id}`, RO: `Finisaj Interior ${id}`, IT: `Finitura Interni ${id}` },
      "Finisaje Exterioare": { EN: `Exterior Finish ${id}`, DE: `Außenausbau ${id}`, FR: `Finition Extérieure ${id}`, RO: `Finisaj Exterior ${id}`, IT: `Finitura Esterni ${id}` },
      "Constructii blocuri": { EN: `Apartment Building ${id}`, DE: `Wohnblock ${id}`, FR: `Immeuble ${id}`, RO: `Construcție Bloc ${id}`, IT: `Condominio ${id}` },
      "Constructii case": { EN: `Residential House ${id}`, DE: `Wohnhaus ${id}`, FR: `Maison Résidentielle ${id}`, RO: `Casă Rezidențială ${id}`, IT: `Casa Residenziale ${id}` },
    };
    return titles[category]?.[language] || `Project ${id}`;
  };

  const getTranslatedTitle = (project: any) => {
    return generateTitle(project.baseCat, project.id);
  };

  const categories = [
    { id: "All", label: t.portfolio.categories.all },
    { id: "Finisaje Interioare", label: t.portfolio.categories.finishesInt },
    { id: "Finisaje Exterioare", label: t.portfolio.categories.finishesExt },
    { id: "Constructii blocuri", label: t.portfolio.categories.blocks },
    { id: "Constructii case", label: t.portfolio.categories.houses },
  ];

  const projects = [
    { id: 1, title: "Project 1", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/apartamente/apartament-1.jpg", size: "large" },
    { id: 2, title: "Project 2", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/apartamente/apartament-10.jpg", size: "large" },
    { id: 3, title: "Project 3", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/apartamente/apartament-11.jpg", size: "small" },
    { id: 4, title: "Project 4", baseCat: "Constructii case", category: "Constructii case", img: "/images/apartamente/apartament-12.jpg", size: "small" },
    { id: 5, title: "Project 5", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/apartamente/apartament-2.jpg", size: "small" },
    { id: 6, title: "Project 6", baseCat: "Constructii case", category: "Constructii case", img: "/images/apartamente/apartament-3.jpg", size: "small" },
    { id: 7, title: "Project 7", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/apartamente/apartament-4.jpg", size: "small" },
    { id: 8, title: "Project 8", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/apartamente/apartament-5.jpg", size: "small" },
    { id: 9, title: "Project 9", baseCat: "Constructii case", category: "Constructii case", img: "/images/apartamente/apartament-6.jpg", size: "small" },
    { id: 10, title: "Project 10", baseCat: "Constructii case", category: "Constructii case", img: "/images/apartamente/apartament-7.jpg", size: "small" },
    { id: 11, title: "Project 11", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/apartamente/apartament-8.jpg", size: "small" },
    { id: 12, title: "Project 12", baseCat: "Constructii case", category: "Constructii case", img: "/images/apartamente/apartament-9.jpg", size: "small" },
    { id: 13, title: "Project 13", baseCat: "Constructii case", category: "Constructii case", img: "/images/case/casa-1.jpg", size: "small" },
    { id: 14, title: "Project 14", baseCat: "Finisaje Exterioare", category: "Finisaje Exterioare", img: "/images/case/casa-2.jpg", size: "large" },
    { id: 15, title: "Project 15", baseCat: "Finisaje Exterioare", category: "Finisaje Exterioare", img: "/images/case/casa-3.jpg", size: "small" },
    { id: 16, title: "Project 16", baseCat: "Constructii case", category: "Constructii case", img: "/images/case/casa-4.jpg", size: "small" },
    { id: 17, title: "Project 17", baseCat: "Constructii case", category: "Constructii case", img: "/images/case/casa-5.jpg", size: "small" },
    { id: 18, title: "Project 18", baseCat: "Constructii case", category: "Constructii case", img: "/images/case/casa-6.jpg", size: "small" },
    { id: 19, title: "Project 19", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/case/casa-7.jpg", size: "small" },
    { id: 20, title: "Project 20", baseCat: "Constructii case", category: "Constructii case", img: "/images/case/casa-8.jpg", size: "small" },
    { id: 21, title: "Project 21", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-1.jpg", size: "large" },
    { id: 22, title: "Project 22", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/constructii/constructie-10.jpg", size: "small" },
    { id: 23, title: "Project 23", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-11.jpg", size: "small" },
    { id: 24, title: "Project 24", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-12.jpg", size: "small" },
    { id: 25, title: "Project 25", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/constructii/constructie-13.jpg", size: "small" },
    { id: 26, title: "Project 26", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/constructii/constructie-14.jpg", size: "small" },
    { id: 27, title: "Project 27", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/constructii/constructie-15.jpg", size: "small" },
    { id: 28, title: "Project 28", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/constructii/constructie-16.jpg", size: "small" },
    { id: 29, title: "Project 29", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-17.jpg", size: "small" },
    { id: 30, title: "Project 30", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-18.jpg", size: "small" },
    { id: 31, title: "Project 31", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-2.jpg", size: "small" },
    { id: 32, title: "Project 32", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-3.jpg", size: "small" },
    { id: 33, title: "Project 33", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-4.jpg", size: "small" },
    { id: 34, title: "Project 34", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-5.jpg", size: "small" },
    { id: 35, title: "Project 35", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-6.jpg", size: "small" },
    { id: 36, title: "Project 36", baseCat: "Constructii case", category: "Constructii case", img: "/images/constructii/constructie-7.jpg", size: "small" },
    { id: 37, title: "Project 37", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/constructii/constructie-8.jpg", size: "small" },
    { id: 38, title: "Project 38", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/constructii/constructie-9.jpg", size: "small" },
    { id: 39, title: "Project 39", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-1.jpg", size: "small" },
    { id: 40, title: "Project 40", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-10.jpg", size: "small" },
    { id: 41, title: "Project 41", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-11.jpg", size: "small" },
    { id: 42, title: "Project 42", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-12.jpg", size: "small" },
    { id: 43, title: "Project 43", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-13.jpg", size: "small" },
    { id: 44, title: "Project 44", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-14.jpg", size: "small" },
    { id: 45, title: "Project 45", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-15.jpg", size: "small" },
    { id: 46, title: "Project 46", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-16.jpg", size: "small" },
    { id: 47, title: "Project 47", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-17.jpg", size: "small" },
    { id: 48, title: "Project 48", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-18.jpg", size: "large" },
    { id: 49, title: "Project 49", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-19.jpg", size: "small" },
    { id: 50, title: "Project 50", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-2.jpg", size: "small" },
    { id: 51, title: "Project 51", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-20.jpg", size: "small" },
    { id: 52, title: "Project 52", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-21.jpg", size: "small" },
    { id: 53, title: "Project 53", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-22.jpg", size: "small" },
    { id: 54, title: "Project 54", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-23.jpg", size: "small" },
    { id: 55, title: "Project 55", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-24.jpg", size: "small" },
    { id: 56, title: "Project 56", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-25.jpg", size: "small" },
    { id: 57, title: "Project 57", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-26.jpg", size: "small" },
    { id: 58, title: "Project 58", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/finisaje/finisaj-27.jpg", size: "small" },
    { id: 59, title: "Project 59", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-28.jpg", size: "small" },
    { id: 60, title: "Project 60", baseCat: "Finisaje Exterioare", category: "Finisaje Exterioare", img: "/images/finisaje/finisaj-29.jpg", size: "small" },
    { id: 61, title: "Project 61", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-3.jpg", size: "small" },
    { id: 62, title: "Project 62", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-30.jpg", size: "small" },
    { id: 63, title: "Project 63", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-31.jpg", size: "small" },
    { id: 64, title: "Project 64", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-32.jpg", size: "small" },
    { id: 65, title: "Project 65", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-33.jpg", size: "small" },
    { id: 66, title: "Project 66", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-4.jpg", size: "small" },
    { id: 67, title: "Project 67", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-5.jpg", size: "small" },
    { id: 68, title: "Project 68", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-6.jpg", size: "small" },
    { id: 69, title: "Project 69", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-7.jpg", size: "small" },
    { id: 70, title: "Project 70", baseCat: "Constructii case", category: "Constructii case", img: "/images/finisaje/finisaj-8.jpg", size: "small" },
    { id: 71, title: "Project 71", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/finisaje/finisaj-9.jpg", size: "small" },
    { id: 72, title: "Project 72", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-1.jpg", size: "small" },
    { id: 73, title: "Project 73", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-10.jpg", size: "small" },
    { id: 74, title: "Project 74", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-11.jpg", size: "small" },
    { id: 75, title: "Project 75", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-12.jpg", size: "small" },
    { id: 76, title: "Project 76", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-13.jpg", size: "small" },
    { id: 77, title: "Project 77", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-14.jpg", size: "small" },
    { id: 78, title: "Project 78", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-15.jpg", size: "small" },
    { id: 79, title: "Project 79", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-16.jpg", size: "small" },
    { id: 80, title: "Project 80", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-17.jpg", size: "small" },
    { id: 81, title: "Project 81", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-18.jpg", size: "small" },
    { id: 82, title: "Project 82", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-19.jpg", size: "small" },
    { id: 83, title: "Project 83", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-2.jpg", size: "small" },
    { id: 84, title: "Project 84", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-20.jpg", size: "small" },
    { id: 85, title: "Project 85", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-21.jpg", size: "small" },
    { id: 86, title: "Project 86", baseCat: "Finisaje Exterioare", category: "Finisaje Exterioare", img: "/images/podele/podea-22.jpg", size: "small" },
    { id: 87, title: "Project 87", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-23.jpg", size: "small" },
    { id: 88, title: "Project 88", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-24.jpg", size: "small" },
    { id: 89, title: "Project 89", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-25.jpg", size: "small" },
    { id: 90, title: "Project 90", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-26.jpg", size: "small" },
    { id: 91, title: "Project 91", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-27.jpg", size: "small" },
    { id: 92, title: "Project 92", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-28.jpg", size: "small" },
    { id: 93, title: "Project 93", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-29.jpg", size: "small" },
    { id: 94, title: "Project 94", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-3.jpg", size: "small" },
    { id: 95, title: "Project 95", baseCat: "Finisaje Exterioare", category: "Finisaje Exterioare", img: "/images/podele/podea-30.jpg", size: "small" },
    { id: 96, title: "Project 96", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-31.jpg", size: "small" },
    { id: 97, title: "Project 97", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-32.jpg", size: "small" },
    { id: 98, title: "Project 98", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-33.jpg", size: "small" },
    { id: 99, title: "Project 99", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-34.jpg", size: "small" },
    { id: 100, title: "Project 100", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-35.jpg", size: "small" },
    { id: 101, title: "Project 101", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-36.jpg", size: "small" },
    { id: 102, title: "Project 102", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-37.jpg", size: "small" },
    { id: 103, title: "Project 103", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-38.jpg", size: "small" },
    { id: 104, title: "Project 104", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-39.jpg", size: "small" },
    { id: 105, title: "Project 105", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-4.jpg", size: "small" },
    { id: 106, title: "Project 106", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-40.jpg", size: "small" },
    { id: 107, title: "Project 107", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-41.jpg", size: "small" },
    { id: 108, title: "Project 108", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-42.jpg", size: "small" },
    { id: 109, title: "Project 109", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-43.jpg", size: "small" },
    { id: 110, title: "Project 110", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-44.jpg", size: "small" },
    { id: 111, title: "Project 111", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-45.jpg", size: "small" },
    { id: 112, title: "Project 112", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-46.jpg", size: "small" },
    { id: 113, title: "Project 113", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-47.jpg", size: "small" },
    { id: 114, title: "Project 114", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-48.jpg", size: "small" },
    { id: 115, title: "Project 115", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-49.jpg", size: "small" },
    { id: 116, title: "Project 116", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-5.jpg", size: "small" },
    { id: 117, title: "Project 117", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-50.jpg", size: "small" },
    { id: 118, title: "Project 118", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-51.jpg", size: "small" },
    { id: 119, title: "Project 119", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-52.jpg", size: "small" },
    { id: 120, title: "Project 120", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-53.jpg", size: "small" },
    { id: 121, title: "Project 121", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-54.jpg", size: "small" },
    { id: 122, title: "Project 122", baseCat: "Constructii blocuri", category: "Constructii blocuri", img: "/images/podele/podea-55.jpg", size: "small" },
    { id: 123, title: "Project 123", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-6.jpg", size: "small" },
    { id: 124, title: "Project 124", baseCat: "Constructii case", category: "Constructii case", img: "/images/podele/podea-7.jpg", size: "small" },
    { id: 125, title: "Project 125", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-8.jpg", size: "large" },
    { id: 126, title: "Project 126", baseCat: "Finisaje Interioare", category: "Finisaje Interioare", img: "/images/podele/podea-9.jpg", size: "small" },
  ];



  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
      <section className="py-8 bg-surface border-b border-outline-variant/20 sticky top-20 z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
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
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => {
              const filterObj = categories.find(f => f.id === project.category);
              return (
                <AnimatedSection
                  key={project.id}
                  animation="fade-up"
                  delay={i * 0.06}
                  className={`group cursor-pointer ${
                    project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${project.size === "large" ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    <Image
                      src={project.img}
                      alt={getTranslatedTitle(project)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-gold-ochre text-xs font-semibold tracking-widest uppercase mb-1">
                        {filterObj ? filterObj.label : project.category}
                      </span>
                      <h3 className="text-pure-white font-bold text-lg">{getTranslatedTitle(project)}</h3>
                    </div>
                  </div>
                  <div className="pt-4 pb-2 border-b border-outline-variant/20 flex items-start justify-between">
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
    </div>
  );
}
