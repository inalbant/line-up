import { pounds } from "../utils/currencyFormat";

type TicketPriceProps = {
  price: number;
  bookingFee: number;
};

export function TicketPrice({ price, bookingFee }: TicketPriceProps) {
  return (
    <div className="text-right">
      <p>{pounds.format(price)}</p>
      <p>(+ {pounds.format(bookingFee)} fee)</p>
    </div>
  );
}
