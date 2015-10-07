var gulp = require("gulp");
var del = require("del");
var rename = require('gulp-rename');
var markdown = require('gulp-markdown');
var ghPages = require('gulp-gh-pages');


gulp.task("default", ["deploy"], function(){});

gulp.task("build", ["clean"], function(){
  return gulp.src('resume.md')
        .pipe(markdown())
        .pipe(rename("index.html"))
        .pipe(gulp.dest('dist/index.html'));
});
gulp.task("deploy", ["build"], function(cb){
  return gulp.src('./dist/**/*')
   .pipe(ghPages({remoteUrl: "https://${GH_TOKEN}@${GH_REF}"}));
});
gulp.task("clean", function(cb){
  return del(["./dist/**/*", "./dist/**"], cb);
});
