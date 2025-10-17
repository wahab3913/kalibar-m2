const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function formatDate(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
}

export function formatFullDate(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function getMostRecentWeek(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - diff - 7);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return `Week of ${formatDate(monday)} – ${formatDate(
    sunday
  )}, ${monday.getFullYear()}`;
}

export function getPrevious4Weeks(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const startMonday = new Date(today);
  startMonday.setDate(today.getDate() - diff - 28);

  const endSunday = new Date(today);
  endSunday.setDate(today.getDate() - diff - 1);

  return `Reviewing Data: ${formatFullDate(startMonday)} – ${formatFullDate(
    endSunday
  )}`;
}

export function getQuarterPeriod(): string {
  const today = new Date();
  const currentQuarter = Math.floor(today.getMonth() / 3);
  const quarterStartMonth = currentQuarter * 3;

  const quarterStart = new Date(today.getFullYear(), quarterStartMonth, 1);
  const quarterEnd = new Date(today.getFullYear(), quarterStartMonth + 3, 0);

  return `Quarter ${currentQuarter + 1}: ${formatFullDate(
    quarterStart
  )} – ${formatFullDate(quarterEnd)}`;
}
