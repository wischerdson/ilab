// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-07-07',

	components: false,

	app: {
		rootId: 'app',
		buildAssetsDir: process.env.NODE_ENV === 'production' ? '/assets/' : void 0,
	},

	imports: {
		autoImport: false
	},

	features: {
		inlineStyles: false
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},

	css: [
		'~/assets/scss/fonts.scss',
		'~/assets/scss/reset.scss',
		'~/assets/scss/tailwind.css'
	]
})
