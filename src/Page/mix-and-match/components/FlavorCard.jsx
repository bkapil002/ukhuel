import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FlavorCard({
  flavor,
  quantity = 0,
  onAdd,
  onRemove,
}) {
  const isAdded = quantity > 0;

  return (
    <div
      className="relative flex flex-col items-center justify-between rounded-[8px] p-5 transition-all duration-200 select-none"
      style={{ 
        backgroundColor: flavor.bg, 
        minHeight: "220px"
      }}
    >
      {/* Ingredient circular image wrapper */}
      <div className="flex flex-col items-center w-full">
        <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-full overflow-hidden shadow-sm bg-white shrink-0">
          <img
            src={flavor.image}
            alt={flavor.name}
            className="h-full w-full object-cover select-none"
          />
        </div>

        {/* Flavor name in black, bold */}
        <h3 className="mt-4 text-center text-[15px] font-bold text-black leading-tight">
          {flavor.name}
        </h3>
      </div>

      {/* Button / Quantity adjuster at the bottom */}
      <div className="w-full mt-4">
        {isAdded ? (
          <div className="flex w-full items-center justify-between px-1">
            <button 
              onClick={onRemove}
              aria-label="Decrease quantity"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] border border-black bg-white text-black hover:bg-neutral-50 transition-colors shadow-sm select-none cursor-pointer"
            >
              <Minus size={14} strokeWidth={3} className="shrink-0" />
            </button>

            <span className="text-[16px] font-bold text-black min-w-[20px] text-center">
              {quantity}
            </span>

            <button 
              onClick={onAdd}
              aria-label="Increase quantity"
              className="flex h-[32px] w-[32px] items-center justify-center rounded-[6px] border border-black bg-white text-black hover:bg-neutral-50 transition-colors shadow-sm select-none cursor-pointer"
            >
              <Plus size={14} strokeWidth={3} className="shrink-0" />
            </button>
          </div>
        ) : (
          <button 
            onClick={onAdd}
            className="w-full py-2 rounded-full bg-black text-[11px] font-bold text-white uppercase tracking-wider hover:bg-[#e1f3e8] hover:text-[#176331] hover:border-[#176331] border border-transparent transition-all shadow-sm cursor-pointer"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}