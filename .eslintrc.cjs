/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:svelte/recommended',
		'prettier'
	],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['node_modules/', '.svelte-kit/', '/build', '/package'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'@typescript-eslint/no-floating-promises': 'off' // $: syntax
			}
		}
	],
	parserOptions: {
		project: './tsconfig.eslint.json',
		sourceType: 'module',
		ecmaVersion: 2024,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2024: true,
		node: true
	}
};
