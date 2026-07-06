import { useState } from 'react';
import { User, Truck, PenSquare, Plus, HelpCircle, ShoppingBag, Sparkles, ChevronDown } from 'lucide-react';

const promoItems = [
  { icon: User, label: 'Give £20, Get £20' },
  { icon: Truck, label: 'Free express delivery on orders £45+' },
  { icon: PenSquare, label: 'Subscribe and save 10%' },
  { icon: Plus, label: 'Huel+ loyalty programme' },
];

const navLinks = [
  { label: 'Shop all', hasDropdown: true },
  { label: 'Mix and Match', hasDropdown: false },
  { label: 'Science', hasDropdown: true },
  { label: 'About', hasDropdown: true },
  { label: 'Why Huel?', hasDropdown: false },
  { label: 'Guides & Articles', hasDropdown: false },
];

export default function HuelHeader() {
  const [tickerPaused, setTickerPaused] = useState(false);

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
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="text-3xl font-black tracking-tight text-black shrink-0">
            Huel<sup className="text-xs align-super">®</sup>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-7 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-black hover:text-gray-600 transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} strokeWidth={2} />}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="#"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-black text-sm font-semibold hover:bg-green-200 transition-colors"
            >
              Give £20, Get £20
            </a>
            <a
              href="#"
              className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 text-black text-sm font-medium hover:border-black transition-colors"
            >
              <Sparkles size={15} strokeWidth={1.75} />
              Which Huel is right for you?
            </a>

            <button aria-label="Help" className="text-black hover:text-gray-600 transition-colors">
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
      </div>

      {/* Green ticker banner */}
      <div className="bg-green-50 overflow-hidden whitespace-nowrap border-b border-green-100">
        <div className="flex items-center gap-24 py-2.5 animate-marquee-slow">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-xs font-semibold tracking-widest uppercase text-black shrink-0">
              Our Tropical Limited Edition Meal
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}