"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function ExpertisePage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <path d="M26 7L7 19V45H19V33H33V45H45V19L26 7Z" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <path d="M21 45V33H31V45" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      tag: t.expertise.services.resTag,
      title: t.expertise.services.resTitle,
      lead: t.expertise.services.resLead,
      body: t.expertise.services.resBody,
      cta: t.expertise.services.resCta,
      features: t.expertise.services.resFeatures,
      img: "/images/constructii/constructie-5.jpg",
      href: "/contact",
    },
    {
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <rect x="7" y="13" width="38" height="32" rx="1" stroke="#C5A059" strokeWidth="2" fill="none" />
          <path d="M7 21H45M7 29H45M15 13V45M23 13V45M31 13V45" stroke="#C5A059" strokeWidth="2" />
          <path d="M17 7H35V13H17V7Z" stroke="#C5A059" strokeWidth="2" fill="none" />
        </svg>
      ),
      tag: t.expertise.services.intTag,
      title: t.expertise.services.intTitle,
      lead: t.expertise.services.intLead,
      body: t.expertise.services.intBody,
      cta: t.expertise.services.intCta,
      features: t.expertise.services.intFeatures,
      img: "/images/finisaje/finisaj-10.jpg",
      href: "/contact",
    },
    {
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
          <rect x="4" y="36" width="44" height="8" rx="1" stroke="#C5A059" strokeWidth="2" fill="none" />
          <path d="M8 36V20M44 36V20M14 36V26M20 36V22M28 36V22M34 36V26M40 36V20M12 20H40" stroke="#C5A059" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      tag: t.expertise.services.floorTag,
      title: t.expertise.services.floorTitle,
      lead: t.expertise.services.floorLead,
      body: t.expertise.services.floorBody,
      cta: t.expertise.services.floorCta,
      features: t.expertise.services.floorFeatures,
      img: "/images/constructii/constructie-12.jpg",
      href: "/contact",
    },
  ];

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <AnimatedSection animation="fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.expertise.tag}
            </span>
            <h1 className="text-display-xl-mobile md:text-display-xl font-bold text-charcoal mb-6">
              {t.expertise.title}
            </h1>
            <p className="text-body-base text-on-surface-variant leading-relaxed" style={{ maxWidth: "640px", margin: "0 auto" }}>
              {t.expertise.desc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="space-y-16">
            {services.map((service, i) => (
              <AnimatedSection
                key={service.title}
                animation={i % 2 === 0 ? "slide-left" : "slide-right"}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
              >
                {i % 2 !== 0 ? (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden order-1 lg:order-2">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="order-2 lg:order-1">
                      <span className="text-xs tracking-[0.2em] uppercase text-gold-ochre font-semibold mb-3 block">{service.tag}</span>
                      <div className="mb-6 w-13 h-13">{service.icon}</div>
                      <h2 className="text-display-xl-mobile font-bold text-charcoal mb-3">{service.title}</h2>
                      <p className="font-semibold text-charcoal mb-4">{service.lead}</p>
                      <p className="text-body-base text-on-surface-variant mb-6 leading-relaxed">{service.body}</p>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-ochre flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href} className="inline-flex items-center gap-2 bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-gold-ochre transition-colors duration-300">
                        {service.cta}
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-gold-ochre font-semibold mb-3 block">{service.tag}</span>
                      <div className="mb-6 w-13 h-13">{service.icon}</div>
                      <h2 className="text-display-xl-mobile font-bold text-charcoal mb-3">{service.title}</h2>
                      <p className="font-semibold text-charcoal mb-4">{service.lead}</p>
                      <p className="text-body-base text-on-surface-variant mb-6 leading-relaxed">{service.body}</p>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-on-surface-variant">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-ochre flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link href={service.href} className="inline-flex items-center gap-2 bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-10 py-4 hover:bg-gold-ochre transition-colors duration-300">
                        {service.cta} →
                      </Link>
                    </div>
                  </>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.expertise.processTag}
            </span>
            <h2 className="text-display-xl-mobile font-bold text-pure-white">
              {t.expertise.processTitle}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {t.expertise.steps.map((step, i) => (
              <AnimatedSection
                key={step.title}
                animation="fade-up"
                delay={i * 0.1}
                className="flex flex-col items-start md:items-center text-left md:text-center"
              >
                <span className="text-3xl font-bold text-gold-ochre mb-4">0{i + 1}</span>
                <h3 className="text-pure-white font-semibold text-sm tracking-widest uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-on-primary-container text-xs leading-relaxed">
                  {step.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <AnimatedSection animation="fade-up">
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }} className="md:flex-row md:items-center md:justify-between">
              <div style={{ maxWidth: "580px" }}>
                <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
                  {t.expertise.tag}
                </span>
                <h2 className="text-display-xl-mobile font-bold text-charcoal mb-4 leading-tight">
                  {t.expertise.readyToStart}
                </h2>
                <p className="text-body-base text-on-surface-variant leading-relaxed">
                  {t.expertise.contactDiscuss}
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <Link
                  href="/contact"
                  className="inline-block bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase px-12 py-5 hover:bg-gold-ochre transition-colors duration-300"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {t.expertise.contactUs}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
