/**
 * @fileOverview project build handbook
 * @name gulpfile.js<react-slide.js>
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
'use strict';
var path = require('path');
var gulp = require('gulp');
var scss = require('gulp-scss');
var minify = require('gulp-minify-css');
var haml = require('gulp-ruby-haml');
var prettify = require('gulp-prettify');
var babelify = require("babelify");
// var jsxtransform = require('gulp-jsxtransform');
// var react = require('gulp-react');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
// var watchify = require('gulp-watchify');

var files = {
	style: {
		src: path.join(__dirname, 'scss/**/*.scss'),
		dest: path.join(__dirname, 'css')
	},
	haml: {
		src: path.join(__dirname, 'haml/*.haml'),
		dest: path.join(__dirname, 'prototype')
	},
	jsx: {
		src: path.join(__dirname, 'jsx/**/*.jsx'),
		dest: path.join(__dirname, 'js')
	}
};

gulp.task('style', function () {
	return gulp.src(files.style.src)
		.pipe(scss())
		.pipe(minify())
		.pipe(gulp.dest(files.style.dest));
}).task('haml', function () {
	return gulp.src(files.haml.src)
		.pipe(haml())
		.pipe(prettify())
		.pipe(gulp.dest(files.haml.dest));
}).task('jsx', function () {
	return browserify(gulp.src(files.jsx.src))
		.transform('babelify', {
			presets: ['react']
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(files.jsx.dest));
});

gulp.task('default', ['style', 'haml', 'jsx']);

gulp.task('watch', ['default'], function () {
	return gulp.watch(files.style.src, ['style']);
});
