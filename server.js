//se llama la libreras express
var express = require("express");
var app     = express();

//======================================================//

//se indica que se utilizara un procesador para las vistas 
app.set("view engine", "pug");

//======================================================//

//se le indica los archivos staticos
app.use(express.static("./public"));

//=========-=============================================//

//se indica la ruta que se esta inciando
app.get("/", function(request, response){

	//pasando valores al template de pug 
	response.render("index", {title: ".:: Platzigram ::."});
});

app.get("/signup", function(request, response){
	response.render("index", {title: ".:: Platzigram | Signup ::."});
});

app.get("/signin", function(request, response){
	response.render("index", {title: ".:: Platzigram | Signin ::."});
});

app.get("/api/database", function(request, response){

	var pictures = [
				       {user   : {
				       		  		username : "Konami12",
				       		  		avatar   : "avatar.jpg"
		   	  		            },
		   	  		    url   : 'office.jpg',
		   	  		    date  : new Date().getTime(),
		   	  		    likes : 0,
		   	  		    liked : false},
				       {user   : {
				       		  		username : "Konami12",
				       		  		avatar   : "avatar.jpg"
		   	  		            },
		   	  		    url   : 'hulk.jpg', 
		   	  		    date  :  new Date().setDate(new Date().getDate() - 10),
		   	  		    likes : 24,
		   	  		    liked : false},				       		 
				   ];


	setTimeout(function(){
		response.send(pictures);
	}, 2000);

});




//se lanza el servidor web
app.listen(3000, function(err){
	//se verifica si existe un error 
	if (err)
	{
		console.log("Ah surgido un error . . . ");
		process.exit(1);
		return;
	}
	console.log("Success : el servidor esta en el puerto 3000");
});