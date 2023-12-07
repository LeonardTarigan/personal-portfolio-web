export function transformStringToDate(dateString: string): Date | null {
  const monthsMap: { [key: string]: number } = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const [monthStr, yearStr] = dateString.split(" ");

  if (monthsMap.hasOwnProperty(monthStr)) {
    const month = monthsMap[monthStr];
    const year = parseInt(yearStr, 10);

    return new Date(year, month, 1);
  }

  return null;
}

export function convertTimestampToMonthYear(timestampSeconds: number): string {
  const milliseconds = timestampSeconds * 1000;
  const date = new Date(milliseconds);

  const monthsMap: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthsMap[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${month} ${year}`;
}
