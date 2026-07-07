import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const collectionItems = [
  { 
    title: 'Bestsellers', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/Bestsellers-Collection-Tile.png?auto=format&compress&w=300' 
  },
  { 
    title: 'Powdered Meals', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/VisualNav_PowderedMeals.png?auto=format&compress&w=500' 
  },
  { 
    title: 'Ready-to-drink Meals', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/VisualNav_Ready-to-drink_Meals_(UK).png?auto=format&compress&w=500' 
  },
  { 
    title: 'Bundles', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/VisualNav_Bundles-UK.png?auto=format&compress&w=500' 
  },
  { 
    title: 'Drinks & Snacks', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/VisualNav_EnergyDrinksBars_(UK).png?auto=format&compress&w=500' 
  },
  { 
    title: 'Greens & Superfoods', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/VisualNav_Green&Superfoods-UK.png?auto=format&compress&w=500' 
  },
  { 
    title: 'Hot Instant Meals', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/VisualNav_HotSavoury_LiteRamenONLY.png?auto=format&compress&w=500' 
  },
  { 
    title: 'Official Huel Merch', 
    bg: 'bg-[#f5f3ed]', 
    image: 'https://huel.imgix.net/media/product/3ccdaf72-5e85-4a12-9a83-258040b5497e.png?auto=format&compress&w=300' 
  },
];

const goalItems = [
  {
    title: 'More protein',
    href: '#',
    image: 'https://huel.imgix.net/Black-edition-protein-shopper-mission-homepage-tile.png?auto=format&compress&w=500',
  },
  {
    title: 'Eat healthy',
    href: '#',
    image: 'https://huel.imgix.net/Lite_Ramen_Shopper_Mission_Homepage.png?auto=format&compress&w=500',
  },
  {
    title: 'Manage weight',
    href: '#',
    image: 'https://huel.imgix.net/LITERTD_VANILLA-MATCHA_Home_Tile.png?auto=format&compress&w=500',
  },
  {
    title: 'Save time',
    href: '#',
    image: 'https://huel.imgix.net/UK_BAR_Home_Tile.png?auto=format&compress&w=500',
  },
];

const tabs = [
  { key: 'collection', label: 'Shop by Collection' },
  { key: 'goal', label: 'Shop by Goal' },
  { key: 'help', label: 'Help me choose' },
];

function CategoryCard({ title, bg, image }) {
  return (
    <div className={`relative h-48 rounded-lg ${bg} p-5 flex flex-col justify-between overflow-hidden group cursor-pointer border border-transparent hover:border-black/10 transition-all duration-200`}>
      <span className="text-base font-bold text-neutral-900 z-10">{title}</span>
      
      {/* Absolute positioned product image matching screenshot */}
      <img
        src={image}
        alt={title}
        className="absolute bottom-0 right-0 h-[75%] w-[60%] object-contain object-bottom transition-transform duration-300 group-hover:scale-[1.04]"
      />
      
      <button
        aria-label={`Shop ${title}`}
        className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors self-start shadow-sm z-10 cursor-pointer"
      >
        <ArrowRight size={15} strokeWidth={2.5} className="text-neutral-800" />
      </button>
    </div>
  );
}

function GoalCard({ title, image }) {
  return (
    <div className="relative h-[380px] rounded-lg overflow-hidden group shadow-sm flex flex-col justify-between p-5 cursor-pointer">
      {/* Card Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      {/* Top Gradient Overlay to keep title text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      
      <span className="text-lg font-extrabold text-white z-10 leading-none">{title}</span>
      
      <button
        aria-label={`Shop ${title}`}
        className="w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors self-start z-10 shadow-sm cursor-pointer"
      >
        <ArrowRight size={16} strokeWidth={2.5} className="text-neutral-800" />
      </button>
    </div>
  );
}

export default function ShopAllMegaMenu({ open = true }) {
  const [activeTab, setActiveTab] = useState('collection');

  if (!open) return null;

  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-neutral-100 shadow-md z-40 transition-all duration-300 ease-out ${
        open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >      
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex">
        
        {/* Left Sidebar Tabs */}
        <div className="w-56 shrink-0 py-8 flex flex-col justify-between border-r border-neutral-100 min-h-[440px]">
          <nav className="flex flex-col gap-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-left text-sm py-2 transition-all duration-200 cursor-pointer ${
                  activeTab === tab.key
                    ? 'text-black font-bold border-l-2 border-black pl-3.5 -ml-px'
                    : 'text-neutral-500 hover:text-black pl-4'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          
          <div className="pl-4">
            <button className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer uppercase tracking-wider">
              Shop all
            </button>
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 py-8 pl-8 select-none">
          {activeTab === 'collection' && (
            <div className="grid grid-cols-4 gap-4">
              {collectionItems.map((item) => (
                <CategoryCard key={item.title} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'goal' && (
            <div className="grid grid-cols-4 gap-4">
              {goalItems.map((item) => (
                <GoalCard key={item.title} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'help' && (
            <div className="flex gap-8 h-[380px]">
              
              {/* Help Choose Navigation links */}
              <div className="w-44 shrink-0 pt-2">
                <span className="text-xs font-extrabold tracking-widest uppercase text-neutral-400">
                  Learn
                </span>
                <nav className="flex flex-col gap-4.5 mt-5">
                  <a href="#" className="text-sm font-bold text-neutral-800 hover:text-black transition-colors">
                    Why Huel?
                  </a>
                  <a href="#" className="text-sm font-bold text-neutral-800 hover:text-black transition-colors">
                    Guides & Articles
                  </a>
                </nav>
              </div>
              
              {/* Help Choose Promo Banners */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                
                {/* Banner 1: Help Choose */}
                <div className="relative h-full rounded-lg bg-gradient-to-br from-[#d4763c] to-[#a34d20] p-6 flex flex-col justify-end overflow-hidden group cursor-pointer shadow-sm">
                  {/* Floating product image overlay */}
                  <img
                    src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/b58c59ba92073ab050044f0ef9f9f966b3ecf4f3-1080x1080.png?auto=format&fit=max&q=75&w=500"
                    alt="Choose Products"
                    className="absolute inset-x-0 top-6 mx-auto h-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="relative z-10">
                    <p className="text-white font-extrabold text-lg mb-3.5 leading-snug max-w-[220px]">
                      Not sure which product is right for you?
                    </p>
                    <button className="bg-white hover:bg-neutral-100 text-black text-xs font-bold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer">
                      Learn more
                    </button>
                  </div>
                </div>

                {/* Banner 2: Bestsellers */}
                <div className="relative h-full rounded-lg bg-gradient-to-br from-[#aa573c] to-[#4c221a] p-6 flex flex-col justify-end overflow-hidden group cursor-pointer shadow-sm">
                  {/* Floating product image overlay */}
                  <img
                    src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/ac26b6eec58dbcbc9999b9e3bc668b1c22237dea-1080x1080.png?auto=format&fit=max&q=75&w=500"
                    alt="Try Bestsellers"
                    className="absolute inset-x-0 top-6 mx-auto h-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="relative z-10">
                    <p className="text-white font-extrabold text-lg mb-3.5 leading-snug max-w-[220px]">
                      Can't decide? Try our bestsellers
                    </p>
                    <button className="bg-white hover:bg-neutral-100 text-black text-xs font-bold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer">
                      Bestsellers
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}