var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var less = require("gulp-less");
var cleanCss = require("gulp-clean-css");
var htmlMin = require("gulp-htmlmin");
var livereload = require("gulp-livereload")
var connect = require("gulp-connect");
var open = require("open")
gulp.task("html", function () {
    return gulp.src("index.html")
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("dist"))
        .pipe(livereload())
        .pipe(connect.reload())
})
gulp.task("js", function () {
    return gulp.src("src/js/*.js")
        .pipe(concat("build.js"))
        .pipe(gulp.dest("dist/js"))
        .pipe(uglify())
        .pipe(rename("build.min.js"))
        .pipe(gulp.dest("dist/js"))
        .pipe(livereload())
        .pipe(connect.reload())
})
gulp.task("less", function () {
    return gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(livereload())
        .pipe(connect.reload())
})
gulp.task("css", ["less"], function () {
    return gulp.src("src/css/*.css")
        .pipe(concat("build.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(rename("build.min.css"))
        .pipe(cleanCss({
            compatibility: "ie8"
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(livereload()) //实时刷新
        .pipe(connect.reload())
})
gulp.task("default", ['css', 'js'], function () {
    console.log("main函数执行")
})

gulp.task("server", ["default"], function () {
    //配置gulp-connect的内部服务器
    connect.server({
        root: "dist/", //根目录
        livereload: true,
        port: 5000
    })
    open("http://localhost:5000")
    //监听任务变化
    gulp.watch("src/js/*.js", ["js"]);
    gulp.watch("src/css/*.css", ["css"])
})

gulp.task("watch", ["default"], function () {
    // livereload.listen();//监听任务
    //监听目标和响应的执行任务
    gulp.watch("src/js/*.js", ["js"]);
    gulp.watch(["src/css/*.css", "src/less/*.less"], ["css"])
})