var page     = require("page");
var template = require("./template");//invoco el template
var empty    = require("empty-element");//vacia los elementos pero domenos usar la funcionalidad nativa de JS 

page("/", function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram ::.";
	main.innerHTML     = "";

	var pictures = [
				       {user   : {
				       		  		username : "Konami12",
				       		  		avatar   : "avatar.jpg"
		   	  		            },
		   	  		    url   : 'office.jpg',
		   	  		    likes : 1024,
		   	  		    liked : true},
				       {user   : {
				       		  		username : "Konami12",
				       		  		avatar   : "avatar.jpg"
		   	  		            },
		   	  		    url   : 'office.jpg',
		   	  		    likes : 1024,
		   	  		    liked : false},				       		 
				   ];

	main.appendChild(template(pictures));
});
page();