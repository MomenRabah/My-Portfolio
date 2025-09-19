import { Languages } from 'lucide-react';
import { useLanguage } from '../../lib/language-provider';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2 rounded-full p-2 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5 align-middle" />
    </button>
  );
}
