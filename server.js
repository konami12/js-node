//se llama la libreras express
var express = require("express");
var app     = express();


//se indica la ruta que se esta inciando
app.get("/", function(request, response){
	response.send("El serivdor esta trabajando");
})


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