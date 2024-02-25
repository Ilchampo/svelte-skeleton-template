import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import PageWrapper from './PageWrapper.svelte';

describe('<PageWrapper /> component', () => {
	it('Render the component properly', () => {
		render(PageWrapper, { props: { pageTitle: 'page-title' } });

		expect(screen.getByTestId('page-wrapper-id')).toBeDefined();
	});
});
