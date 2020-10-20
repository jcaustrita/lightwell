module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'react/display-name': 'off',
		'react/no-children-prop': 'off',
		'react/jsx-no-target-blank': 'off',
		'react/no-unescaped-entities': 'off',
		// ignore indenting
		'indent': ['warn', 'tab', { SwitchCase: 1 }],
		// single quotes
		'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
		// allow tabs
		'no-tabs': 'off',
		// keyword spacing: if() {}
		'keyword-spacing': 'off',
		// ignore padded blocks
		'padded-blocks': 'off',
		// allow literal throws
		'no-throw-literal': 'off',
		// allow async-await
		'generator-star-spacing': 'off',
		// debuggers
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	overrides: [
		{
			'files': ['spec.js', '*.spec.js'],
			'env': {
				jest: true
			}
		}
	],
	parser: 'babel-eslint'
}
