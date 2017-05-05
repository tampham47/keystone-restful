/**
 * Greenbot 2016
 * Author Tw
 */

var keystone = require('keystone');

/**
 * Setting Model
 * ==================
 */

var Setting = new keystone.List('Setting', {
	label: 'Setting'
});

Setting.add({
	key: { type: String, required: true, initial: true },
	value: { type: String, required: true, initial: true },
	name: { type: String, required: true, initial: true }
});

Setting.defaultSort = 'key';
Setting.defaultColumns = 'key|20%, name|30%, value|30%,';
Setting.register();
