import { useTotalPriceStore } from "../store";
import { pounds } from "../utils/currencyFormat";

export function TotalPrice() {
  const totalPrice = useTotalPriceStore((state) => state.total);
  return (
    <p className="text-right mb-4 text-lg">
      Total price: {pounds.format(totalPrice)}
    </p>
  );
}
