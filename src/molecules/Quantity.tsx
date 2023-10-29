import { useState } from "react";
import { Button } from "../atoms";

import "./quantity.css";
import { useTotalPriceStore } from "../store";

type QuantityProps = {
  ticketPrice: number;
};

export function Quantity({ ticketPrice }: QuantityProps) {
  const [quantity, setQuantity] = useState(0);

  const increaseTotal = useTotalPriceStore((state) => state.increase);
  const decreaseTotal = useTotalPriceStore((state) => state.decrease);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((q) => q - 1);
      decreaseTotal(ticketPrice);
    }
  };

  const handleIncrement = () => {
    setQuantity((q) => q + 1);
    increaseTotal(ticketPrice);
  };

  return (
    <form>
      <Button onClick={handleDecrement} />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        title="ticket quantity"
        className="m-0 sm:p-2 text-lg mx-4 sm:mx-8 w-6 sm:w-10 text-center "
      />
      <Button increment onClick={handleIncrement} />
    </form>
  );
}
