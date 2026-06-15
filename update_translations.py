import re

# Define the new content for each language

translations = {
    "EN": {
        "home": """      services: {
        privateClients: "Interior Finishes",
        privateClientsDesc: "Precision interior finishes for private clients and complete renovation projects. We deliver impeccable quality.",
        discoverServices: "Discover Services",
        aptFinishing: "Exterior Finishes",
        aptFinishingDesc: "Exterior finishes and thermal facades with polystyrene or mineral wool. Services provided for both private and industrial sectors.",
        learnMore: "Learn More",
        flooring: "Structural Works",
        flooringDesc: "Solid structural construction, masonry, and carpentry. We build a lasting foundation for your project.",
        viewServices: "View Services",
      }""",
        "expertise": """      services: {
        resTag: "Interior",
        resTitle: "Interior Finishes",
        resLead: "Precision interior finishes for any type of space.",
        resBody: "We offer complete and meticulous interior finishing services, ideal for private clients and complex renovations.",
        resCta: "Request Quote",
        resFeatures: ["Mechanized plastering", "Drywall / Plasterboard", "Leveling compound", "Washable painting", "Tiles and ceramics"],
        intTag: "Exterior",
        intTitle: "Exterior Finishes",
        intLead: "Premium facades and exterior insulation.",
        intBody: "We execute exterior finishes and thermal insulation systems for both private residences and industrial facilities.",
        intCta: "Learn More",
        intFeatures: ["Thermal facades", "Polystyrene insulation", "Mineral wool insulation", "Exterior decorative plasters"],
        floorTag: "Structure",
        floorTitle: "Structural Works",
        floorLead: "The solid foundation of your construction project.",
        floorBody: "Our structural works teams deliver the core framework of your building, ensuring durability and safety.",
        floorCta: "View Services",
        floorFeatures: ["Masonry", "Carpentry", "Concrete structures", "Foundation works"],
      },"""
    },
    "FR": {
        "home": """      services: {
        privateClients: "Finitions Intérieures",
        privateClientsDesc: "Finitions intérieures de précision pour les clients privés et projets de rénovation complète. Une qualité impeccable.",
        discoverServices: "Découvrir les Services",
        aptFinishing: "Finitions Extérieures",
        aptFinishingDesc: "Finitions extérieures et façades thermiques avec polystyrène ou laine minérale. Services pour les secteurs privé et industriel.",
        learnMore: "En Savoir Plus",
        flooring: "Travaux Structurels",
        flooringDesc: "Construction structurelle solide, maçonnerie et charpente. Nous bâtissons une fondation durable pour votre projet.",
        viewServices: "Voir les Services",
      }""",
        "expertise": """      services: {
        resTag: "Intérieur",
        resTitle: "Finitions Intérieures",
        resLead: "Finitions intérieures de précision pour tout type d'espace.",
        resBody: "Nous offrons des services de finition intérieure complets et méticuleux, parfaits pour les clients privés et les rénovations complexes.",
        resCta: "Demander un devis",
        resFeatures: ["Plâtre mécanisé", "Plaques de plâtre (Rigips)", "Enduit de lissage", "Peinture lavable", "Carrelage et faïence"],
        intTag: "Extérieur",
        intTitle: "Finitions Extérieures",
        intLead: "Façades premium et isolation extérieure.",
        intBody: "Nous réalisons des finitions extérieures et des systèmes d'isolation thermique pour les résidences privées et les installations industrielles.",
        intCta: "En Savoir Plus",
        intFeatures: ["Façades thermiques", "Isolation en polystyrène", "Isolation en laine minérale", "Enduits décoratifs extérieurs"],
        floorTag: "Structure",
        floorTitle: "Travaux Structurels",
        floorLead: "La fondation solide de votre projet de construction.",
        floorBody: "Nos équipes de gros œuvre réalisent l'ossature de votre bâtiment, garantissant durabilité et sécurité.",
        floorCta: "Voir les Services",
        floorFeatures: ["Maçonnerie", "Charpente", "Structures en béton", "Travaux de fondation"],
      },"""
    },
    "DE": {
        "home": """      services: {
        privateClients: "Innenausbau",
        privateClientsDesc: "Präziser Innenausbau für Privatkunden und komplette Renovierungsprojekte. Wir liefern makellose Qualität.",
        discoverServices: "Dienstleistungen entdecken",
        aptFinishing: "Außenausbau",
        aptFinishingDesc: "Außenveredelungen und Wärmefassaden mit Polystyrol oder Mineralwolle. Dienstleistungen für den privaten und industriellen Bereich.",
        learnMore: "Mehr erfahren",
        flooring: "Rohbau & Struktur",
        flooringDesc: "Solider Rohbau, Mauerwerk und Zimmerei. Wir bauen ein dauerhaftes Fundament für Ihr Projekt.",
        viewServices: "Dienstleistungen ansehen",
      }""",
        "expertise": """      services: {
        resTag: "Innen",
        resTitle: "Innenausbau",
        resLead: "Präziser Innenausbau für jede Art von Raum.",
        resBody: "Wir bieten komplette und sorgfältige Innenausbauarbeiten an, ideal für Privatkunden und komplexe Renovierungen.",
        resCta: "Angebot anfordern",
        resFeatures: ["Maschinenputz", "Gipskarton / Rigips", "Ausgleichsmasse", "Abwaschbare Farbe", "Fliesen und Keramik"],
        intTag: "Außen",
        intTitle: "Außenausbau",
        intLead: "Premium-Fassaden und Außenisolierung.",
        intBody: "Wir führen Außenveredelungen und Wärmedämmverbundsysteme für Privatwohnungen und Industrieanlagen aus.",
        intCta: "Mehr erfahren",
        intFeatures: ["Wärmefassaden", "Polystyrol-Isolierung", "Mineralwolle-Isolierung", "Dekorative Außenputze"],
        floorTag: "Struktur",
        floorTitle: "Rohbau & Struktur",
        floorLead: "Das solide Fundament Ihres Bauprojekts.",
        floorBody: "Unsere Rohbauteams liefern das Kerngerüst Ihres Gebäudes und gewährleisten Langlebigkeit und Sicherheit.",
        floorCta: "Dienstleistungen ansehen",
        floorFeatures: ["Mauerwerk", "Zimmerei", "Betonstrukturen", "Fundamentarbeiten"],
      },"""
    },
    "RO": {
        "home": """      services: {
        privateClients: "Finisaje Interioare",
        privateClientsDesc: "Finisaje interioare cu precizie pentru clienți privați și proiecte de renovări complete. Oferim calitate ireproșabilă.",
        discoverServices: "Descoperă Serviciile",
        aptFinishing: "Finisaje Exterioare",
        aptFinishingDesc: "Finisaje exterioare și montare fațade termice cu polistiren sau vată. Servicii pentru sectorul privat și industrial.",
        learnMore: "Află Mai Multe",
        flooring: "Structură",
        flooringDesc: "Lucrări de structură, zidărie și dulgherie pentru a oferi o bază solidă și durabilă proiectului tău.",
        viewServices: "Vezi Serviciile",
      }""",
        "expertise": """      services: {
        resTag: "Interior",
        resTitle: "Finisaje Interioare",
        resLead: "Finisaje interioare cu precizie pentru orice tip de spațiu.",
        resBody: "Oferim servicii complete de finisare interioară, ideale pentru clienții privați și pentru șantiere care necesită renovări complete.",
        resCta: "Cere o Ofertă",
        resFeatures: ["Tencuială mecanizată", "Ipsos / Rigips", "Glet de nivelare", "Lavabil", "Gresie și faianță"],
        intTag: "Exterior",
        intTitle: "Finisaje Exterioare",
        intLead: "Fațade premium și izolație exterioară de înaltă calitate.",
        intBody: "Realizăm finisaje exterioare și fațade termice, pe care le executăm atât pentru clienții privați, cât și în sectorul industrial.",
        intCta: "Află Mai Multe",
        intFeatures: ["Montare fațade termice", "Izolație cu polistiren", "Izolație cu vată minerală", "Tencuieli decorative"],
        floorTag: "Structură",
        floorTitle: "Lucrări de Structură",
        floorLead: "Fundația solidă a construcției tale.",
        floorBody: "Echipele noastre de structură asigură lucrări de rezistență esențiale pentru durabilitatea oricărei clădiri.",
        floorCta: "Vezi Serviciile",
        floorFeatures: ["Zidărie", "Dulgherie", "Structuri de beton", "Fundații"],
      },"""
    },
    "IT": {
        "home": """      services: {
        privateClients: "Finiture d'Interni",
        privateClientsDesc: "Finiture d'interni di precisione per clienti privati e progetti di ristrutturazione completa. Offriamo una qualità impeccabile.",
        discoverServices: "Scopri i Servizi",
        aptFinishing: "Finiture d'Esterni",
        aptFinishingDesc: "Finiture esterne e facciate termiche con polistirene o lana minerale. Servizi per il settore privato e industriale.",
        learnMore: "Scopri di più",
        flooring: "Struttura",
        flooringDesc: "Costruzione strutturale solida, muratura e carpenteria. Costruiamo basi durature per il tuo progetto.",
        viewServices: "Visualizza Servizi",
      }""",
        "expertise": """      services: {
        resTag: "Interni",
        resTitle: "Finiture d'Interni",
        resLead: "Finiture interne di precisione per ogni tipo di spazio.",
        resBody: "Offriamo servizi di finitura interna completi e meticolosi, ideali per clienti privati e ristrutturazioni complesse.",
        resCta: "Richiedi un Preventivo",
        resFeatures: ["Intonaco meccanizzato", "Cartongesso / Rigips", "Livellamento", "Verniciatura lavabile", "Piastrelle e ceramica"],
        intTag: "Esterni",
        intTitle: "Finiture d'Esterni",
        intLead: "Facciate premium e isolamento esterno.",
        intBody: "Eseguiamo finiture esterne e sistemi di isolamento termico sia per residenze private che per strutture industriali.",
        intCta: "Scopri di più",
        intFeatures: ["Facciate termiche", "Isolamento in polistirene", "Isolamento in lana minerale", "Intonaci decorativi esterni"],
        floorTag: "Struttura",
        floorTitle: "Lavori Strutturali",
        floorLead: "La solida base del tuo progetto di costruzione.",
        floorBody: "I nostri team strutturali realizzano l'ossatura del tuo edificio, garantendo durata e sicurezza.",
        floorCta: "Visualizza Servizi",
        floorFeatures: ["Muratura", "Carpenteria", "Strutture in cemento", "Lavori di fondazione"],
      },"""
    }
}

def update_file():
    with open("lib/translations.ts", "r", encoding="utf-8") as f:
        content = f.read()

    for lang in ["EN", "FR", "DE", "RO", "IT"]:
        # Find home.services
        pattern_home = rf'({lang}:\s*{{[\s\S]*?home:\s*{{[\s\S]*?)(      services: {{[\s\S]*?}})(,[\s\S]*?expertise:\s*{{)'
        
        def repl_home(match):
            return match.group(1) + translations[lang]["home"] + match.group(3)
        
        content = re.sub(pattern_home, repl_home, content)
        
        # Find expertise.services
        pattern_exp = rf'({lang}:\s*{{[\s\S]*?expertise:\s*{{[\s\S]*?)(      services: {{[\s\S]*?}},)([\s\S]*?steps:\s*\[)'
        
        def repl_exp(match):
            return match.group(1) + translations[lang]["expertise"] + match.group(3)
            
        content = re.sub(pattern_exp, repl_exp, content)

    with open("lib/translations.ts", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    update_file()
    print("Translations updated successfully.")
