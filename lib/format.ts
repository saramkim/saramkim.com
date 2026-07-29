const formatters = new Map<string, Intl.DateTimeFormat>();

export function formatContentDate(date: string, locale = 'ko'): string {
  const formatter =
    formatters.get(locale) ??
    new Intl.DateTimeFormat(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: locale === 'ko' ? 'long' : 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });

  formatters.set(locale, formatter);
  return formatter.format(new Date(`${date}T00:00:00Z`));
}

export function newestDate(dates: Array<string | undefined>): string | undefined {
  return dates.filter((date): date is string => Boolean(date)).sort((a, b) => b.localeCompare(a))[0];
}
