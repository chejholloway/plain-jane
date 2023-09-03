module.exports = {
	extends: 'stylelint-config-standard',
	ignoreFiles: [ 'src/pages/**' ],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [ 'tailwind', 'apply', 'variants', 'responsive', 'screen' ]
			}
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null
	}
}
