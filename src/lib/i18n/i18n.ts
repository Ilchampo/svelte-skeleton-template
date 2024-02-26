import { derived, writable } from 'svelte/store';
import translations from './translations';

export const locale = writable('en');
export const locales = Object.keys(translations);

function translate(locale: string, key: string, vars: Record<string, string>): string {
	if (key.length < 1 || locale.length < 1) {
		return key;
	}

	let text = translations[locale][key];

	if (!text || text.length < 1) {
		return key;
	}

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key: string, vars = {}) =>
			translate($locale, key, vars)
);
