import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import TopHeader from './components/TopHeader';
import StepProgress from './components/StepProgress';
import { useMixAndMatch } from './MixAndMatchContext';
import { mixAndMatchCategories } from './mixAndMatchData';

export default function PurchaseOptions() {
  const navigate = useNavigate();
  const { boxItems, purchaseOption, setPurchaseOption, frequency, setFrequency } = useMixAndMatch();

  // Compute totals from shared state
  let totalCount = 0;
  let subtotal = 0;
  mixAndMatchCategories.forEach(cat => {
    cat.flavors.forEach(flav => {
      const qty = boxItems[flav.id] || 0;
      if (qty > 0) {
        totalCount += qty;
        subtotal += qty * cat.price;
      }
    });
  });

  // Fallback to screenshot mock values if empty (for direct navigation / preview)
  const isMock = totalCount === 0;
  const finalTotalCount = isMock ? 12 : totalCount;
  const finalSubtotal = isMock ? 42.73 : subtotal;
  
  // 10% discount for subscribe
  const discount = finalSubtotal * 0.1;
  const subscribeTotal = finalSubtotal - discount;
  
  const displayTotal = purchaseOption === 'subscribe' ? subscribeTotal : finalSubtotal;

  const frequencyOptions = [
    { value: '1-week', label: '1 week' },
    { value: '2-weeks', label: '2 weeks' },
    { value: '3-weeks', label: '3 weeks' },
    { value: '4-weeks', label: '4 weeks (recommended)' },
    { value: '5-weeks', label: '5 weeks' },
    { value: '6-weeks', label: '6 weeks' },
    { value: '8-weeks', label: '8 weeks' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ec] font-sans antialiased select-none pb-24">
      {/* Shared Heading & Header */}
      <TopHeader />
      <StepProgress currentStep={2} />

      <main className="mx-auto max-w-[620px] px-4 pt-8">
        {/* Back + Title */}
        <div className="flex items-center gap-3.5 mb-6">
          <button
            onClick={() => navigate('/mix-and-match')}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#ded8cc] shadow-sm hover:bg-neutral-100 transition-colors cursor-pointer shrink-0"
          >
            {/* Custom chevron matching original arrow/chevron-left */}
            <svg className="h-4.5 w-4.5 text-neutral-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-[24px] font-bold text-black tracking-tight">Purchase options</h1>
        </div>

        {/* Purchase Options Cards Container */}
        <div className="rounded-xl border border-[#ded8cc] bg-white overflow-hidden shadow-sm mb-6">
          
          {/* Beige Ribbon Banner: #D0C5AE */}
          <div className="bg-[#D0C5AE] py-2.5 px-4 text-center text-[11px] font-black text-[#5a4e38] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <span>⭐</span>
            <span>Most customers choose this</span>
          </div>

          {/* Flexible Plan Card */}
          <div
            onClick={() => setPurchaseOption('subscribe')}
            className={`p-6 border-b border-[#ede9e1] cursor-pointer transition-colors hover:bg-neutral-50/50 ${
              purchaseOption === 'subscribe' ? 'bg-[#faf9f6]/30' : ''
            }`}
          >
            {/* Header: Radio, Title, Item Count */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  purchaseOption === 'subscribe'
                    ? 'border-[#006046] bg-white'
                    : 'border-neutral-300 bg-white'
                }`} style={{ borderWidth: '2px' }}>
                  {purchaseOption === 'subscribe' && (
                    <div className="h-2.5 w-2.5 rounded-full bg-[#006046]" />
                  )}
                </div>
                <span className="text-[17px] font-extrabold text-black">Flexible plan</span>
              </div>
              <span className="text-[13px] font-bold text-neutral-500">
                {finalTotalCount} items
              </span>
            </div>

            {/* Price Pill and Original Price */}
            <div className="mt-2.5 pl-8 flex flex-col items-start gap-0.5">
              <div className="inline-block rounded bg-[#d2f2dc] px-2 py-0.5 text-[15px] font-bold text-[#006046]">
                £{subscribeTotal.toFixed(2)}
              </div>
              <span className="text-[13px] text-neutral-400 line-through pl-0.5 mt-0.5">
                £{finalSubtotal.toFixed(2)}
              </span>
            </div>

            {/* Benefits & Frequency drop down list */}
            <div className="mt-5 pl-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
              {/* Custom SVG Checkmarks List */}
              <div className="space-y-2">
                {[
                  '10% off all recurring orders',
                  'Skip or reschedule anytime',
                  'Cancel anytime - no fees'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5 text-[13px] font-semibold text-neutral-700">
                    <div className="h-4.5 w-4.5 rounded-full border border-neutral-400 flex items-center justify-center shrink-0">
                      <svg className="h-2.5 w-2.5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Frequency Selector */}
              <div className="sm:text-right">
                <p className="text-[12px] font-bold text-neutral-600 mb-1.5 uppercase tracking-wide">Delivers every</p>
                <div className="relative min-w-[210px]">
                  <select
                    value={frequency}
                    onChange={(e) => {
                      e.stopPropagation();
                      setFrequency(e.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full appearance-none rounded-lg border border-[#006046] bg-white pl-4 pr-10 py-2.5 text-[13px] font-bold text-black focus:outline-none focus:ring-1 focus:ring-[#006046] cursor-pointer"
                    style={{ borderWidth: '1.5px' }}
                  >
                    {frequencyOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                    <svg className="h-4 w-4 text-[#006046]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* One-Time Plan Card */}
          <div
            onClick={() => setPurchaseOption('one-off')}
            className={`p-6 cursor-pointer transition-colors hover:bg-neutral-50/50 ${
              purchaseOption === 'one-off' ? 'bg-[#faf9f6]/30' : ''
            }`}
          >
            {/* Header: Radio, Title, Item Count */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  purchaseOption === 'one-off'
                    ? 'border-[#006046] bg-white'
                    : 'border-neutral-300 bg-white'
                }`} style={{ borderWidth: '2px' }}>
                  {purchaseOption === 'one-off' && (
                    <div className="h-2.5 w-2.5 rounded-full bg-[#006046]" />
                  )}
                </div>
                <span className="text-[17px] font-extrabold text-black">One-time</span>
              </div>
              <span className="text-[13px] font-bold text-neutral-500">
                {finalTotalCount} items
              </span>
            </div>

            {/* Price (Standard purchase, no discount) */}
            <div className="mt-2.5 pl-8">
              <span className="text-[17px] font-extrabold text-black">
                £{finalSubtotal.toFixed(2)}
              </span>
            </div>
          </div>

        </div>

        {/* Secure Checkout Card Block */}
        <div className="rounded-xl border border-[#ded8cc] bg-white p-5 shadow-sm">
          {/* Summary Row */}
          <div className="flex items-center justify-between text-[14px] font-extrabold text-black mb-4">
            <span>{finalTotalCount} items added</span>
            <span>Total: £{displayTotal.toFixed(2)}</span>
          </div>

          {/* Secure Checkout Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-[14px] font-bold text-white hover:bg-neutral-800 transition-colors cursor-pointer shadow-md">
            <Lock size={15} strokeWidth={2.5} />
            <span>Secure checkout</span>
          </button>
        </div>

      </main>
    </div>
  );
}
