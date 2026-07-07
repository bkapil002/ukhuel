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
        id: 3,
        name: 'High-Protein Starter Kit',
        subtitle: 'Protein that fits your day',
        itemsCount: '6 items',
        image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
        hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
        badge: null,
        details: [
            { icon: <BoxIcon />, text: 'The best of our highest protein products' },
            { icon: <GiftIcon />, text: 'Free T-shirt and shaker' }
        ],
        price: 'From £40.35'
    },
    {
        id: 4,
        name: 'Light & Lean Bundle',
        subtitle: 'Lighter meals that still satisfy',
        itemsCount: '6 items',
        image: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_NEW.png?auto=format&compress&w=3500',
        hoverImage: 'https://huel.imgix.net/FeatureProductImg_BlackEdition_Hover.jpg?auto=format&compress&w=700',
        badge: null,
        details: [
            { icon: <BoxIcon />, text: 'Our lighter ready-to-go products' },
            { icon: <GiftIcon />, text: 'Free T-shirt and shaker' }
        ],
        price: 'From £39.50'
    }
];

export default function MoreProtein() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: 'Why choose a Huel high-protein meal, or snack bar, over a regular protein shake?',
            a: (
                <>
                    Unlike typical protein shakes, Huel is a complete meal. For a full look at Huel's health benefits and ingredients,{' '}
                    <a href="https://uk.huel.com/pages/benefits" className="text-[#3b82f6] hover:underline font-medium transition-colors">
                        visit our benefits page
                    </a>
                    .
                </>
            ),
        },
        {
            q: 'How much protein does Huel contain?',
            a: 'Huel products contain up to 40g of high-quality plant-based protein per serving, depending on the specific product (such as Black Edition).',
        },
        {
            q: 'Is Huel good for post-workout recovery?',
            a: 'Yes! Huel provides a balanced mix of proteins, essential amino acids, slow-release carbohydrates, and healthy fats, which makes it ideal for supporting muscle repair and recovery after workouts.',
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
                    <span className="text-neutral-800">Not Just Protein. Complete Fuel.</span>
                </div>
            </nav>

            {/* Hero Banner Section */}
            {/* Hero Banner Section */}
            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[380px] overflow-hidden">

                {/* Banner Background Image */}
                <img
                    src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/3cd599194280554936dc5bdb4dab2baeba0f9d57-2880x577.jpg?auto=format&fit=max&q=75&w=2000"
                    alt="Not Just Protein. Complete Fuel."
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 pointer-events-none" />

                {/* Overlay Content */}
                <div className="absolute inset-0 z-10 max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col justify-end pb-8 sm:pb-12">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
                            Not Just Protein. Complete Fuel.
                        </h1>
                        <p className="text-xs sm:text-sm lg:text-base text-white/95 mt-2.5 font-medium leading-normal max-w-3xl">
                            No gimmicks. No gaps. Just complete, science-backed nutrition that works as hard as you do.
                        </p>
                    </div>
                </div>

            </div>

            {/* Product Catalog Grid */}
            <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                {/* Titles */}
                                <div>
                                    <h3 className="font-bold text-base text-neutral-900 leading-tight">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-neutral-600 mt-1 font-normal leading-tight">
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

            {/* Eat More Protein Landscape Promo Banner */}
            <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
                <div className="relative w-full aspect-[9/1]  min-h-[160px] sm:min-h-[220px] rounded-lg overflow-hidden group shadow-sm flex flex-col justify-center p-6 sm:p-12">

                    {/* Background Image */}
                    <img
                        src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/3d200274b421718a3751d909d3b4b1521e11f78e-2880x577.webp?auto=format&fit=max&q=75&w=2000"
                        alt="Eat More Protein"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                        loading="lazy"
                    />

                    {/* Left vignette overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent pointer-events-none" />

                    {/* Content container */}
                    <div className="relative z-10 text-left">
                        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                            Eat More Protein
                        </h2>
                        <div className="mt-4 sm:mt-6">
                            <button className="bg-white hover:bg-neutral-100 text-black font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-colors duration-200 cursor-pointer shadow-sm">
                                Learn more
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* FAQs Section */}
            <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 border-t border-[#e2dfd7] pt-12 sm:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column title */}
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
                            Protein &amp; Fitness FAQs
                        </h2>
                    </div>

                    {/* Right Column Accordion list */}
                    <div className="lg:col-span-8">
                        <div className="flex flex-col divide-y divide-[#e2dfd7] border-b border-[#e2dfd7]">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="py-5">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                        className="w-full flex items-center justify-between text-left text-sm sm:text-base font-bold text-neutral-900 group cursor-pointer"
                                    >
                                        <span>{faq.q}</span>
                                        <span className="ml-4 shrink-0 text-neutral-400 group-hover:text-black transition-colors">
                                            {openIndex === idx ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>

                                    {openIndex === idx && (
                                        <div className="mt-4 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-3xl">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}