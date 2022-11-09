const gulp = require("gulp");
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scssCompiler = gulpSass(sass);
// const autoprefixer = require('gulp-autoprefixer');
// const postcss = require('gulp-postcss');
gulp.task('styles', () => {
  return gulp.src('./src/scss/**/*.scss')
             .pipe(scssCompiler().on('error', scssCompiler.logError))
             .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', () => {
  return gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
});