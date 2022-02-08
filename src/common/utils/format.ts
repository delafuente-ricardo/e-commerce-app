export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatCurrency = (value: number): string => {
  // TODO: Temporary helper; can be replaced with i18n!
  return `¥ ${value.toLocaleString()}`;
};
