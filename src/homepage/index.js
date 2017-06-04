var page       = require("page");
var template   = require("./template");//invoco el template
var header     = require('../header');
var empty      = require("empty-element");//vacia los elementos pero domenos usar la funcionalidad nativa de JS 
var superagent = require("superagent");
var axios      = require("axios")


page("/", header, loadPictureFetch, function(contexto, next){
	var main           = document.getElementById("main-container");
	var title          = document.getElementsByTagName("title");
	title[0].innerHTML = ".:: Platzigram ::.";
	main.innerHTML     = "";
	empty(main).appendChild(template(contexto.pictures.data));
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

/**
 * Esta funcion permite un llada ajax utilizando fecth
 * @param  Json   contexto Permite pasar valores entre las funciones 
 * @param  {Function} next llama al siguiente meddilwere
 * @return void.
 */
function loadPictureFetch(contexto, next)
{
	fetch("/api/database/all")
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		contexto.pictures = data;
		next();
	})
	.catch(function(error){
		console.log("Error => %O " + error);
	});
}


async function asyncLoad(contexto, next)
{
	try
	{
		contexto.pictures = await fetch("/api/database").then(res => res.json());
		next();
	}	
	catch(error)
	{
		console.log("Error => %O" + error);
	}
}

page();