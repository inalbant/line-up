export type PerformanceType = {
  data: {
    id: number;
    eventId: number;
    startDate: string;
    startTime: string;
    endDate: string | null;
    endTime: string | null;
    tags: [
      {
        id: number;
        name: string;
      }
    ];
    timeZone: string;
    totalCapacity: number;
    totalCapacityRemaining: number;
    venuePlanId: number;
    pricing: [
      {
        id: number;
        capacity: number;
        capacityRemaining: number;
        priceBand: {
          id: number;
          name: string;
          description: string;
          color: string;
          variants: [
            {
              id: number;
              name: string;
              description: string;
              price: {
                id: number;
                value: number;
              };
              adjusters: [
                {
                  id: number;
                  name: string;
                  description: string;
                  external: true;
                  rateType: string;
                  rate: number;
                  price: {
                    id: number;
                    value: number;
                  };
                }
              ];
              discount: {
                id: number;
                name: string;
              };
            }
          ];
        };
      }
    ];
  };
};
