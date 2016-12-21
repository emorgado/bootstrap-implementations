var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var naturalSort = require('gulp-natural-sort');
var angularFilesort = require('gulp-angular-filesort');
var config = require('./config.js');



module.exports = {
    js: js,
    vendors: vendors,
    styles: styles,
};

function appStreamStyles(){
    return gulp.src([
        config.src+'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
        config.src+'bower_components/font-awesome/css/font-awesome.css',
        config.app + './**/*.css',
        config.src+'./app.css'
    ])
    ;
}

function appStreamJs(){
    return gulp.src([
            config.app + './**/*.js',
            config.src+'./app.js'
        ])
        .pipe(naturalSort())
        .pipe(angularFilesort())
        ;
}

function appStreamBower(){
    return gulp.src(bowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/js/bootstrap.min.js',
                        './dist/css/*.min.*',
                        './dist/fonts/*.*'
                    ]
                },
                "angular" : {
                    "dependencies" : {
                        "jquery": "*"
                    }
                },
                "angular-bootstrap": {
                    main: [
                        'ui-bootstrap.min.js',
                        'ui-bootstrap-tpls.min.js'
                    ]
                }
            }
        }), {read: false})
        ;
}

function js(){
    return gulp.src(config.src + 'index.html')
        .pipe(inject(appStreamJs(), {relative: true}))
        .pipe(gulp.dest(config.src));
}

function styles() {
    return gulp.src(config.src + 'index.html')
        .pipe(inject(appStreamStyles(), {relative: true}))
        .pipe(gulp.dest(config.src));
}

function vendors() {
    return gulp.src(config.src + 'index.html')
        .pipe(inject(appStreamBower(), {
            name: 'bower',
            relative: true
        }))
        .pipe(gulp.dest(config.src));
}