INSTALANDO NODE 

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

INICIANDO PROYECTO 

sudo npm init

	simpre se genera un package.json en el cual se tiene los datos del proyecto.
	el package.json utiliza semantic versioning


listado de paquetes "https://www.npmjs.com/"

//======================================================================================//

INSTALANDO PAQUETES 

npm : es un gestor de paquetes, ademas existen otros gestores de paquetes como 

	- Bower : "https://bower.io/"
	- Duo   : "http://duojs.org/"

npm install --save [nombre del paquete] //vercion larga 
npm i --save [nombre del paquete] //vercion corta 

	"--save" o "-S"   : Los pequetes instalados se colocaran en "dependencies"
	"--save-dev" o -D : Los pequetes instalados se colocaran en "devDependencies"
	"-g" o "--global" : instala globalmente una dependencia

//======================================================================================//

ENSAMBLADORES DE PAQUETES "PACKAGE BUNDLE"

Permiten integrar nuestro codigo con los codigos de las dependencias que utilizemos 
	
	- browserify : "http://browserify.org/"
	- webpack    : "https://webpack.github.io/"

//======================================================================================//

AUTOMATIZADORES 

Permiten realizar tareas de manera dinamica para esto se les tiene que generar una configuracion previa para poder generar los build
oh el ensamblado de paquetes. 

	- grunt : "https://gruntjs.com/" 
	- gulp  : "http://gulpjs.com/"

CONFIGURACION DE GULP

Para poder utilizar gulp es necesario crear el "gulpfile" el cuel tiene que estar en raiz en este archivo 
se tiene que llamar los pequetes que se utiliuzaran y se generarn las tareas.

gulp.task("[nombre de mi tarea]", function(){
	armado de la trea
}); 

Nota : para poder utilizar en cualquier parte es necesario instalar lo de manera global.

//======================================================================================//

MANEJADORES DE VISTAS 

Permitiran generar las vistas html de una manera mas rapida y sencilla.

	- jade o pug : jade es renombrada como pug.

cuando se tiene un html se puede utilizar

	http://html2jade.org/

el cual nos facilitara el paso de html a codigo que pueda comprender pug.


GENERADORES DE ICONOS

 - http://www.favicon-generator.org/

 //======================================================================================//

 USO DE NUEVAS FUNCIONALIDADES EN JAVASCRIPT

 Estos paquetes permiter untilizar las nuevas generaciones de js (EMACJS) lo cual nos permitira
 utilizar las nuevas funciones de js dentro de los navegadores.

  - Babel : https://babeljs.io/

 para poder intrgrar babel con browserify se tiene que instalar le paquete babelify

 //======================================================================================//

SINGLE PAGE APPLICATION

Estas apliaciones toda se realiza en una sola pagina sin la necesidad de recargarla y solo se van cambiando los elementos,
anteriros mente los navegadores, Desde html5 presentan una nueva funcionalidad que es la de no recargar la pagina cuando se cambie 
la ruta a la que se esta apuntando, los navegadores viejos usaban algo llamado hastbang lo cual solo agregaba un numeral lo cual permitia que 
la ruta no cambiara. 

//======================================================================================//

AUTOMATIZAR TAREAS

Para la automatizacion de tareas se una npm-scripts estos se agregan dentro del archivo package.json para mas informacion revisar 

 npm-scripts : https://docs.npmjs.com/misc/scripts

cuando se declara el comando dentro de nuestro package.json en consola corremos 

npm run [NOMBRE DEL COMANDO]
