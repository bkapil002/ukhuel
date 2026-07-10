import React from 'react';

export default function StepProgress({ currentStep = 1 }) {
  const steps = [
    { id: 1, title: "Add single flavours to your box" },
    { id: 2, title: "Choose your purchase option" },
    { id: 3, title: "Checkout" }
  ];

  return (
    <section className="bg-[#f5f2ec] border-b border-[#e5e1d8] py-5 select-none">
      <div className="mx-auto max-w-[1180px] px-6">
        <h1 className="text-[28px] font-semibold text-black tracking-tight leading-tight">
          Mix and Match
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {steps.map((step) => {
            const isActive = currentStep === step.id;
            
            return (
              <div key={step.id} className="flex items-center gap-2.5">
                {/* Olive Circle badge */}
                <div 
                  className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                  style={{ backgroundColor: "#70654b" }}
                >
                  {step.id}
                </div>

                {/* Olive Text */}
                <span 
                  className="text-[13px] font-medium text-[#70654b]"
                  style={{ color: isActive ? "#000000" : "#70654b", fontWeight: isActive ? "700" : "500" }}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}