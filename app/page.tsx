"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// Imagini hero din portofoliu real
const heroImages = [
  "/images/apartamente/apartament-1.jpg",
  "/images/case/casa-1.jpg",
  "/images/apartamente/apartament-2.jpg",
];

export default function HomePage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8L6 20V40H18V28H30V40H42V20L24 8Z" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
          <path d="M18 42V30H30V42" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      title: t.home.services.privateClients,
      description: t.home.services.privateClientsDesc,
      cta: t.home.services.discoverServices,
      href: "/expertise",
      img: "/images/apartamente/apartament-4.jpg",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="12" width="36" height="30" rx="2" stroke="#C5A059" strokeWidth="2" fill="none" />
          <path d="M6 20H42M6 28H42M14 12V42M22 12V42M30 12V42" stroke="#C5A059" strokeWidth="2" />
          <path d="M16 6H32V12H16V6Z" stroke="#C5A059" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: t.home.services.aptFinishing,
      description: t.home.services.aptFinishingDesc,
      cta: t.home.services.learnMore,
      href: "/expertise",
      img: "/images/apartamente/apartament-12.jpg",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="4" y="32" width="40" height="8" rx="2" stroke="#C5A059" strokeWidth="2" fill="none" />
          <path d="M8 32V16M40 32V16M14 32V22M20 32V18M26 32V18M32 32V22M38 32V16M10 16H38" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      title: t.home.services.flooring,
      description: t.home.services.flooringDesc,
      cta: t.home.services.viewServices,
      href: "/expertise",
      img: "/images/podele/podea-8.jpg",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current.children,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            delay: 0.4,
          }
        );
      }

      if (heroImgRef.current) {
        gsap.fromTo(
          heroImgRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }
        );

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            if (heroImgRef.current) {
              gsap.set(heroImgRef.current, {
                y: self.progress * 80,
              });
            }
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[600px] max-h-[900px] flex items-end overflow-hidden"
      >
        {/* Background Image */}
        <div ref={heroImgRef} className="absolute inset-0">
          <Image
            src={heroImages[0]}
            alt="ArcoBau – Construcții și Finisaje de Calitate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-content mx-auto px-8 md:px-10">
            <div ref={heroTextRef}>
              <span 
                className="inline-block text-xs tracking-[0.3em] uppercase text-gold-ochre mb-4 font-semibold"
                style={{ 
                  WebkitTextStroke: '1px rgba(255,255,255,1)',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.5)' 
                }}
              >
                {t.home.heroTag}
              </span>
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-pure-white leading-tight mb-6" 
                style={{ 
                  maxWidth: '700px',
                  textShadow: '0px 4px 10px rgba(0,0,0,0.7)'
                }} 
                dangerouslySetInnerHTML={{ __html: t.home.heroTitle.replace("\n", "<br />") }} 
              />
              <p 
                className="text-base md:text-lg text-pure-white mb-8 leading-relaxed font-medium" 
                style={{ 
                  maxWidth: '520px',
                  textShadow: '0px 2px 6px rgba(0,0,0,0.8)'
                }}
              >
                {t.home.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/portfolio"
                  className="bg-gold-ochre text-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
                >
                  {t.home.viewPortfolio}
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/60 text-pure-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:border-gold-ochre hover:text-gold-ochre transition-all duration-300 text-center"
                >
                  {t.home.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-16 hidden md:flex flex-col items-center gap-2 z-10">
          <span className="text-pure-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-pure-white/50 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection animation="fade-up" className="text-center mb-16 md:mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.home.howWeWork}
            </span>
            <h2 className="text-display-xl-mobile md:text-headline-lg font-bold text-charcoal mb-6">
              {t.home.tailoredExpertise}
            </h2>
            <p className="text-body-base text-on-surface-variant" style={{ maxWidth: "640px", margin: "0 auto" }}>
              {t.home.tailoredExpertiseDesc}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={i * 0.15}
                className="bg-pure-white p-10 border border-outline-variant/20 hover:border-gold-ochre/50 transition-all duration-500 group flex flex-col"
              >
                <div className="mb-6 w-12 h-12">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold-ochre transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-body-base text-on-surface-variant leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-auto text-xs font-semibold tracking-widest uppercase text-charcoal group-hover:text-gold-ochre transition-colors duration-300"
                >
                  {service.cta}
                </Link>
                <div className="h-48 w-full overflow-hidden mt-6">
                  <Image src={service.img} alt={service.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / Split Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <AnimatedSection animation="slide-left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={heroImages[1]}
                  alt="Finisaje premium ArcoBau"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-right">
              <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-6 block">
                {t.home.ourPhilosophy}
              </span>
              <h2 className="text-display-xl-mobile font-bold text-charcoal mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t.home.swissQuality.replace("\n", "<br />") }} />
              <p className="text-body-base text-on-surface-variant mb-6 leading-relaxed">
                {t.home.philosophyDesc1}
              </p>
              <p className="text-body-base text-on-surface-variant mb-8 leading-relaxed">
                {t.home.philosophyDesc2}
              </p>
              <Link
                href="/company"
                className="inline-flex items-center gap-2 bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-gold-ochre transition-colors duration-300"
              >
                {t.home.aboutUs}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { value: "20+", label: t.home.stats.years },
              { value: "200+", label: t.home.stats.projects },
              { value: "100%", label: t.home.stats.satisfaction },
            ].map((stat, i) => (
              <AnimatedSection
                key={stat.label}
                animation="fade-up"
                delay={i * 0.1}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-ochre mb-2">
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-on-primary-container">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection animation="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
                {t.home.portfolioLabel}
              </span>
              <h2 className="text-display-xl-mobile font-bold text-charcoal">
                {t.home.recentProjects}
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 text-xs font-semibold tracking-widest uppercase text-charcoal hover:text-gold-ochre transition-colors duration-300 flex items-center gap-2"
            >
              {t.home.viewAllProjects}
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              { img: "/images/finisaje/finisaj-18.jpg", categoryKey: "finishesInt" as const, titleKey: "project1" as const },
              { img: "/images/case/casa-2.jpg", categoryKey: "finishesExt" as const, titleKey: "project2" as const },
              { img: "/images/apartamente/apartament-5.jpg", categoryKey: "blocks" as const, titleKey: "project3" as const },
            ]).map((item, i) => {
              const titles = {
                EN: ["Residential Complex", "Complete Interior Finish", "Hardwood Flooring"],
                DE: ["Wohnanlage", "Kompletter Innenausbau", "Parkettboden"],
                FR: ["Complexe Résidentiel", "Finition Intérieure Complète", "Parquet Bois"],
                RO: ["Ansamblu Rezidențial", "Finisaj Interior Complet", "Parchet Lemn"],
                IT: ["Complesso Residenziale", "Finitura Completa", "Parquet in Legno"],
              };
              const category = t.portfolio.categories[item.categoryKey];
              return (
                <AnimatedSection
                  key={i}
                  animation="fade-up"
                  delay={i * 0.1}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                >
                  <Link href="/portfolio" className="block relative w-full h-full">
                    <Image
                      src={item.img}
                      alt={category}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-pure-white text-xs font-semibold tracking-widest uppercase">
                        {category}
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={heroImages[2]}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-content mx-auto px-8 md:px-10 text-center">
            <AnimatedSection animation="fade-up">
              <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-6 block">
                {t.home.startYourProject}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mb-6 mx-auto leading-tight" style={{maxWidth: '700px'}}>
                {t.home.readyToBuild}
              </h2>
              <p className="text-pure-white/70 text-base leading-relaxed mb-10 mx-auto" style={{maxWidth: '500px'}}>
                {t.home.contactTeam}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gold-ochre text-white text-xs font-semibold tracking-widest uppercase px-12 py-5 hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                {t.home.getInTouch}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
