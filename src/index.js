var page = require("page");//permitira armar la navegacion de nuestro sitio
var main = document.getElementById("main-container");


//construyendo las rutas 
page("/", function(contexto, next){
	main.innerHTML = "<a href='/signup' >Signups</a>";	
});

page("/signup", function(contexto, next){
	main.innerHTML = "<a href='/' >Home > </a><a href='/signup' >Signup</a>";
});

page();