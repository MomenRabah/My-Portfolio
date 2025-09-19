import { ThemeToggle } from './components/ui/theme-toggle';
import { LanguageSwitcher } from './components/ui/language-switcher';
import logo from './assets/logo.svg';
import logoEn from './assets/logo-en.svg';
import HeroSection from './components/sections/HeroSection';
import AboutMe from './components/sections/AboutMe';
import { BackgroundRippleEffect } from './components/ui/background-ripple-effect';
import Experience from './components/sections/Experience';
import Technologies from './components/sections/Technologies';
import Services from './components/sections/Services';
import { useLanguage } from './lib/language-provider';
import Contact from './components/sections/Contact';

function App() {
  const { language } = useLanguage();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <header className="bg-background border-secondary fixed top-0 right-0 left-0 z-50 mx-6 mt-6 max-w-4xl rounded-3xl border-2 px-6 py-4 md:mx-auto">
        <nav className="mx-auto flex h-10 w-full items-center justify-between md:h-16">
          <div className="flex items-center">
            {language === 'ar' ? (
              <img src={logo} alt="logo" className="h-8 w-24 md:h-12 md:w-32 dark:invert" />
            ) : (
              <img src={logoEn} alt="logo" className="h-8 w-24 md:h-12 md:w-32 dark:invert" />
            )}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <main className="z-10 flex w-full flex-col gap-16 pt-10">
        <HeroSection />
        <AboutMe />
        <BackgroundRippleEffect />
        <Technologies />
        <Experience />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
