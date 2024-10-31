var gulp = require("gulp");
var fs = require("fs");
var del = require("del");
var marked = require('marked');
var ghPages = require('gh-pages');
var path = require('path');
var processhtml = require('gulp-processhtml');
var processhtmlOpts = {
  process: true,
  templateSettings: {
    interpolate: /\{\{(.+?)\}\}/g
  }
};

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
  return gulp.src(['node_modules/github-markdown-css/*.css',
   'node_modules/octicons/octicons/*.css',
   'node_modules/octicons/octicons/octicons.ttf',
   'node_modules/octicons/octicons/octicons.wolf',
   'node_modules/octicons/octicons/octicons.svg',
   'node_modules/octicons/octicons/octicons.eot',
 ])
    .pipe(gulp.dest("dist/css"));
});
gulp.task("deploy", ["build"], function(cb){
  const token = process.env.GITHUB_TOKEN;
  const ref = process.env.GITHUB_REPOSITORY;
  ghPages.publish(path.join(process.cwd(), 'dist'), {repo: `https://${token}@${ref}`}, cb);
});
gulp.task("clean", function(cb){
  return del(["./dist/**/*", "./dist/**"], cb);
});
