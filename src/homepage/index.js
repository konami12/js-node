var page     = require("page");
var template = require("./template");//invoco el template
var empty    = require("empty-element");//vacia los elementos pero domenos usar la funcionalidad nativa de JS 

page("/", function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram ::.";
	main.innerHTML     = "";
	var date           = new Date();


	var pictures = [
				       {user   : {
				       		  		username : "Konami12",
				       		  		avatar   : "avatar.jpg"
		   	  		            },
		   	  		    url   : 'office.jpg',
		   	  		    date  : new Date(),
		   	  		    likes : 10,
		   	  		    liked : true},
				       {user   : {
				       		  		username : "Konami12",
				       		  		avatar   : "avatar.jpg"
		   	  		            },
		   	  		    url   : 'hulk.jpg', 
		   	  		    date  : date.setDate(date.getDate() - 10),
		   	  		    likes : 24,
		   	  		    liked : false},				       		 
				   ];

	main.appendChild(template(pictures));
});
page();