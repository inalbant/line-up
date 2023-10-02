import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TableItem } from "../molecules";
import { TotalPrice } from "../atoms";
import { formatDateAndTime } from "../utils/formatDateAndTime";

export function Table() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["eventData"],
    queryFn: async () =>
      await ky("https://api.line-up.tickets/api/performance/21813/", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }).json(),
    select: (response) => response.data,
  });

  if (isLoading) return "Loading...";

  if (error instanceof Error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Event id: {data.eventId} -{" "}
        {formatDateAndTime(data.startDate, data.startTime)}
      </h1>
      <TotalPrice />
      <div className="divide-y-2 divide-blue-200">
        {data.pricing.map(
          (ticketBand: {
            priceBand: {
              variants: {
                name: string;
                description: string;
                price: { value: number };
                adjusters: { rate: number }[];
              }[];
              name: string;
            };
          }) =>
            ticketBand.priceBand.variants.map((variant, i: number) => (
              <TableItem
                key={`${ticketBand.priceBand.name} ${i}`}
                ticketTitle={`${ticketBand.priceBand.name} - ${variant.name}`}
                ticketDescription={variant.description}
                ticketPrice={variant.price.value}
                bookingFee={variant.adjusters[0].rate}
              />
            ))
        )}
      </div>

      <ReactQueryDevtools />
    </div>
  );
}
