MyApp.Views.ListContacts = Backbone.View.extend({
	tagName : 'ul',

	initialize: function(){
		var self = this;

		self.$el.empty();
		
		if (_.isEmpty(this.model.models)){
			this.model.fetch({
				success: function(data){
					self.render();
				}
			});
		} else{
			self.render();
		}

	},

	events: {
		"click a.add": "goToAdd"
	},

	goToAdd: function(){
		MyApp.app_router.navigate("add", true);
		return false;
	},
		
	render: function(e){
		var self = this;
		_.each(this.model.models, function(element, index, list){
			self.$el.append(new MyApp.Views.SingleContact({model: element}).render().el);
		});

		$('#list .content').html(this.$el);
	}
});