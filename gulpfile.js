var gulp = require('gulp');

gulp.task('post-build', function() {
    gulp.src(['src/bower_components/**/*']).pipe(gulp.dest('dist/src/bower_components'));
    gulp.src(['server/**/*']).pipe(gulp.dest('dist/server'));
    gulp.src(["package.json"]).pipe(gulp.dest("dist"));
  });
