import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import SectionWrapper from './SectionWrapper.svelte';

describe('<SectionWrapper /> component', () => {
	it('Render the component properly', () => {
		render(SectionWrapper, { props: { sectionId: 'home' } });

		expect(screen.getByTestId('section-id')).toBeDefined();
	});
});
