import React from 'react';
import { ClipboardCheck, Clock4, HandCoins, Trash2, Sprout, ThumbsUp } from 'lucide-react';

const shopItems = [
  { title: 'Powdered Meals', image: 'https://huel.imgix.net/VisualNav_PowderedMeals.png?auto=format&compress&w=500', highlight: false,href:"/collections/huel-powder" },
  { title: 'Bundles', image: 'https://huel.imgix.net/VisualNav_Bundles-UK.png?auto=format&compress&w=500', highlight: false,href:"/collections/bundles" },
  { title: 'Ready-to-drink Meals', image: 'https://huel.imgix.net/VisualNav_Ready-to-drink_Meals_(UK).png?auto=format&compress&w=500', highlight: false,href:"/collections/huel-rtd" },
  { title: 'Hot Instant Meals', image: 'https://huel.imgix.net/VisualNav_HotSavoury_LiteRamenONLY.png?auto=format&compress&w=500', highlight: false ,href:"/collections/huel-instant-mealsr"},
  { title: 'Greens & Superfoods', image: 'https://huel.imgix.net/VisualNav_Green&Superfoods-UK.png?auto=format&compress&w=500', highlight: false,href:"/collections/greens-superfoods" },
  { title: 'Drinks & Snacks', image: 'https://huel.imgix.net/VisualNav_EnergyDrinksBars_(UK).png?auto=format&compress&w=500', highlight: false,href:"/collections/drinks-snacks" },
];

const benefits = [
  { 
    icon: <ClipboardCheck className="w-11 h-11" strokeWidth={1.5} />, 
    title: '100% Complete', 
    desc: 'All the nutrition you need. Every day.' 
  },
  { 
    icon: <Clock4 className="w-11 h-11" strokeWidth={1.5} />, 
    title: 'Save Time', 
    desc: 'Meals ready in 15 seconds.' 
  },
  { 
    icon: <HandCoins className="w-11 h-11" strokeWidth={1.5} />, 
    title: 'Save Money', 
    desc: 'From £1.00 per meal.' 
  },
  { 
    icon: <Trash2 className="w-11 h-11" strokeWidth={1.5} />, 
    title: 'No Bullshit', 
    desc: 'No unnecessary ingredients. No GMO.' 
  },
  { 
    icon: <Sprout className="w-11 h-11" strokeWidth={1.5} />, 
    title: 'Taste Guaranteed', 
    desc: 'Love it or your money back.' 
  },
  { 
    icon: <ThumbsUp className="w-11 h-11" strokeWidth={1.5} />, 
    title: 'Easy', 
    desc: 'No prep. No cooking. No mess.' 
  },
];

function ShopPill({ title, image, highlight ,href}) {
  return (
    <a
      href={href}
      className={`group flex items-center justify-between gap-4 rounded-full bg-[#f5f3ed] pl-4 pr-2 py-1.5 border transition-all duration-250 ${
        highlight ? 'border-black' : 'border-transparent hover:border-black/15 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <img src={image} alt={title} className="w-20 h-20 object-contain shrink-0" />
        <span className="md:text-xl lg:text-2xl font-bold text-neutral-900 truncate">{title}</span>
      </div>
      <span className="flex h-15 w-15 items-center justify-center rounded-full bg-white shrink-0 shadow-sm border border-neutral-100 transition-transform group-hover:translate-x-0.5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-800">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 select-none">
      <div className="text-[#6fcf97] flex items-center justify-center mb-1">
        {icon}
      </div>
      <h3 className="text-xl sm:text-4xl font-extrabold text-white leading-tight">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-[240px]">
        {desc}
      </p>
    </div>
  );
}

export default function ShopYour() {
  return (
    <div className="w-full bg-white">
      
      {/* Shop your way */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-8 sm:mb-12">
            Shop <span className="font-serif italic font-normal text-neutral-900">your</span> way
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopItems.map((item) => (
              <ShopPill key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Huel */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1454px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12 sm:mb-16">
            <span className="font-serif italic font-normal text-white">Benefits</span> of Huel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((b) => (
              <BenefitItem key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}