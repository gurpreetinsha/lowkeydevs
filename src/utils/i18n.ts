import en from '../locales/en.json';
import hi from '../locales/hi.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import ar from '../locales/ar.json';
import zh from '../locales/zh.json';
import ja from '../locales/ja.json';
import ru from '../locales/ru.json';
import pt from '../locales/pt.json';

export const SUPPORTED_LANGUAGES = ['en', 'hi', 'es', 'fr', 'de', 'ar', 'zh', 'ja', 'ru', 'pt'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

export const localeDictionaries: Record<Language, Record<string, string>> = {
  en, hi, es, fr, de, ar, zh, ja, ru, pt
};

export function useTranslations(lang: Language) {
  const dict = localeDictionaries[lang] || localeDictionaries['en'];
  
  return function t(key: string, params?: Record<string, string>): string {
    let value = dict[key];
    if (value === undefined) {
      // Fallback to English
      value = localeDictionaries['en'][key] || key;
    }
    
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(new RegExp(`{${k}}`, 'g'), v);
      });
    }
    
    return value;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  const cleanPath = path.replace(/^\/+/, '');
  
  // Check if path already starts with a language prefix
  const parts = cleanPath.split('/');
  if (parts.length > 0 && SUPPORTED_LANGUAGES.includes(parts[0] as any)) {
    parts[0] = lang;
    return '/' + parts.join('/');
  }
  
  return `/${lang}/${cleanPath}`;
}

export function getAlternateUrl(canonicalUrl: string, targetLang: Language, currentLang: Language): string {
  try {
    const url = new URL(canonicalUrl);
    const pathParts = url.pathname.split('/').filter(Boolean);
    
    if (pathParts.length > 0 && SUPPORTED_LANGUAGES.includes(pathParts[0] as any)) {
      pathParts[0] = targetLang;
    } else {
      pathParts.unshift(targetLang);
    }
    
    url.pathname = '/' + pathParts.join('/');
    return url.toString();
  } catch (e) {
    return canonicalUrl;
  }
}
