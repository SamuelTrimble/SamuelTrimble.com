module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/recommended'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'eol-last': [
			'error',
			'always'
		],
		'linebreak-style': [
			'warn',
			'windows'
		],
		'semi': [
			'error',
			'always'
		],
		'vue/html-indent': [
			'error',
			'tab'
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				'singleline': {
					'max': 10
				},
				'multiline': {
					'max': 1
				}
			}
		],
		'vue/singleline-html-element-content-newline': 0,
		'vue/html-self-closing': 0,
		'vue/attribute-hyphenation': 0
	}
};
