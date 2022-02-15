export const formatCurrency = (value: number): string => {
  // TODO: Temporary helper; can be replaced with i18n!
  return `¥ ${value.toLocaleString()}`;
};
