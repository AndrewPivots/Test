// copied from Udacity

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function(done){
  console.log('Running gulp!');
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
    .pipe(gulp.dest("./css"));
  done();
});
