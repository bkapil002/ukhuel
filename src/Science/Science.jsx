import React from 'react';

const healthClaims = [
  [
    'Alpha-linolenic acid', 
    'Contributes to the maintenance of normal blood cholesterol levels', 
    'All products except Huel Daily A-Z Vitamins, Complete Protein, Hot & Savoury Pasta, Complete Nutrition Bar and Daily Greens, Daily Greens Ready-to-drink and Ramen'
  ],
  ['Biotin', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Biotin', 'Contributes to normal functioning of the nervous system', 'All Huel products'],
  ['Biotin', 'Contributes to normal macronutrient metabolism', 'All Huel products'],
  ['Biotin', 'Contributes to normal psychological function', 'All Huel products'],
  ['Biotin', 'Contributes to the maintenance of normal hair, skin and mucous membranes', 'All Huel products'],
  ['Calcium', 'Contributes to normal blood clotting and normal muscle function', 'All Huel products'],
  ['Calcium', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Calcium', 'Contributes to normal neurotransmission', 'All Huel products'],
  ['Calcium', 'Contributes to the normal function of digestive enzymes', 'All Huel products'],
  ['Calcium', 'Needed for the maintenance of normal bones and teeth', 'All Huel products'],
  ['Carbohydrate', 'Contributes to the maintenance of normal brain function', 'Powder, Essential and Ready-to-drink ranges'],
  ['Chloride', 'Contributes to normal digestion by production of hydrochloric acid in the stomach', 'Most Huel products'],
  ['Choline', 'Contributes to normal homocysteine metabolism', 'Most Huel products'],
  ['Choline', 'Contributes to normal lipid metabolism', 'Most Huel products'],
  ['Choline', 'Contributes to the maintenance of normal liver function', 'Most Huel products'],
  ['Chromium', 'Contributes to normal macronutrient metabolism', 'All Huel products'],
  ['Chromium', 'Contributes to the maintenance of normal blood glucose levels', 'All Huel products'],
  ['Copper', 'Contributes to the maintenance of normal connective tissues', 'Most Huel products'],
  ['Copper', 'Contributes to normal energy-yielding metabolism', 'Most Huel products'],
  ['Copper', 'Contributes to normal functioning of the nervous system', 'Most Huel products'],
  ['Copper', 'Contributes to normal iron transport in the body', 'Most Huel products'],
  ['Copper', 'Contributes to the normal function of the immune system', 'Most Huel products'],
  ['Copper', 'Contributes to the protection of cells from oxidative stress', 'Most Huel products'],
  ['Folate', 'Contributes to normal amino acid synthesis', 'All Huel products'],
  ['Folate', 'Contributes to normal blood formation', 'All Huel products'],
  ['Folate', 'Contributes to normal psychological function', 'All Huel products'],
  ['Folate', 'Contributes to the reduction of tiredness and fatigue', 'All Huel products'],
  ['Folate', 'Has a role in the process of cell division', 'All Huel products'],
  ['Iodine', 'Contributes to normal cognitive function', 'All Huel products'],
  ['Iodine', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Iodine', 'Contributes to normal functioning of the nervous system', 'All Huel products'],
  ['Iodine', 'Contributes to the normal production of thyroid hormones and normal thyroid function', 'All Huel products'],
  ['Iron', 'Contributes to normal cognitive function', 'All Huel products'],
  ['Iron', 'Contributes to normal formation of red blood cells and haemoglobin', 'All Huel products'],
  ['Iron', 'Contributes to normal oxygen transport in the body', 'All Huel products'],
  ['Iron', 'Contributes to the normal function of the immune system', 'All Huel products'],
  ['Iron', 'Contributes to the reduction of tiredness and fatigue', 'All Huel products'],
  ['Magnesium', 'Contributes to electrolyte balance', 'All Huel products'],
  ['Magnesium', 'Contributes to normal muscle function', 'All Huel products'],
  ['Magnesium', 'Contributes to normal protein synthesis', 'All Huel products'],
  ['Magnesium', 'Contributes to normal psychological function', 'All Huel products'],
  ['Magnesium', 'Contributes to the maintenance of normal bones and teeth', 'All Huel products'],
  ['Manganese', 'Contributes to normal energy-yielding metabolism', 'Most Huel products'],
  ['Manganese', 'Contributes to the normal formation of connective tissue', 'Most Huel products'],
  ['Manganese', 'Contributes to the protection of cells from oxidative stress', 'Most Huel products'],
  ['Niacin', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Niacin', 'Contributes to normal functioning of the nervous system', 'All Huel products'],
  ['Niacin', 'Contributes to the maintenance of normal skin', 'All Huel products'],
  ['Niacin', 'Contributes to the reduction of tiredness and fatigue', 'All Huel products'],
  ['Phosphorus', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Phosphorus', 'Contributes to the maintenance of normal bones and teeth', 'All Huel products'],
  ['Potassium', 'Contributes to normal functioning of the nervous system', 'Most Huel products'],
  ['Potassium', 'Contributes to normal muscle function', 'Most Huel products'],
  ['Riboflavin', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Riboflavin', 'Contributes to the maintenance of normal red blood cells', 'All Huel products'],
  ['Riboflavin', 'Contributes to the reduction of tiredness and fatigue', 'All Huel products'],
  ['Selenium', 'Contributes to the normal function of the immune system', 'All Huel products'],
  ['Selenium', 'Contributes to the maintenance of normal hair and nails', 'All Huel products'],
  ['Selenium', 'Contributes to normal thyroid function', 'All Huel products'],
  ['Thiamin', 'Contributes to normal energy-yielding metabolism', 'All Huel products'],
  ['Thiamin', 'Contributes to normal psychological function', 'All Huel products'],
  ['Vitamin A', 'Contributes to normal iron metabolism', 'All Huel products'],
  ['Vitamin A', 'Contributes to the maintenance of normal vision and skin', 'All Huel products'],
  ['Vitamin B12', 'Contributes to normal red blood cell formation', 'All Huel products'],
  ['Vitamin B12', 'Contributes to normal functioning of the nervous system', 'All Huel products'],
  ['Vitamin B12', 'Contributes to the reduction of tiredness and fatigue', 'All Huel products'],
  ['Vitamin C', 'Contributes to normal collagen formation', 'All Huel products'],
  ['Vitamin C', 'Contributes to the normal function of the immune system', 'All Huel products'],
  ['Vitamin D', 'Contributes to normal absorption and utilisation of calcium and phosphorus', 'All Huel products'],
  ['Vitamin D', 'Contributes to normal muscle function', 'All Huel products'],
  ['Vitamin D', 'Contributes to the maintenance of normal bones and teeth', 'All Huel products'],
  ['Vitamin E', 'Contributes to the protection of cells from oxidative stress', 'All Huel products'],
  ['Vitamin K', 'Contributes to normal blood clotting', 'Most Huel products'],
  ['Vitamin K', 'Contributes to the maintenance of normal bones', 'Most Huel products'],
  ['Zinc', 'Contributes to normal carbohydrate metabolism', 'All Huel products'],
  ['Zinc', 'Contributes to normal cognitive function', 'All Huel products'],
  ['Zinc', 'Contributes to normal fertility and reproduction', 'All Huel products'],
  ['Zinc', 'Contributes to the maintenance of normal hair, nails and skin', 'All Huel products'],
  ['Zinc', 'Contributes to the normal function of the immune system', 'All Huel products'],
];

export default function Science() {
  return (
    <main className="bg-white font-sans text-neutral-900 select-none pb-20">
      
      {/* Content Container */}
      <div className="max-w-[760px] mx-auto px-4 pt-12 sm:pt-16">
        
       

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-[44px] font-extrabold text-black leading-tight tracking-tight">
          What are the Health Benefits of Huel?
        </h1>
        
        {/* Page Subtitle */}
        <p className="mt-4 text-[15px] sm:text-[17px] font-medium text-neutral-900 leading-relaxed">
          &apos;Is Huel healthy?&apos; is a question we get asked a <em>lot</em> &ndash; here are just a few reasons why Huel is good for you.
        </p>

        {/* Center-aligned Lineup Image */}
        <div className="my-10 flex justify-center">
          <img
            src="https://cdn.sanity.io/images/sy0wkh9n/productionv29/be02266998be436c169ecffc03f10d258adade8e-1468x1468.png?auto=format&fit=max&q=75&w=1468"
            alt="Range of Huel products including powders, shakes, and bars"
            className="w-full max-w-[500px] h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Introductory paragraphs */}
        <div className="text-sm sm:text-base text-neutral-800 space-y-6 font-normal leading-relaxed">
          <p>
            First things first &ndash; we know that health claims aren&apos;t sexy or fun, but science and nutrition are at the heart of what we do at Huel, so it&apos;s pretty important that we walk the walk when it comes to talking about how healthy Huel is.
          </p>
          <p>
            Each of the vitamins, minerals and nutrients in every Huel meal has a role to play in helping your body run smoothly. Each one of these health benefits &ndash; and they vary between all the <a href="#" className="text-black underline font-semibold hover:text-neutral-700 transition-colors">different Huel products</a> &ndash; has been scientifically backed and EU-approved, and we&apos;ve broken them all down so you don&apos;t have to.
          </p>
        </div>

        {/* Section divider */}
        <h2 className="text-xl sm:text-[22px] font-extrabold text-black mt-12 mb-8 border-t border-neutral-100 pt-8">
          The Health Benefits of Huel
        </h2>

        {/* List of claims */}
        <div className="space-y-8">
          {healthClaims.map((claim, idx) => {
            const isALA = claim[0] === 'Alpha-linolenic acid';
            const isCarb = claim[0] === 'Carbohydrate';

            return (
              <div key={idx} className="text-sm sm:text-[15px] leading-relaxed">
                
                {/* Title */}
                <h4 className="font-extrabold text-black text-base sm:text-[17px] mb-1.5">
                  {idx + 1}. {claim[0]}
                </h4>
                
                {/* Details */}
                <div className="text-neutral-800 font-normal space-y-0.5">
                  <p>
                    <span className="font-extrabold text-black">What it does: </span>
                    {claim[1]}
                  </p>
                  
                  {isALA && (
                    <p>
                      <span className="font-extrabold text-black">Caveat: </span>
                      Beneficial effect is obtained with a daily intake of 2 g of ALA
                    </p>
                  )}
                  {isCarb && (
                    <p>
                      <span className="font-extrabold text-black">Caveat: </span>
                      Beneficial effect is obtained with a daily intake of 130 g of carbohydrates from all sources
                    </p>
                  )}

                  <p className="text-neutral-500 pt-0.5">
                    <span className="font-extrabold text-neutral-600">Products: </span>
                    {claim[2]}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </main>
  );
}