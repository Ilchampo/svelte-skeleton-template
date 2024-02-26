<script lang="ts">
	import SvgIcon from '../SvgIcon/SvgIcon.svelte';
	import { locale } from '$lib/i18n/i18n';

	const selectLocale = (): void => {
		locale.set($locale === 'en' ? 'es' : 'en');
	};
</script>

<button
	class="btn hover:variant-soft-primary"
	on:click={() => selectLocale()}
	data-testid="btn-locale-id"
>
	<SvgIcon name="globe" />
	<span data-testid="locale-name-id">{$locale}</span>
</button>
