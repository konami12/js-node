//se llama la libreras express
var express = require("express");
var multer  = require("multer");
var app     = express();
var fs      = require("fs");
//======================================================//

/**
 * Crea el timestamp.
 * 
 * @return date.
 */
Date.timeStamp = function()
{
	aux = new Date();
	mes = aux.getMonth() + 1;
	dia = aux.getDay();
	hr  = aux.getHours();
	min = aux.getMinutes();
	sec = aux.getSeconds();

	mes = (mes < 10) ? '0' + mes : mes;
	dia = (dia < 10) ? '0' + dia : dia;
	hr  = (hr < 10) ? '0' + hr : hr;
	sec = (sec < 10) ? '0' + sec : sec;
	min = (min < 10) ? '0' + min : min;

	return aux.getFullYear() + '-' + mes + '-' + dia + "-" + hr + "-" + min + "-" + sec;
};

//iniciailiza la configuracion de multer
var storage = multer.diskStorage({
	destination : function(require, file, callback){
		callback(null, "./upload");
	},
	filename : function(require, file, callback){
		var ext = (file.originalname).split('.').pop();
		callback(null,file.fieldname + '-' + Date.timeStamp() + "." + ext);
	}
});
var upload = multer({storage : storage});

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

app.get("/api/database/:username", function(request, response){
	let pictures = fs.readFileSync("./src/database/index.js", "utf8");
	let user     = (request.params.username).toLowerCase();
	let json     = [];
	pictures     = JSON.parse(pictures);
	let flag     = false;

	switch (user)
	{
		case "all":
			json = pictures.map(item => {
				return (item.imgs).map(img => {
					let num = Math.floor(Math.random() * 10);
					return {
								user      : item.user,
								url       : img.url,
								likes     : Math.floor(Math.random() * 100),
								liked     : ((num/2) === 0)? true : false,
								date      : new Date().setDate(new Date().getDate() - num)
						   }; 
				});
			});
			flag = true;
		break; 

		default:
			pictures.map(item => {

				for(let key in item)
				{
					let _user = (item.user.username).toLowerCase();
					if (_user === user)
					{
						json = item;
						flag = true;
					}
				}
			});
		break;
	}
	response.send({data: json, status:flag});
});

app.post("/api/upload", function(request, response){
	
	var load = upload.single("image");

	load(request, response, function(error){
		if (error)
		{
			return response.send(500, "Error al subir la imagen");
		}
		else
		{
			response.send("La imagen se cargo correctamente");
		}
	});
});

/*app.get("/api/user/:username" function(request, response){



});*/


app.get("/user/:username", function(request, response){
	
	response.render("index", {title: ".:: Platzigram | " +  request.params.username + " ::. "});
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