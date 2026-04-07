export type LocaleCode = 'de' | 'en';

export const supportedLocales = ['de', 'en'] as const;

export function getLocaleFromPath(pathname: string): LocaleCode {
  return pathname.startsWith('/en') ? 'en' : 'de';
}

export function prefixPath(locale: LocaleCode, path: string) {
  if (locale === 'de') return path;
  return `/en${path === '/' ? '' : path}`;
}

export const siteCopy = {
  de: {
    brand: 'Edelpop',
    tagline: 'Premium crunch for modern routines.',
    navigation: {
      shop: 'Shop',
      bundles: 'Bundles',
      about: 'Über Edelpop',
      why: 'Why Edelpop',
      journal: 'Journal',
      wholesale: 'Handel',
      faq: 'FAQ',
      contact: 'Kontakt',
      stockists: 'Stockists',
    },
    hero: {
      eyebrow: 'Premium gerösteter Makhana',
      title: 'Knusprig. Leicht. Edelpop.',
      body: 'Gerösteter Makhana mit leichtem Crunch, drei klaren Sorten und einer Wirkung, die sich modern, warm und klar premium anfühlt.',
      proof: 'Geröstet statt frittiert. Leicht und knusprig. Drei Sorten, null Langeweile.',
      primaryCta: 'Sorten entdecken',
      secondaryCta: 'Mehr über Edelpop',
      sticker: 'Launch\nSoon',
    },
    trust: [
      {kicker: 'Röstung', title: 'Geröstet statt frittiert'},
      {kicker: 'Textur', title: 'Leicht und knusprig'},
      {kicker: 'Moment', title: 'Moderner Premium-Snack'},
      {kicker: 'Sorten', title: 'Drei Sorten, null Langeweile'},
    ],
    categoryCards: [
      {title: 'Alle Produkte', text: 'Die ganze Edelpop Range auf einen Blick.', href: '/collections/all'},
      {title: 'Bestseller', text: 'Die Sorten für den ersten Griff und den schnellen Wiederkauf.', href: '/collections/all'},
      {title: 'Probierpakete', text: 'Drei Sorten, kuratiert für den besten Einstieg.', href: '/pages/bundles'},
      {title: 'Nach Geschmack', text: 'Salt & Pepper, Cheese & Herbs oder Caramel.', href: '/collections/all'},
    ],
    statement: {
      eyebrow: 'Edelpop Gefühl',
      title: 'Besser snacken, ohne langweilig zu werden.',
      body: 'Edelpop macht aus geröstetem Makhana einen warmen, modernen Premium-Snack für Routinen, in denen Leichtigkeit genauso wichtig ist wie Geschmack und Haltung.',
    },
    benefits: [
      {badge: 'Röstung', title: 'Geröstet statt frittiert', text: 'Für einen klareren, moderneren Snack-Moment.'},
      {badge: 'Textur', title: 'Leicht und knusprig', text: 'Präsent im Crunch, ohne schwer zu wirken.'},
      {badge: 'Routine', title: 'Moderner Premium-Snack', text: 'Gemacht für Schreibtisch, Sofa, Zug und geteilte Abende.'},
      {badge: 'Sorten', title: 'Drei Sorten, null Langeweile', text: 'Salt & Pepper, Cheese & Herbs und Caramel.'},
    ],
    featured: {
      eyebrow: 'Sorten im Fokus',
      title: 'Salt & Pepper, Cheese & Herbs oder Caramel. Jede Sorte mit eigener Stimmung.',
      body: 'Edelpop spielt nicht auf Lautstärke, sondern auf Klarheit: würzig, cremig oder süß, immer leicht, knusprig und modern im Gefühl.',
      notes: ['Leichter Crunch', 'Drei Sorten', 'Modernes Snacking'],
    },
    testimonials: {
      eyebrow: 'Stimmen',
      title: 'So fühlt sich Edelpop im Alltag an.',
      items: [
        {context: 'Launch Tasting', quote: 'Endlich ein Snack, der leicht wirkt und trotzdem Charakter hat.', name: 'Leonie, Berlin'},
        {context: 'Filmabend', quote: 'Caramel hat genau die richtige Süße für den Abend. Nicht laut, sondern einfach sehr gut gemacht.', name: 'Nina, München'},
        {context: 'Retail Feedback', quote: 'Cheese & Herbs sieht nach Premium aus und schmeckt auch so. Das bleibt im Kopf.', name: 'David, Hamburg'},
      ],
    },
    newsletter: {
      eyebrow: 'Edelpop Updates',
      title: 'Bleib nah dran an Launch, Sorten und neuen Snack-Momenten.',
      body: 'Neue Sorten, erste Stockists und nur die Updates, die wirklich Lust auf mehr machen.',
      cta: 'Eintragen',
    },
    footer: {
      intro: 'Edelpop bringt gerösteten Makhana in einen Snack-Moment, der leicht, knusprig und klar premium wirkt.',
    },
    product: {
      descriptor: 'Gerösteter Premium-Snack aus Makhana mit leichtem Crunch.',
      notes: 'Klar im Geschmack, sauber im Finish und gemacht für den schnellen nächsten Griff.',
      texture: 'Leicht, geröstet und angenehm knusprig, ohne schwer zu wirken.',
      service: ['Schneller Versand innerhalb Deutschlands', 'Sauber verpackt, einfach bestellbar'],
      tax: 'inkl. MwSt. zzgl. Versand',
    },
    pages: {
      about: {
        title: 'Warum Edelpop existiert',
        intro: 'Edelpop bringt gerösteten Makhana in eine Form, die leicht, modern und retail-ready wirkt, ohne beliebig zu werden.',
      },
      why: {
        title: 'Was Makhana besonders macht und warum Edelpop daraus einen moderneren Snack macht.',
        intro: 'Diese Seite erklärt Makhana so, wie Edelpop gedacht ist: hochwertig, verständlich und mit klarem Mehrwert für den Alltag.',
      },
      faq: {
        title: 'Häufige Fragen zu Edelpop',
        intro: 'Produkte, Zutaten, Versand, Lagerung und Handel kompakt erklärt.',
      },
      wholesale: {
        title: 'Edelpop für Regal, Theke und eine modernere Snack-Kategorie.',
        intro: 'Für Händler entwickelt, die gerösteten Premium-Crunch mit starker Regalwirkung und klarer Story suchen.',
      },
    },
  },
  en: {
    brand: 'Edelpop',
    tagline: 'Premium crunch for modern routines.',
    navigation: {
      shop: 'Shop',
      bundles: 'Bundles',
      about: 'About Edelpop',
      why: 'Why Edelpop',
      journal: 'Journal',
      wholesale: 'Wholesale',
      faq: 'FAQ',
      contact: 'Contact',
      stockists: 'Stockists',
    },
    hero: {
      eyebrow: 'Premium roasted makhana',
      title: 'Crunch, the Edelpop way.',
      body: 'Roasted makhana with a light crunch, three clear flavours and a brand feel that lands as warm, modern and premium.',
      proof: 'Roasted, not fried. Light and crunchy. Three flavours, zero boredom.',
      primaryCta: 'Shop flavours',
      secondaryCta: 'Why Edelpop',
      sticker: 'Launch\nSoon',
    },
    trust: [
      {kicker: 'Roasting', title: 'Roasted instead of fried'},
      {kicker: 'Texture', title: 'Light and crunchy'},
      {kicker: 'Moment', title: 'Modern premium snack'},
      {kicker: 'Flavours', title: 'Three flavours, zero boredom'},
    ],
    categoryCards: [
      {title: 'All products', text: 'The full Edelpop range in one place.', href: '/collections/all'},
      {title: 'Bestsellers', text: 'The flavours people reach for first.', href: '/collections/all'},
      {title: 'Bundles', text: 'Three flavours curated for the best entry point.', href: '/pages/bundles'},
      {title: 'Shop by flavour', text: 'Salt & Pepper, Cheese & Herbs or Caramel.', href: '/collections/all'},
    ],
    statement: {
      eyebrow: 'Edelpop feeling',
      title: 'Snack better, without becoming boring.',
      body: 'Edelpop turns roasted makhana into a warm, modern premium snack for routines where lightness matters as much as flavour and attitude.',
    },
    benefits: [
      {badge: 'Roasting', title: 'Roasted instead of fried', text: 'For a cleaner, more modern snack moment.'},
      {badge: 'Texture', title: 'Light and crunchy', text: 'Present in the crunch without feeling heavy.'},
      {badge: 'Routine', title: 'Modern premium snack', text: 'Built for desks, sofas, trains and shared evenings.'},
      {badge: 'Flavours', title: 'Three flavours, zero boredom', text: 'Salt & Pepper, Cheese & Herbs and Caramel.'},
    ],
    featured: {
      eyebrow: 'Flavour focus',
      title: 'Salt & Pepper, Cheese & Herbs, or Caramel. Each flavour with its own mood.',
      body: 'Edelpop is not about volume. It is about clarity: savoury, creamy or sweet, always light, crunchy and modern in feel.',
      notes: ['Light crunch', 'Three flavours', 'Modern snacking'],
    },
    testimonials: {
      eyebrow: 'Voices',
      title: 'How Edelpop feels in real routines.',
      items: [
        {context: 'Launch tasting', quote: 'Finally a snack that feels light but still has character.', name: 'Leonie, Berlin'},
        {context: 'Movie night', quote: 'Caramel lands exactly right for the evening. Not loud, just very well made.', name: 'Nina, Munich'},
        {context: 'Retail feedback', quote: 'Cheese & Herbs looks premium and tastes the same way. It stays with you.', name: 'David, Hamburg'},
      ],
    },
    newsletter: {
      eyebrow: 'Edelpop updates',
      title: 'Stay close to launches, flavours and new snack moments.',
      body: 'New flavours, first stockists and only the updates that are actually worth opening.',
      cta: 'Sign up',
    },
    footer: {
      intro: 'Edelpop brings roasted makhana into a snack moment that feels light, crunchy and clearly premium.',
    },
    product: {
      descriptor: 'Premium roasted makhana snack with a light, clean crunch.',
      notes: 'Clear in flavour, clean on the finish and made for the next quick reach.',
      texture: 'Light, roasted and pleasantly crunchy without feeling heavy.',
      service: ['Fast shipping across Germany', 'Packed well and easy to order'],
      tax: 'incl. VAT plus shipping',
    },
    pages: {
      about: {
        title: 'Why Edelpop exists',
        intro: 'Edelpop brings roasted makhana into a shape that feels light, modern and retail-ready without becoming generic.',
      },
      why: {
        title: 'What makes makhana special and why Edelpop turns it into a more modern snack.',
        intro: 'This page explains makhana the way Edelpop is built: premium, easy to understand and useful in real routines.',
      },
      faq: {
        title: 'Frequently asked questions',
        intro: 'Products, ingredients, shipping, storage and wholesale explained clearly.',
      },
      wholesale: {
        title: 'Edelpop for shelves, counters and a more modern snack category.',
        intro: 'Built for retail partners looking for roasted premium crunch with strong shelf presence and a clear story.',
      },
    },
  },
} as const;
