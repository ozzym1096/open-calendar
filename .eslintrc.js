module.exports = {
	extends: 'problems',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'indent': ['warn', 'tab'],
		'no-console': ['warn', {
			'allow': [
				'error'
			]
		}],
		'no-mixed-spaces-and-tabs': 'warn',
		'no-secrets/no-secrets': [
			'error',
			{
				'additionalRegexes': require('eslint-plugin-no-secrets/regexes.js')
			}
		]
	},
	plugins: [
		'svelte3',
		'no-secrets'
	],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/ignore-styles': () => true,
	},
};
