import React from "react";
import TopHeader from "./components/TopHeader";
import StepProgress from "./components/StepProgress";
import MixLayout from "./components/MixLayout";
import ProductSection from "./components/ProductSection";
import FlavorCard from "./components/FlavorCard";
import { mixAndMatchCategories } from "./mixAndMatchData";
import { useMixAndMatch } from "./MixAndMatchContext";

export default function MixAndMatchPage() {
  const { boxItems, setBoxItems, handleAdd, handleRemove } = useMixAndMatch();

  return (
    <div className="min-h-screen bg-[#f5f2ec] font-sans antialiased">
      <TopHeader />
      <StepProgress currentStep={1} />

      <MixLayout
        boxItems={boxItems}
        setBoxItems={setBoxItems}
        categories={mixAndMatchCategories}
      >
        {mixAndMatchCategories.map((cat) => (
          <ProductSection
            key={cat.id}
            id={cat.id}
            image={cat.image}
            category={cat.category}
            title={cat.title}
            description={cat.description}
            kcal={cat.kcal}
            protein={cat.protein}
            price={cat.price}
            unit={cat.unit}
          >
            {cat.flavors.map((flavor) => (
              <FlavorCard
                key={flavor.id}
                flavor={flavor}
                productImage={cat.image}
                quantity={boxItems[flavor.id] || 0}
                onAdd={() => handleAdd(flavor.id)}
                onRemove={() => handleRemove(flavor.id)}
              />
            ))}
          </ProductSection>
        ))}
      </MixLayout>
    </div>
  );
}