var Backbone = require('backbone');

var ToonItem = Backbone.Model.extend({
	initialize: function(){
},
defaults: {
	"id": null,
	"title": null,
	"correct": null,
	"choices": [],
	"url": null
}
})
module.exports = ToonItem;
