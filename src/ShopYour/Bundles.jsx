import { useState } from 'react';
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

const productsData = [
    {
        id: 1,
        name: 'Black Edition',
        subtitle: 'Complete high-protein powder meal',
        image: 'https://huel.imgix.net/FeatureProductImg_Powder.png?auto=format&compress&w=400',
        hoverImage: 'https://huel.imgix.net/FeatureProductImg_Powder_Hover.jpg?auto=format&compress&w=400',
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
        name: 'Powder',
        subtitle: 'The original complete meal',
        image: 'https://huel.imgix.net/FeatureProductImg_Powder.png?auto=format&compress&w=400',
        hoverImage: 'https://huel.imgix.net/FeatureProductImg_Powder_Hover.jpg?auto=format&compress&w=400',
        badge: null,
        details: [
            { icon: <ProteinIcon />, text: '30g protein' },
            { icon: <KcalIcon />, text: '400 kcal per meal' }
        ],
        price: 'From £27 / £1.59 per meal'
    },
    {
        id: 3,
        name: 'Diet',
        subtitle: 'Nutritionally complete weight loss meal',
        image: 'https://huel.imgix.net/FeatureProductImg_Powder.png?auto=format&compress&w=400',
        hoverImage: 'https://huel.imgix.net/FeatureProductImg_Powder_Hover.jpg?auto=format&compress&w=400',
        badge: 'NEW',
        badgeType: 'new',
        details: [
            { icon: <ProteinIcon />, text: '20g protein' },
            { icon: <KcalIcon />, text: '200 kcal per meal' }
        ],
        price: 'From £34 / £1 per meal'
    },
    {
        id: 4,
        name: 'Powder Gluten-free',
        subtitle: 'Gluten-free complete nutrition meal',
        image: 'https://huel.imgix.net/FeatureProductImg_Powder.png?auto=format&compress&w=400',
        hoverImage: 'https://huel.imgix.net/FeatureProductImg_Powder_Hover.jpg?auto=format&compress&w=400',
        badge: null,
        details: [
            { icon: <ProteinIcon />, text: '30g protein' },
            { icon: <KcalIcon />, text: '400 kcal per meal' }
        ],
        price: 'From £28.50 / £1.68 per meal'
    }
];
export default function Bundles() {
    const [activeTab, setActiveTab] = useState('Meal Replacement Shakes');
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        {
            q: 'Is protein powder a meal replacement?',
            a: 'No, protein powders are not usually considered true meal replacements. This is because most protein powders only (or mainly) contain just one macronutrient: protein. To be a true meal replacement, a powder should contain all three macronutrients (protein, carbohydrates, and fat) as well as essential vitamins and minerals. For example, Huel Black Edition is a high-protein meal replacement powder that has 40g of protein per serving, but also contains all the other macronutrients and micronutrients your body needs as part of a balanced diet.',
        },
        {
            q: 'Can you use protein powder as a meal replacement?',
            a: 'You can use protein powder as a quick snack or protein supplement, but to use it as a true meal replacement, it must be formulated with proper ratios of healthy fats, complex carbohydrates, vitamins, and minerals. Regular protein powder alone lacks these essential macros.',
        },
        {
            q: 'What is meal replacement powder?',
            a: 'A meal replacement powder is a nutrient-dense powder that when mixed with water or milk, provides a fully balanced meal. It contains protein, essential fatty acids, carbohydrates, fiber, and 26 essential vitamins and minerals to satisfy your nutritional needs.',
        },
        {
            q: 'Can you replace all meals with a meal replacement powder?',
            a: 'While Huel contains all the vitamins, minerals, and macronutrients your body needs to survive, we do not recommend replacing 100% of your diet with powders. It is designed to replace your busy meals (breakfast, lunch) while still maintaining whole foods in your daily routine.',
        },
    ];
    return (
        <div className="w-full bg-white font-sans select-none pb-16">

            {/* Breadcrumb Navigation Bar */}
            <nav className="w-full bg-[#f6f4ee] border-b border-neutral-200/40 py-3 sm:py-3.5">
                <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-500">
                    <a href="/" className="hover:text-black hover:underline transition-all">Home</a>
                    <span className="text-neutral-400 font-normal select-none">&gt;</span>
                    <a href="/all-products" className="hover:text-black hover:underline transition-all">All Products</a>
                    <span className="text-neutral-400 font-normal select-none">&gt;</span>
                    <span className="text-neutral-800">Bundles</span>
                </div>
            </nav>
            {/* Hero Banner Section */}
            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[380px] overflow-hidden">

                {/* Banner Background Image */}
                <img
                    src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/610d2fe140f0dc7050f8a1acedf97c5ce53b623b-2880x577.png?auto=format&fit=max&q=75&w=2000"
                    alt="Bundles"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 pointer-events-none" />
                {/* Overlay Content */}
                <div className="absolute inset-0 z-10 max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-8 sm:pb-12">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
                            Bundles
                        </h1>
                    </div>
                </div>
            </div>
            {/* Product Catalog Grid */}
            <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-12">

                
                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-10">
                    {productsData.map((product) => (
                        <div key={product.id} className="flex flex-col group h-full">

                            {/* Image Container with Cream/Beige Background */}
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
                            {/* Text Info and Details */}
                            <div className="flex flex-col flex-grow pt-4">

                                {/* Titles */}
                                <div>
                                    <h3 className="font-bold text-base text-neutral-900 leading-tight">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-neutral-600 mt-1 font-normal leading-tight">
                                        {product.subtitle}
                                    </p>

                                    {/* Invisible spacer paragraph to keep all layouts perfectly aligned */}
                                    <p className="text-xs mt-1 font-normal select-none opacity-0">
                                        &nbsp;
                                    </p>
                                </div>
                                {/* Specs Table (Double Bordered List) */}
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
                    ))}
                </div>
            </div>

            {/* Description Text Paragraphs Section */}
            <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 text-left text-neutral-600 text-sm sm:text-base leading-relaxed space-y-6 max-w-5xl">

                <p>
                    From the convenient Grab & Go Bundle to the Bestseller Bundle, we’ve taken the guesswork out of what to order. Perfect for new customers, ideal for anyone.        
                    </p>
                <div>
                    <h3 className="font-bold text-neutral-600 text-lg mb-2">
                        Huel Bundles          </h3>
                    <p>
                        Explore Huel’s Grab & Go Bundle, bringing you a selection of all the meals, snacks and drinks you need to nail your on-the-go nutrition – plus a FREE T-shirt for new customers on orders over £60.

                    </p>
                    <p>
                        Not sure where to start your Huel journey? Try the Bestseller Bundle. It’s packed with our most popular products, and you’ll get a FREE T-shirt, shaker and pot with your first order over £60.

                    </p>
                </div>

            </div>
            {/* FAQs Section */}

        </div>
    );
}