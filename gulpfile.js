var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

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
        gulp.src('assets/**/*.js'),
        uglify(),
        gulp.dest('app/assets')
    ],
    cb
  );
});

gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'));
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

gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "app"
  });
  gulp.watch ("html/*.html");
  gulp.watch ("assets/**/*.js", ["compress"]);
  gulp.watch ("scss/**/*.scss", ['sass']);
  gulp.watch ("./*.html", ["minify"]);
  gulp.watch ("app/*.html").on('change', browserSync.reload);
});