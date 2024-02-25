import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const custom_theme: CustomThemeConfig = {
	name: 'custom_theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #11274c
		'--color-primary-50': '219 223 228', // #dbdfe4
		'--color-primary-100': '207 212 219', // #cfd4db
		'--color-primary-200': '196 201 210', // #c4c9d2
		'--color-primary-300': '160 169 183', // #a0a9b7
		'--color-primary-400': '88 104 130', // #586882
		'--color-primary-500': '17 39 76', // #11274c
		'--color-primary-600': '15 35 68', // #0f2344
		'--color-primary-700': '13 29 57', // #0d1d39
		'--color-primary-800': '10 23 46', // #0a172e
		'--color-primary-900': '8 19 37', // #081325
		// secondary | #51b2e6
		'--color-secondary-50': '229 243 251', // #e5f3fb
		'--color-secondary-100': '220 240 250', // #dcf0fa
		'--color-secondary-200': '212 236 249', // #d4ecf9
		'--color-secondary-300': '185 224 245', // #b9e0f5
		'--color-secondary-400': '133 201 238', // #85c9ee
		'--color-secondary-500': '81 178 230', // #51b2e6
		'--color-secondary-600': '73 160 207', // #49a0cf
		'--color-secondary-700': '61 134 173', // #3d86ad
		'--color-secondary-800': '49 107 138', // #316b8a
		'--color-secondary-900': '40 87 113', // #285771
		// tertiary | #ffadff
		'--color-tertiary-50': '255 243 255', // #fff3ff
		'--color-tertiary-100': '255 239 255', // #ffefff
		'--color-tertiary-200': '255 235 255', // #ffebff
		'--color-tertiary-300': '255 222 255', // #ffdeff
		'--color-tertiary-400': '255 198 255', // #ffc6ff
		'--color-tertiary-500': '255 173 255', // #ffadff
		'--color-tertiary-600': '230 156 230', // #e69ce6
		'--color-tertiary-700': '191 130 191', // #bf82bf
		'--color-tertiary-800': '153 104 153', // #996899
		'--color-tertiary-900': '125 85 125', // #7d557d
		// success | #3cc88e
		'--color-success-50': '226 247 238', // #e2f7ee
		'--color-success-100': '216 244 232', // #d8f4e8
		'--color-success-200': '206 241 227', // #cef1e3
		'--color-success-300': '177 233 210', // #b1e9d2
		'--color-success-400': '119 217 176', // #77d9b0
		'--color-success-500': '60 200 142', // #3cc88e
		'--color-success-600': '54 180 128', // #36b480
		'--color-success-700': '45 150 107', // #2d966b
		'--color-success-800': '36 120 85', // #247855
		'--color-success-900': '29 98 70', // #1d6246
		// warning | #FE5D26
		'--color-warning-50': '255 231 222', // #ffe7de
		'--color-warning-100': '255 223 212', // #ffdfd4
		'--color-warning-200': '255 215 201', // #ffd7c9
		'--color-warning-300': '255 190 168', // #ffbea8
		'--color-warning-400': '254 142 103', // #fe8e67
		'--color-warning-500': '254 93 38', // #FE5D26
		'--color-warning-600': '229 84 34', // #e55422
		'--color-warning-700': '191 70 29', // #bf461d
		'--color-warning-800': '152 56 23', // #983817
		'--color-warning-900': '124 46 19', // #7c2e13
		// error | #D7263D
		'--color-error-50': '249 222 226', // #f9dee2
		'--color-error-100': '247 212 216', // #f7d4d8
		'--color-error-200': '245 201 207', // #f5c9cf
		'--color-error-300': '239 168 177', // #efa8b1
		'--color-error-400': '227 103 119', // #e36777
		'--color-error-500': '215 38 61', // #D7263D
		'--color-error-600': '194 34 55', // #c22237
		'--color-error-700': '161 29 46', // #a11d2e
		'--color-error-800': '129 23 37', // #811725
		'--color-error-900': '105 19 30', // #69131e
		// surface | #403154
		'--color-surface-50': '226 224 229', // #e2e0e5
		'--color-surface-100': '217 214 221', // #d9d6dd
		'--color-surface-200': '207 204 212', // #cfccd4
		'--color-surface-300': '179 173 187', // #b3adbb
		'--color-surface-400': '121 111 135', // #796f87
		'--color-surface-500': '64 49 84', // #403154
		'--color-surface-600': '58 44 76', // #3a2c4c
		'--color-surface-700': '48 37 63', // #30253f
		'--color-surface-800': '38 29 50', // #261d32
		'--color-surface-900': '31 24 41', // #1f1829
	},
};
