import { useTotalPriceStore } from "../store";
import { formatCurrency } from "../utils";

export function TotalPrice() {
  const totalPrice = useTotalPriceStore((state) => state.total);
  return (
    <p className="text-right mb-4 text-lg">
      Total price: {formatCurrency(totalPrice)}
    </p>
  );
}
