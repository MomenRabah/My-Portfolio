import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations.json';

type Language = 'ar' | 'en';

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const initialState: LanguageProviderState = {
  language: 'ar',
  setLanguage: () => null,
  t: () => '',
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = 'ar',
  storageKey = 'portfolio-language',
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage: (newLanguage: Language) => {
      localStorage.setItem(storageKey, newLanguage);
      setLanguage(newLanguage);
    },
    t,
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
