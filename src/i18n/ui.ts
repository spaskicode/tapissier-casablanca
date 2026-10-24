/** Chaînes d'interface + aides i18n (FR par défaut, AR sous /ar/). */

export const languages = { fr: 'Français', ar: 'العربية' } as const;
export const defaultLang = 'fr' as const;
export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.zones': 'Zones',
    'nav.realisations': 'Réalisations',
    'nav.tarifs': 'Tarifs',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'cta.devis': 'Devis gratuit',
    'cta.call': 'Appeler',
    'cta.whatsapp': 'WhatsApp',
    'cta.callNow': 'Appeler maintenant',
    'hero.badge': 'Tapissier-décorateur à Casablanca',
    'faq.title': 'Questions fréquentes',
    'breadcrumb.home': 'Accueil',
    'footer.services': 'Nos services',
    'footer.zones': 'Zones desservies',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'service.answer': 'En bref',
    'service.price': 'Tarif',
    'service.related': 'Services associés',
    'service.cta': 'Demander un devis gratuit',
    'zone.servicesHere': 'Nos services dans ce quartier',
    'skip': 'Aller au contenu',
    'dir': 'ltr',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.zones': 'المناطق',
    'nav.realisations': 'أعمالنا',
    'nav.tarifs': 'الأسعار',
    'nav.about': 'من نحن',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'cta.devis': 'طلب عرض سعر مجاني',
    'cta.call': 'اتصل',
    'cta.whatsapp': 'واتساب',
    'cta.callNow': 'اتصل الآن',
    'hero.badge': 'منجد ومزخرف بالدار البيضاء',
    'faq.title': 'أسئلة شائعة',
    'breadcrumb.home': 'الرئيسية',
    'footer.services': 'خدماتنا',
    'footer.zones': 'المناطق المخدومة',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.legal': 'الإشعارات القانونية',
    'service.answer': 'باختصار',
    'service.price': 'السعر',
    'service.related': 'خدمات ذات صلة',
    'service.cta': 'اطلب عرض سعر مجاني',
    'zone.servicesHere': 'خدماتنا في هذا الحي',
    'skip': 'انتقل إلى المحتوى',
    'dir': 'rtl',
  },
} as const;

export function t(lang: Lang, key: keyof typeof ui['fr']): string {
  return (ui[lang] as Record<string, string>)[key] ?? (ui.fr as Record<string, string>)[key];
}

/** Préfixe d'URL selon la langue : '' pour fr, '/ar' pour ar. */
export function localePrefix(lang: Lang): string {
  return lang === 'fr' ? '' : '/ar';
}

/** Construit une URL localisée à partir d'un chemin canonique ("/services"). */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path === '/' ? '' : path;
  return `${localePrefix(lang)}${clean}` || '/';
}
