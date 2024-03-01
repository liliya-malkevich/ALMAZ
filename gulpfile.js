const less = require('gulp-less');
const gulp = require('gulp');
const path = require('path');

exports.less = function() {
  return gulp.src('./css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
  }
  
  exports.watch = function () {
    gulp.watch('./css/*.less',gulp.series('less'))
  }