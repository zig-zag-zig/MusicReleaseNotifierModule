import { GroupedReleases, Release } from "../models/models";

export const sortReleaseGroupsByDate = (releaseGroups: GroupedReleases, sortReleases: boolean): GroupedReleases => {
  const sortedEntries = Object.entries(releaseGroups)
    .map(([releaseGroupId, releases]) => {
      if (sortReleases) sortReleasesByDate(releases);

      const releaseGroupDate = parseDateToNumber(releases[0]["release-group"]?.date ?? null);
      const oldestReleaseDate = parseDateToNumber(releases[releases.length - 1]?.date);
      const sortKey = releaseGroupDate !== dateTimeMin ? releaseGroupDate : oldestReleaseDate;

      return { releaseGroupId, releases, sortKey };
    })
    .sort((a, b) => b.sortKey - a.sortKey);

  return Object.fromEntries(sortedEntries.map(({ releaseGroupId, releases }) => [releaseGroupId, releases]));
};

export const sortReleasesByDate = (releases: Release[]) => {
  releases.sort((a, b) => {
    const dateA = parseDateToNumber(a.date);
    const dateB = parseDateToNumber(b.date);
    return dateB - dateA;
  });
};

const dateTimeMin = -8640000000000000;

const parseDateToNumber = (dateStr: string | null): number => {
  if (!dateStr?.trim()) return dateTimeMin;

  const parsedDate = new Date(dateStr);
  if (!isNaN(parsedDate.getTime())) {
    return parsedDate.getTime();
  }

  const dateParts = dateStr.split('-');

  if (dateParts.length === 1) dateParts.push('01');

  if (dateParts.length === 2) dateParts.push('01');

  if (dateParts.length !== 3) return dateTimeMin;

  const day = dateParts[2].padStart(2, '0');
  const month = dateParts[1].padStart(2, '0');

  const validDate = new Date(`${dateParts[0]}-${month}-${day}`);

  if (isNaN(validDate.getTime())) {
    console.error("Invalid date:", dateStr);
    return dateTimeMin;
  }

  return validDate.getTime();
};

export const formatDate = (dateStr: string | null): string => {
  const unixTimeStamp = parseDateToNumber(dateStr);
  if (unixTimeStamp === dateTimeMin) return "Unknown date";
  let result = '';
  const date = dateStr?.split('-') ?? [];
  if (date.length > 1) {
    if (date.length === 3) {
      result = date[2].padStart(2, "0") + ".";
    }
    result += date[1].padStart(2, "0") + ".";
  }
  if (date.length > 0) {
    result += date[0];
  }

  return result;
};

export const isFutureDate = (dateString: string | null): boolean => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return parseDateToNumber(dateString) > now.getTime();
};