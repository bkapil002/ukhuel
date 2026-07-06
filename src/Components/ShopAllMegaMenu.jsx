import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const collectionItems = [
    { title: 'Bestsellers', bg: 'bg-[#f0ede4]' },
    { title: 'Powdered Meals', bg: 'bg-[#f0ede4]' },
    { title: 'Ready-to-drink Meals', bg: 'bg-[#f0ede4]' },
    { title: 'Bundles', bg: 'bg-[#f0ede4]' },
    { title: 'Drinks & Snacks', bg: 'bg-[#f0ede4]' },
    { title: 'Greens & Superfoods', bg: 'bg-[#f0ede4]' },
    { title: 'Hot Instant Meals', bg: 'bg-[#f0ede4]' },
    { title: 'Official Huel Merch', bg: 'bg-[#f0ede4]' },
];

const goalItems = [
    { title: 'More protein', bg: 'bg-[#c9a89a]' },
    { title: 'Eat healthy', bg: 'bg-[#f2c94c]' },
    { title: 'Manage weight', bg: 'bg-[#b7d6b0]' },
    { title: 'Save time', bg: 'bg-[#c98a4e]' },
];

const tabs = [
    { key: 'collection', label: 'Shop by Collection' },
    { key: 'goal', label: 'Shop by Goal' },
    { key: 'help', label: 'Help me choose' },
];

function CategoryCard({ title, bg }) {
    return (
        <div className={`relative h-56 rounded-sm ${bg} p-5 flex flex-col justify-between overflow-hidden`}>
            <span className="text-base font-semibold text-black">{title}</span>
            <button
                aria-label={`Shop ${title}`}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors self-start"
            >
                <ArrowRight size={16} strokeWidth={2} />
            </button>
        </div>
    );
}

function GoalCard({ title, bg }) {
    return (
        <div className={`relative h-56 rounded-sm ${bg} p-5 flex flex-col justify-between overflow-hidden`}>
            <span className="text-base font-semibold text-white drop-shadow-sm">{title}</span>
            <button
                aria-label={`Shop ${title}`}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors self-start"
            >
                <ArrowRight size={16} strokeWidth={2} />
            </button>
        </div>
    );
}

export default function ShopAllMegaMenu({ open }) {
    const [activeTab, setActiveTab] = useState('collection');

    if (!open) return null;

    return (
        <div
            className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-40 transition-all duration-300 ease-out ${open
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
        >      <div className="max-w-[1654px] mx-auto px-4 sm:px-6 lg:px-10 flex">
                {/* Left sidebar */}
                <div className="w-56 shrink-0 py-8 flex flex-col justify-between border-r border-gray-100">
                    <nav className="flex flex-col gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`text-left text-sm py-2 transition-colors ${activeTab === tab.key
                                        ? 'text-black font-medium border-l-2 border-black pl-3 -ml-px'
                                        : 'text-gray-600 hover:text-black pl-3'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                    <button className="w-fit px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                        Shop all
                    </button>
                </div>

                {/* Right content panel */}
                <div className="flex-1 py-8 pl-8">
                    {activeTab === 'collection' && (
                        <div className="grid grid-cols-4 gap-4">
                            {collectionItems.map((item) => (
                                <CategoryCard key={item.title} {...item} />
                            ))}
                        </div>
                    )}

                    {activeTab === 'goal' && (
                        <div className="grid grid-cols-4 gap-4">
                            {goalItems.map((item) => (
                                <GoalCard key={item.title} {...item} />
                            ))}
                        </div>
                    )}

                    {activeTab === 'help' && (
                        <div className="flex gap-8">
                            <div className="w-44 shrink-0">
                                <span className="text-xs font-medium tracking-widest uppercase text-gray-400">Learn</span>
                                <nav className="flex flex-col gap-3 mt-4">
                                    <a href="#" className="text-sm font-medium text-black hover:text-gray-600">Why Huel?</a>
                                    <a href="#" className="text-sm font-medium text-black hover:text-gray-600">Guides & Articles</a>
                                </nav>
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div className="relative h-96 rounded-sm bg-gradient-to-br from-[#f2a154] to-[#e8843f] p-6 flex flex-col justify-end">
                                    <p className="text-white font-semibold text-lg mb-3">Not sure which product is right for you?</p>
                                    <button className="w-fit px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold">
                                        Learn more
                                    </button>
                                </div>
                                <div className="relative h-96 rounded-sm bg-gradient-to-br from-[#c96a4e] to-[#5a2f2a] p-6 flex flex-col justify-end">
                                    <p className="text-white font-semibold text-lg mb-3">Can't decide? Try our bestsellers</p>
                                    <button className="w-fit px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold">
                                        Bestsellers
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}