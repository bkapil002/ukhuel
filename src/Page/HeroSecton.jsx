import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffd374] via-[#f2a142] to-[#bf570d]">
      <div className="max-w-[1354px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left: text content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#0d7a4f] fill-[#0d7a4f]" />
                ))}
              </div>
              <span className="text-sm font-medium text-black">4M+ happy customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] mb-6">
              Discover your{' '}
              <span className="italic font-serif font-medium">favourites.</span> One meal at a time.
            </h1>

            <p className="text-base text-black/80 mb-8 max-w-md">
              Mix and match 12 or more single-serve meals across shakes, sachets, and hot meals. Find what you love, then make it a habit.
            </p>

            <div className="flex items-center gap-3">
              <button className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                Shop Mix and Match
              </button>
              <button className="px-6 py-3 rounded-full border border-black text-black text-sm font-semibold hover:bg-black/5 transition-colors">
                Shop all Huel
              </button>
            </div>
          </div>

          {/* Right: product image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/8b3381d4bc6a26c94615e36cf72cf0d5de22b21d-1600x1255.png?auto=format&fit=max&q=75&w=1600"
              alt="Huel product range"
              className="w-full max-w-xl lg:max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
