import { useState } from 'react';
import { User, Truck, PenSquare, Plus, HelpCircle, ShoppingBag, Sparkles, ChevronDown, ChevronRight, Menu, X, ArrowLeft } from 'lucide-react';
import ShopAllMegaMenu from './ShopAllMegaMenu';
import SimpleMegaMenu from './SimpleMegaMenu';

const promoItems = [
  { icon: User, label: 'Give £20, Get £20' },
  { icon: Truck, label: 'Free express delivery on orders £45+' },
  { icon: PenSquare, label: 'Subscribe and save 10%' },
  { icon: Plus, label: 'Huel+ loyalty programme' },
];

const scienceColumns = [
  [
    { header: 'POWDERED MEALS', links: ['Black Edition Powder', 'Powder', 'Diet', 'Essential Powder'] },
    { header: 'GREENS & SUPERFOODS', links: ['Daily Greens', 'Daily Greens Ready-to-drink'] },
  ],
  [
    { header: 'READY-TO-DRINK MEALS', links: ['Lite Ready-To-Drink', 'Black Edition Ready-to-drink', 'Ready-To-Drink'] },
    { header: 'ENERGY & VITAMIN DRINKS', links: ['Daily A-Z Vitamins'] },
  ],
  [
    { header: 'HOT MEALS', links: ['Hot & Savoury', 'Ramen'] },
    { header: 'HIGH-PROTEIN SNACKS', links: ['Complete Nutrition Bars', 'Complete Protein'] },
  ],
];

const aboutColumns = [
  [{ header: null, links: ['About Us', 'Store locator', 'FAQs'] }],
  [{ header: null, links: ['Science Advisory Board', 'Sustainability', 'Partner With Us'] }],
  [{ header: null, links: ['Reviews & Testimonials', 'Quality Standards', 'Huel+'] }],
];

// Flattened, ordered version of the same data for the mobile drill-down panels
const scienceGroupsFlat = [
  { header: 'POWDERED MEALS', links: ['Black Edition Powder', 'Powder', 'Diet', 'Essential Powder'] },
  { header: 'READY-TO-DRINK MEALS', links: ['Lite Ready-To-Drink', 'Black Edition Ready-to-drink', 'Ready-To-Drink'] },
  { header: 'HOT MEALS', links: ['Hot & Savoury', 'Ramen'] },
  { header: 'GREENS & SUPERFOODS', links: ['Daily Greens', 'Daily Greens Ready-to-drink'] },
  { header: 'ENERGY & VITAMIN DRINKS', links: ['Daily A-Z Vitamins'] },
  { header: 'HIGH-PROTEIN SNACKS', links: ['Complete Nutrition Bars', 'Complete Protein'] },
];

const aboutGroupsFlat = [
  {
    header: 'ABOUT',
    links: [
      'About Us',
      'Science Advisory Board',
      'Reviews & Testimonials',
      'Store locator',
      'Sustainability',
      'Quality Standards',
      'FAQs',
      'Partner With Us',
      'Huel+',
    ],
  },
];

const collectionItems = [
  { title: 'Bestsellers' },
  { title: 'Powdered Meals' },
  { title: 'Ready-to-drink Meals' },
  { title: 'Bundles' },
  { title: 'Drinks & Snacks' },
  { title: 'Greens & Superfoods' },
  { title: 'Hot Instant Meals' },
  { title: 'Official Huel Merch' },
];

const shopByTabs = [
  { key: 'collection', label: 'Collection' },
  { key: 'goal', label: 'Goal' },
  { key: 'mix', label: 'Mix and Match' },
];

export default function HuelHeader() {
  const [tickerPaused, setTickerPaused] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // desktop mega menu: null | 'shop' | 'science' | 'about'

  // Mobile full-screen panel: null | 'main' | 'science' | 'about'
  const [mobilePanel, setMobilePanel] = useState(null);
  const [mobileShopTab, setMobileShopTab] = useState('collection');

  const openMenu = (key) => setActiveMenu(key);
  const closeMenu = () => setActiveMenu(null);

  const closeMobile = () => {
    setMobilePanel(null);
    setMobileShopTab('collection');
  };

  return (
    <header className="w-full font-sans">
      {/* Top promo ticker */}
      <div
        className="bg-black text-white overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div
          className="flex items-center gap-10 py-2.5 animate-marquee"
          style={{ animationPlayState: tickerPaused ? 'paused' : 'running' }}
        >
          {[...promoItems, ...promoItems, ...promoItems].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs tracking-wide uppercase shrink-0">
              <item.icon size={14} strokeWidth={1.75} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className="relative bg-white border-b border-gray-100" onMouseLeave={closeMenu}>
        <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20 relative">
          {/* Hamburger — visible only below 1248px */}
          <button
            aria-label="Menu"
            onClick={() => setMobilePanel('main')}
            className="flex min-[1248px]:hidden items-center justify-center w-9 h-9 text-black shrink-0"
          >
            <Menu size={30} strokeWidth={1.75} />
          </button>

          <a
            href="/"
            className="text-3xl font-black tracking-tight text-black shrink-0 absolute left-1/2 -translate-x-1/2 min-[1248px]:static min-[1248px]:left-auto min-[1248px]:translate-x-0"
          >
            Huel<sup className="text-xs align-super">®</sup>
          </a>

          <nav className="hidden min-[1248px]:flex items-center gap-7 ml-10">
            <a href="#" onMouseEnter={() => openMenu('shop')} className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Shop all <ChevronDown size={14} strokeWidth={2} />
            </a>
            <a href="#" onMouseEnter={closeMenu} className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Mix and Match
            </a>
            <a
              href="#"
              onMouseEnter={() => openMenu('science')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors pb-6 -mb-6 border-b-2 ${
                activeMenu === 'science' ? 'text-black border-black' : 'text-black border-transparent hover:text-gray-600'
              }`}
            >
              Science <ChevronDown size={14} strokeWidth={2} />
            </a>
            <a
              href="#"
              onMouseEnter={() => openMenu('about')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors pb-6 -mb-6 border-b-2 ${
                activeMenu === 'about' ? 'text-black border-black' : 'text-black border-transparent hover:text-gray-600'
              }`}
            >
              About <ChevronDown size={14} strokeWidth={2} />
            </a>
            <a href="#" onMouseEnter={closeMenu} className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Why Huel?
            </a>
            <a href="#" onMouseEnter={closeMenu} className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
              Guides & Articles
            </a>
            <a href="#" onMouseEnter={closeMenu} className="hidden md:inline-flex items-center px-4 py-2 rounded-[2px] bg-[#c7f1c5] text-black text-sm font-semibold hover:bg-green-200 transition-colors">
              Give £20, Get £20
            </a>
          </nav>

          <div className="flex items-center gap-4 ml-auto" onMouseEnter={closeMenu}>
            <a href="#" className="hidden min-[1248px]:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 bg-[#c7f1c5] text-black text-sm font-medium hover:border-green-200 transition-colors">
              <Sparkles size={15} strokeWidth={1.75} />
              Which Huel is right for you?
            </a>
            <button aria-label="Help" className="hidden min-[1248px]:inline-flex text-black hover:text-gray-600 transition-colors">
              <HelpCircle size={22} strokeWidth={1.5} />
            </button>
            <button aria-label="Account" className="text-black hover:text-gray-600 transition-colors">
              <User size={22} strokeWidth={1.5} />
            </button>
            <button aria-label="Bag" className="text-black hover:text-gray-600 transition-colors">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile "Which Huel" pill row — below 1248px only */}
        <div className="min-[1248px]:hidden flex justify-center px-4 py-3 border-t border-gray-100">
          <a href="#" className="inline-flex items-center gap-1.5 px-18 py-2 rounded-full border border-gray-300 bg-[#c7f1c5] text-black text-sm font-medium hover:border-green-200 transition-colors">
            <Sparkles size={15} strokeWidth={1.75} />
            Which Huel is right for you?
          </a>
        </div>

        {/* Desktop mega menus */}
        <div className="hidden min-[1248px]:block">
          <ShopAllMegaMenu open={activeMenu === 'shop'} />
          <SimpleMegaMenu open={activeMenu === 'science'} columns={scienceColumns} />
          <SimpleMegaMenu open={activeMenu === 'about'} columns={aboutColumns} />
        </div>
      </div>

      {/* Green ticker banner */}
      <div className="bg-[#c7f1c5] overflow-hidden whitespace-nowrap border-b border-green-100">
        <div className="flex items-center justify-center gap-24 py-2.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xs font-semibold tracking-widest uppercase text-black shrink-0">
              Our Tropical Limited Edition Meal
            </span>
          ))}
        </div>
      </div>

      {/* ===================== MOBILE / TABLET MENU ===================== */}
      {mobilePanel && (
        <>
          {/* Backdrop - click to close, only really visible/needed at tablet width where panel is half-width */}
          <div
            className="fixed inset-0 z-[59] bg-black/40 min-[1248px]:hidden"
            onClick={closeMobile}
          />

          {/* Sliding panel - full width on phones, half width from sm breakpoint up */}
          <div
            className="fixed inset-y-0 left-0 z-[60] bg-white overflow-y-auto
                       w-full sm:w-1/2 sm:max-w-md
                       min-[1248px]:hidden
                       shadow-xl"
          >
          {mobilePanel === 'main' && (
            <div>
              <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100">
                <button className="flex items-center gap-1 text-sm font-medium text-black">
                  UK <ChevronDown size={14} strokeWidth={2} />
                </button>
                <button aria-label="Close" onClick={closeMobile} className="text-black">
                  <X size={22} strokeWidth={1.75} />
                </button>
              </div>

              <div className="px-4 pt-4">
                <span className="text-sm font-semibold text-black">Shop by</span>
                <div className="flex items-center gap-2 mt-3">
                  {shopByTabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setMobileShopTab(tab.key)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                        mobileShopTab === tab.key
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {mobileShopTab === 'collection' && (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {collectionItems.map((item) => (
                      <div key={item.title} className="relative h-32 rounded-sm bg-[#f0ede4] p-3 flex flex-col justify-between">
                        <span className="text-sm font-semibold text-black">{item.title}</span>
                        <button aria-label={`Shop ${item.title}`} className="w-8 h-8 rounded-full bg-white flex items-center justify-center self-start">
                          <ChevronRight size={16} strokeWidth={2} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {mobileShopTab !== 'collection' && (
                  <div className="mt-4 py-10 text-center text-sm text-gray-400">
                    {shopByTabs.find((t) => t.key === mobileShopTab)?.label} coming soon
                  </div>
                )}

                <button className="w-full mt-4 py-3 rounded-full bg-black text-white text-sm font-semibold">
                  Shop all
                </button>

                <a href="#" className="mt-4 flex items-center gap-3 bg-[#c7f1c5] rounded-md p-3">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <User size={16} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">Refer a Friend</p>
                    <p className="text-xs text-black/70">Share Huel. Save together.</p>
                  </div>
                </a>
              </div>

              <nav className="mt-4">
                <button
                  onClick={() => setMobilePanel('science')}
                  className="w-full flex items-center justify-between px-4 py-3.5 border-t border-gray-100 text-sm font-medium text-black"
                >
                  Science <ChevronRight size={16} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setMobilePanel('about')}
                  className="w-full flex items-center justify-between px-4 py-3.5 border-t border-gray-100 text-sm font-medium text-black"
                >
                  About <ChevronRight size={16} strokeWidth={2} />
                </button>
                <a href="#" className="block px-4 py-3.5 border-t border-gray-100 text-sm font-medium text-black">
                  Why Huel?
                </a>
                <a href="#" className="block px-4 py-3.5 border-t border-b border-gray-100 text-sm font-medium text-black">
                  Guides & Articles
                </a>
              </nav>

              <div className="p-4">
                <a href="#" className="block text-center py-3 rounded-[2px] bg-[#c7f1c5] text-black text-sm font-semibold">
                  Give £20, Get £20
                </a>
              </div>
            </div>
          )}

          {/* SCIENCE / ABOUT DRILL-DOWN PANELS */}
          {(mobilePanel === 'science' || mobilePanel === 'about') && (
            <MobileSubPanel
              title={mobilePanel === 'science' ? 'Science' : 'About'}
              groups={mobilePanel === 'science' ? scienceGroupsFlat : aboutGroupsFlat}
              onBack={() => setMobilePanel('main')}
              onClose={closeMobile}
            />
          )}
          </div>
        </>
      )}
    </header>
  );
}

function MobileSubPanel({ title, groups, onBack, onClose }) {
  return (
    <div>
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-100">
        <button aria-label="Back" onClick={onBack} className="text-black">
          <ArrowLeft size={20} strokeWidth={1.75} />
        </button>
        <span className="text-sm font-semibold text-black">{title}</span>
        <button aria-label="Close" onClick={onClose} className="text-black">
          <X size={22} strokeWidth={1.75} />
        </button>
      </div>

      {groups.map((group) => (
        <div key={group.header}>
          <div className="bg-[#f5f2ea] px-4 py-2.5">
            <span className="text-xs font-bold tracking-widest uppercase text-black">{group.header}</span>
          </div>
          {group.links.map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center justify-between px-4 py-3 border-b border-gray-100 text-sm font-medium text-[#f69945]"
            >
              {link}
              <ChevronRight size={16} strokeWidth={2} className="text-black" />
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
