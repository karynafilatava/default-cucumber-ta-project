'use strict';

const gulp = require('gulp');
const protractor = require('gulp-protractor').protractor;

gulp.task('test', () => {
    return gulp.src('./features/*.feature')
        .pipe(protractor({
            configFile: './protractor.config.js'
        }));
});