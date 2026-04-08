export type LocaleCode = 'de' | 'en';
export type FlavorKey = 'salt-pepper' | 'cheese-herbs' | 'caramel';

export const supportedLocales = ['de', 'en'] as const;

export function getLocaleFromPath(pathname: string): LocaleCode {
  return pathname.startsWith('/en') ? 'en' : 'de';
}

export function prefixPath(locale: LocaleCode, path: string) {
  if (locale === 'de') return path;
  return `/en${path === '/' ? '' : path}`;
}

export const brandAssets = {
  logo: '/images/brand/edelpop-logo-primary.svg',
  heroVideo: '/video/hero/salt-pepper-hero.mp4',
  lifestyle: {
    saltPepperLandscape: '/images/lifestyle/salt-pepper/hero-landscape.png',
    saltPepperSquare: '/images/lifestyle/salt-pepper/hero-square.png',
  },
  packaging: {
    'salt-pepper': {
      front: '/images/packaging/fronts/salt-pepper-front.png',
      back: '/images/packaging/backs/salt-pepper-back.png',
      accent: '#d9a3a0',
      accentStrong: '#a05d56',
    },
    'cheese-herbs': {
      front: '/images/packaging/fronts/cheese-herbs-front.png',
      back: '/images/packaging/backs/cheese-herbs-back.png',
      accent: '#e4d85c',
      accentStrong: '#a89a1c',
    },
    caramel: {
      front: '/images/packaging/fronts/caramel-front.png',
      back: '/images/packaging/backs/caramel-back.png',
      accent: '#f1bb81',
      accentStrong: '#cf7334',
    },
  },
} as const;

export const flavorMeta = {
  'salt-pepper': {
    key: 'salt-pepper',
    title: 'Salt & Pepper',
    deTitle: 'Salz & Pfeffer',
    notesDe: ['Knusprig', 'Salzig', 'Fein'],
    notesEn: ['Crunchy', 'Savory', 'Fine'],
  },
  'cheese-herbs': {
    key: 'cheese-herbs',
    title: 'Cheese & Herbs',
    deTitle: 'Käse & Kräuter',
    notesDe: ['Würzig', 'Cremig', 'Mild'],
    notesEn: ['Savory', 'Creamy', 'Mellow'],
  },
  caramel: {
    key: 'caramel',
    title: 'Caramel',
    deTitle: 'Karamell',
    notesDe: ['Zart', 'Buttrig', 'Leicht süß'],
    notesEn: ['Soft', 'Buttery', 'Lightly sweet'],
  },
} as const;

export function inferFlavor(value: string): FlavorKey {
  const normalized = value.toLowerCase();

  if (
    normalized.includes('salt') ||
    normalized.includes('salz') ||
    normalized.includes('pepper') ||
    normalized.includes('pfeffer')
  ) {
    return 'salt-pepper';
  }

  if (
    normalized.includes('cheese') ||
    normalized.includes('herb') ||
    normalized.includes('käse') ||
    normalized.includes('kraut')
  ) {
    return 'cheese-herbs';
  }

  return 'caramel';
}

export const siteCopy = {
  de: {
    brand: 'Edelpop',
    tagline: 'Premium crunch for modern routines.',
    navigation: {
      shop: 'Shop',
      about: 'Über Edelpop',
      faq: 'FAQ',
      contact: 'Kontakt',
      wholesale: 'Handel',
    },
    hero: {
      eyebrow: 'Gerösteter Premium-Snack',
      title: 'Makhana, neu gedacht.',
      body: 'Edelpop bringt geröstete Wasserliliensamen in einen ruhigen, modernen Auftritt: leicht im Biss, klar im Geschmack und gemacht für bewusste Snack-Momente.',
      proof: 'Geröstet statt frittiert. Drei klare Sorten. Luftiger Crunch.',
      primaryCta: 'Jetzt Sorten ansehen',
      secondaryCta: 'Mehr zur Marke',
    },
    story: {
      eyebrow: 'Warum Edelpop',
      title: 'Ein leichterer Snack mit klarerem Auftritt.',
      body: 'Edelpop verbindet die ruhige Wärme moderner Food-Brands mit der Leichtigkeit von geröstetem Makhana. Keine visuelle Lautstärke, kein schweres Finish, nur eine klare Range für Sofa, Schreibtisch und unterwegs.',
      cta: 'Mehr über Edelpop',
    },
    newsletter: {
      eyebrow: 'Post von Edelpop',
      title: 'Neuigkeiten, wenn es wirklich etwas Neues gibt.',
      body: 'Seltene Updates zu Sorten, Launches und neuen Stockists. Kurz, ruhig und relevant.',
      cta: 'Eintragen',
    },
    footer: {
      intro: 'Gerösteter Makhana mit leichtem Crunch, klarer Range und einem ruhigen Premium-Gefühl.',
    },
    product: {
      descriptor: 'Gerösteter Makhana mit leichtem Crunch und sauberem Finish.',
      flavorDescriptors: {
        'salt-pepper': 'Salzig, klar und elegant im Alltag.',
        'cheese-herbs': 'Würzig, weich und fein ausbalanciert.',
        caramel: 'Sanft süß mit warmer karamelliger Note.',
      },
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
      about: 'About Edelpop',
      faq: 'FAQ',
      contact: 'Contact',
      wholesale: 'Wholesale',
    },
    hero: {
      eyebrow: 'Roasted premium snack',
      title: 'Makhana, reintroduced.',
      body: 'Edelpop brings roasted foxnuts into a softer, more modern format: light on texture, clear in flavour and made for considered snack moments.',
      proof: 'Roasted, not fried. Three clear flavours. Airy crunch.',
      primaryCta: 'Shop flavours',
      secondaryCta: 'About Edelpop',
    },
    story: {
      eyebrow: 'Why Edelpop',
      title: 'A lighter snack with a clearer point of view.',
      body: 'Edelpop pairs the quiet warmth of a modern food brand with the lightness of roasted makhana. No visual noise, no heavy finish, just a focused range for the sofa, the desk, and the in-between moments.',
      cta: 'About Edelpop',
    },
    newsletter: {
      eyebrow: 'Notes from Edelpop',
      title: 'Updates, only when there is something worth sharing.',
      body: 'Occasional news on flavours, launches and new stockists. Short, calm and relevant.',
      cta: 'Sign up',
    },
    footer: {
      intro: 'Roasted makhana with light crunch, a focused range and a calm premium feel.',
    },
    product: {
      descriptor: 'Roasted makhana with a light crunch and a clean finish.',
      flavorDescriptors: {
        'salt-pepper': 'Savory, clean and quietly bold.',
        'cheese-herbs': 'Rounded, herbaceous and softly rich.',
        caramel: 'Gently sweet with a warm caramel finish.',
      },
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
