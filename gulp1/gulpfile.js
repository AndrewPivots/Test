// copied from Udacity

const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", function(done){
  console.log('Running gulp!');
  done();
});

gulp.task("styles", function(done){
  gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css"));
  done();
});
