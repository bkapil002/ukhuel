import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, ArrowRight, ArrowLeft, CheckCircle2, Gift, CreditCard, ShieldCheck, RefreshCw, Trash2 } from 'lucide-react';

export default function MixLayout({
  currentStep = 1,
  setCurrentStep,
  boxItems,
  setBoxItems,
  purchaseOption,
  setPurchaseOption,
  frequency,
  setFrequency,
  categories,
  children
}) {
  const navigate = useNavigate();
  const [tshirtSize, setTshirtSize] = useState('L');
  const [isOrdering, setIsOrdering] = useState(false);

  // Compute box metrics
  let subtotal = 0;
  const selectedDetails = [];
  let totalCount = 0;

  categories.forEach(cat => {
    cat.flavors.forEach(flav => {
      const qty = boxItems[flav.id] || 0;
      if (qty > 0) {
        totalCount += qty;
        const cost = qty * cat.price;
        subtotal += cost;
        selectedDetails.push({
          id: flav.id,
          name: flav.name,
          productTitle: cat.category, // e.g. "Black Edition Sachets"
          unitPrice: cat.price,
          quantity: qty,
          totalPrice: cost,
          image: cat.image, // Product sachet image (black bag / white bag / bottle)
          flavorImage: flav.image, // Flavor ingredient image (chocolate shavings / vanilla pod)
          textColor: flav.textColor,
          bg: flav.bg,
          unit: cat.unit
        });
      }
    });
  });

  const discount = purchaseOption === 'subscribe' ? subtotal * 0.1 : 0;
  const discountedSubtotal = subtotal - discount;
  const deliveryCost = discountedSubtotal >= 45 ? 0 : 3.99;
  const total = discountedSubtotal + deliveryCost;

  // Helper to adjust quantity inside cart list
  const updateQty = (id, change) => {
    setBoxItems(prev => {
      const currentQty = prev[id] || 0;
      const nextQty = Math.max(0, currentQty + change);
      if (nextQty === 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: nextQty };
    });
  };

  const handlePlaceOrder = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setCurrentStep(3);
    }, 1500);
  };

  // Group items by Huel product category
  const groupedItems = {};
  selectedDetails.forEach(item => {
    let displayGroup = item.productTitle;
    if (item.id.startsWith("be-")) displayGroup = "Single Huel Black Edition Sachet";
    else if (item.id.startsWith("v3-")) displayGroup = "Single Huel Powder v3.0 Pouch";
    else if (item.id.startsWith("hs-")) displayGroup = "Hot & Savoury Meal Pack";
    else if (item.id.startsWith("rtd-")) displayGroup = "Ready-to-drink Bottle";
    else if (item.id.startsWith("dg-")) displayGroup = "Daily Greens Pouch";
    else if (item.id.startsWith("bar-")) displayGroup = "Complete Nutrition Bar";

    if (!groupedItems[displayGroup]) {
      groupedItems[displayGroup] = [];
    }
    groupedItems[displayGroup].push(item);
  });

  // Step 1: Add items (Main Interface)
  if (currentStep === 1) {
    return (
      <main className="bg-[#f5f2ec] pb-20 select-none">
        {/* Sticky Sub-header for navigation tabs inside builder */}
        <div className="sticky top-0 z-20 w-full border-b border-[#e5e1d8] bg-white shadow-sm">
          <div className="mx-auto flex max-w-[1180px] items-center gap-3 overflow-x-auto px-6 py-3 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 rounded-full border border-neutral-200 bg-[#f6f4ee] px-4 py-1.5 text-xs font-bold text-neutral-800 transition-all hover:bg-neutral-200 hover:text-black"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(cat.id);
                  if (targetElement) {
                    const offset = 120; // sticky header offset
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                  }
                }}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[1fr_380px]">
          {/* Left Column: Product Sections */}
          <div className="space-y-8">
            {children}
          </div>

          {/* Right Column: Sticky Cart Sidebar */}
          <aside className="lg:sticky lg:top-16 lg:self-start">
            <div className="rounded-xl border border-[#ded8cc] bg-white overflow-hidden shadow-sm">
              
              {/* Beige Header banner color: #D0C5AE */}
              <div className="bg-[#D0C5AE] px-5 py-4">
                <h2 className="text-[17px] font-bold text-black">
                  Your items
                </h2>
              </div>

              <div className="p-5">
                {/* Progress bar with dark-to-light green gradient */}
                <div className="flex items-center gap-3 mt-1">
                  <div className="h-1.5 flex-1 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#2c593b] via-[#5e966e] to-[#a3cca6] transition-all duration-300"
                      style={{ width: `${Math.min(100, (totalCount / 12) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[12px] font-bold text-neutral-800 shrink-0">
                    {totalCount}/12
                  </span>
                </div>

                {/* Scrollable Selected Items Detail list */}
                <div className="mt-4 h-[240px] overflow-y-auto border-t border-b border-neutral-100 py-3 pr-1 scrollbar-thin">
                  {Object.keys(groupedItems).length > 0 ? (
                    <div className="space-y-4">
                      {Object.entries(groupedItems).map(([groupTitle, items]) => (
                        <div key={groupTitle} className="space-y-2">
                          {/* Group category header */}
                          <h3 className="text-[13px] font-bold text-black tracking-tight uppercase">
                            {groupTitle}
                          </h3>

                          {/* Items in category */}
                          <div className="space-y-2.5 pl-0.5">
                            {items.map((item) => (
                              <div key={item.id} className="flex items-center justify-between gap-3 text-[13px] font-medium text-neutral-800">
                                <div className="flex items-center gap-2">
                                  {/* Show flavor-specific ingredient image for each item */}
                                  <div className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center bg-white overflow-hidden shrink-0">
                                    <img 
                                      src={item.flavorImage} 
                                      alt={item.name} 
                                      className="h-full w-full object-cover" 
                                    />
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <span className="text-[13px] font-medium text-neutral-800">{item.name} x{item.quantity}</span>
                                    <button 
                                      onClick={() => updateQty(item.id, -item.quantity)}
                                      className="text-neutral-400 hover:text-red-500 cursor-pointer flex items-center justify-center shrink-0 transition-colors"
                                      title="Remove item"
                                    >
                                      <Trash2 size={16} strokeWidth={2} />
                                    </button>
                                  </div>
                                </div>

                                <span className="font-bold text-black shrink-0 text-[13px]">
                                  £{item.totalPrice.toFixed(2)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-neutral-400 py-10">
                      No items in your box yet. Start adding flavours.
                    </div>
                  )}
                </div>

                {/* Footer block: Summary line */}
                <div className="mt-4 flex items-center justify-between text-[14px] font-bold text-black">
                  <span>{totalCount} Items added</span>
                  <span>Total: £{subtotal.toFixed(2)}</span>
                </div>

                {/* Checkout button with state-based color styling */}
                {totalCount < 12 ? (
                  <button
                    disabled
                    className="mt-4 flex w-full items-center justify-center rounded-full py-3.5 text-[14px] font-bold text-[#555555] bg-[#ededed] cursor-not-allowed border border-transparent shadow-sm"
                  >
                    Add {12 - totalCount} more flavours
                  </button>
                ) : (
                  <button
                    onClick={() => navigate('/mix-and-match/purchase-options')}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[14px] font-bold text-white bg-black hover:bg-neutral-800 cursor-pointer transition-all shadow-md"
                  >
                    Continue
                  </button>
                )}
              </div>

            </div>
          </aside>
        </div>
      </main>
    );
  }

  // Step 2: Choose purchase options (Checkout Configuration)
  if (currentStep === 2) {
    return (
      <main className="bg-[#f5f2ec] py-10 pb-20 select-none">
        <div className="mx-auto max-w-[900px] px-6">
          
          {/* Back button */}
          <button 
            onClick={() => setCurrentStep(1)}
            className="flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-black uppercase tracking-wider transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            <span>Back to Edit Box</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8">
            
            {/* Purchase Details Panel */}
            <div className="space-y-6">
              <h2 className="text-xl font-black text-black uppercase tracking-tight">
                Choose your option
              </h2>

              {/* Sub vs One-Off Cards */}
              <div className="space-y-3">
                
                {/* Subscription option */}
                <div 
                  onClick={() => setPurchaseOption('subscribe')}
                  className={`rounded-xl border p-4 cursor-pointer transition-all duration-200 bg-white ${
                    purchaseOption === 'subscribe' 
                      ? "border-black shadow-md ring-1 ring-black" 
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center ${
                          purchaseOption === 'subscribe' ? "border-black" : "border-neutral-300"
                        }`}>
                          {purchaseOption === 'subscribe' && <div className="h-2.5 w-2.5 rounded-full bg-black" />}
                        </div>
                        <h3 className="font-extrabold text-sm text-black">Subscribe & Save 10%</h3>
                      </div>
                      <p className="text-xs text-neutral-500 mt-1 font-medium pl-6">
                        Best value. Cancel, pause, or swap flavors at any time.
                      </p>
                    </div>
                    <span className="rounded bg-[#c7f1c5] px-2 py-0.5 text-[9px] font-extrabold text-black uppercase">
                      10% OFF
                    </span>
                  </div>

                  {purchaseOption === 'subscribe' && (
                    <div className="mt-4 pl-6 border-t border-neutral-100 pt-3">
                      <label className="block text-xs font-bold text-neutral-700">Delivery Frequency</label>
                      <select 
                        value={frequency} 
                        onChange={(e) => setFrequency(e.target.value)}
                        className="mt-1.5 block w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs font-semibold text-black focus:border-black focus:outline-none"
                      >
                        <option value="3-weeks">Every 3 weeks</option>
                        <option value="4-weeks">Every 4 weeks (Most Popular)</option>
                        <option value="5-weeks">Every 5 weeks</option>
                        <option value="6-weeks">Every 6 weeks</option>
                        <option value="8-weeks">Every 8 weeks</option>
                      </select>
                      
                      <div className="mt-3 flex items-center gap-2 rounded bg-neutral-50 p-2.5 text-[11px] text-neutral-600 border border-neutral-100 font-medium">
                        <RefreshCw size={13} className="text-neutral-500 shrink-0" />
                        <span>Swap items or change dates inside your account easily.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* One-off purchase option */}
                <div 
                  onClick={() => setPurchaseOption('one-off')}
                  className={`rounded-xl border p-4 cursor-pointer transition-all duration-200 bg-white ${
                    purchaseOption === 'one-off' 
                      ? "border-black shadow-md ring-1 ring-black" 
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center mt-0.5 ${
                      purchaseOption === 'one-off' ? "border-black" : "border-neutral-300"
                    }`}>
                      {purchaseOption === 'one-off' && <div className="h-2.5 w-2.5 rounded-full bg-black" />}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-black">One-off Purchase</h3>
                      <p className="text-xs text-neutral-500 mt-1 font-medium">
                        Single order without any ongoing subscription.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Free Gifts Banner */}
              <div className="rounded-xl border border-dashed border-[#e6e2d8] bg-[#fdfaf5] p-4 flex items-start gap-3">
                <Gift className="text-[#176331] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-black uppercase">Included for new customers</h4>
                  <p className="text-xs text-neutral-500 mt-1 font-medium">
                    A Free shaker, scoop, and Huel t-shirt will be automatically included in your delivery box.
                  </p>
                  
                  <div className="mt-3">
                    <label className="block text-[10px] font-bold text-neutral-600 uppercase">Select T-Shirt Size</label>
                    <div className="flex gap-2 mt-1.5">
                      {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <button
                          key={size}
                          onClick={() => setTshirtSize(size)}
                          className={`h-7 w-9 text-xs font-bold rounded border transition-all ${
                            tshirtSize === size 
                              ? "bg-black text-white border-black" 
                              : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-400"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Checkout Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-green-700" />
                  <span>Secure 256-bit SSL</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
                  <CreditCard size={14} className="text-neutral-500" />
                  <span>Flexible Payments</span>
                </div>
              </div>
            </div>

            {/* Price breakdown sidebar */}
            <div>
              <div className="rounded-xl border border-[#ded8cc] bg-white p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-black text-black uppercase tracking-tight pb-2 border-b border-neutral-100">
                  Order Summary
                </h3>

                {/* Items preview */}
                <div className="space-y-3.5 max-h-[160px] overflow-y-auto pr-1">
                  {selectedDetails.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-xs">
                      <span className="text-neutral-600 font-medium">
                        {item.quantity}x {item.name} {item.productTitle.replace(" Sachets", "").replace(" Pouches", "").replace(" Bottles", "")}
                      </span>
                      <span className="font-extrabold text-black">
                        £{(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-neutral-100 pt-3 space-y-2">
                  <div className="flex justify-between text-xs text-neutral-500 font-medium">
                    <span>Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>

                  {purchaseOption === 'subscribe' && (
                    <div className="flex justify-between text-xs text-[#176331] font-semibold">
                      <span>10% Subscription Discount</span>
                      <span>-£{discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-xs text-neutral-500 font-medium">
                    <span>Delivery</span>
                    <span>{deliveryCost === 0 ? "FREE" : `£${deliveryCost.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between border-t border-neutral-100 pt-3 text-base font-black text-black">
                    <span>Total Price</span>
                    <span>£{total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isOrdering}
                  className="w-full py-3 bg-[#176331] hover:bg-[#114b24] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isOrdering ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span>Confirm & Checkout</span>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    );
  }

  // Step 3: Simulated Checkout success
  if (currentStep === 3) {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 2); // 2 days estimation
    const formattedDelivery = deliveryDate.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });

    return (
      <main className="bg-[#f5f2ec] py-16 px-6 select-none">
        <div className="mx-auto max-w-[600px] rounded-2xl border border-[#ded8cc] bg-white p-8 shadow-lg text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle2 size={56} className="text-[#176331] stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-black tracking-tight uppercase">
              Order Confirmed!
            </h1>
            <p className="text-sm text-neutral-500 font-medium">
              Thank you for order <strong className="text-black">#HUEL-{Math.floor(1000000 + Math.random() * 9000000)}</strong>
            </p>
          </div>

          <div className="rounded-xl bg-[#f5f2ec] p-5 text-left border border-[#e6e2d8] space-y-3">
            <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#ded8cc]">
              <Truck size={18} className="text-black" />
              <div>
                <p className="text-xs font-bold text-black uppercase">Estimated Delivery</p>
                <p className="text-sm font-semibold text-neutral-800 mt-0.5">{formattedDelivery}</p>
              </div>
            </div>

            {purchaseOption === 'subscribe' ? (
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#ded8cc]">
                <RefreshCw size={18} className="text-black" />
                <div>
                  <p className="text-xs font-bold text-black uppercase">Subscription Interval</p>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">Recurring {frequency.replace("-", " ")}</p>
                </div>
              </div>
            ) : null}

            <div className="flex items-center gap-2.5">
              <Gift size={18} className="text-[#176331]" />
              <div>
                <p className="text-xs font-bold text-[#176331] uppercase">Free Gifts Included</p>
                <p className="text-xs font-semibold text-neutral-700 mt-0.5">
                  1x Shaker, 1x Scoop, 1x Huel T-Shirt (Size {tshirtSize})
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider text-left border-b border-neutral-100 pb-2">
              Item Details
            </h3>
            <div className="space-y-2.5 max-h-[140px] overflow-y-auto pr-1 text-left">
              {selectedDetails.map(item => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <span className="text-neutral-700 font-medium">
                    {item.quantity}x {item.name} {item.productTitle.replace(" Sachets", "").replace(" Pouches", "").replace(" Bottles", "")}
                  </span>
                  <span className="font-extrabold text-black">
                    £{(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-100 pt-3 flex justify-between text-sm font-black text-black">
              <span>Paid Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="/"
              className="inline-block w-full py-3 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </main>
    );
  }

  return null;
}