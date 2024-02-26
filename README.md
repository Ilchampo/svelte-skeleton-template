![Skeleton Dev](https://user-images.githubusercontent.com/1509726/199282306-7454adcb-b765-4618-8438-67655a7dee47.png)

# Svelte Skeleton Template

- **Version:** 1.0.0
- **Last Updated:** 25 Feb 2024
- **Author:** Pablo Beltran

## About

The Svelte Skeleton Template is a comprehensive project scaffold designed for web applications utilizing SvelteKit alongside the versatile component library [Skeleton](https://www.skeleton.dev/). This template is equipped with commonly used components across various projects, streamlining development and promoting consistency.

## Installation

To get started, follow these steps:

1. Install the project dependencies by running:

   ```bash
   npm install
   ```

2. Launch the development server with:

   ```bash
   npm run dev
   ```

3. For production deployment, build the application using:
   ```bash
   npm run build
   ```

Before pushing changes to the main branch, it is recommended to run code formatting and linting:

```bash
npm run format && npm run lint
```

## Customization

Tailoring the application's color palette is made simple through the `custom_theme.ts` file. Refer to the [Skeleton Theme Generator](https://www.skeleton.dev/docs/generator) to create a custom theme tailored to your project's aesthetic requirements.

### SVG Icons

The template includes the `SvgIcon.svelte` component, designed to effortlessly render SVG icons within your application. This component streamlines the process of incorporating scalable vector graphics into your project, offering flexibility and ease of use.

#### Implementation Details

The `SvgIcon.svelte` component leverages a structured approach by storing essential icon metadata within the `src/lib/constants/icons.ts` file. This file serves as a centralized repository, containing an object with keys representing individual icons and their respective `viewBox` and `path` attributes. For instance:

```typescript
export const icons: { [key: string]: IIcon } = {
	user: {
		viewBox: 'view_box_of_svg_icon',
		path: 'path_of_svg_icon',
	},
};
```

To further streamline the integration process, consider utilizing reputable icon libraries such as [Font Awesome Icons](https://fontawesome.com/search?m=free&o=r), where a vast array of high-quality icons are readily available for use.

#### Rendering Icons

Integrating icons into your application is straightforward. Simply import the `SvgIcon` component and specify the desired icon using the `name` prop, as illustrated below:

```svelte
<script lang="ts">
	import SvgIcons from '$lib/components/common/SvgIcon/SvgIcon.svelte';
</script>

<SvgIcons name="user" fill="fill-white" width="w-20" height="h-20" />
```

By providing the `name` prop with the corresponding icon identifier, you seamlessly incorporate SVG icons into your project, enhancing its visual appeal and user experience.

## Internationalization with i18n

The Svelte Skeleton Template offers robust support for internationalization (i18n), seamlessly integrated for a multilingual user experience. Leveraging native support, this implementation utilizes Svelte stores for efficient management.

### Getting Started with i18n

1. Ensure the correct translation keys are defined in `/src/lib/i18n/translations.ts`. Each locale is represented within an object, containing respective translation keys and values.

   Example:

   ```typescript
   const translations: Record<string, Record<string, string>> = {
   	// English locale
   	en: {
   		'homepage.title': 'Svelte template for web pages',
   		'homepage.replace': 'Replace {{this}}!',
   	},
   	// Spanish locale
   	es: {
   		'homepage.title': 'Plantilla de Svelte para páginas web',
   		'homepage.replace': 'Reemplaza {{this}}!',
   	},
   };
   ```

2. Utilize translations within your Svelte components by importing the `t` function.

   Example:

   ```svelte
   <script lang="ts">
   	import { t } from '$lib/i18n/i18n';
   </script>

   <p>{$t('homepage.title')}</p><p>{$t('homepage.replace', { this: 'Mark' })}</p>
   ```

   Here, `$t('translation.key')` accesses the desired translation. To inject dynamic values, provide an object with corresponding keys and values.
