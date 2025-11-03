import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.png';

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t('header.about'), href: '#about' },
    { name: t('header.products'), href: '#products' },
    { name: t('header.advantages'), href: '#advantages' },
    { name: t('header.contact'), href: '#contact' },
  ];

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-dark/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={logo}
              alt="MUNOSAL"
              className="h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation - Center */}
          <ul className={`hidden lg:flex items-center space-x-8 flex-1 justify-center transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-light hover:text-primary-light transition-colors font-medium text-base"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side - Language, Phone, CTA */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={() => changeLanguage(currentLang === 'ru' ? 'uz' : 'ru')}
              className="w-12 h-12 flex items-center justify-center border border-white-600 rounded-full  transition-colors"
            >
              <span className="text-light text-sm font-medium">{currentLang.toUpperCase()}</span>
            </button>

            {/* Phone CTA */}
            <a
              href="tel:+998781136046"
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <div className="relative">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

              </div>
              <div className="text-left">

                <div className="text-lg font-bold text-white tracking-wide">+998 78 113-60-46</div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-light focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Fullscreen Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-primary to-primary-light animate-fade-in">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <img src={logo} alt="MUNOSAL" className="h-12 w-auto" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                {/* Navigation */}
                <nav className="mb-12">
                  <ul className="space-y-6">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block text-white text-2xl font-medium hover:text-white/80 transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Company Description */}
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-white mb-4">{t('hero.slogan')}</h2>
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {t('hero.description')}
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-xs text-white/80">{t('hero.stats.years')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-white mb-1">10+</div>
                    <div className="text-xs text-white/80">{t('hero.stats.products')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-white/80">{t('hero.stats.natural')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-white mb-1">GMP</div>
                    <div className="text-xs text-white/80">{t('hero.stats.certified')}</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-white text-primary px-6 py-4 rounded-full font-semibold text-base hover:bg-white/90 transition-all"
                  >
                    {t('hero.cta')}
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-transparent border-2 border-white text-white px-6 py-4 rounded-full font-semibold text-base hover:bg-white/10 transition-all"
                  >
                    {t('hero.contact')}
                  </button>
                </div>

                {/* Contact & Language */}
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80 text-sm">{t('header.phone')}</span>
                    <a href="tel:+998781136046" className="text-white font-semibold text-lg">
                      +998 78 113-60-46
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Язык:</span>
                    <button
                      onClick={() => changeLanguage(currentLang === 'ru' ? 'uz' : 'ru')}
                      className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <span className="text-white text-sm font-medium">{currentLang === 'ru' ? 'RU' : 'UZ'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="p-4 flex justify-center">
                <svg className="w-6 h-6 text-white/60 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
