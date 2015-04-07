var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scripts', function () {
    gulp.src('dev/scripts/*.js')
        .pipe(gulp.dest('build/scripts'));
});


gulp.task('tests', function () {
    gulp.src('dev/tests/**')
        .pipe(gulp.dest('build/tests'));
});


gulp.task('lib', function () {
    gulp.src('dev/lib/**')
        .pipe(gulp.dest('build/lib'));
});


gulp.task('jade', function () {
    return gulp.src('dev/html/index2.jade')
        .pipe(jade())
        .pipe(gulp.dest('build/'));
});


gulp.task('sass', function () {
    return gulp.src('dev/css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: 'last 2 versions'}))
        .pipe(gulp.dest('./build/css'));
});


gulp.task('index', function () {
    return gulp.src('dev/index.html')
        .pipe(gulp.dest('build'));
});


gulp.task('default', ['scripts', 'tests', 'lib', 'jade', 'sass', 'index']);
