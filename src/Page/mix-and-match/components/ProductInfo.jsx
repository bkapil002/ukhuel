import React from 'react';

const HelixIcon = () => (
  <svg className="w-4.5 h-4.5 text-neutral-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c1.5-1.5 3-3 4.5-4.5m3-3c1.5-1.5 3-3 4.5-4.5" />
    <path d="M6.5 10.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" />
    <path d="M17.5 4.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" />
  </svg>
);

export default function ProductInfo({
  image,
  category,
  title,
  kcal,
  protein,
  price,
  unit = "meal",
}) {
  return (
    <div className="flex items-start gap-5 select-none">
      {/* Sachet image box container with larger visual proportions */}
      <div className="flex h-[135px] w-[95px] shrink-0 items-center justify-center rounded-xl bg-[#f5f2ec] border border-[#ded8cc] overflow-hidden">
        <img
          src={image}
          alt={category}
          className="h-full w-full object-contain p-1.5 transform scale-135 drop-shadow-md select-none"
        />
      </div>

      <div className="pt-0.5">
        {/* Category tag */}
        <span className="text-[13px] font-semibold text-[#176331] block">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-[22px] font-bold text-black tracking-tight mt-1 leading-tight">
          {title}
        </h2>

        {/* Attributes row */}
        <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-neutral-800">
          <div className="flex items-center gap-1.5">
            <span className="rounded border border-black px-[4px] py-[0.5px] text-[9px] font-extrabold leading-none uppercase tracking-wide">
              kcal
            </span>
            <span>{kcal} kcal per {unit}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <HelixIcon />
            <span>{protein} protein</span>
          </div>
        </div>

        {/* Price and learn more */}
        <div className="mt-4 flex items-center gap-4">
          <span className="rounded bg-[#e1f3e8] px-3 py-1.5 text-[13px] font-bold text-[#176331]">
            £{price.toFixed(2)} per {unit}
          </span>

          <button className="text-[13px] font-bold text-black underline decoration-[1px] underline-offset-[3px] hover:text-neutral-700 cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}