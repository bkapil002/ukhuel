import React from 'react';

// Custom SVG Icons matching the design
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

const BoxIcon = () => (
  <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const GiftIcon = () => (
  <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v10H4V12m16-4H4a2 2 0 00-2 2v2h20v-2a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V8m0-4a3 3 0 10-3 3h6a3 3 0 10-3-3z" />
  </svg>
);

const productsData = [
  {
    id: 1,
    name: 'Black Edition',
    subtitle: 'Complete high-protein powder meal',
    image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=340',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=340',
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
    name: 'Bestseller Bundle',
    subtitle: 'All our favourite products',
    itemsCount: '15 items',
    image: 'https://huel.imgix.net/UK-BESTSELLER_BUNDLE_NEW.png?auto=format&compress&w=340',
    hoverImage: null,
    badge: 'BESTSELLER',
    badgeType: 'bestseller',
    details: [
      { icon: <BoxIcon />, text: 'Meals, drinks & bars' },
      { icon: <GiftIcon />, text: 'Free T-shirt, shaker and pot' }
    ],
    price: 'From £63'
  },
  {
    id: 3,
    name: 'Black Edition Ready-to-drink',
    subtitle: 'High-protein meal shakes',
    image: 'https://huel.imgix.net/BE%20RTD%20Featured-NoScore-NEW_LT.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEditionRTD_Hover.jpg?auto=format&compress&w=340',
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
    name: 'Lite Ready-to-drink',
    subtitle: 'The 190-calorie meal shake',
    image: 'https://huel.imgix.net/Lite-Featured-NEW-LT.png?auto=format&compress&w=3500',
    hoverImage: 'https://huel.imgix.net/RTDLite_hover-over-image.png?auto=format&compress&w=340',
    badge: 'NEW FLAVOURS',
    badgeType: 'new',
    details: [
      { icon: <ProteinIcon />, text: '25g protein' },
      { icon: <KcalIcon />, text: '190 kcal per bottle' }
    ],
    price: 'From £39 / £3.25 per bottle'
  }
];

const ShopOur = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8 md:mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-none">
              Shop our <span className="font-serif italic font-normal text-neutral-900">Bestsellers</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mt-3 font-normal">
              Discover our most popular products
            </p>
          </div>
          <button className="bg-black hover:bg-neutral-800 text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap">
            Shop now
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <div key={product.id} className="flex flex-col group h-full">

              {/* Image Container with Cream/Beige Background */}
              <div className="relative w-full aspect-square bg-[#f5f3ed] rounded-lg overflow-hidden flex items-center justify-center p-6 select-none">

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 z-10 bg-white px-2 py-1.5 rounded-sm flex items-center gap-1.5 shadow-sm border border-neutral-100">
                  {product.badgeType === 'bestseller' ? <FlameIcon /> : <SparklesIcon />}
                  <span className="text-[10px] font-bold tracking-wider text-neutral-800 uppercase leading-none">
                    {product.badge}
                  </span>
                </div>

                {/* Base Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-contain max-h-[85%] max-w-[85%] transition-opacity duration-500 ease-in-out ${product.hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
                    }`}
                  loading="lazy"
                />

                {/* Hover Lifestyle Image */}
                {product.hoverImage && (
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} Hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Text Information and Specs */}
              <div className="flex flex-col flex-grow pt-4">

                <div>
                  <h3 className="font-bold text-base text-neutral-900 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1 font-normal">
                    {product.subtitle}
                  </p>
                  {product.itemsCount ? (
                    <p className="text-xs text-neutral-400 mt-1 font-normal">
                      {product.itemsCount}
                    </p>
                  ) : (
                    <p className="text-xs mt-1 font-normal select-none opacity-0">
                      &nbsp;
                    </p>
                  )}
                </div>

                {/* Double Bordered Details Table */}
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

                {/* Pricing & View Button */}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopOur;