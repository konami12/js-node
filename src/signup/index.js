var page     = require("page");
var template = require("./template");//invoco el template
var empty    = require("empty-element");//permite vaciar el contendeor padre.


page("/signup", function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram | Signup ::.";
	empty(main).appendChild(template);
});
page();