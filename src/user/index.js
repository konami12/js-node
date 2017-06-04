import page   from "page";
import title  from "title";
import empty  from "empty-element";
import template from "./template";
import agent from "superagent";

page("/user/:username", dataUser,function(contexto){
	var main = document.getElementById("main-container");
	title(`Platzigram  - ${contexto.params.username}`);
	empty(main).appendChild(template(contexto.params.user));
});

function dataUser(contexto, next)
{
	fetch("/api/database/" + contexto.params.username)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		let request          = data;
		contexto.params.user = request.data;
		next();
	})
	.catch(function(error){
		console.log("Error => %O " + error);
	});
}