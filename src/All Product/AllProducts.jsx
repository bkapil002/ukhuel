import React, { useState } from 'react';

// Custom SVG Icons
const FlameIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#ff5f00]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#e5a93b]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.813 15.904L9 21L8.188 15.904L3 15L8.188 14.096L9 9L9.813 14.096L15 15L9.813 15.904Z" />
    <path d="M19.001 7.429L18.376 11L17.751 7.429L14.126 6.804L17.751 6.179L18.376 2.56L19.001 6.179L22.626 6.804L19.001 7.429Z" />
  </svg>
);

const ProteinIcon = () => (
  <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12l-1.5 12a1 1 0 01-1 1h-7a1 1 0 01-1-1L6 8z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 4.5h7v3.5h-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8" />
  </svg>
);

const KcalIcon = () => (
  <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l3-3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 013-3" />
  </svg>
);

const categories = [
  'Bestsellers',
  'Bundles',
  'Hot Meals',
  'Nutritionally Complete Food',
  'Nutritionally Complete Powders',
  'Nutrition Drinks & Snacks',
  'Superfoods & Greens Powders',
  'Official Huel Merch',
];

const catalogItems = [
  // Row 1
  {
    id: 1,
    name: 'Black Edition',
    subtitle: 'Complete high-protein powder meal',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'BESTSELLER',
    badgeType: 'bestseller',
    details: [
      { icon: <ProteinIcon />, text: '40g protein' },
      { icon: <KcalIcon />, text: '400 kcal per meal' }
    ],
    price: 'From £30.50 / £1.79 per meal'
  },
  {
    id: 2,
    name: 'Huel Lite Ramen',
    subtitle: 'The lighter calorie instant ramen pot',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'NEW FLAVOURS',
    badgeType: 'new',
    details: [
      { icon: <ProteinIcon />, text: '25g protein' },
      { icon: <KcalIcon />, text: 'Up to 230 kcal per pot' }
    ],
    price: 'From £18.30 / £3.05 per pot'
  },
  {
    id: 3,
    name: 'Black Edition Ready-to-drink',
    subtitle: 'High-protein meal shakes',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'NEW FLAVOURS',
    badgeType: 'new',
    details: [
      { icon: <ProteinIcon />, text: '35g protein' },
      { icon: <KcalIcon />, text: '400 kcal per bottle' }
    ],
    price: 'From £41 / £3.42 per bottle'
  },
  {
    id: 4,
    name: 'Diet',
    subtitle: 'Nutritionally complete weight loss meal',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'NEW',
    badgeType: 'new',
    details: [
      { icon: <ProteinIcon />, text: '20g protein' },
      { icon: <KcalIcon />, text: '200 kcal per meal' }
    ],
    price: 'From £34 / £1 per meal'
  },

  // Row 2 (Promo is rendered inline in the component grid)
  {
    id: 5,
    name: 'Hot & Savoury Meal Packs',
    subtitle: 'Hot & tasty instant meals',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'BESTSELLER',
    badgeType: 'bestseller',
    details: [
      { icon: <ProteinIcon />, text: 'Up to 25g protein' },
      { icon: <KcalIcon />, text: '400 kcal per meal' }
    ],
    price: 'From £19.60 / £2.80 per meal'
  },
  {
    id: 6,
    name: 'Powder',
    subtitle: 'The original complete meal',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: null,
    details: [
      { icon: <ProteinIcon />, text: '30g protein' },
      { icon: <KcalIcon />, text: '400 kcal per meal' }
    ],
    price: 'From £27 / £1.59 per meal'
  },

  // Row 3
  {
    id: 7,
    name: 'Lite Ready-to-drink',
    subtitle: 'The 190-calorie meal shake',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'NEW FLAVOURS',
    badgeType: 'new',
    details: [
      { icon: <ProteinIcon />, text: '25g protein' },
      { icon: <KcalIcon />, text: '190 kcal per bottle' }
    ],
    price: 'From £39 / £3.25 per bottle'
  },
  {
    id: 8,
    name: 'Huel Black Edition Ramen',
    subtitle: 'The high-protein instant ramen pot',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: 'NEW',
    badgeType: 'new',
    details: [
      { icon: <ProteinIcon />, text: '40g protein' },
      { icon: <KcalIcon />, text: '360 kcal per meal' }
    ],
    price: 'From £20.70 / £3.45 per pot'
  },
  {
    id: 9,
    name: 'Complete Protein',
    subtitle: 'Complete protein powder',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: null,
    details: [
      { icon: <ProteinIcon />, text: '20g protein' },
      { icon: <KcalIcon />, text: '105 kcal per serve' }
    ],
    price: 'From £22.50 / £0.87 per serving'
  },
  {
    id: 10,
    name: 'Complete Nutrition Bar',
    subtitle: 'Complete protein bar',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
    badge: null,
    details: [
      { icon: <ProteinIcon />, text: 'Up to 15g protein' },
      { icon: <KcalIcon />, text: 'Up to 210 kcal per bar' }
    ],
    price: 'From £27.50 / £2.29 per bar'
  }
];

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState('Bestsellers');

  return (
    <div className="w-full bg-white font-sans select-none pb-16">
      
      {/* Breadcrumb Navigation Bar */}
      <nav className="w-full bg-[#f6f4ee] border-b border-neutral-200/40 py-3 sm:py-3.5">
        <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-500">
          <a 
            href="/" 
            className="hover:text-black hover:underline transition-all"
          >
            Home
          </a>
          <span className="text-neutral-400 font-normal select-none">&gt;</span>
          <span className="text-neutral-800">
            All Products
          </span>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[320px] overflow-hidden shadow-sm">
        
        {/* Banner Background Image */}
        <img
          src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/b0c31d64a4002824101193fc202d7f99bec12cec-2880x577.jpg?auto=format&fit=max&q=75&w=2000"
          alt="All Huel Products Lineup"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-8 sm:pb-12">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              All Products
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mt-2.5 font-medium leading-none">
              Explore the full lineup.
            </p>
          </div>
        </div>

      </div>

      {/* Product Catalog Section */}
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-12">
        
        {/* Horizontal Category Tab Pills */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === cat
                  ? 'bg-black text-white'
                  : 'bg-[#f5f3ed] hover:bg-neutral-200 text-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Catalog Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-10">
          
          {/* Row 1: Black Edition, Huel Lite Ramen, Black Edition RTD, Diet */}
          {catalogItems.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Row 2: Wide Promo Card & Hot & Savoury, Powder */}
          
          {/* 2-Column Wide Promo Card */}
          <div className="relative h-full min-h-[380px] sm:col-span-2 lg:col-span-2 rounded-lg overflow-hidden group shadow-sm flex flex-col justify-end p-6 sm:p-8 cursor-pointer">
            <img
              src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/aaa01ce68ba466102fb51bce73844b63a41c0bb5-976x1303.jpg?auto=format&fit=max&q=75&w=2000"
              alt="Not sure what you're looking for?"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Not sure what you're looking for?
              </h2>
              <div className="mt-4">
                <button className="bg-white hover:bg-neutral-100 text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition duration-200 cursor-pointer">
                  Find Your Perfect Huel
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Hot & Savoury and Powder Cards */}
          {catalogItems.slice(4, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {/* Row 3: Lite RTD, Black Edition Ramen, Complete Protein, Complete Nutrition Bar */}
          {catalogItems.slice(6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>

    </div>
  );
};

// Sub-component: Product Card
function ProductCard({ product }) {
  return (
    <div className="flex flex-col group h-full select-none">
      
      {/* Image Container with Cream Background */}
      <div className="relative w-full aspect-square bg-[#f5f3ed] rounded-lg overflow-hidden flex items-center justify-center p-6 select-none">
        
        {/* Badge Tag */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 bg-white px-2 py-1.5 rounded-sm flex items-center gap-1.5 shadow-sm border border-neutral-100">
            {product.badgeType === 'bestseller' ? <FlameIcon /> : <SparklesIcon />}
            <span className="text-[10px] font-bold tracking-wider text-neutral-800 uppercase leading-none">
              {product.badge}
            </span>
          </div>
        )}

        {/* Base Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`object-contain max-h-[85%] max-w-[85%] transition-opacity duration-500 ease-in-out ${
            product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
          }`}
          loading="lazy"
        />

        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} Hover`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            loading="lazy"
          />
        )}
      </div>

      {/* Info details */}
      <div className="flex flex-col flex-grow pt-4">
        
        <div>
          <h3 className="font-bold text-base text-neutral-900 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-600 mt-1 font-normal leading-tight">
            {product.subtitle}
          </p>
        </div>

        {/* Specs Table */}
        <div className="border-t border-[#e2dfd7] border-b divide-y divide-[#e2dfd7] mt-4">
          {product.details.map((detail, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3.5 py-2.5 text-xs font-medium text-neutral-600"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                {detail.icon}
              </div>
              <span className="leading-none">{detail.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing and Button */}
        <div className="mt-auto pt-4 flex flex-col">
          <p className="font-bold text-sm sm:text-base text-neutral-900">
            {product.price}
          </p>
          <div className="mt-4">
            <button className="bg-black hover:bg-neutral-800 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer">
              View product
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AllProducts;