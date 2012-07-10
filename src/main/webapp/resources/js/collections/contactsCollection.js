MyApp.Collections.Contacts = Backbone.Collection.extend({
	model: MyApp.Models.Contact,
	url: '/list'
});