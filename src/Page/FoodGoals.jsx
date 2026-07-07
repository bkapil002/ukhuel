import { ArrowRight } from 'lucide-react';

const goals = [
  {
    title: 'More protein',
    href: '/collections/protein-and-fitness',
    image:
      'https://huel.imgix.net/Black-edition-protein-shopper-mission-homepage-tile.png?auto=format&compress&w=500',
  },
  {
    title: 'Eat healthy',
    href: '/collections/complete-nutrition',
    image:
      'https://huel.imgix.net/Lite_Ramen_Shopper_Mission_Homepage.png?auto=format&compress&w=500',
  },
  {
    title: 'Manage weight',
    href: '/collections/weight-loss',
    image:
      'https://huel.imgix.net/LITERTD_VANILLA-MATCHA_Home_Tile.png?auto=format&compress&w=500',
  },
  {
    title: 'Save time',
    href: '/collections/eat-on-the-go',
    image:
      'https://huel.imgix.net/UK_BAR_Home_Tile.png?auto=format&compress&w=500',
  },
];

export default function FoodGoals() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-15">
      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 ">
        <h2 className="text-4xl sm:text-5xl  font-bold leading-tight text-black mb-9 sm:mb-12 lg:mb-16">
          Food to <span className="font-serif italic font-medium">fuel</span> your goals
        </h2>

        <div className="grid grid-cols-2 min-[1180px]:grid-cols-4 gap-4 sm:gap-6">
          {goals.map((goal) => (
            <a
              key={goal.title}
              href={goal.href}
              className="group relative block aspect-square overflow-hidden rounded-md bg-[#f2efe8]"
            >
              <img
                src={goal.image}
                alt={goal.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-visible:scale-110"
              />
              <div className="absolute inset-0 bg-black/5" />

              <span className="absolute left-3 top-3 sm:left-4 sm:top-4 text-base sm:text-lg font-bold text-white">
                {goal.title}
              </span>

              <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
                <ArrowRight size={18} strokeWidth={2} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}