import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { priceItem } from "../constants";

const OrderDetails = createContext();

export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error("useOrderDetails must be used within an orderProvider");
  }

  return context;
}

function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }
  return optionCount * priceItem[optionType];
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const [total, setTotal] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
    const toppingsSubtotal = calculateSubtotal("scoops", optionCounts);
    const grantTotal = scoopsSubtotal + toppingsSubtotal;
    setTotal({
      scoops: scoopsSubtotal,
      toppings: toppingsSubtotal,
      grantTotal,
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts };

      const optionCountMap = optionCounts[optionType];
      optionCountMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    }
    return [{ ...optionCounts }, updateItemCount];
  }, [optionCounts]);
  return <OrderDetails.Provider value={value} {...props} />;
}
