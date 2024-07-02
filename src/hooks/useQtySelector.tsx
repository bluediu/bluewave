import { useState } from "react";

interface IProps {
  initialQty?: number;
  maxQty: number;
  minQty: number;
}

export const useQtySelector = ({ initialQty = 1, maxQty, minQty }: IProps) => {
  const [quantity, setQuantity] = useState(initialQty);

  const handleQty = (value: number): number => {
    const newValue = Math.min(Math.max(quantity + value, minQty), maxQty);
    setQuantity(newValue);
    return newValue;
  };

  const reset = () => setQuantity(initialQty);

  return { quantity, reset, handleQty };
};
