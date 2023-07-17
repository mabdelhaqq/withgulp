var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('css', function(){
    return gulp.src('project/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('html',function(){
    return gulp.src('project/index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('js',function(){
    return gulp.src('project/main.js')
    .pipe(gulp.dest('dist'))
});