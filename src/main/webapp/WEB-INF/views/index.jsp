<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My Contacts</title>
		<meta http-equiv="Cache-Control" content="max-age=0">
		<meta http-equiv="Cache-Control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="Expires" content="Tue, 01 Jan 1980 1:00:00 GMT">
		<meta http-equiv="Pragma" content="no-cache">
		<link rel="stylesheet" href='<c:url value="/resources/css/normalize.css"/>' />
		<link rel="stylesheet" href='<c:url value="/resources/css/style.css"/>' />
		<script src='<c:url value="/resources/js/lib/jquery_1.7.1.js" />'></script>
		<script src='<c:url value="/resources/js/lib/underscore_1.3.3.js" />'></script>
		<script src='<c:url value="/resources/js/lib/backbone_0.9.2.js" />'></script>
		<script src='<c:url value="/resources/js/lib/icanhaz.js" />'></script>
		<script src='<c:url value="/resources/js/init.js" />'></script>
		<script src='<c:url value="/resources/js/application.js" />'></script>
		<script src='<c:url value="/resources/js/routers/router.js" />'></script>
		<script src='<c:url value="/resources/js/models/contactModel.js" />'></script>
		<script src='<c:url value="/resources/js/collections/contactsCollection.js" />'></script>
		<script src='<c:url value="/resources/js/views/listContactsView.js" />'></script>
		<script src='<c:url value="/resources/js/views/singleContactView.js" />'></script>
		<script src='<c:url value="/resources/js/views/detailContactView.js" />'></script>
		<script src='<c:url value="/resources/js/views/editDetailContactView.js" />'></script>
		<script src='<c:url value="/resources/js/views/newContactView.js" />'></script>
		<script src='<c:url value="/resources/js/views/indexView.js" />'></script>
	</head>
	<body>
		<div id="preLoad">
		    <div>
		        <img src='<c:url value="/resources/img/loading-image.gif" />' alt="Loading Image" style="width:48px;" />
		        <br/>Loading...
		    </div>
		</div>
		<div id="top">
			<a href="/"><h1>My Contacts</h1></a>
		</div>
		<div id="content">
			<div id="index" class="page">
				<div class="wrapper">
					<div>
						<a class="list" href="/#list">View list of my contacts</a>
					</div>
					<div>
						<a class="add" href="/#add">Add a new contacts</a>
					</div>
					<div class="img">
						<img src='<c:url value="/resources/img/iphone-contacts.jpg" />' width="200" height="200"/>
					</div>
				</div>
			</div>
 			<div id="list" class="page">
 				<a class="add" href="/#add">Add a new contacts</a>
 				<div class="content"></div>
 			</div>
 			<div id="contact" class="page"></div>
 			<div id="editContact" class="page"></div>
 			<div id="new" class="page"></div>
		</div>
		<div id="bottom">
			<p>Spring MVC and Backbone.js integration</p>
		</div>
		
		<script type="text/html" id="contactTemplate">
			<a href="/#list/{{ contactId }}">
				<span class="firstname">{{ firstname }}</span>
				<span class="lastname">{{ lastname }}</span>
			</a>
		</script>
		<script type="text/html" id="detailTemplate">
			<a class="edit" href="/#edit/{{ contactId }}"> Edit </a>
			<div>
				<span> First name: </span>
				<span><b>{{ firstname }}</b></span>
			</div>
			<div>
				<span> Last name: </span>
				<span><b>{{ lastname }}</b></span>
			</div>
			<div>
				<span> Phone Number:</span>
				<span><b>{{ telephone }}</b></span>
			</div>
			<a  class="delete" href="/#delete/{{ contactId }}"> Delete </a>
		</script>
		<script type="text/html" id="editDetailTemplate">
			<div>
				<label> First name: </label>
				<input type="text" value="{{ firstname }}" name="firstname" class="firstname" />
			</div>
			<div>
				<label> Last name: </label>
				<input type="text" value="{{ lastname }}" name="lastname" class="lastname" />
			</div>
			<div>
				<label> Phone Number: </label>
				<input type="text" value="{{ telephone }}" name="telephone" class="telephone" />
			</div>
			<a href="/#list" class="save"> Save </a><br/>
		</script>
		<script type="text/html" id="newContactTemplate">
			<div>
				<span> First name: </span>
				<input type="text" value="" name="firstname" class="firstname"/>
			</div>
			<div>
				<span> Last name: </span>
				<input type="text" value="" name="lastname" class="lastname" />
			</div>
			<div>
				<span> Phone number: </span>
				<input type="text" value="" name="telephone" class="telephone"/>
			</div>
			<a href="/#list" class="save"> Save </a><br/>
		</script>
	</body>
</html>