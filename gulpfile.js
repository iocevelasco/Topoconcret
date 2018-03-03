var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./app"
  });
  gulp.watch ("app/js/*.js", ["compress"]) 
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('autoPrefixer', () =>
    gulp.src('scss/**/*.scss')

        .pipe(gulp.dest('app/css'))
);


gulp.task('optimizar', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img'))
);

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('app/js/dist')
    ],
    cb
  );
});

gulp.task('sass', function () {
  gulp.src('scss/**/*.scss')
  .pipe(sass())
  //.pipe(cssnano())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function() {
gulp.watch('scss/**/*.scss', ['sass']);
});

 