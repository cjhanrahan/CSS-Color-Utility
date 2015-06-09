'use strict';

var gulp = require('gulp');
var del = require('del');
var preprocess = require('gulp-preprocess');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');

gulp.task('clean', function (callback) {
    del(['build'], callback);
});


gulp.task('main', ['clean'], function () {
    gulp.src('dev/scripts/main.js')
        .pipe(preprocess({
            context: { MODE:'normal' }
        }))
        .pipe(gulp.dest('build/scripts'));

    return gulp.src('dev/scripts/main.js')
        .pipe(preprocess({
            context: { MODE:'test' }
        }))
        .pipe(rename('testsMain.js'))
        .pipe(gulp.dest('build/scripts'));

});

gulp.task('scripts', ['clean'], function () {

    return gulp.src('dev/scripts/!(main).js')
        .pipe(preprocess({
            context: { MODE:'normal' }
        }))
        .pipe(gulp.dest('build/scripts'));
});


gulp.task('tests', ['clean'], function () {
    return gulp.src('dev/tests/**')
        .pipe(gulp.dest('build/tests'));
});


gulp.task('lib', ['clean'], function () {
    return gulp.src('dev/lib/**')
        .pipe(gulp.dest('build/lib'));
});


gulp.task('jade', ['clean'], function () {
    gulp.src('dev/html/index.jade')
        .pipe(jade({
            data: {includeTests: false}
        }))
        .pipe(gulp.dest('build'));

    return gulp.src('dev/html/index.jade')
        .pipe(jade({
            data: {includeTests: true}
        }))
        .pipe(rename('tests.html'))
        .pipe(gulp.dest('build'));
});

gulp.task('stylus', ['clean'], function () {
    gulp.src('dev/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('default', ['main', 'scripts', 'tests', 'lib', 'jade', 'stylus']);
