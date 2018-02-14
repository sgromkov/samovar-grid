var gulp = require('gulp');
var sass = require('gulp-sass');
var addsrc = require('gulp-add-src');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('bootstrap', function() {
  return gulp.src('custom.scss')
      .pipe(sass())
      .pipe(addsrc.prepend('node_modules/normalize.css/normalize.css'))
      .pipe(concat('bootstrap-custom.css'))
      .pipe(gulp.dest(''));
});

gulp.task('styles', function() {
  return gulp.src('styles.less')
      .pipe(less())
      //.pipe(csso())
      .pipe(gulp.dest(''));
});