<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import config from '../config';

	import SectionWrapper from '$lib/components/wrappers/SectionWrapper/SectionWrapper.svelte';
</script>

<SectionWrapper sectionId="home">
	<p>{$t('homepage.title')}</p>
	<p>{config.projectName}</p>
</SectionWrapper>
