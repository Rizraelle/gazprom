var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var clean = require('gulp-clean-css');

gulp.task('css', function () {
    var plugins = [
      nested(),
      autoprefixer(),
      clean(),
    ];
    return gulp.src('css/main.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('build/'));
});
