var gulp = require("gulp");

var bower = require("gulp-bower");
var browserSync = require("browser-sync");

gulp.task("dependencies", function() {
  return bower();
});

gulp.task("browserSync", function() {
  browserSync({
    "server": {
      "baseDir": "build/"
    }
  });
});

gulp.task("watch", [
  "build",
  "browserSync"
], function() {
  gulp.watch("src/**", function() {
    gulp.src("src/**")
      .pipe(gulp.dest("build/components/jawnsy/typed-text"));
    browserSync.reload();
  });
});

gulp.task("build", [
  "dependencies"
], function() {
  gulp.src("src/**")
    .pipe(gulp.dest("build/components/jawnsy/typed-text"));
});

gulp.task("default", [
  "build"
]);

