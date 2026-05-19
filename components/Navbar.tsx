"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageCode } from "@/lib/translations";

const flags: Record<LanguageCode, React.ReactNode> = {
  EN: <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-5 h-auto object-cover rounded-[2px] shadow-sm" />,
  FR: <img src="https://flagcdn.com/w40/fr.png" alt="FR" className="w-5 h-auto object-cover rounded-[2px] shadow-sm" />,
  DE: <img src="https://flagcdn.com/w40/de.png" alt="DE" className="w-5 h-auto object-cover rounded-[2px] shadow-sm" />,
  RO: <img src="https://flagcdn.com/w40/ro.png" alt="RO" className="w-5 h-auto object-cover rounded-[2px] shadow-sm" />,
  IT: <img src="https://flagcdn.com/w40/it.png" alt="IT" className="w-5 h-auto object-cover rounded-[2px] shadow-sm" />,
};

const languages: LanguageCode[] = ["EN", "DE", "FR", "IT", "RO"];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/expertise", label: t.nav.expertise },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/company", label: t.nav.company },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
      );
    }
  }, []);

  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <header
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/20"
            : "bg-surface/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/arcobau-logo.png"
              alt="ArcoBau"
              width={180}
              height={72}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-gutter items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-label-caps font-semibold tracking-widest uppercase transition-colors duration-300 pb-1 ${
                    isActive
                      ? "text-gold-ochre border-b-2 border-gold-ochre"
                      : "text-on-surface-variant hover:text-gold-ochre"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-sm">
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-charcoal hover:text-gold-ochre transition-colors p-2"
                aria-label="Select Language"
              >
                <span className="text-xl leading-none">{flags[language]}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 ${langDropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-outline-variant/20 shadow-lg rounded flex flex-col py-2 min-w-[70px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`flex justify-center items-center px-4 py-2 hover:bg-off-white transition-colors ${
                        language === lang ? "bg-off-white/80 scale-110" : "opacity-70 hover:opacity-100"
                      }`}
                      title={lang}
                    >
                      <span className="text-2xl">{flags[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-10 py-4 transition-colors duration-300 hover:bg-gold-ochre ml-sm"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 bg-white border-t border-outline-variant/20 ${mobileOpen ? "max-h-screen py-6" : "max-h-0"}`}>
          <div className="px-margin-mobile flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-semibold tracking-widest uppercase py-2 border-b border-outline-variant/20 ${
                    isActive ? "text-gold-ochre" : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Mobile language row */}
            <div className="flex flex-wrap gap-5 py-4 border-b border-outline-variant/20 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setMobileOpen(false);
                  }}
                  className={`text-2xl transition-all duration-300 ${
                    language === lang ? "opacity-100 scale-110" : "opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Select ${lang}`}
                >
                  {flags[lang]}
                </button>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-6 py-4 text-center mt-4 hover:bg-gold-ochre transition-colors duration-300"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden bg-primary shadow-lg rounded-t-xl">
        <div className="flex justify-around items-center py-3 px-4">
          {[
            { href: "/", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            ), label: "Home" },
            { href: "/portfolio", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            ), label: t.nav.portfolio },
            { href: "/expertise", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            ), label: t.nav.expertise },
            { href: "/contact", icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            ), label: t.nav.contact },
          ].map((item) => {
            const isActive = pathname === item.href || (pathname === "/" && item.href === "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 gap-1.5 transition-colors ${
                  isActive ? "text-gold-ochre" : "text-on-primary-container opacity-60 hover:opacity-100"
                }`}
              >
                {item.icon}
                <span className="text-[10px] font-semibold tracking-widest uppercase">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
