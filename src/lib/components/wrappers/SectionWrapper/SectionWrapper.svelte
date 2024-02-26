<script lang="ts">
	export let sectionId: string;
	export let backgroundColor = '';
	export let backgroundImage = '';
</script>

<div class="section-wrapper {backgroundColor}" style="background-image: url('{backgroundImage}')">
	<section class="section-container" id={sectionId} data-testid="section-id">
		<slot />
	</section>
</div>

<style>
	.section-wrapper {
		@apply relative bg-cover bg-center;
	}

	.section-container {
		@apply relative z-10 py-4 px-8 lg:py-24 lg:px-48 md:py-12 md:px-24;
	}
</style>
