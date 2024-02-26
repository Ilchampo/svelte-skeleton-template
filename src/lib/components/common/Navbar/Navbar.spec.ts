import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import Navbar from './Navbar.svelte';
import { navigationMock } from '$lib/utils/__mocks__/navigationMock';

describe('<Navbar /> component', () => {
	it('Render component correctly', () => {
		render(Navbar, { props: { navigation: navigationMock } });

		expect(screen.getByText('Test title 1')).toBeDefined();
		expect(screen.getByText('Test title 2')).toBeDefined();
		expect(screen.getByText('Test title 3')).toBeDefined();
		expect(screen.getByText('Test title 4')).toBeDefined();
	});

	it('Integration with child component', () => {
		render(Navbar, { props: { navigation: navigationMock } });
		expect(screen.getByTestId('locale-name-id')).toBeDefined();
		expect(screen.getByText('en')).toBeDefined();
	});
});
