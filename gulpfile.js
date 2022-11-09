const gulp = require("gulp");
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scssCompiler = gulpSass(sass);
const prefixer = require('gulp-autoprefixer');
gulp.task('styles', () => {
  return gulp.src('./src/scss/**/*.scss')
             .pipe(prefixer({
                overrideBrowserslist: ['last 8 versions'],
                browsers: [
                  'Android >= 4',
                  'Chrome >= 20',
                  'Firefox >= 24',
                  'Explorer >= 11',
                  'iOS >= 6',
                  'Opera >= 12',
                  'Safari >= 6',
                ],
                cascade: false
              }))
             .pipe(scssCompiler().on('error', scssCompiler.logError))
             .pipe(gulp.dest('./dist/css'))
})

gulp.task('watch', () => {
  return gulp.watch('./src/scss/**/*.scss', gulp.series('styles'));
});