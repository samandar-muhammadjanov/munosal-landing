import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const getProducts = (t) => [
  {
    id: 1,
    name: t('products.items.matanit.name'),
    description: t('products.items.matanit.description'),
    composition: t('products.items.matanit.composition'),
    category: t('products.items.matanit.category'),
  },
  {
    id: 2,
    name: t('products.items.q10.name'),
    description: t('products.items.q10.description'),
    composition: t('products.items.q10.composition'),
    category: t('products.items.q10.category'),
  },
  {
    id: 3,
    name: t('products.items.vita.name'),
    description: t('products.items.vita.description'),
    composition: t('products.items.vita.composition'),
    category: t('products.items.vita.category'),
  },
  {
    id: 4,
    name: t('products.items.calci.name'),
    description: t('products.items.calci.description'),
    composition: t('products.items.calci.composition'),
    category: t('products.items.calci.category'),
  },
  {
    id: 5,
    name: t('products.items.immuno.name'),
    description: t('products.items.immuno.description'),
    composition: t('products.items.immuno.composition'),
    category: t('products.items.immuno.category'),
  },
  {
    id: 6,
    name: t('products.items.synbio.name'),
    description: t('products.items.synbio.description'),
    composition: t('products.items.synbio.composition'),
    category: t('products.items.synbio.category'),
  },
  {
    id: 7,
    name: t('products.items.cardio.name'),
    description: t('products.items.cardio.description'),
    composition: t('products.items.cardio.composition'),
    category: t('products.items.cardio.category'),
  },
  {
    id: 8,
    name: t('products.items.mens.name'),
    description: t('products.items.mens.description'),
    composition: t('products.items.mens.composition'),
    category: t('products.items.mens.category'),
  },
  {
    id: 9,
    name: t('products.items.colla.name'),
    description: t('products.items.colla.description'),
    composition: t('products.items.colla.composition'),
    category: t('products.items.colla.category'),
  },
  {
    id: 10,
    name: t('products.items.hepa.name'),
    description: t('products.items.hepa.description'),
    composition: t('products.items.hepa.composition'),
    category: t('products.items.hepa.category'),
  },
];

function ProductCard({ product }) {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Category badge */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-2 text-sm font-semibold">
        {product.category}
      </div>
      
      <div className="p-6">
        {/* Product name */}
        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 min-h-[48px]">
          {product.description}
        </p>
        
        {/* Composition */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">{product.compositionLabel}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.composition}
          </p>
        </div>
        
        {/* Button */}
        <button 
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full bg-primary-mint text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
        >
          {product.moreLabel}
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const { t } = useTranslation();
  const products = getProducts(t).map(p => ({
    ...p,
    compositionLabel: t('products.composition'),
    moreLabel: t('products.more')
  }));
  
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
          {t('products.title')}
        </h2>
        <div className="w-24 h-1 bg-primary-light mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {t('products.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
