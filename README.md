JaxConf2012-SpringMVC_BackboneJS-Demo
=====================================

Demo application for a presentation at JaxConf 2012 (San Francisco) to show how to integrate SpringMVC and Backbone.js

This application is a single page application around managing contact numbers. You can view contacts, you can add, edit or delete a contact leveraging on a REST API. SpringMVC 3.0.5 has been used to create RESTful webservices and Backbone.js 0.9.2 to build the front-end.

Hibernate 3.2 has been integrated in Spring for ORM and a MySQL database has been adopted in the demo. You can find the ddl to create the 'Contacts' table in 'src/main/resources/sql/contacts.sql'

To launch the app, just run 'mvn jetty:run'

