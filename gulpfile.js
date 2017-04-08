var babelify   = require("babelify");//permite usar las utltimas carecteristicas de emacjs
var browserify = require("browserify");//permite crear paquetes
var gulp       = require("gulp");
var rename     = require("gulp-rename");//permite renombrar archivos
var sass       = require("gulp-sass");//compila archivos scss
var source     = require("vinyl-source-stream");//permite trandormar el codigo ah algo entendible para gulp

//============ Tareas =============// 

//Permite realizar la compilaxion de archivos sass
gulp.task("compile-sass", function(){
	gulp.src("./assets/index.scss")
		.pipe(sass())
		.pipe(rename("app.css"))
		.pipe(gulp.dest("./assets/"));
});

//Permite copiar los assets en la carpeta public
gulp.task("copy-assets", function(){
	gulp.src(["./assets/*.css", "./assets/*.png", "./assets/icons/*"])
		.pipe(gulp.dest("public"));
});

//permite la compilacion de los paquetes de JS 
gulp.task("package-js", function(){
		 browserify("./src/index.js")
        .transform(babelify)
        .bundle()
        .pipe(source("index.js"))
        .pipe(rename("app.js"))
        .pipe(gulp.dest("./public"));
});

//Se automatiza el empaquetado de los js
gulp.task("reload", function(){
	gulp.watch("./src/index.js", ["package-js"]);
});


//Se agregan las tareas default
gulp.task("default", ["compile-sass", "copy-assets", "package-js"]);