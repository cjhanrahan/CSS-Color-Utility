var gulp = require('gulp');
var del = require('del');
var preprocess = require('gulp-preprocess');
var jade = require('gulp-jade');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');


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


gulp.task('sass', ['clean'], function () {
    return sass('dev/css/')
        .pipe(autoprefixer({browsers: 'last 2 versions'}))
        .pipe(gulp.dest('./build/css'));
});


gulp.task('default', ['main', 'scripts', 'tests', 'lib', 'jade', 'sass']);

