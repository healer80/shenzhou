//编写任务
const gulp = require("gulp");
const scss = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");
const connect = require("gulp-connect");

//拷贝html页面
gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})
//拷贝图片
gulp.task("images", function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//拷贝数据源
gulp.task("data", function(){
    return gulp.src(["data/*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//拷贝js代码
gulp.task("script", function(){
    return gulp.src(["js/*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})
//拷贝css
gulp.task("scss", function(){
    return gulp.src("scss/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//一次执行多个任务
gulp.task("build", ["copy-html", "images", "data", "script", "scss"], function(){
    console.log("任务执行成功");
})
//启动监听
gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch(["data/*.json", "!package.json"], ["data"]);
    gulp.watch(["js/*.js", "!gulpfile.js"], ["script"]);
    gulp.watch("scss/*.{scss, css}", ["scss"]);
})
//启动服务器
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true
    })
})
//同时启动监听和服务器
gulp.task("default", ["server", "watch"]);