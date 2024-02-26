<script lang="ts">
	import '../app.postcss';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	import PageWrapper from '$lib/components/wrappers/PageWrapper/PageWrapper.svelte';
	import Navbar from '$lib/components/common/Navbar/Navbar.svelte';

	import navigation from '$lib/constants/navigation';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<PageWrapper pageTitle="Svelte Template">
	<AppShell>
		<svelte:fragment slot="header">
			<Navbar {navigation} />
		</svelte:fragment>
		<slot />
	</AppShell>
</PageWrapper>
