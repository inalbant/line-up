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
    <div className="flex justify-between py-4 w-full">
      <div className="flex justify-between w-full max-w-lg mr-4">
        <TicketBand title={ticketTitle} description={ticketDescription} />
        <TicketPrice price={ticketPrice} bookingFee={bookingFee} />
      </div>
      <Quantity ticketPrice={ticketPrice} />
    </div>
  );
}
