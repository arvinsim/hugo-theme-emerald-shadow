'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'])