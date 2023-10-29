import { formatCurrency } from "../utils";

type TicketPriceProps = {
  price: number;
  bookingFee: number;
};

export function TicketPrice({ price, bookingFee }: TicketPriceProps) {
  return (
    <div className="text-right">
      <p>{formatCurrency(price)}</p>
      <p>(+ {formatCurrency(bookingFee)} fee)</p>
    </div>
  );
}
