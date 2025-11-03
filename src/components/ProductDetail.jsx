import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const getProducts = (t) => [
    {
      id: 1,
      name: t('products.items.matanit.name'),
      description: t('products.items.matanit.description'),
      composition: t('products.items.matanit.composition'),
      category: t('products.items.matanit.category'),
      fullDescription: 'MATANIT BMM - это комплексная биологически активная добавка, разработанная для поддержания когнитивных функций и здоровья нервной системы. Содержит L-карнитин для улучшения энергетического обмена в клетках мозга, лизин для синтеза белков, экстракт гинкго билобы для улучшения мозгового кровообращения, цинк для нормальной работы нейронов, и витамины группы B для поддержки метаболизма нервной ткани.',
      dosage: 'Взрослым по 1-2 капсулы 2 раза в день во время еды',
      duration: 'Курс приема: 1-2 месяца',
      contraindications: 'Индивидуальная непереносимость компонентов, беременность, кормление грудью',
      storage: 'Хранить в сухом, защищенном от света месте при температуре не выше 25°C'
    },
    {
      id: 2,
      name: t('products.items.q10.name'),
      description: t('products.items.q10.description'),
      composition: t('products.items.q10.composition'),
      category: t('products.items.q10.category'),
      fullDescription: 'Q10 Active - мощный антиоксидантный комплекс для поддержки сердечно-сосудистой системы и повышения энергетического потенциала организма. Коэнзим Q10 участвует в производстве клеточной энергии, L-карнитин способствует транспорту жирных кислот, растительные экстракты укрепляют сердце и сосуды.',
      dosage: 'По 1 капсуле 1-2 раза в день во время еды',
      duration: 'Курс приема: 1-3 месяца',
      contraindications: 'Индивидуальная непереносимость, беременность',
      storage: 'Хранить в сухом месте при температуре 15-25°C'
    },
    {
      id: 3,
      name: t('products.items.vita.name'),
      description: t('products.items.vita.description'),
      composition: t('products.items.vita.composition'),
      category: t('products.items.vita.category'),
      fullDescription: 'Vita Strong - полноценный витаминно-минеральный комплекс для ежедневной поддержки организма. Содержит витамины C и E как мощные антиоксиданты, витамины группы B для энергетического метаболизма, L-карнитин для повышения выносливости, магний для нервной системы и цинк для иммунитета.',
      dosage: 'По 1 капсуле 1 раз в день утром во время еды',
      duration: 'Курс приема: 2-3 месяца',
      contraindications: 'Индивидуальная непереносимость компонентов',
      storage: 'Хранить в сухом прохладном месте'
    },
    {
      id: 4,
      name: t('products.items.calci.name'),
      description: t('products.items.calci.description'),
      composition: t('products.items.calci.composition'),
      category: t('products.items.calci.category'),
      fullDescription: 'Calci-D - комплекс для здоровья костной системы. Кальций в биодоступной форме укрепляет кости и зубы, витамин D3 обеспечивает усвоение кальция, витамин K2 направляет кальций в костную ткань, предотвращая его отложение в сосудах.',
      dosage: 'По 1-2 капсулы в день во время еды',
      duration: 'Минимальный курс: 2 месяца',
      contraindications: 'Гиперкальциемия, мочекаменная болезнь',
      storage: 'Хранить при температуре не выше 25°C'
    },
    {
      id: 5,
      name: t('products.items.immuno.name'),
      description: t('products.items.immuno.description'),
      composition: t('products.items.immuno.composition'),
      category: t('products.items.immuno.category'),
      fullDescription: 'Immuno Herb - натуральный комплекс для укрепления иммунитета на основе растительных экстрактов. Эхинацея стимулирует иммунную систему, вейник наземный обладает противовоспалительным действием, щучка дернистая укрепляет защитные силы организма, экстракт косточек винограда является мощным антиоксидантом.',
      dosage: 'По 1 капсуле 2-3 раза в день',
      duration: 'Курс приема: 3-4 недели',
      contraindications: 'Аутоиммунные заболевания, аллергия на растения',
      storage: 'Хранить в сухом месте, защищенном от света'
    },
    {
      id: 6,
      name: t('products.items.synbio.name'),
      description: t('products.items.synbio.description'),
      composition: t('products.items.synbio.composition'),
      category: t('products.items.synbio.category'),
      fullDescription: 'SynBio+ - синбиотический комплекс для здоровья пищеварительной системы. Содержит 15 видов живых бифидо- и лактобактерий, пребиотики для их питания и цинк для поддержания целостности слизистой оболочки кишечника. Нормализует микрофлору, улучшает пищеварение и укрепляет иммунитет.',
      dosage: 'По 1 капсуле 1-2 раза в день за 30 минут до еды',
      duration: 'Курс приема: 3-4 недели',
      contraindications: 'Индивидуальная непереносимость',
      storage: 'Хранить в холодильнике при температуре 2-8°C'
    },
    {
      id: 7,
      name: t('products.items.cardio.name'),
      description: t('products.items.cardio.description'),
      composition: t('products.items.cardio.composition'),
      category: t('products.items.cardio.category'),
      fullDescription: 'Cardio Plus - специализированный комплекс для поддержки сердечно-сосудистой системы. Аргинин улучшает эластичность сосудов, витамины B1, B6, B12 необходимы для работы сердечной мышцы, карнитин и лизин поддерживают энергетический обмен, золототысячник оказывает кардиотоническое действие.',
      dosage: 'По 1-2 капсулы 2 раза в день',
      duration: 'Курс приема: 2-3 месяца',
      contraindications: 'Острый инфаркт миокарда, индивидуальная непереносимость',
      storage: 'Хранить в сухом прохладном месте'
    },
    {
      id: 8,
      name: t('products.items.mens.name'),
      description: t('products.items.mens.description'),
      composition: t('products.items.mens.composition'),
      category: t('products.items.mens.category'),
      fullDescription: "Men's Power - комплекс для мужского здоровья и повышения жизненной энергии. Якорцы стимулируют выработку тестостерона, эврикома повышает выносливость, горянка улучшает кровообращение, гинкго билоба усиливает мозговую активность, аргинин и цинк поддерживают репродуктивную функцию, пиперин улучшает усвоение компонентов.",
      dosage: 'По 1 капсуле 2 раза в день во время еды',
      duration: 'Курс приема: 1-2 месяца',
      contraindications: 'Гипертония, индивидуальная непереносимость',
      storage: 'Хранить при температуре не выше 25°C'
    },
    {
      id: 9,
      name: t('products.items.colla.name'),
      description: t('products.items.colla.description'),
      composition: t('products.items.colla.composition'),
      category: t('products.items.colla.category'),
      fullDescription: 'CollaFlex - комплекс для здоровья суставов, костей и кожи. Коллаген и хондроитин восстанавливают хрящевую ткань, витамин C необходим для синтеза коллагена, гиалуроновая кислота увлажняет и питает суставы и кожу, кремний укрепляет соединительную ткань.',
      dosage: 'По 2 капсулы 1 раз в день',
      duration: 'Курс приема: 2-3 месяца',
      contraindications: 'Индивидуальная непереносимость',
      storage: 'Хранить в сухом месте при комнатной температуре'
    },
    {
      id: 10,
      name: t('products.items.hepa.name'),
      description: t('products.items.hepa.description'),
      composition: t('products.items.hepa.composition'),
      category: t('products.items.hepa.category'),
      fullDescription: 'Hepa Detox - натуральный комплекс для поддержки печени и детоксикации организма. Солодка защищает печень, шиповник богат витамином C и антиоксидантами, силимарин восстанавливает клетки печени, чеснок стимулирует выработку детоксикационных ферментов, активированный уголь связывает и выводит токсины.',
      dosage: 'По 1 капсуле 2-3 раза в день за 30 минут до еды',
      duration: 'Курс приема: 3-4 недели',
      contraindications: 'Острые заболевания печени, камни в желчном пузыре',
      storage: 'Хранить в сухом месте, защищенном от света'
    }
  ];

  const products = getProducts(t);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Продукт не найден</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary-light text-white py-12 md:py-20 pt-24 md:pt-28">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6 md:mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm md:text-base">Назад к продуктам</span>
          </button>
          
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{product.name}</h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6 md:space-y-8">
              {/* Full Description */}
              <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Описание</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Composition */}
              <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Состав</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{product.composition}</p>
              </div>

              {/* Usage */}
              <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Применение</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Дозировка:</h3>
                    <p className="text-gray-600">{product.dosage}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Курс приема:</h3>
                    <p className="text-gray-600">{product.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Противопоказания:</h3>
                    <p className="text-gray-600">{product.contraindications}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Условия хранения:</h3>
                    <p className="text-gray-600">{product.storage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-primary text-white rounded-2xl shadow-lg p-5 md:p-6 md:sticky md:top-24">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Есть вопросы?</h3>
                <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">Свяжитесь с нами для получения консультации</p>
                
                <a
                  href="tel:+998781136046"
                  className="flex items-center justify-center space-x-2 bg-white text-primary px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-primary-mint transition-colors mb-3"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Позвонить</span>
                </a>

                <a
                  href="https://t.me/munosal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.093.036.306.02.472z"/>
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">Преимущества</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">Натуральные компоненты</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">GMP сертификация</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">Проверенная эффективность</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">15+ лет на рынке</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
