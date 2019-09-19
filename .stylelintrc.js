module.exports = {
	"extends": "stylelint-config-standard",
	'plugins': [
		'stylelint-order'
	],
	'rules': {
		'declaration-block-no-shorthand-property-overrides': true,
		'indentation': 'tab',
		'order/order': [
			[
				'dollar-variables',
				'custom-properties',
				'declarations',
				'at-rules',
				'rules'
			],
			{
				'unspecified': 'bottom'
			}
		],
		'order/properties-alphabetical-order': true
	}
}