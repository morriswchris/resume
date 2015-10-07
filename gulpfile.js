var gulp = require("gulp");
var fs = require("fs");
var del = require("del");
var marked = require('marked');
var ghPages = require('gulp-gh-pages');
var processhtml = require('gulp-processhtml');
var processhtmlOpts = {
  process: true,
  templateSettings: {
    interpolate: /\{\{(.+?)\}\}/g
  }
}

gulp.task("default", ["deploy"], function(){});

gulp.task("build", ["copy"], function(){
  processhtmlOpts.data = {
    resume: marked(fs.readFileSync("resume.md", "utf8"))
  };
  return gulp.src("src/*.html")
    .pipe(processhtml(processhtmlOpts))
    .pipe(gulp.dest('dist/'));
});
gulp.task("copy", ["clean"], function(cb){
  return gulp.src('node_modules/github-markdown-css/*.css')
    .pipe(gulp.dest("dist/css"));
});
gulp.task("deploy", ["build"], function(cb){
  return gulp.src('./dist/**/*')
   .pipe(ghPages({remoteUrl: "https://${GH_TOKEN}@${GH_REF}"}));
});
gulp.task("clean", function(cb){
  return del(["./dist/**/*", "./dist/**"], cb);
});
