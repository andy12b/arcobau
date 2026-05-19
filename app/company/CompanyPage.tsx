"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function CompanyPage() {
  const { t } = useLanguage();

  const cards = [
    {
      img: "/images/case/casa-1.jpg",
      title: t.company.cards.heritageTitle,
      body: t.company.cards.heritageDesc,
    },
    {
      img: "/images/apartamente/apartament-9.jpg",
      title: t.company.cards.missionTitle,
      body: t.company.cards.missionDesc,
    },
    {
      img: "/images/finisaje/finisaj-18.jpg",
      title: t.company.cards.valuesTitle,
      body: t.company.cards.valuesDesc,
    },
  ];

  const values = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 4L4 14V36H14V26H26V36H36V14L20 4Z" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: t.company.values.teamsTitle,
      desc: t.company.values.teamsDesc,
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="14" stroke="#C5A059" strokeWidth="2" fill="none"/>
          <path d="M13 20l5 5 9-9" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: t.company.values.guaranteeTitle,
      desc: t.company.values.guaranteeDesc,
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="28" height="22" rx="2" stroke="#C5A059" strokeWidth="2" fill="none"/>
          <path d="M6 16h28M14 10v6M26 10v6" stroke="#C5A059" strokeWidth="2"/>
        </svg>
      ),
      title: t.company.values.punctualityTitle,
      desc: t.company.values.punctualityDesc,
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 6l3.5 7 7.5 1.1-5.5 5.3 1.3 7.6L20 24l-6.8 3.6 1.3-7.6-5.5-5.3 7.5-1.1z" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      title: t.company.values.materialsTitle,
      desc: t.company.values.materialsDesc,
    },
  ];

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <AnimatedSection animation="fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.company.tag}
            </span>
            <h1 className="text-display-xl-mobile md:text-display-xl font-bold text-charcoal mb-6">
              {t.company.title}
            </h1>
            <p className="text-body-base text-on-surface-variant leading-relaxed" style={{ maxWidth: "640px", margin: "0 auto" }}>
              {t.company.desc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {cards.map((card, i) => (
              <AnimatedSection
                key={card.title}
                animation="fade-up"
                delay={i * 0.15}
                className="bg-pure-white border border-outline-variant/20 hover:border-gold-ochre/50 transition-all duration-500 group flex flex-col"
              >
                <div className="w-full h-[220px] overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={600}
                    height={220}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-headline-lg font-semibold text-charcoal mb-4">
                    {card.title}
                  </h3>
                  <p className="text-body-base text-on-surface-variant leading-relaxed flex-grow">
                    {card.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.company.whyUsTag}
            </span>
            <h2 className="text-display-xl-mobile font-bold text-charcoal">
              {t.company.whyUsTitle}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <AnimatedSection
                key={v.title}
                animation="fade-up"
                delay={i * 0.12}
                className="bg-pure-white p-8 border border-outline-variant/20 hover:border-gold-ochre/50 transition-all duration-500 group"
              >
                <div className="mb-5 group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-charcoal text-base mb-3">{v.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection animation="fade-up" className="mb-16 text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.company.journeyTag}
            </span>
            <h2 className="text-display-xl-mobile font-bold text-pure-white">
              {t.company.journeyTitle}
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-ochre/30 md:-translate-x-px" />
            <div className="space-y-10 md:space-y-0">
              {t.company.timeline.map((item, i) => (
                <AnimatedSection
                  key={item.year}
                  animation={i % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={i * 0.1}
                  className={`relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0 pb-10 md:pb-16 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 top-1 md:top-1/2 w-3 h-3 bg-gold-ochre rounded-full md:-translate-x-1.5 md:-translate-y-1.5 -translate-x-1.5" />
                  <div
                    className={`ml-10 md:ml-0 md:w-[45%] ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-[55%]"
                    }`}
                  >
                    <span className="text-gold-ochre font-bold text-xl mb-2 block">
                      {item.year}
                    </span>
                    <p className="text-pure-white/80 text-body-base leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "15+", label: t.company.stats.years },
              { value: "200+", label: t.company.stats.projects },
              { value: "15", label: t.company.stats.cantons },
              { value: "5★", label: t.company.stats.quality },
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
                <div className="text-xs tracking-widest uppercase text-on-surface-variant">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <AnimatedSection animation="fade-up">
              <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
                {t.company.commitmentTag}
              </span>
              <h2 className="text-display-xl-mobile font-bold text-charcoal mb-6">
                {t.company.commitmentTitle}
              </h2>
              <p className="text-body-base text-on-surface-variant leading-relaxed mb-8">
                {t.company.commitmentDesc}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-12 py-5 hover:bg-gold-ochre transition-colors duration-300"
              >
                {t.company.getInTouch}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
