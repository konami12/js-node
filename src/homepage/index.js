var page       = require("page");
var template   = require("./template");//invoco el template
var header     = require('../header');
var empty      = require("empty-element");//vacia los elementos pero domenos usar la funcionalidad nativa de JS 
var superagent = require("superagent");
var axios      = require("axios")


page("/", header, loadPictureAxios, function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram ::.";
	main.innerHTML     = "";
	empty(main).appendChild(template(contexto.pictures));
});



/**
 * Esta funcion permite un llamdaa ajax utilizando superagent
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
			console.log("Error => %o" + error);
			return false;
		} 
		contexto.pictures =  response.body;
		next();
	});
}

/**
 * Esta funcion permite un llada ajax utilizando axios
 * @param  Json   contexto Permite pasar valores entre las funciones 
 * @param  {Function} next llama al siguiente meddilwere
 * @return void.
 */
function loadPictureAxios(contexto, next)
{
	axios
	.get("/api/database")
	.then(function(response){
		contexto.pictures = response.data;
		next();
	})
	.catch(function(error){
		console.log("Error => %O " + error);
	});
}




page();