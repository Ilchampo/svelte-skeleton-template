<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import config from '../config';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<p>{$t('homepage.title')}</p>
	<p>{config.projectName}</p>
</div>
