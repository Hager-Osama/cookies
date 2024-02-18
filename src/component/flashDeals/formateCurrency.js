const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});

const FormateCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormateCurrency;
