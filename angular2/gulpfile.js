var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del');

var paths = [
    "./src/global.scss",
    "./src/**/*.scss",
    "./src/**/**/*.scss"
];

var cssPaths = [
    "./src/global.css",
    "./src/**/*.css"
];

gulp.task('sass', function () {
    return gulp.src(paths, {base: "./"})
        .pipe(sass())
        .pipe(gulp.dest("./"));
});

gulp.task('del-css', function(cb){
    del(cssPaths, cb);
});
