// replace the locale slug in a relative URL
// e.g. /en/blog/article-1 → /ja/blog/article-1
export const replaceLocaleInUrl = (path: string, locale: string): string => {
	const [_, _default_locale, ...rest] = path.split('/');
	return `/${[locale, ...rest].join('/')}`;
};
