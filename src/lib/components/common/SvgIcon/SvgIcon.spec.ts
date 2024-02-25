import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import SvgIcon from './SvgIcon.svelte';

describe('<SvgIcon /> component', () => {
	it('Render the component properly', () => {
		render(SvgIcon, { props: { title: 'User', name: 'user' } });

		expect(screen.queryByText('User')).toBeDefined();
		expect(screen.getByTestId('svg-icon-id')).toBeDefined();
	});
});
