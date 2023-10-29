import { expect, test } from "vitest";
import { formatCurrency } from "..";

test("formatCurrency returns correct values", () => {
  const result = formatCurrency(3);
  expect(result).toBe("£3.00");

  const result2 = formatCurrency(120.2359, "en-US", "USD");
  expect(result2).toBe("$120.24");
});
