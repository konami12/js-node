INSTALANDO NODE 

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

INICIANDO PROYECTO 

sudo npm init

	simpre se genera un package.json en el cual se tiene los datos del proyecto.
	el package.json utiliza semantic versioning


listado de paquetes "https://www.npmjs.com/"

//==============================================================================//

INSTALANDO PAQUETES 

npm : es un gestor de paquetes, ademas existen otros gestores de paquetes como 

	- Bower : "https://bower.io/"
	- Duo   : "http://duojs.org/"

npm install --save [nombre del paquete] //vercion larga 
npm i --save [nombre del paquete] //vercion corta 

	"--save" o "-S"   : Los pequetes instalados se colocaran en "dependencies"
	"--save-dev" o -D : Los pequetes instalados se colocaran en "devDependencies"
	"-g" o "--global" : instala globalmente una dependencia

//==============================================================================//

ENSAMBLADORES DE PAQUETES "PACKAGE BUNDLE"

Permiten integrar nuestro codigo con los codigos de las dependencias que utilizemos 
	
	- browserify : "http://browserify.org/"
	- webpack    : "https://webpack.github.io/"

//==============================================================================//

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

//==============================================================================//

MANEJADORES DE VISTAS 

Permitiran generar las vistas html de una manera mas rapida y sencilla.

	- jade o pug : jade es renombrada como pug.

cuando se tiene un html se puede utilizar

	http://html2jade.org/

el cual nos facilitara el paso de html a codigo que pueda comprender pug.


GENERADORES DE ICONOS

 - http://www.favicon-generator.org/

 //==============================================================================//

 USO DE NUEVAS FUNCIONALIDADES EN JAVASCRIPT

 Estos paquetes permiter untilizar las nuevas generaciones de js (EMACJS) lo cual nos permitira
 utilizar las nuevas funciones de js dentro de los navegadores.

  - Babel : https://babeljs.io/

 para poder intrgrar babel con browserify se tiene que instalar le paquete babelify

 //==============================================================================//

SINGLE PAGE APPLICATION

Estas apliaciones toda se realiza en una sola pagina sin la necesidad de recargarla y solo se van cambiando los elementos,
anteriros mente los navegadores, Desde html5 presentan una nueva funcionalidad que es la de no recargar la pagina cuando se cambie 
la ruta a la que se esta apuntando, los navegadores viejos usaban algo llamado hastbang lo cual solo agregaba un numeral lo cual permitia que 
la ruta no cambiara. 

//==============================================================================//

AUTOMATIZAR TAREAS

Para la automatizacion de tareas se una npm-scripts estos se agregan dentro del archivo package.json para mas informacion revisar 

 npm-scripts : https://docs.npmjs.com/misc/scripts

cuando se declara el comando dentro de nuestro package.json en consola corremos 

npm run [NOMBRE DEL COMANDO]

//==============================================================================//

MANEJO DE TEMPLATES USANDO YO-YO

Nos permite el manejo de templates dentro el js que se le entrega al cliente, ademas de poder 
enviar uso de variables dentro de los templates.


//==============================================================================//

USANDO WATCH CON GULP 

Gulp watch permitira crear una tarea con la cual podremos dejar un proceso que este pendiente de los 
cambios en determinados archivos esto facilitara mucho las tareas ya que no se tendra que ejecutar las tareas 
encargadas de copilar archivos, less, sass, paquetes de js.

Requisitos contar con una instalacion previs de gulp y tener nuestro archivo gulpfile

Ejemplo : 
	
	gulp.watch({"ruta de los archivos"}, [{nombre de la tarea que se ejeutara}]);

	
	gulp.task("auto-compile", function(){
		gulp.watch("./assets/*.scss", ["complile-sass"]);
	});
   $ gulp auto-compile

//==============================================================================//

METODO BIND

El metodo bind es una propiedad de todas las funciones de JS permite cambiar el this de una funcion a otra

//==============================================================================//

MOMENT JS

Permite formatear las fechas por zona horaria y permite manipular multiples estilos de fechas.

- https://momentjs.com/

npm i -S moment



//==============================================================================//

FORMAT JS

Permite internacionalizar textos y fechas, esta libreria es soportada por los nvegadores pero cuenta con una exepcion para safari.
para poder intalar esta libreria se tendria que realizar lo siguiente.

npm i -S intl
npm i -S intl-relativeformat

al no contar con intl safari se tiene que agregar al objeto global en este caso es el objeto windows que esta por default en los navegadores.

//condicion para safari
if (!window.Intl)
{
    window.Intl = require("intl");
    //se definen los paquetes de idiomas que se utilizaran
    require("intl/locale-data/jsonp/en-US.js");
    require("intl/locale-data/jsonp/es.js");
}

- https://formatjs.io/

//==============================================================================//

MANEJO DE PETICIONES AJAX 

Para el manejo de las peticiones ajax se mostraran 3 ejemplo con las librerias 

- super agent : https://github.com/visionmedia/superagent
- axios       : https://github.com/mzabriskie/axios
- fetch       : Api nativa esta es soportada por la mayoria de navegadores.

ASYNC / AWAIT


La declaración de async function asíncrona define una función asincrónica , que devuelve un objeto AsyncFunction .

-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function