import { ExperienceData } from "./types";

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

export function sortExperienceByTime(
  experienceArray: ExperienceData[],
): ExperienceData[] {
  return experienceArray.sort((a, b) => {
    const aStart = a.startTime.seconds * 1000;
    const bStart = b.startTime.seconds * 1000;

    const aEnd = a.endTime
      ? a.endTime.seconds * 1000
      : Number.POSITIVE_INFINITY; // Use positive infinity for ongoing items

    const bEnd = b.endTime
      ? b.endTime.seconds * 1000
      : Number.POSITIVE_INFINITY;

    if (aStart === bStart) {
      return bEnd - aEnd; // Sort by endTime in descending order if start dates are the same
    }

    return bStart - aStart; // Sort by startTime in descending order
  });
}
