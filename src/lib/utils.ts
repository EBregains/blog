type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export const formatDate = (date: string, style: DateStyle = 'medium', locales = 'en') => {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle: style });
	return formatter.format(new Date(date)) as string;
};
