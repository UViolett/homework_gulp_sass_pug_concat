var gulp = require ('gulp');
var sass = require ('gulp-sass');
var pug = require ('gulp-pug');
var concat = require('gulp-concat');

gulp.task('sass', function() {// создаем команду sass
	return gulp.src('*.sass')// обращаемся к списку файлов. которые надо обработать
		.pipe(sass()) // отправляем файлы на обработку команде sass
		.pipe(gulp.dest('css')) // все содержимое, обработанное, отправляем в нужную папку
});


gulp.task('pug', function() {// создаем команду pug
	return /*ретерн запускает одно после другого .ю чтобы было понятно, когда закончится сборка*/ gulp.src('*.pug')// обращаемся к списку файлов. которые надо обработать
		.pipe(pug()) // отправляем файлы на обработку команде pug
		.pipe(gulp.dest('./')) // все содержимое, обработанное, отправляем в нужную папку
});

 
gulp.task('concat', function() {
  return gulp.src(['./layout/styles/framework.css', './layout/styles/layout.css'])
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('./'));
});

//таск - это стандартная команда
gulp.task('default', ['sass', 'pug', 'concat']) // создаем команду sass которая будет запускаться после default