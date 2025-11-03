import { useTranslation } from 'react-i18next';
import backgroundImage from '../assets/logo/background.jpg';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-light/75"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        {/* Logo */}
        <div className="mb-3 animate-scale-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Munosal Farm
          </h1>
        </div>

        {/* Slogan */}
        <p className="text-2xl md:text-4xl font-light mb-6 animate-slide-up">
          {t('hero.slogan')}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up">
          {t('hero.description')}
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">15+</div>
            <div className="text-xs md:text-sm lg:text-base text-white/80">{t('hero.stats.years')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">10+</div>
            <div className="text-xs md:text-sm lg:text-base text-white/80">{t('hero.stats.products')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm lg:text-base text-white/80">{t('hero.stats.natural')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">GMP</div>
            <div className="text-xs md:text-sm lg:text-base text-white/80">{t('hero.stats.certified')}</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <button
            onClick={scrollToProducts}
            className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-primary-mint hover:text-dark transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            {t('hero.cta')}
          </button>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.contact')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
