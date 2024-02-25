<script lang="ts">
	export let pageTitle: string;
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>
<div class="page-wrapper" data-testid="page-wrapper-id">
	<slot />
</div>

<style>
	.page-wrapper {
		@apply flex flex-col w-screen h-screen;
	}
</style>
