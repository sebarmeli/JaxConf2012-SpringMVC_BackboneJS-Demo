MyApp.Views.SingleContact = Backbone.View.extend({
	tagName : 'li',
	
	className:'item',

	initialize: function(){
		this.model.view = this;
	},

	render: function(e){
		var obj = _.extend(this.model.toJSON(), {"contactId" : this.model.cid});
		var template = ich.contactTemplate(obj);

		this.$el.html(template);
		return this;
	}
});
