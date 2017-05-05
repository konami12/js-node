var page       = require("page");
var template   = require("./template");//invoco el template
var header     = require('../header');
var empty      = require("empty-element");//vacia los elementos pero domenos usar la funcionalidad nativa de JS 
var superagent = require("superagent");


page("/", header, loadPicture, function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram ::.";
	main.innerHTML     = "";
	empty(main).appendChild(template(contexto.pictures));
});



/**
 * Esta funcion permite un llada ajax 
 * @param  Json   contexto Permite pasar valores entre las funciones 
 * @param  {Function} next llama al siguiente meddilwere
 * @return void.
 */
function loadPicture(contexto, next)
{
	superagent
	.get("/api/database")
	.end(function(error, response){
		if (error)
		{
			console.error("Error => %o" + error);
			return false;
		} 
		contexto.pictures =  response.body;
		next();
	});
}


page();