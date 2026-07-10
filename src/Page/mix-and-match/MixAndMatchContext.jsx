import React, { createContext, useContext, useState } from 'react';

const MixAndMatchContext = createContext();

export function useMixAndMatch() {
  return useContext(MixAndMatchContext);
}

export function MixAndMatchProvider({ children }) {
  const [boxItems, setBoxItems] = useState({});
  const [purchaseOption, setPurchaseOption] = useState("subscribe");
  const [frequency, setFrequency] = useState("4-weeks");

  const handleAdd = (flavorId) => {
    setBoxItems((prev) => ({
      ...prev,
      [flavorId]: (prev[flavorId] || 0) + 1,
    }));
  };

  const handleRemove = (flavorId) => {
    setBoxItems((prev) => {
      const currentQty = prev[flavorId] || 0;
      if (currentQty <= 1) {
        const next = { ...prev };
        delete next[flavorId];
        return next;
      }
      return { ...prev, [flavorId]: currentQty - 1 };
    });
  };

  return (
    <MixAndMatchContext.Provider value={{
      boxItems, setBoxItems,
      purchaseOption, setPurchaseOption,
      frequency, setFrequency,
      handleAdd, handleRemove,
    }}>
      {children}
    </MixAndMatchContext.Provider>
  );
}
