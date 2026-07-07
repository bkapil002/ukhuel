import JoinHuel from "../Page/JoinHuel";

const foodLinks = ['Powdered meals', 'Hot meals', 'On-the-go', 'Greens', 'Snacks', 'Nutrition', 'Accessories'];

const companyLinks = [
  'FAQs and help centre',
  'Delivery & returns',
  'Huel+',
  'Terms',
  'Privacy Policy',
  'Quality Standards',
  'Reviews',
  'Huel discount codes',
  'Ethics & Governance',
  'Website Disclosure',
];

const supportLinks = [
  'Contact us',
  'Press',
  'Careers',
  'NHS discount',
  'Give £20, Get £20',
  'Student & Graduate discount',
  'Partnerships',
  'Store locator',
  'Forum',
  'Sustainability',
];

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-semibold text-white">{title}</span>
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <a key={link} href="#" className="text-sm text-white/90 hover:text-white transition-colors w-fit">
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function Footer() {
  return (
    <>
    <JoinHuel/>
    <footer className="relative w-full font-sans text-white bg-black">
      {/* Image block: forest photo fading to black — only covers the top section */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('https://cdn.sanity.io/images/sy0wkh9n/productionv29/1e9a76c0205a45681bbe5133c929295f936f0f90-1920x674.png?auto=format&fit=max&q=75&w=585')" }}
        />
        {/* Fade to black gradient over the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/70 to-black" />

        <div className="relative max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-20">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-20">
            {/* Left: badge + heading + CTA */}
            <div className="max-w-[580px]">
              <div className="w-20 h-20 border border-white rounded-md flex flex-col items-center justify-center text-center px-2 mb-6">
                <span className="text-[8px] tracking-wide">Certified</span>
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center my-0.5">
                  <span className="text-xs font-bold">B</span>
                </div>
                <span className="text-[7px] leading-tight">Corporation</span>
                <span className="text-[7px] leading-tight mt-1">Learn more at</span>
                <span className="text-[7px] font-semibold leading-tight">bcorp.com</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-tight mb-4">
                Plant-based nutrition, designed for lower-carbon eating.
              </h2>
              <p className="text-sm text-white/90 mb-6">
                All Huel products are 100% vegan, developed with environmental impact in mind.
              </p>
              <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors">
                See our commitments
              </button>
            </div>

            {/* Right: link columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 xl:gap-24 shrink-0">
              <FooterColumn title="Food" links={foodLinks} />
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="Support" links={supportLinks} />
            </div>
          </div>
        </div>
      </div>

      {/* Solid black section: region row, divider, legal text */}
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 pb-10">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-base leading-none">🇬🇧</span>
          <span className="font-medium">UK</span>
          <span className="text-white/60 ml-2">© 2015 - 2026 Huel Limited. All rights reserved.</span>
        </div>

        <div className="border-t border-white/15 mt-6 mb-10" />

        <div className="text-[11px] leading-relaxed text-white/40 max-w-4xl">
          <p className="font-semibold text-white/50 mb-1">Details on health claims:</p>
          <p>
            Huel meals and bars provide the right amount of protein, essential fats, carbohydrates, fibre, vitamins & minerals as part of a balanced diet
          </p>
          <p>
            <span className="font-semibold text-white/50">Energy</span> Source of biotin to contribute to normal energy-yielding metabolism
          </p>
          <p>
            <span className="font-semibold text-white/50">Digestion</span> Source of calcium to contribute to the normal function of digestive enzymes
          </p>
          <p>
            <span className="font-semibold text-white/50">Immune system</span> Source of vitamin C to contribute to the normal function of the immune system
          </p>
          <p>
            <span className="font-semibold text-white/50">Skin health</span> Source of zinc to contribute to the maintenance of normal skin
          </p>
          <p>
            <span className="font-semibold text-white/50">Cognitive function</span> Source of iron to contribute to normal cognitive function
          </p>
          <p>
            <span className="font-semibold text-white/50">Muscle function</span> Source of magnesium to contribute to normal muscle function
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
