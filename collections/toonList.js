var Backbone = require('backbone');
var ToonItem = require('../models/toonItem');

var ToonList = Backbone.Collection.extend({
	model: ToonItem
})

module.exports = ToonList;
