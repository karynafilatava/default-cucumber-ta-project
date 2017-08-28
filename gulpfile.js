'use strict';
const gulp = require('gulp');
const protractor = require('gulp-protractor').protractor;
const util = require('gulp-util');

gulp.task('test', () => {
    return gulp.src('./features/*.feature')
        .pipe(protractor({
            configFile: './protractor.config.js',
            args: ['--cucumberOpts.tags', util.env.tags ? util.env.tags : []]
        }))
        .on('error', function (e, file) {
            console.log(file);
            callback();
        });
});