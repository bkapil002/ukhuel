import React, { useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Gary Neville',
    quote: 'Huel Lite is my new afternoon pick-me-up',
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/d1e5869090b66271fb92abd2f58566d7a53fd957-584x1032.png?auto=format&fit=max&q=75&w=1500",
  },
  {
    name: 'Spencer Matthews',
    quote: 'Between races, flights, early starts and long days, fuelling needed to be quick, reliable and consistent. Huel gave me exactly that',
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/1bb77a181dff553aef8ba334e12f971dad11160e-584x1032.png?auto=format&fit=max&q=75&w=1500",
  },
  {
    name: 'Matt Morsia',
    quote: 'Greens powders usually taste like the contents of your bin but Huel Daily Greens are sick!',
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/6d9f35fcd19f1d68799ea9334335ed39fea5540d-516x775.jpg?auto=format&fit=max&q=75&w=1600",
  },
  {
    name: 'Hardest Geezer',
    quote: 'Having Huel as the base of my diet completely changed the game.',
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/eea9357f885613a0d7bacd6c4c06701896530582-584x1032.jpg?auto=format&fit=max&q=75&w=1500",
  },
  {
    name: 'Idris Elba',
    quote: "I've been a Hueligan for several years now",
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/9f0c380f274338aaa546109ee061a6bdbe59ec4f-1035x1548.jpg?auto=format&fit=max&q=75&w=1600",
  },
  {
    name: 'Abbey Clancy',
    quote: "Huel Lite has become an everyday part of my life",
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/647b57f06a8c936e2c1631f9f82b087cc3106152-584x1032.png?auto=format&fit=max&q=75&w=1600",
  },
  {
    name: 'Kristen Holmes',
    quote: "What you put into your body really matters. When life gets busy, having products I trust to fill the gaps gives me peace of mind",
    image: "https://cdn.sanity.io/images/sy0wkh9n/productionv29/31cda1c5d7ca334d7c76384ceae7ba93a1a08b26-976x1302.png?auto=format&fit=max&q=75&w=1600",
  },
];

// Custom Chevron Icons to avoid external library dependencies
const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// Blue Verification Badge Icon
const VerifiedBadge = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-label="Verified">
    <circle cx="12" cy="12" r="11" fill="#3B9EF5" />
    <path
      d="M8 12.5l2.5 2.5L16 9"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function RecommendedByExperts() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const cardWidth = 336; // Card width + gap spacing for smooth tracking

  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveDot(Math.min(index, testimonials.length - 1));
  };

  return (
    <section className="w-full bg-[#f6f4ee] py-16 sm:py-20 select-none">
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
            Recommended by top <span className="font-serif italic font-normal text-neutral-900">performers &amp; nutrition experts</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-3 font-normal">
            See what makes Huel the global leader in complete nutrition
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="relative shrink-0 w-[320px] h-[450px] rounded-lg overflow-hidden snap-start bg-[#e2dfd7] shadow-sm group"
            >
              {/* Product Background Image */}
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm">
                  Photo placeholder
                </div>
              )}

              {/* Gradient overlay to ensure text contrast at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Inset Review Card */}
              {/* Bottom Inset Review Card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/30 backdrop-blur-md p-4 border border-white/10 shadow-lg">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-white text-sm font-bold leading-none">{person.name}</span>
                  <VerifiedBadge />
                </div>
                <p className="text-white/95 text-xs leading-normal font-normal">
                  &ldquo;{person.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls: Dots and Navigation Arrows */}
        <div className="flex items-center justify-between mt-8">

          {/* Active indicator dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  scrollRef.current?.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${activeDot === i ? 'bg-black w-4' : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="w-11 h-11 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer"
            >
              <ChevronLeftIcon />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="w-11 h-11 rounded-full border border-neutral-300 text-neutral-600 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200 cursor-pointer"
            >
              <ChevronRightIcon />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}