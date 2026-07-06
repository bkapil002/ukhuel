const shopItems = [
  { title: 'Powdered Meals', image: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/f906513ff87fcc4fbdd04ea6d268e95e28282a2e-1600x1067.png?auto=format&fit=max&q=75&w=900', highlight: false },
  { title: 'Bundles', image: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/f906513ff87fcc4fbdd04ea6d268e95e28282a2e-1600x1067.png?auto=format&fit=max&q=75&w=900', highlight: false },
  { title: 'Ready-to-drink Meals', image: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/f906513ff87fcc4fbdd04ea6d268e95e28282a2e-1600x1067.png?auto=format&fit=max&q=75&w=900', highlight: false },
  { title: 'Hot Instant Meals', image: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/f906513ff87fcc4fbdd04ea6d268e95e28282a2e-1600x1067.png?auto=format&fit=max&q=75&w=900', highlight: false },
  { title: 'Greens & Superfoods', image: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/f906513ff87fcc4fbdd04ea6d268e95e28282a2e-1600x1067.png?auto=format&fit=max&q=75&w=900', highlight: false },
  { title: 'Drinks & Snacks', image: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/f906513ff87fcc4fbdd04ea6d268e95e28282a2e-1600x1067.png?auto=format&fit=max&q=75&w=900', highlight: false },
];

// Hand-coded outline icons matching the screenshot style (thin stroke, currentColor)
const icons = {
  clipboardCheck: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="3.5" width="12" height="18" rx="2" />
      <path d="M9 3.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5" />
      <path d="M9.5 12.5l1.8 1.8 3.2-3.6" />
    </svg>
  ),
  clock: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  saveMoney: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="7" r="2.3" />
      <path d="M4 15.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
      <path d="M13 9.5c1 .3 1.7 1.1 1.7 2.1 0 .8-.5 1.4-1.2 1.8" />
      <path d="M16 21l3-1.6c.5-.3.9-.8.9-1.4v-.2c0-1-.8-1.8-1.8-1.8h-3.4l-2-1.3c-.5-.3-1.1-.2-1.5.2s-.3 1.1.2 1.4l2.1 1.4" />
    </svg>
  ),
  trash: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16" />
      <path d="M9 7V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7" />
      <path d="M6 7l1 12.5a2 2 0 0 0 2 1.8h6a2 2 0 0 0 2-1.8L18 7" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </svg>
  ),
  sprout: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21V11" />
      <path d="M12 12c0-3 -2-5-6-5 0 3.5 2 5.5 6 5" />
      <path d="M12 9c0-2.5 1.7-4 5-4 0 2.8-1.7 4.5-5 4.5" />
    </svg>
  ),
  thumbsUp: (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3z" />
      <path d="M7 10l3.5-6.5a1.5 1.5 0 0 1 2.7.2l.3.9c.2.6.1 1.3-.2 1.9L12.5 9H18a2 2 0 0 1 2 2.3l-1.1 7A2 2 0 0 1 16.9 20H7" />
    </svg>
  ),
};

const benefits = [
  { icon: icons.clipboardCheck, title: '100% Complete', desc: 'All the nutrition you need. Every day.' },
  { icon: icons.clock, title: 'Save Time', desc: 'Meals ready in 15 seconds.' },
  { icon: icons.saveMoney, title: 'Save Money', desc: 'From £1.00 per meal.' },
  { icon: icons.trash, title: 'No Bullshit', desc: 'No unnecessary ingredients. No GMO.' },
  { icon: icons.sprout, title: 'Taste Guaranteed', desc: 'Love it or your money back.' },
  { icon: icons.thumbsUp, title: 'Easy', desc: 'No prep. No cooking. No mess.' },
];

function ShopPill({ title, image, highlight }) {
  return (
    <a
      href="#"
      className={`group flex items-center justify-between gap-4 rounded-full bg-[#f5f2ea] pl-4 pr-2 py-2.5 border transition-colors ${
        highlight ? 'border-black' : 'border-transparent hover:border-black/20'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <img src={image} alt={title} className="w-9 h-9 object-contain shrink-0" />
        <span className="text-base font-semibold text-black truncate">{title}</span>
      </div>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shrink-0 transition-transform group-hover:translate-x-0.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}

function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="text-[#6fcf97]">{icon}</div>
      <h3 className="text-[28px] leading-tight font-bold text-white">{title}</h3>
      <p className="text-[13px] text-white/70">{desc}</p>
    </div>
  );
}

export default function ShopYour() {
  return (
    <div className="w-full font-sans">
      {/* Shop your way */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-9 sm:mb-12">
            Shop <span className="font-serif italic font-medium">your</span> way
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {shopItems.map((item) => (
              <ShopPill key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Huel */}
      <section className="bg-black py-16 sm:py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-[40px] sm:text-[44px] font-bold text-white text-center mb-14 sm:mb-16">
            <span className="font-serif italic font-medium">Benefits</span> of Huel
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((b) => (
              <BenefitItem key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}