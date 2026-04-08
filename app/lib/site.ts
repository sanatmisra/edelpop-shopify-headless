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
    tagline: 'Besser als Popcorn!',
    navigation: {
      shop: 'Shop',
      about: 'Über Edelpop',
      faq: 'FAQ',
      contact: 'Kontakt',
      wholesale: 'Handel',
    },
    hero: {
      eyebrow: 'Gerösteter Premium-Snack',
      title: 'Knusprig.\nLuftig.\nAnders.',
      body: 'Edelpop bringt geröstete Wasserliliensamen in einen ruhigen, modernen Auftritt. Leicht im Biss, klar im Geschmack.',
      primaryCta: 'Jetzt Sorten ansehen',
      secondaryCta: 'Mehr zur Marke',
    },
    featuredFlavor: {
      eyebrow: 'Hero-Sorte',
      title: 'Salz & Pfeffer.',
      tagline: 'Knusprig · Salzig · Fein',
      body: 'Die erste Sorte. Klar im Charakter, leicht im Biss. Ein Snack, der für sich spricht.',
      cta: 'Jetzt probieren',
    },
    statement: {
      eyebrow: 'Leicht genießen',
      title: 'Ein Snack, der sich leicht anfühlt —\nvor, während und nach dem Essen.',
      items: [
        {
          label: 'Röstung',
          body: 'Geröstet statt frittiert',
        },
        {
          label: 'Textur',
          body: 'Knusprig, dann zart',
        },
        {
          label: 'Moment',
          body: 'Moderner Premium-Snack',
        },
      ],
    },
    range: {
      eyebrow: 'Die Range',
      title: 'Drei Sorten.\nKlar kuratiert.',
      body: 'Salt & Pepper, Cheese & Herbs und Caramel bilden die Kernrange.',
    },
    story: {
      eyebrow: 'Warum Edelpop',
      title: 'Ein leichterer Snack\nmit klarerem\nAuftritt.',
      body: 'Edelpop verbindet die ruhige Wärme moderner Food-Brands mit der Leichtigkeit von geröstetem Makhana. Kein fettiges Nachgefühl. Kein Kleben an den Zähnen. Nur eine klare Range.',
      cta: 'Mehr über Edelpop',
    },
    newsletter: {
      eyebrow: 'Post von Edelpop',
      title: 'Neuigkeiten,\nwenn es wirklich\netwas Neues gibt.',
      body: 'Seltene Updates zu Sorten, Launches und neuen Stockists. Kurz, ruhig und relevant.',
      cta: 'Eintragen',
    },
    footer: {
      intro: 'Besser als Popcorn! Ein ruhiger Premium-Snack mit leichterem Gefühl.',
      meta: 'Instagram',
      copyright: '© 2025 Edelpop. Alle Rechte vorbehalten.',
    },
    product: {
      descriptor: 'Gerösteter Makhana mit leichtem Crunch und sauberem Finish.',
      flavorDescriptors: {
        'salt-pepper': 'Knusprig · Salzig · Fein',
        'cheese-herbs': 'Würzig · Cremig · Mild',
        caramel: 'Zart · Buttrig · Leicht süß',
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
    tagline: 'Better than popcorn.',
    navigation: {
      shop: 'Shop',
      about: 'About Edelpop',
      faq: 'FAQ',
      contact: 'Contact',
      wholesale: 'Wholesale',
    },
    hero: {
      eyebrow: 'Roasted premium snack',
      title: 'Crunchy.\nAiry.\nDifferent.',
      body: 'Edelpop brings roasted water lily seeds into a calm, modern format. Light on the bite, clear in flavour.',
      primaryCta: 'Shop flavours',
      secondaryCta: 'About Edelpop',
    },
    featuredFlavor: {
      eyebrow: 'Hero flavour',
      title: 'Salt & Pepper.',
      tagline: 'Crunchy · Savory · Fine',
      body: 'The first flavour. Clear in character, light on the bite. A snack that stands on its own.',
      cta: 'Try it now',
    },
    statement: {
      eyebrow: 'Lightly enjoyed',
      title: 'A snack that feels light —\nbefore, during and after eating.',
      items: [
        {
          label: 'Roast',
          body: 'Roasted instead of fried',
        },
        {
          label: 'Texture',
          body: 'Crunchy, then tender',
        },
        {
          label: 'Moment',
          body: 'Modern premium snack',
        },
      ],
    },
    range: {
      eyebrow: 'The range',
      title: 'Three flavours.\nClearly curated.',
      body: 'Salt & Pepper, Cheese & Herbs and Caramel form the core range.',
    },
    story: {
      eyebrow: 'Why Edelpop',
      title: 'A lighter snack\nwith a clearer\npoint of view.',
      body: 'Edelpop pairs the quiet warmth of modern food brands with the lightness of roasted makhana. No greasy afterfeel. No sticking to your teeth. Just a focused range.',
      cta: 'More about Edelpop',
    },
    newsletter: {
      eyebrow: 'Notes from Edelpop',
      title: 'News,\nonly when there is\nsomething new to share.',
      body: 'Occasional news on flavours, launches and new stockists. Short, calm and relevant.',
      cta: 'Sign up',
    },
    footer: {
      intro: 'Better than popcorn. A calm premium snack with a lighter finish.',
      meta: 'Instagram',
      copyright: '© 2025 Edelpop. All rights reserved.',
    },
    product: {
      descriptor: 'Roasted makhana with a light crunch and a clean finish.',
      flavorDescriptors: {
        'salt-pepper': 'Crunchy · Savory · Fine',
        'cheese-herbs': 'Savory · Creamy · Mild',
        caramel: 'Soft · Buttery · Lightly sweet',
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
