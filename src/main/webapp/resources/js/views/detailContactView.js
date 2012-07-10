MyApp.Views.DetailContact = Backbone.View.extend({
	
	className: 'wrapper',

	events: {
		"click a.edit": "goToEdit",
		"click a.delete": "goToDelete"
	},

	goToEdit: function(){
		MyApp.app_router.navigate("edit/" + this.model.cid, true);
		return false;
	},

	goToDelete: function(){
		var cid = this.model.cid;

		if (!!MyApp.contactsCollection.getByCid(cid)) {
			MyApp.contactsCollection.getByCid(cid).destroy();
		}

		MyApp.app_router.navigate("list", true);
		return false;
	},


	render: function(){
		var obj = _.extend(this.model.toJSON(), {"contactId" : this.model.cid});
		var template = ich.detailTemplate(obj);

		$('#contact').html(this.$el.html(template));
	}
});
