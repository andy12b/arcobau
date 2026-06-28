import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von ArcoBau AG – rechtliche Angaben gemäss Schweizer Recht. Bahnhofstrasse 1, 8001 Zürich.",
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-off-white py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
            Rechtliche Angaben
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Impressum
          </h1>
          <div className="w-16 h-0.5 bg-gold-ochre" />
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-on-surface-variant leading-relaxed">

          {/* Unternehmen */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-6 pb-3 border-b border-outline-variant/20">
              Angaben gemäss § 5 TMG / Art. 3 UWG
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-ochre font-semibold mb-2">Unternehmen</p>
                <p className="text-charcoal font-semibold text-lg">ArcoBau AG</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-ochre font-semibold mb-2">Adresse</p>
                <p className="text-charcoal">
                  Bahnhofstrasse 1<br />
                  8001 Zürich<br />
                  Schweiz
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-ochre font-semibold mb-2">Kontakt</p>
                <p className="text-charcoal">
                  Tel:{" "}
                  <a href="tel:0767268088" className="hover:text-gold-ochre transition-colors">
                    076 726 80 88
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:contact@arcobau.ch" className="hover:text-gold-ochre transition-colors">
                    contact@arcobau.ch
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-ochre font-semibold mb-2">Geschäftsführer</p>
                <p className="text-charcoal">Nicolae Danciu</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-ochre font-semibold mb-2">Handelsregister</p>
                <p className="text-charcoal">Kanton Zürich</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-ochre font-semibold mb-2">MWST-Nr.</p>
                <p className="text-charcoal">Auf Anfrage</p>
              </div>
            </div>
          </section>

          {/* Haftung */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              Haftungsausschluss
            </h2>
            <h3 className="font-semibold text-charcoal mb-2">Haftung für Inhalte</h3>
            <p className="mb-4 text-sm">
              Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäss Art. 197 OR für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <h3 className="font-semibold text-charcoal mb-2">Haftung für Links</h3>
            <p className="text-sm">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              Urheberrecht
            </h2>
            <p className="text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
          </section>

          {/* Streitbeilegung */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              Online-Streitbeilegung
            </h2>
            <p className="text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-ochre hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Back link */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-charcoal hover:text-gold-ochre transition-colors duration-300"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
