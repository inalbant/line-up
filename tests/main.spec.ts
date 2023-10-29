import { test, expect } from "@playwright/test";

const mockData = {
  data: {
    id: 21813,
    eventId: 151,
    startDate: "2024-04-17",
    startTime: "19:30:00",
    endDate: null,
    endTime: null,
    tags: [],
    timeZone: "Europe/London",
    pricing: [
      {
        id: 34834,
        capacity: 200,
        capacityRemaining: 200,
        priceBand: {
          id: 34834,
          name: "Band A",
          description: "Band A Description",
          color: "#e49208",
          variants: [
            {
              id: 16756,
              name: "Adult",
              description: "An Adult Ticket Variant",
              price: {
                id: 448329,
                value: 90.5,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448338,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
            {
              id: 16757,
              name: "Child",
              description: "A Child Ticket Variant",
              price: {
                id: 448332,
                value: 40.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448341,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
            {
              id: 16758,
              name: "Access",
              description: "An Access Ticket Variant",
              price: {
                id: 448335,
                value: 25.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448344,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
          ],
        },
      },
      {
        id: 34835,
        capacity: 200,
        capacityRemaining: 200,
        priceBand: {
          id: 34835,
          name: "Band B",
          description: "Band B Description",
          color: "#102052",
          variants: [
            {
              id: 16756,
              name: "Adult",
              description: "An Adult Ticket Variant",
              price: {
                id: 448330,
                value: 69.95,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448339,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
            {
              id: 16757,
              name: "Child",
              description: "A Child Ticket Variant",
              price: {
                id: 448333,
                value: 30.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448342,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
            {
              id: 16758,
              name: "Access",
              description: "An Access Ticket Variant",
              price: {
                id: 448336,
                value: 25.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448345,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
          ],
        },
      },
      {
        id: 34836,
        capacity: 100,
        capacityRemaining: 100,
        priceBand: {
          id: 34836,
          name: "Band C",
          description: "Band C Description",
          color: "#046619",
          variants: [
            {
              id: 16756,
              name: "Adult",
              description: "An Adult Ticket Variant",
              price: {
                id: 448331,
                value: 35.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448340,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
            {
              id: 16757,
              name: "Child",
              description: "A Child Ticket Variant",
              price: {
                id: 448334,
                value: 15.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448343,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
            {
              id: 16758,
              name: "Access",
              description: "An Access Ticket Variant",
              price: {
                id: 448337,
                value: 25.0,
              },
              adjusters: [
                {
                  id: 80,
                  name: "Booking Fee",
                  description: "Outside booking fee",
                  external: true,
                  rateType: "FIXED_RATE",
                  rate: 1.5,
                  price: {
                    id: 448346,
                    value: 1.5,
                  },
                },
              ],
              discount: null,
            },
          ],
        },
      },
    ],
    totalCapacity: 500,
    totalCapacityRemaining: 500,
    venuePlanId: 179,
  },
};

test("mocks a fruit and doesn't call api", async ({ page }) => {
  await page.route(
    "https://api.line-up.tickets/api/performance/21813/",
    async (route) => {
      const json = mockData;
      await route.fulfill({ json });
    }
  );

  await page.goto("http://localhost:5173");

  await expect(page.getByText("Band A ticket description")).toBeVisible();
});
