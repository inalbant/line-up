import { expect, test } from "vitest";
import { formatDateTime } from "..";

test("formatDateTime returns correct output", () => {
  const result = formatDateTime();
  expect(result).toBe("");

  const result2 = formatDateTime("2023-12-03", "13:00");
  expect(result2).toBe("3 December 2023 at 13:00");

  const result3 = formatDateTime("2024-07-18", "20:00");
  expect(result3).toBe("18 July 2024 at 20:00");
});
