MyApp.Views.NewContact = Backbone.View.extend({

  className: 'wrapper',

  initialize: function(){
    _.bindAll(this, 'save');
  },

  events: {
    "click a.save": "save"
  },

  render: function(){
    var template = ich.newContactTemplate(this.model.toJSON());

    $('#new').html(this.$el.html(template));
    return this;
  },

  save: function(e){
    var self = this;
    self.model.set({
      firstname: self.$('.firstname').val(),
      lastname: self.$('.lastname').val(),
      telephone: self.$('.telephone').val()
    });

    MyApp.contactsCollection.create(self.model);
  },

  close: function(){
    this.$el.unbind();
    this.$el.hide();
  }
});
