const pressItems = [
  {
    logo: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/b2da59dd58dcf0ea22400b5bde8f414a2c967725-1850x979.png?auto=format&fit=max&q=75&w=200',
    logoAlt: 'GQ',
    logoHeight: 'h-9',
    quote:
      "With all the makings of a healthy plate of food, the benefits are manifold and aren't exclusive to nutrition but price, convenience and sustainability too.",
  },
  {
    logo: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/3f4eb0aade148af6dc6bbec4705beab518fbc17f-2545x519.png?auto=format&fit=max&q=75&w=150',
    logoAlt: "Men's Health",
    logoHeight: 'h-6',
    quote: "You can't talk about powdered meals without mentioning Huel.",
  },
  {
    logo: 'https://cdn.sanity.io/images/sy0wkh9n/productionv29/20215310d2d49bdf2cc810cc4c663c7e3ad6967e-2000x411.png?auto=format&fit=max&q=75&w=150',
    logoAlt: 'Wired',
    logoHeight: 'h-7',
    quote:
      'Many Huel customers are interested in affordability, nutrition and convenience, and the fact that the product is fully vegan could be a cherry on top.',
  },
];

export default function AsSeenIn() {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pressItems.map((item) => (
            <div key={item.logoAlt} className="flex flex-col items-center text-center gap-6">
              <img
                src={item.logo}
                alt={item.logoAlt}
                className={`${item.logoHeight} w-auto object-contain`}
              />
              <p className="text-white text-sm leading-relaxed max-w-sm">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}