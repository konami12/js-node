var gulp       = require("gulp");
var rename     = require("gulp-rename");//permite renombrar archivos
var sass       = require("gulp-sass");//compila archivos scss

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

//Se agregan las tareas default
gulp.task("default", ["compile-sass", "copy-assets"]);