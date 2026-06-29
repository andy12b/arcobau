import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von ArcoBau AG gemäss Schweizer Datenschutzgesetz (DSG) und DSGVO.",
  robots: { index: true, follow: false },
  alternates: {
    canonical: "/datenschutz/",
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-off-white py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-ochre font-semibold mb-4 block">
            Datenschutz
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Datenschutzerklärung
          </h1>
          <div className="w-16 h-0.5 bg-gold-ochre" />
          <p className="text-sm text-on-surface-variant mt-6">
            Stand: Juni 2026 · Gültig gemäss Schweizer Datenschutzgesetz (DSG) und EU-DSGVO
          </p>
        </div>

        <div className="space-y-6 text-on-surface-variant leading-relaxed">

          {/* Verantwortlicher */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              1. Verantwortliche Stelle
            </h2>
            <p className="text-sm mb-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-off-white p-4 text-sm text-charcoal">
              <strong>ArcoBau AG</strong><br />
              Chamerstrasse 172, 6300 Zug, Schweiz<br />
              Tel: <a href="tel:0767268088" className="hover:text-gold-ochre transition-colors">076 726 80 88</a><br />
              E-Mail: <a href="mailto:contact@arcobau.ch" className="hover:text-gold-ochre transition-colors">contact@arcobau.ch</a>
            </div>
          </section>

          {/* Erhebung */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              2. Welche Daten wir erheben
            </h2>
            <p className="text-sm mb-3">
              Wir erheben und verarbeiten folgende personenbezogenen Daten, die Sie uns freiwillig mitteilen:
            </p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Name und Vorname (über das Kontaktformular)</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Projektbeschreibung und -anforderungen</li>
              <li>Technische Daten: IP-Adresse, Browsertyp, Zugriffsdatum (Server-Logs)</li>
            </ul>
          </section>

          {/* Zweck */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              3. Zweck der Datenverarbeitung
            </h2>
            <p className="text-sm mb-3">Ihre Daten werden verwendet für:</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Beantwortung Ihrer Anfragen und Angebotserstellung</li>
              <li>Vertragsabwicklung und Projektdurchführung</li>
              <li>Verbesserung unserer Website und Dienstleistungen</li>
              <li>Erfüllung gesetzlicher Pflichten</li>
            </ul>
          </section>

          {/* Rechtsgrundlage */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              4. Rechtsgrundlage
            </h2>
            <p className="text-sm">
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen).
              Für Nutzer in der Schweiz gilt das revidierte Datenschutzgesetz (DSG, in Kraft seit
              1. September 2023).
            </p>
          </section>

          {/* Weitergabe */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              5. Weitergabe von Daten
            </h2>
            <p className="text-sm">
              Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, es sei denn,
              dies ist zur Vertragserfüllung erforderlich, gesetzlich vorgeschrieben oder Sie
              haben ausdrücklich eingewilligt. Eine Weitergabe an Behörden erfolgt nur im
              Rahmen gesetzlicher Verpflichtungen.
            </p>
          </section>

          {/* Speicherdauer */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              6. Speicherdauer
            </h2>
            <p className="text-sm">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die Erfüllung
              der oben genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
              dies verlangen. Kontaktanfragen werden nach Abschluss der Bearbeitung gelöscht,
              spätestens nach 2 Jahren.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              7. Cookies und Tracking
            </h2>
            <p className="text-sm">
              Diese Website verwendet keine Tracking-Cookies oder Analysetools von Drittanbietern
              (z.B. Google Analytics). Es werden ausschliesslich technisch notwendige
              Einstellungen (z.B. Sprachpräferenz) im Local Storage des Browsers gespeichert.
              Diese Daten verlassen Ihr Gerät nicht und werden nicht an Server übertragen.
            </p>
          </section>

          {/* Rechte */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              8. Ihre Rechte
            </h2>
            <p className="text-sm mb-3">Sie haben das Recht auf:</p>
            <ul className="text-sm space-y-2 list-disc list-inside mb-4">
              <li><strong>Auskunft</strong> über die zu Ihrer Person gespeicherten Daten</li>
              <li><strong>Berichtigung</strong> unrichtiger Daten</li>
              <li><strong>Löschung</strong> Ihrer gespeicherten Daten</li>
              <li><strong>Einschränkung</strong> der Verarbeitung</li>
              <li><strong>Datenübertragbarkeit</strong></li>
              <li><strong>Widerspruch</strong> gegen die Verarbeitung</li>
            </ul>
            <p className="text-sm">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
              <a href="mailto:contact@arcobau.ch" className="text-gold-ochre hover:underline">
                contact@arcobau.ch
              </a>
            </p>
          </section>

          {/* Aufsicht */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              9. Beschwerderecht
            </h2>
            <p className="text-sm">
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              In der Schweiz ist dies der{" "}
              <a
                href="https://www.edoeb.admin.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-ochre hover:underline"
              >
                Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB)
              </a>.
            </p>
          </section>

          {/* Änderungen */}
          <section className="bg-white border border-outline-variant/20 p-8">
            <h2 className="text-xl font-bold text-charcoal mb-4">
              10. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-sm">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die
              jeweils aktuelle Version ist auf dieser Seite verfügbar. Bei wesentlichen
              Änderungen werden wir Sie entsprechend informieren.
            </p>
          </section>

          {/* Back link */}
          <div className="pt-4 flex gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-charcoal hover:text-gold-ochre transition-colors duration-300"
            >
              ← Zurück zur Startseite
            </Link>
            <Link
              href="/impressum"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-charcoal hover:text-gold-ochre transition-colors duration-300"
            >
              Impressum →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
