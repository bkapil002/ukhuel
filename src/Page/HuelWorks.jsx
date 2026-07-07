import React from 'react';
import completeNutrition from "../image/WhyHuel (1).png";
import balancedMacros from "../image/WhyHuel (2).png";
import proteinSatiety from "../image/WhyHuel (3).png";
import scientificallySupported from "../image/WhyHuel (5).png";
import realIngredients from "../image/WhyHuel (4).png";

const images = {
  completeNutrition,
  balancedMacros,
  proteinSatiety,
  scientificallySupported,
  realIngredients,
};

export default function WhyHuelWorks() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-[1354px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Heading row - Stacks on mobile, inline on tablet/desktop */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <h2 className="flex flex-wrap items-baseline gap-1.5 text-4xl sm:text-5xl">
            <span className="font-sans font-bold text-black">Why Huel</span>
            <span className="font-serif italic text-black">works</span>
          </h2>
          <button className="px-5 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors shrink-0 self-start sm:self-auto cursor-pointer">
            See the science
          </button>
        </div>

        {/* Bento grid adjusted for phone (1 col), tablet (2 cols), and desktop (3 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {/* Complete nutrition — spans full width (2 cols) on tablet, 1 col on desktop (spans 2 rows) */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-[#f0ede4] border border-gray-300 rounded-sm pt-6 pl-6 pr-6 flex flex-col min-h-[420px] lg:min-h-0">
            <h3 className="text-2xl mb-1">
              <span className="font-serif italic">Complete</span>{' '}
              <span className="font-sans font-bold">nutrition</span>
            </h3>
            <p className="text-sm text-gray-600 mb-6">26 essential vitamins and minerals</p>
            <img
              src={images.completeNutrition}
              alt="Huel Black Edition Ready-to-drink, Vanilla"
              className="mt-auto mx-auto max-h-[340px] sm:max-h-[440px] lg:max-h-[500px] object-contain"
            />
          </div>

          {/* Balanced macros */}
          <div className="bg-[#f0ede4] border border-gray-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-center py-6">
              <img
                src={images.balancedMacros}
                alt="Low sugar, 35g protein, low fat"
                className="max-h-36 sm:max-h-40 object-contain mx-auto"
              />
            </div>
            <div>
              <h3 className="text-xl mb-1">
                <span className="font-serif italic">Balanced</span>{' '}
                <span className="font-sans font-bold">macros</span>
              </h3>
              <p className="text-sm text-gray-600">Carbs, protein, and fats in the right ratios</p>
            </div>
          </div>

          {/* Scientifically supported */}
          <div className="bg-[#f0ede4] border border-gray-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center py-6">
              <img
                src={images.scientificallySupported}
                alt="Customers who trust Huel"
                className="max-h-32 sm:max-h-36 object-contain mx-auto"
              />
            </div>
            <div>
              <h3 className="text-xl mb-1">
                <span className="font-serif italic">Scientifically</span>{' '}
                <span className="font-sans font-bold">supported</span>
              </h3>
              <p className="text-sm text-gray-600">100+ peer-reviewed studies</p>
            </div>
          </div>

          {/* Protein for satiety */}
          <div className="bg-[#f0ede4] border border-gray-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-center py-6">
              <img
                src={images.proteinSatiety}
                alt="Huel protein powder scoop"
                className="max-h-40 sm:max-h-44 object-contain mx-auto"
              />
            </div>
            <div>
              <h3 className="text-xl mb-1">
                <span className="font-serif italic">Protein</span>{' '}
                <span className="font-sans font-bold">for satiety</span>
              </h3>
              <p className="text-sm text-gray-600">Up to 40g per meal to keep you going</p>
            </div>
          </div>

          {/* Real ingredients */}
          <div className="bg-[#f0ede4] border border-gray-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-center py-6">
              <img
                src={images.realIngredients}
                alt="Oats, pea protein, flaxseed, coconut, and MCTs"
                className="max-h-40 sm:max-h-44 object-contain mx-auto"
              />
            </div>
            <div>
              <h3 className="text-xl mb-1">
                <span className="font-serif italic">Real</span>{' '}
                <span className="font-sans font-bold">ingredients</span>
              </h3>
              <p className="text-sm text-gray-600">Oats, pea protein, flaxseed, coconut, and MCTs</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}