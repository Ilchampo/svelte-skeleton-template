import { derived, writable } from 'svelte/store';
import translations from './translations';

export const locale = writable('en');
export const locales = Object.keys(translations);

function translate(locale: string, key: string, vars: Record<string, string>) {
	if (key.length < 1 || locale.length < 1) {
		throw new Error('Invalid key or locale');
	}

	let text = translations[locale][key];

	if (!text || text.length < 1) {
		throw new Error(`No translations for ${locale}.${key}`);
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
