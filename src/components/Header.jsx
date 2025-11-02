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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700 animate-slide-up">
            <ul className="space-y-3 mb-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-light hover:text-primary-light transition-colors font-medium py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-400 text-sm">Язык:</span>
              <button
                onClick={() => changeLanguage(currentLang === 'ru' ? 'uz' : 'ru')}
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-gray-700 transition-colors"
              >
                <span className="text-light text-xs font-medium">{currentLang.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Phone & CTA */}
            <a
              href="tel:+998781136046"
              className="flex items-center space-x-2 text-light mb-4 py-2"
            >
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+998781136046</span>
            </a>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
              {t('header.cta')}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
