var page     = require("page");
var template = require("./template");//invoco el template
var empty    = require("empty-element");//vacia los elementos pero domenos usar la funcionalidad nativa de JS 





page("/signin", function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram | Signin ::.";
	empty(main).appendChild(template);
});
page();