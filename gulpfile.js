// Load plugins
var gulp = require('gulp'),
    //sass = require('gulp-ruby-sass'),
    // autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    //rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    //notify = require('gulp-notify'),
    cache = require('gulp-cache');
    //livereload = require('gulp-livereload'),
    //del = require('del');

// lint and minify js files and save them in js directory
gulp.task('lint-minify-js', function() {
  return gulp.src(['js/*.js', 'views/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('views/dist/js'));
});
// minify css files and save them in css directory
gulp.task('minify-css', function() {
  return gulp.src(['css/*.css', 'views/css/*.css'])
    .pipe(minifycss())
    .pipe(gulp.dest('views/dist/css'));
});
// compress images and save them in images directory
gulp.task('compress-image', function() {
  return gulp.src(['img/*.{jpg,jpeg,png}', 'views/images/*.{jpg,jpeg,png}'])
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('views/dist/images'));
});
// Default Task runs the folowing tasks: lint-minify-js, minify-css, compress-image
gulp.task('default', ['lint-minify-js', 'minify-css', 'compress-image']);
