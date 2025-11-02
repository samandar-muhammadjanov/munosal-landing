import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-12"></div>
          
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <p className="animate-slide-up">
              <span className="font-bold text-primary">MUNOSAL</span> {t('about.description1')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-xl bg-primary-mint/20 hover:bg-primary-mint/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">{t('about.years')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-primary-mint/20 hover:bg-primary-mint/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">{t('about.products')}</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-primary-mint/20 hover:bg-primary-mint/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">{t('about.quality')}</div>
              </div>
            </div>
            
            <p className="mt-8">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
