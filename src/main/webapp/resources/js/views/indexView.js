MyApp.Views.IndexContact = Backbone.View.extend({
	
	id: 'index',

	events: {
		"click a.list": "goToList",
		"click a.add": "goToAdd"
	},

	goToList: function(){
		MyApp.app_router.navigate("list", true);
		return false;
	},

	goToAdd: function(){
		MyApp.app_router.navigate("add", true);
		return false;
	},

});
