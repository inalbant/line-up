export function formatCurrency(
  amount: number,
  locale = "en-GB",
  currency = "GBP"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}
