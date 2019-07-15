# gulp-simple-packing
这是第一个gulp打包项目，含有html,less,js,css,半自动编译，全自动编译
## gulp插件
#### gulp-concat 合并文件(js/css)
#### gulp-uglify 压缩js文件
#### gulp-rename 重命名文件
#### gulp-less 编译less文件
#### gulp-clean-css 压缩css文件
#### gulp-livereload 半自动化插件，实时自动编译刷新
#### gulp-connect 全自动化插件
#### open 自动打开一个新的链接
## API
#### gulp.src("路径")，读取文件到gulp内存
#### gulp.task("任务名","[]","执行函数")
#### gulp.dest("路径")，将文件从内存读带指定地点
####  gulp.watch("路径")，监听指定路径的内容。
