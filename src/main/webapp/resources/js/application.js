$(function(){
	
	MyApp.loaderImg = $('.loader');
	
	MyApp.app_router = new MyApp.Routers.AppRouter();
	Backbone.history.start();

	MyApp.contactsCollection = new MyApp.Collections.Contacts();
});