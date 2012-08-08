MyApp.Routers.AppRouter = Backbone.Router.extend({
	routes : {
		"" : "index",
		"list" : "listContacts",
		"list/:cid" : "detailContact",
		"edit/:cid" : "editContact",
		"add" : "newContact",
		"*other" : "fourOfour"
	},

	index : function() {
		MyApp.enabled = true;
		this.hideLoader();

		$('.page').hide();
		$('#index').show();
		MyApp.indexContact = new MyApp.Views.IndexContact();
	},
	
	listContacts : function() {
		this.redirect();
		
		$('.page').hide();
		$('#list').show();
		MyApp.listContacts = new MyApp.Views.ListContacts({model: MyApp.contactsCollection});
	},

	editContact: function(cId){
		this.redirect();

		$('.page').hide();
		$('#editContact').show();
		
		var singleModel = MyApp.contactsCollection.getByCid(cId);
		new MyApp.Views.EditDetailContact({model: singleModel}).render();
	},

	newContact : function() {
		this.redirect();

		$('.page').hide();
		$('#new').show();
		
		new MyApp.Views.NewContact({
			model: new MyApp.Models.Contact
		}).render();
	},

	detailContact : function(cId) {
		this.redirect();

		$('.page').hide();
		$('#contact').show();
		
		var singleModel = MyApp.contactsCollection.getByCid(cId);
		new MyApp.Views.DetailContact({
			model: singleModel
		}).render();
	},

	fourOfour : function() {
		// TODO
	},

	redirect: function(){
		if (!MyApp.enabled) { window.location.href = window.location.origin;} 
	},

	hideLoader: function(){
		MyApp.loaderImg.hide();
		$(document).trigger("FEED_READER_APP_READY");
	}
});
