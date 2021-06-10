import date from 'date-and-time';

export const dateFormatter = () => {
  const now = new Date();
  return date.format(now, 'MMM DD, YYYY');
};
