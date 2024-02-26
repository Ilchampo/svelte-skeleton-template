<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	import LocaleSelector from '$lib/components/common/LocaleSelector/LocaleSelector.svelte';
	import type { INavItem } from '$lib/interfaces/navItem.interface';
	import config from '../../../../config';

	$: renderLanguage = config.i18n;

	export let navigation: INavItem[];
</script>

<AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<div class="navbar_links" data-testid="navbar-items-id">
		{#each navigation as navigate, i}
			<button on:click={() => goto(navigate.linkTo)}><span>{$t(navigate.title)}</span></button>
			{#if i !== navigation.length - 1}
				<span class="divider-vertical h-4 m-0" />
			{/if}
		{/each}
	</div>
	<svelte:fragment slot="trail">
		{#if renderLanguage === 'enabled'}
			<LocaleSelector />
		{/if}
	</svelte:fragment>
</AppBar>

<style>
	.navbar_links {
		@apply flex w-full justify-center items-center gap-8;
	}
</style>
