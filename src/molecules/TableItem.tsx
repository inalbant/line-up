import { TicketBand, TicketPrice } from "../atoms";
import { Quantity } from "./Quantity";

type TicketItemProps = {
  ticketTitle: string;
  ticketDescription: string;
  ticketPrice: number;
  bookingFee: number;
};

export function TableItem({
  ticketTitle,
  ticketDescription,
  ticketPrice,
  bookingFee,
}: TicketItemProps) {
  return (
    <div className="flex justify-between py-4">
      <div className="flex justify-between w-full max-w-md">
        <TicketBand title={ticketTitle} description={ticketDescription} />
        <TicketPrice price={ticketPrice} bookingFee={bookingFee} />
      </div>
      <Quantity ticketPrice={ticketPrice} />
    </div>
  );
}
