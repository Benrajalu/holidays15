var gulp = require('gulp');
//var watch = require('gulp-watch');
var compass = require('gulp-compass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var liveReload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var debug = require('gulp-debug');

//styles
gulp.task("styles", function(cb) {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(debug({title: 'styles:'}))
		.pipe(plumber())
		/*.pipe(plumber({
			handleError: function (err) {
			console.log(err);
			this.emit('end');
        		}
    		}))*/
		.pipe(compass({
			config_file: './config.rb',
			css: 'assets/css',
			sass: 'assets/scss',
		})).on('error', cb)
		.pipe(gulp.dest('assets/css'))
		.pipe(liveReload());
});

//scripts
gulp.task("scripts", function() {
	return gulp.src('assets/js/**/*.js')
		.pipe(debug({title: 'scripts:'}))
		.pipe(plumber())
		.pipe(liveReload());
});

//images
gulp.task("images", function() {
	return gulp.src('assets/images/**/*.jpg')
		.pipe(debug({title: 'image:'}))
		.pipe(plumber())
		.pipe(liveReload());
});

//fonts
gulp.task("fonts", function() {
	return gulp.src('assets/fonts/**/*.{svg,ttf,eot,woff}')
		.pipe(debug({title: 'fonts:'}))
		.pipe(plumber())
		.pipe(liveReload());
});


gulp.task("default", ["styles", "scripts", "images", "fonts"]);

gulp.task("watch", function() {
	liveReload.listen({ start:true });
	gulp.watch('assets/scss/**/*.scss', ['styles']);
	gulp.watch('assets/js/**/*.js', ['scripts']);
	gulp.watch('assets/fonts/**/*.{jsvg,ttf,eot,woff}', ['fonts']);
	gulp.watch('assets/images/**/*.{jpg,jpeg,png,gif}', ['images']);
});

