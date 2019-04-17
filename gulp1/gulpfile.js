// copied from Udacity

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("default", ["styles"], function(done){
  console.log('Running gulp!');
  gulp.watch("sass/**/*.scss", ["styles"]);

  browserSync.init({
    server: "./"
  });
  done();
});

gulp.task("styles", function(done){
  gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ['last 2 version']
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
  done();
});
