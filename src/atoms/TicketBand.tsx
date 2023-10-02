type TicketBandProps = {
  title: string;
  description: string;
};

export function TicketBand({ title, description }: TicketBandProps) {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
