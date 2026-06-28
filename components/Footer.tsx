"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: 'instagram' | 'tiktok' | 'facebook') => {
    if (typeof window !== "undefined" && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      e.preventDefault();
      const appUrl = platform === 'instagram' 
        ? "instagram://user?username=arcobau.gmbh" 
        : platform === 'tiktok'
        ? "tiktok://user?screen_name=arcobau"
        : "fb://profile/61589457463612";
      const webUrl = platform === 'instagram'
        ? "https://www.instagram.com/arcobau.gmbh"
        : platform === 'tiktok'
        ? "https://www.tiktok.com/@arcobau"
        : "https://www.facebook.com/profile.php?id=61589457463612";
        
      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = webUrl;
      }, 1000);
    }
  };

  return (
    <footer className="w-full bg-primary border-t border-outline-variant/10">
      <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop pt-16 md:pt-24 pb-24 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-4 flex flex-col items-start w-full">
            <Link href="/" className="inline-block mb-6 bg-white rounded p-1.5">
              <Image
                src="/images/logo/arcobau-logo.png"
                alt="ArcoBau"
                width={160}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <div className="space-y-4 w-full">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold-ochre flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
                <span className="text-sm text-on-primary-container/80 hover:text-white transition-colors w-full">
                  {t.contact.contactInfo.addressStreet}, {t.contact.contactInfo.addressCity}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold-ochre flex-shrink-0" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
                <a href={`mailto:${t.contact.contactInfo.email}`} className="text-sm text-on-primary-container/80 hover:text-white transition-colors w-full">
                  {t.contact.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold-ochre flex-shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                </svg>
                <div className="flex flex-col">
                  <a href={`tel:${t.contact.contactInfo.phone.replace(/\s/g, '')}`} className="text-sm text-on-primary-container/80 hover:text-white transition-colors w-full">
                    {t.contact.contactInfo.phone}
                  </a>
                  <span className="text-xs text-on-primary-container/60 mt-1">
                    {t.contact.contactInfo.directorName}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col w-full">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-ochre mb-6">
              {t.footer.navigation}
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { label: t.nav.expertise, href: "/expertise" },
                { label: t.nav.portfolio, href: "/portfolio" },
                { label: t.nav.company, href: "/company" },
                { label: t.nav.contact, href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-on-primary-container hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 flex flex-col w-full">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-ochre mb-6">
              {t.footer.services}
            </h4>
            <div className="flex flex-col gap-4">
              {[t.footer.servicesList.interior, t.footer.servicesList.exterior, t.footer.servicesList.structure, t.footer.servicesList.ceramics].map((item) => (
                <Link
                  key={item}
                  href="/expertise"
                  className="text-sm text-on-primary-container hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Social */}
          <div className="lg:col-span-2 flex flex-col w-full">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-ochre mb-6">
              {t.footer.legal}
            </h4>
            <div className="flex flex-col gap-4 mb-8">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutzerklärung", href: "/datenschutz" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-on-primary-container hover:text-white hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <h4 className="text-xs font-bold tracking-widest uppercase text-gold-ochre mb-6">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/arcobau.gmbh" onClick={(e) => handleSocialClick(e, 'instagram')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-ochre hover:border-gold-ochre transition-all duration-300 group" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a href="https://www.tiktok.com/@arcobau" onClick={(e) => handleSocialClick(e, 'tiktok')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-ochre hover:border-gold-ochre transition-all duration-300 group" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.77 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61589457463612" onClick={(e) => handleSocialClick(e, 'facebook')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-ochre hover:border-gold-ochre transition-all duration-300 group" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-on-primary-container/60 text-center md:text-left w-full">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
