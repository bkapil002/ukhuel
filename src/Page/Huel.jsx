import React from 'react'

const Huel = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-[1354px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Promotional Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Free T-Shirt Promotion */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden group shadow-sm">
            <img 
              src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/aaa01ce68ba466102fb51bce73844b63a41c0bb5-976x1303.jpg?auto=format&fit=max&q=75&w=2000"
              alt="Free T-shirt worth £20"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/60 pointer-events-none" />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">
                  FREE t-shirt worth £20
                </h3>
                <p className="text-white/90 text-xs sm:text-sm mt-1.5 font-medium">
                  For new customers
                </p>
              </div>
              <div>
                <button className="bg-white hover:bg-neutral-100 text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer shadow-sm">
                  Shop now
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: 30-Day Taste Guarantee */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden group shadow-sm">
            <img 
              src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/abc970e452fa885f809e83e6c043f674b5dd013f-544x729.jpg?auto=format&fit=max&q=75&w=2000"
              alt="30-day taste guarantee"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Subtle Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/60 pointer-events-none" />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">
                  30-day taste guarantee
                </h3>
                <p className="text-white/90 text-xs sm:text-sm mt-1.5 font-medium">
                  Money back within 30 days if you don't like the taste.
                </p>
              </div>
              <div>
                <button className="bg-white hover:bg-neutral-100 text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer shadow-sm">
                  Shop now
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Huel