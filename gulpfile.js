var gulp = require('gulp');

var runSequence = require('run-sequence');
var inject = require('./gulp/inject.js');


gulp.task('inject:js', inject.js);
gulp.task('inject:styles', inject.styles);
gulp.task('inject:vendors', inject.vendors);

gulp.task('injectAll', function(){
    runSequence('inject:js', 'inject:styles', 'inject:vendors');
});




