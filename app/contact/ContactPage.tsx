"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactDetails = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#C5A059" />
        </svg>
      ),
      label: t.contact.address,
      value: "Bahnhofstrasse 1, 8001 Zürich, Switzerland",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#C5A059" />
        </svg>
      ),
      label: t.contact.email,
      value: "contact@arcobau.ch",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#C5A059" />
        </svg>
      ),
      label: t.contact.phone,
      value: "+41 44 100 00 00",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="#C5A059" />
        </svg>
      ),
      label: t.contact.hours,
      value: "Mon–Fri: 08:00–18:00 CET",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-off-white">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <AnimatedSection animation="fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
              {t.contact.tag}
            </span>
            <h1 className="text-display-xl-mobile md:text-display-xl font-bold text-charcoal mb-6">
              {t.contact.title}
            </h1>
            <p className="text-body-base text-on-surface-variant leading-relaxed" style={{ maxWidth: "640px", margin: "0 auto" }}>
              {t.contact.desc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-content mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Details */}
            <AnimatedSection animation="slide-left">
              <h2 className="text-headline-lg font-semibold text-charcoal mb-8">
                {t.contact.getInTouch}
              </h2>
              <div className="space-y-8 mb-12">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-off-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-gold-ochre block mb-1">
                        {item.label}
                      </span>
                      <span className="text-on-surface-variant text-sm leading-relaxed">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[16/9] bg-surface-container-high relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4 opacity-30" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#2C3539" />
                    </svg>
                    <span className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant opacity-50">
                      Bahnhofstrasse 1, Zürich
                    </span>
                  </div>
                </div>
                {/* Grid lines for map feel */}
                <div className="absolute inset-0 opacity-5">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="absolute left-0 right-0 border-t border-charcoal" style={{ top: `${(i + 1) * 12.5}%` }} />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="absolute top-0 bottom-0 border-l border-charcoal" style={{ left: `${(i + 1) * 12.5}%` }} />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-right">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-16 h-16 bg-gold-ochre/10 flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#C5A059" />
                    </svg>
                  </div>
                  <h3 className="text-headline-lg font-semibold text-charcoal mb-4">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-body-base text-on-surface-variant">
                    {t.contact.form.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-headline-lg font-semibold text-charcoal mb-8">
                    {t.contact.form.title}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-outline-variant/40 px-4 py-3 text-sm text-on-surface bg-pure-white focus:outline-none focus:border-gold-ochre transition-colors duration-300"
                        placeholder={t.contact.form.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-outline-variant/40 px-4 py-3 text-sm text-on-surface bg-pure-white focus:outline-none focus:border-gold-ochre transition-colors duration-300"
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-outline-variant/40 px-4 py-3 text-sm text-on-surface bg-pure-white focus:outline-none focus:border-gold-ochre transition-colors duration-300"
                        placeholder={t.contact.form.phonePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
                        {t.contact.form.typeLabel}
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full border border-outline-variant/40 px-4 py-3 text-sm text-on-surface bg-pure-white focus:outline-none focus:border-gold-ochre transition-colors duration-300 appearance-none"
                      >
                        <option value="">{t.contact.form.typeSelect}</option>
                        <option value="residential">{t.contact.form.typeRes}</option>
                        <option value="commercial">{t.contact.form.typeCom}</option>
                        <option value="public">{t.contact.form.typePub}</option>
                        <option value="renovation">{t.contact.form.typeRen}</option>
                        <option value="other">{t.contact.form.typeOther}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-widest uppercase text-charcoal mb-2">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-outline-variant/40 px-4 py-3 text-sm text-on-surface bg-pure-white focus:outline-none focus:border-gold-ochre transition-colors duration-300 resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal text-pure-white text-xs font-semibold tracking-widest uppercase py-5 hover:bg-gold-ochre transition-colors duration-300"
                  >
                    {t.contact.form.submitBtn}
                  </button>

                  <p className="text-xs text-on-surface-variant/60 text-center">
                    {t.contact.form.privacyMsg}
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
