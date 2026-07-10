import React from 'react';
import ProductInfo from "./ProductInfo";

export default function ProductSection({
  id,
  image,
  category,
  title,
  description,
  kcal,
  protein,
  price,
  unit,
  children,
}) {
  return (
    <section 
      id={id}
      className="scroll-mt-32 rounded-xl border border-[#ded8cc] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <ProductInfo
        image={image}
        category={category}
        title={title}
        description={description}
        kcal={kcal}
        protein={protein}
        price={price}
        unit={unit}
      />

      {/* Grid of flavors */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
}