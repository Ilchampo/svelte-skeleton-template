import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';

import LocaleSelector from './LocaleSelector.svelte';

describe('<LocaleSelect /> component', () => {
	it('Render component correctly', () => {
		render(LocaleSelector);

		expect(screen.getByTestId('btn-locale-id')).toBeDefined();
		expect(screen.getByTestId('locale-name-id')).toBeDefined();
		expect(screen.getByText('en')).toBeDefined();
	});

	it('Change locale on click', async () => {
		render(LocaleSelector);

		const btn = screen.getByTestId('btn-locale-id');

		expect(screen.getByText('en')).toBeDefined();
		await fireEvent.click(btn);
		expect(screen.getByText('es')).toBeDefined();
	});
});
