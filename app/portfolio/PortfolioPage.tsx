"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("termosistem");

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const generateTitle = (category: string, id: number) => {
    const titles: Record<string, Record<string, string>> = {
      "termosistem": { EN: `Thermal System ${id}`, DE: `Wärmedämmung ${id}`, FR: `Système Thermique ${id}`, RO: `Termosistem ${id}`, IT: `Sistema Termico ${id}` },
      "finisaje": { EN: `Finishes ${id}`, DE: `Ausbau ${id}`, FR: `Finitions ${id}`, RO: `Finisaje ${id}`, IT: `Finiture ${id}` },
      "ceramica": { EN: `Ceramics ${id}`, DE: `Keramik ${id}`, FR: `Céramique ${id}`, RO: `Ceramică ${id}`, IT: `Ceramica ${id}` },
      "structuri": { EN: `Structure ${id}`, DE: `Struktur ${id}`, FR: `Structure ${id}`, RO: `Structuri ${id}`, IT: `Strutture ${id}` },
    };
    return titles[category]?.[language] || `Project ${id}`;
  };

  const getTranslatedTitle = (project: any) => {
    return generateTitle(project.baseCat, project.id);
  };

  const categories = [
    { id: "termosistem", label: t.portfolio.categories.termosistem },
    { id: "finisaje", label: t.portfolio.categories.finisaje },
    { id: "ceramica", label: t.portfolio.categories.ceramica },
    { id: "structuri", label: t.portfolio.categories.structuri },
  ];

  const projects = [
    { id: 1, title: "Project 1", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-1.jpeg", size: "large" },
    { id: 2, title: "Project 2", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-2.jpeg", size: "small" },
    { id: 3, title: "Project 3", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-3.jpeg", size: "small" },
    { id: 4, title: "Project 4", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-4.jpeg", size: "small" },
    { id: 5, title: "Project 5", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-5.jpeg", size: "small" },
    { id: 6, title: "Project 6", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-6.jpeg", size: "small" },
    { id: 7, title: "Project 7", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-7.jpeg", size: "small" },
    { id: 8, title: "Project 8", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-8.jpeg", size: "small" },
    { id: 9, title: "Project 9", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-9.jpeg", size: "small" },
    { id: 10, title: "Project 10", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-10.jpeg", size: "small" },
    { id: 11, title: "Project 11", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-11.jpeg", size: "small" },
    { id: 12, title: "Project 12", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-12.jpeg", size: "small" },
    { id: 13, title: "Project 13", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-13.jpeg", size: "small" },
    { id: 14, title: "Project 14", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-14.jpeg", size: "small" },
    { id: 15, title: "Project 15", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-15.jpeg", size: "small" },
    { id: 16, title: "Project 16", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-16.jpeg", size: "small" },
    { id: 17, title: "Project 17", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-17.jpeg", size: "small" },
    { id: 18, title: "Project 18", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-18.jpeg", size: "small" },
    { id: 19, title: "Project 19", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-19.jpeg", size: "small" },
    { id: 20, title: "Project 20", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-20.jpeg", size: "small" },
    { id: 21, title: "Project 21", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-21.jpeg", size: "small" },
    { id: 22, title: "Project 22", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-22.jpeg", size: "small" },
    { id: 23, title: "Project 23", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-23.jpeg", size: "small" },
    { id: 24, title: "Project 24", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-24.jpeg", size: "small" },
    { id: 25, title: "Project 25", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-25.jpeg", size: "small" },
    { id: 26, title: "Project 26", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-26.jpeg", size: "small" },
    { id: 27, title: "Project 27", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-27.jpeg", size: "small" },
    { id: 28, title: "Project 28", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-28.jpeg", size: "small" },
    { id: 29, title: "Project 29", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-29.jpeg", size: "small" },
    { id: 30, title: "Project 30", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-30.jpeg", size: "small" },
    { id: 31, title: "Project 31", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-31.jpeg", size: "small" },
    { id: 32, title: "Project 32", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-32.jpeg", size: "small" },
    { id: 33, title: "Project 33", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-33.jpeg", size: "small" },
    { id: 34, title: "Project 34", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-34.jpeg", size: "small" },
    { id: 35, title: "Project 35", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-35.jpeg", size: "small" },
    { id: 36, title: "Project 36", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-36.jpeg", size: "small" },
    { id: 37, title: "Project 37", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-37.jpeg", size: "small" },
    { id: 38, title: "Project 38", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-38.jpeg", size: "small" },
    { id: 39, title: "Project 39", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-39.jpeg", size: "small" },
    { id: 40, title: "Project 40", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-40.jpeg", size: "small" },
    { id: 41, title: "Project 41", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-41.jpeg", size: "small" },
    { id: 42, title: "Project 42", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-42.jpeg", size: "small" },
    { id: 43, title: "Project 43", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-43.jpeg", size: "small" },
    { id: 44, title: "Project 44", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-44.jpeg", size: "small" },
    { id: 45, title: "Project 45", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-45.jpeg", size: "small" },
    { id: 46, title: "Project 46", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-46.jpeg", size: "small" },
    { id: 47, title: "Project 47", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-47.jpeg", size: "small" },
    { id: 48, title: "Project 48", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-48.jpeg", size: "small" },
    { id: 49, title: "Project 49", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-49.jpeg", size: "small" },
    { id: 50, title: "Project 50", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-50.jpeg", size: "small" },
    { id: 51, title: "Project 51", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-51.jpeg", size: "small" },
    { id: 52, title: "Project 52", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-52.jpeg", size: "small" },
    { id: 53, title: "Project 53", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-53.jpeg", size: "small" },
    { id: 54, title: "Project 54", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-54.jpeg", size: "small" },
    { id: 55, title: "Project 55", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-55.jpeg", size: "small" },
    { id: 56, title: "Project 56", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-56.jpeg", size: "small" },
    { id: 57, title: "Project 57", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-57.jpeg", size: "small" },
    { id: 58, title: "Project 58", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-58.jpeg", size: "small" },
    { id: 59, title: "Project 59", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-59.jpeg", size: "small" },
    { id: 60, title: "Project 60", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-60.jpeg", size: "small" },
    { id: 61, title: "Project 61", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-61.jpeg", size: "small" },
    { id: 62, title: "Project 62", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-62.jpeg", size: "small" },
    { id: 63, title: "Project 63", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-63.jpeg", size: "small" },
    { id: 64, title: "Project 64", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-64.jpeg", size: "small" },
    { id: 65, title: "Project 65", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-65.jpeg", size: "small" },
    { id: 66, title: "Project 66", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-66.jpeg", size: "small" },
    { id: 67, title: "Project 67", baseCat: "termosistem", category: "termosistem", img: "/images/termosistem/termosistem-67.jpeg", size: "small" },
    { id: 68, title: "Project 68", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-1.jpeg", size: "large" },
    { id: 69, title: "Project 69", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-2.jpeg", size: "small" },
    { id: 70, title: "Project 70", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-3.jpeg", size: "small" },
    { id: 71, title: "Project 71", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-4.jpeg", size: "small" },
    { id: 72, title: "Project 72", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-5.jpeg", size: "small" },
    { id: 73, title: "Project 73", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-6.jpeg", size: "small" },
    { id: 74, title: "Project 74", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-7.jpeg", size: "small" },
    { id: 75, title: "Project 75", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-8.jpeg", size: "small" },
    { id: 76, title: "Project 76", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-9.jpeg", size: "small" },
    { id: 77, title: "Project 77", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-10.jpeg", size: "small" },
    { id: 78, title: "Project 78", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-11.jpeg", size: "small" },
    { id: 79, title: "Project 79", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-12.jpeg", size: "small" },
    { id: 80, title: "Project 80", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-13.jpeg", size: "small" },
    { id: 81, title: "Project 81", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-14.jpeg", size: "small" },
    { id: 82, title: "Project 82", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-15.jpeg", size: "small" },
    { id: 83, title: "Project 83", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-16.jpeg", size: "small" },
    { id: 84, title: "Project 84", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-17.jpeg", size: "small" },
    { id: 85, title: "Project 85", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-18.jpeg", size: "small" },
    { id: 86, title: "Project 86", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-19.jpeg", size: "small" },
    { id: 87, title: "Project 87", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-20.jpeg", size: "small" },
    { id: 88, title: "Project 88", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-21.jpeg", size: "small" },
    { id: 89, title: "Project 89", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-22.jpeg", size: "small" },
    { id: 90, title: "Project 90", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-23.jpeg", size: "small" },
    { id: 91, title: "Project 91", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-24.jpeg", size: "small" },
    { id: 92, title: "Project 92", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-25.jpeg", size: "small" },
    { id: 93, title: "Project 93", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-26.jpeg", size: "small" },
    { id: 94, title: "Project 94", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-27.jpeg", size: "small" },
    { id: 95, title: "Project 95", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-28.jpeg", size: "small" },
    { id: 96, title: "Project 96", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-29.jpeg", size: "small" },
    { id: 97, title: "Project 97", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-30.jpeg", size: "small" },
    { id: 98, title: "Project 98", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-31.jpeg", size: "small" },
    { id: 99, title: "Project 99", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-32.jpeg", size: "small" },
    { id: 100, title: "Project 100", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-33.jpeg", size: "small" },
    { id: 101, title: "Project 101", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-34.jpeg", size: "small" },
    { id: 102, title: "Project 102", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-35.jpeg", size: "small" },
    { id: 103, title: "Project 103", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-36.jpeg", size: "small" },
    { id: 104, title: "Project 104", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-37.jpeg", size: "small" },
    { id: 105, title: "Project 105", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-38.jpeg", size: "small" },
    { id: 106, title: "Project 106", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-39.jpeg", size: "small" },
    { id: 107, title: "Project 107", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-40.jpeg", size: "small" },
    { id: 108, title: "Project 108", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-41.jpeg", size: "small" },
    { id: 109, title: "Project 109", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-42.jpeg", size: "small" },
    { id: 110, title: "Project 110", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-43.jpeg", size: "small" },
    { id: 111, title: "Project 111", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-44.jpeg", size: "small" },
    { id: 112, title: "Project 112", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-45.jpeg", size: "small" },
    { id: 113, title: "Project 113", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-46.jpeg", size: "small" },
    { id: 114, title: "Project 114", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-47.jpeg", size: "small" },
    { id: 115, title: "Project 115", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-48.jpeg", size: "small" },
    { id: 116, title: "Project 116", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-49.jpeg", size: "small" },
    { id: 117, title: "Project 117", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-50.jpeg", size: "small" },
    { id: 118, title: "Project 118", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-51.jpeg", size: "small" },
    { id: 119, title: "Project 119", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-52.jpeg", size: "small" },
    { id: 120, title: "Project 120", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-53.jpeg", size: "small" },
    { id: 121, title: "Project 121", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-54.jpeg", size: "small" },
    { id: 122, title: "Project 122", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-55.jpeg", size: "small" },
    { id: 123, title: "Project 123", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-56.jpeg", size: "small" },
    { id: 124, title: "Project 124", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-57.jpeg", size: "small" },
    { id: 125, title: "Project 125", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-58.jpeg", size: "small" },
    { id: 126, title: "Project 126", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-59.jpeg", size: "small" },
    { id: 127, title: "Project 127", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-60.jpeg", size: "small" },
    { id: 128, title: "Project 128", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-61.jpeg", size: "small" },
    { id: 129, title: "Project 129", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-62.jpeg", size: "small" },
    { id: 130, title: "Project 130", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-63.jpeg", size: "small" },
    { id: 131, title: "Project 131", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-64.jpeg", size: "small" },
    { id: 132, title: "Project 132", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-65.jpeg", size: "small" },
    { id: 133, title: "Project 133", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-66.jpeg", size: "small" },
    { id: 134, title: "Project 134", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-67.jpeg", size: "small" },
    { id: 135, title: "Project 135", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-68.jpeg", size: "small" },
    { id: 136, title: "Project 136", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-69.jpeg", size: "small" },
    { id: 137, title: "Project 137", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-70.jpeg", size: "small" },
    { id: 138, title: "Project 138", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-71.jpeg", size: "small" },
    { id: 139, title: "Project 139", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-72.jpeg", size: "small" },
    { id: 140, title: "Project 140", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-73.jpeg", size: "small" },
    { id: 141, title: "Project 141", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-74.jpeg", size: "small" },
    { id: 142, title: "Project 142", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-75.jpeg", size: "small" },
    { id: 143, title: "Project 143", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-76.jpeg", size: "small" },
    { id: 144, title: "Project 144", baseCat: "finisaje", category: "finisaje", img: "/images/finisaje/finisaje-77.jpeg", size: "small" },
    { id: 145, title: "Project 145", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-1.jpeg", size: "large" },
    { id: 146, title: "Project 146", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-2.jpeg", size: "small" },
    { id: 147, title: "Project 147", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-3.jpeg", size: "small" },
    { id: 148, title: "Project 148", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-4.jpeg", size: "small" },
    { id: 149, title: "Project 149", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-5.jpeg", size: "small" },
    { id: 150, title: "Project 150", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-6.jpeg", size: "small" },
    { id: 151, title: "Project 151", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-7.jpeg", size: "small" },
    { id: 152, title: "Project 152", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-8.jpeg", size: "small" },
    { id: 153, title: "Project 153", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-9.jpeg", size: "small" },
    { id: 154, title: "Project 154", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-10.jpeg", size: "small" },
    { id: 155, title: "Project 155", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-11.jpeg", size: "small" },
    { id: 156, title: "Project 156", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-12.jpeg", size: "small" },
    { id: 157, title: "Project 157", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-13.jpeg", size: "small" },
    { id: 158, title: "Project 158", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-14.jpeg", size: "small" },
    { id: 159, title: "Project 159", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-15.jpeg", size: "small" },
    { id: 160, title: "Project 160", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-16.jpeg", size: "small" },
    { id: 161, title: "Project 161", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-17.jpeg", size: "small" },
    { id: 162, title: "Project 162", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-18.jpeg", size: "small" },
    { id: 163, title: "Project 163", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-19.jpeg", size: "small" },
    { id: 164, title: "Project 164", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-20.jpeg", size: "small" },
    { id: 165, title: "Project 165", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-21.jpeg", size: "small" },
    { id: 166, title: "Project 166", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-22.jpeg", size: "small" },
    { id: 167, title: "Project 167", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-23.jpeg", size: "small" },
    { id: 168, title: "Project 168", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-24.jpeg", size: "small" },
    { id: 169, title: "Project 169", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-25.jpeg", size: "small" },
    { id: 170, title: "Project 170", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-26.jpeg", size: "small" },
    { id: 171, title: "Project 171", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-27.jpeg", size: "small" },
    { id: 172, title: "Project 172", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-28.jpeg", size: "small" },
    { id: 173, title: "Project 173", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-29.jpeg", size: "small" },
    { id: 174, title: "Project 174", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-30.jpeg", size: "small" },
    { id: 175, title: "Project 175", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-31.jpeg", size: "small" },
    { id: 176, title: "Project 176", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-32.jpeg", size: "small" },
    { id: 177, title: "Project 177", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-33.jpeg", size: "small" },
    { id: 178, title: "Project 178", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-34.jpeg", size: "small" },
    { id: 179, title: "Project 179", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-35.jpeg", size: "small" },
    { id: 180, title: "Project 180", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-36.jpeg", size: "small" },
    { id: 181, title: "Project 181", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-37.jpeg", size: "small" },
    { id: 182, title: "Project 182", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-38.jpeg", size: "small" },
    { id: 183, title: "Project 183", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-39.jpeg", size: "small" },
    { id: 184, title: "Project 184", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-40.jpeg", size: "small" },
    { id: 185, title: "Project 185", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-41.jpeg", size: "small" },
    { id: 186, title: "Project 186", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-42.jpeg", size: "small" },
    { id: 187, title: "Project 187", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-43.jpeg", size: "small" },
    { id: 188, title: "Project 188", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-44.jpeg", size: "small" },
    { id: 189, title: "Project 189", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-45.jpeg", size: "small" },
    { id: 190, title: "Project 190", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-46.jpeg", size: "small" },
    { id: 191, title: "Project 191", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-47.jpeg", size: "small" },
    { id: 192, title: "Project 192", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-48.jpeg", size: "small" },
    { id: 193, title: "Project 193", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-49.jpeg", size: "small" },
    { id: 194, title: "Project 194", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-50.jpeg", size: "small" },
    { id: 195, title: "Project 195", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-51.jpeg", size: "small" },
    { id: 196, title: "Project 196", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-52.jpeg", size: "small" },
    { id: 197, title: "Project 197", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-53.jpeg", size: "small" },
    { id: 198, title: "Project 198", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-54.jpeg", size: "small" },
    { id: 199, title: "Project 199", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-55.jpeg", size: "small" },
    { id: 200, title: "Project 200", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-56.jpeg", size: "small" },
    { id: 201, title: "Project 201", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-57.jpeg", size: "small" },
    { id: 202, title: "Project 202", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-58.jpeg", size: "small" },
    { id: 203, title: "Project 203", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-59.jpeg", size: "small" },
    { id: 204, title: "Project 204", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-60.jpeg", size: "small" },
    { id: 205, title: "Project 205", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-61.jpeg", size: "small" },
    { id: 206, title: "Project 206", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-62.jpeg", size: "small" },
    { id: 207, title: "Project 207", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-63.jpeg", size: "small" },
    { id: 208, title: "Project 208", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-64.jpeg", size: "small" },
    { id: 209, title: "Project 209", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-65.jpeg", size: "small" },
    { id: 210, title: "Project 210", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-66.jpeg", size: "small" },
    { id: 211, title: "Project 211", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-67.jpeg", size: "small" },
    { id: 212, title: "Project 212", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-68.jpeg", size: "small" },
    { id: 213, title: "Project 213", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-69.jpeg", size: "small" },
    { id: 214, title: "Project 214", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-70.jpeg", size: "small" },
    { id: 215, title: "Project 215", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-71.jpeg", size: "small" },
    { id: 216, title: "Project 216", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-72.jpeg", size: "small" },
    { id: 217, title: "Project 217", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-73.jpeg", size: "small" },
    { id: 218, title: "Project 218", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-74.jpeg", size: "small" },
    { id: 219, title: "Project 219", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-75.jpeg", size: "small" },
    { id: 220, title: "Project 220", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-76.jpeg", size: "small" },
    { id: 221, title: "Project 221", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-77.jpeg", size: "small" },
    { id: 222, title: "Project 222", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-78.jpeg", size: "small" },
    { id: 223, title: "Project 223", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-79.jpeg", size: "small" },
    { id: 224, title: "Project 224", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-80.jpeg", size: "small" },
    { id: 225, title: "Project 225", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-81.jpeg", size: "small" },
    { id: 226, title: "Project 226", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-82.jpeg", size: "small" },
    { id: 227, title: "Project 227", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-83.jpeg", size: "small" },
    { id: 228, title: "Project 228", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-84.jpeg", size: "small" },
    { id: 229, title: "Project 229", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-85.jpeg", size: "small" },
    { id: 230, title: "Project 230", baseCat: "ceramica", category: "ceramica", img: "/images/ceramica/ceramica-86.jpeg", size: "small" },
    { id: 231, title: "Project 231", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-1.jpeg", size: "large" },
    { id: 232, title: "Project 232", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-2.jpeg", size: "small" },
    { id: 233, title: "Project 233", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-3.jpeg", size: "small" },
    { id: 234, title: "Project 234", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-4.jpeg", size: "small" },
    { id: 235, title: "Project 235", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-5.jpeg", size: "small" },
    { id: 236, title: "Project 236", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-6.jpeg", size: "small" },
    { id: 237, title: "Project 237", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-7.jpeg", size: "small" },
    { id: 238, title: "Project 238", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-8.jpeg", size: "small" },
    { id: 239, title: "Project 239", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-9.jpeg", size: "small" },
    { id: 240, title: "Project 240", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-10.jpeg", size: "small" },
    { id: 241, title: "Project 241", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-11.jpeg", size: "small" },
    { id: 242, title: "Project 242", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-12.jpeg", size: "small" },
    { id: 243, title: "Project 243", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-13.jpeg", size: "small" },
    { id: 244, title: "Project 244", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-14.jpeg", size: "small" },
    { id: 245, title: "Project 245", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-15.jpeg", size: "small" },
    { id: 246, title: "Project 246", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-16.jpeg", size: "small" },
    { id: 247, title: "Project 247", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-17.jpeg", size: "small" },
    { id: 248, title: "Project 248", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-18.jpeg", size: "small" },
    { id: 249, title: "Project 249", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-19.jpeg", size: "small" },
    { id: 250, title: "Project 250", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-20.jpeg", size: "small" },
    { id: 251, title: "Project 251", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-21.jpeg", size: "small" },
    { id: 252, title: "Project 252", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-22.jpeg", size: "small" },
    { id: 253, title: "Project 253", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-23.jpeg", size: "small" },
    { id: 254, title: "Project 254", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-24.jpeg", size: "small" },
    { id: 255, title: "Project 255", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-25.jpeg", size: "small" },
    { id: 256, title: "Project 256", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-26.jpeg", size: "small" },
    { id: 257, title: "Project 257", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-27.jpeg", size: "small" },
    { id: 258, title: "Project 258", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-28.jpeg", size: "small" },
    { id: 259, title: "Project 259", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-29.jpeg", size: "small" },
    { id: 260, title: "Project 260", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-30.jpeg", size: "small" },
    { id: 261, title: "Project 261", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-31.jpeg", size: "small" },
    { id: 262, title: "Project 262", baseCat: "structuri", category: "structuri", img: "/images/structuri/structuri-32.jpeg", size: "small" },
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
          <div key={activeCategory} className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
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
