const linkRoutes = {
  'Black Edition Powder': '/collections/huel-powder',
  Powder: '/collections/huel-powder',
  Diet: '/collections/weight-loss',
  'Essential Powder': '/collections/huel-powder',
  'Daily Greens': '/collections/greens-superfoods',
  'Daily Greens Ready-to-drink': '/collections/greens-superfoods',
  'Lite Ready-To-Drink': '/collections/huel-rtd',
  'Black Edition Ready-to-drink': '/collections/huel-rtd',
  'Ready-To-Drink': '/collections/huel-rtd',
  'Daily A-Z Vitamins': '/collections/drinks-snacks',
  'Hot & Savoury': '/collections/huel-instant-mealsr',
  Ramen: '/collections/huel-instant-mealsr',
  'Complete Nutrition Bars': '/collections/drinks-snacks',
  'Complete Protein': '/collections/protein-and-fitness',
  'Science Advisory Board': '/pages/health-benefits',
  'Quality Standards': '/pages/health-benefits',
  Sustainability: '/pages/health-benefits',
  'About Us': '/',
  'Store locator': '/',
  FAQs: '/',
  'Partner With Us': '/',
  'Reviews & Testimonials': '/',
  'Huel+': '/',
};

export default function SimpleMegaMenu({ open, columns }) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-40 transition-all duration-300 ease-out ${
        open
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-3 gap-10">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-8">
              {column.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-3">
                  {group.header && (
                    <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
                      {group.header}
                    </span>
                  )}
                  {group.links.map((link) => (
                    <a
                      key={link}
                      href={linkRoutes[link] || '/'}
                      className="text-sm font-semibold text-black hover:text-gray-600 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
