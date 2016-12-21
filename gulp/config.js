'use strict';

module.exports = {
    src: './src/',
    app: './src/app/',
    dist: './dist/',
    distApp: './dist/app',
    distCss: './dist/static/css',
    distJs: './dist/static/js',
    distFonts: './dist/static/fonts',
    minifyJs: true,
    minifyCss: true,
    hashOpts: {
        algorithm: 'sha1',
        hashLength: 40,
        template: '<%= name %><%= ext %>?v=<%= hash %>'
    }
};
