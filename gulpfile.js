var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var dirname = __dirname;
var dgbl = require("del-gulpsass-blank-lines"); // 删除sass编译css的多余空行
var spritesmith=require('gulp.spritesmith'); // 雪碧图

// 合成雪碧图
gulp.task('sprit', function() {
    return gulp
        .src('./src/images/edit-icon/*.png') //需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'edit-icon.png',//保存合并后图片的名字
            cssName: '../css/sprite.css',//保存合并后css相对于image输出文件样式的地址
            padding:0,//合并时两个图片的间距
            algorithm: 'binary-tree',//图片排列方式 Algorithm 有四个可选值分别为top-down、left-right、diagonal、alt-diagonal、binary-tree
            cssTemplate:function (data) { //生成css的模板文件
                var arr=[];
                data.sprites.forEach(function (sprite) {
                    arr.push(".icon-"+sprite.name+
                    "{" +
                    "background-image: url('"+sprite.escaped_image+"');"+
                    "background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
                    "width:"+sprite.px.width+";"+
                    "height:"+sprite.px.height+";"+
                    "}\n");
                });
                return arr.join("");
            }

        }))
        .pipe(gulp.dest('./src/images'));
});
// 合成雪碧图2
gulp.task('sprit2', function() {
    return gulp
        .src('./src/images/edit-icon/*.png') //需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'edit-icon.png',//保存合并后图片的名字
            cssName: '../css/sprite.css',//保存合并后css相对于image输出文件样式的地址
            padding:0,//合并时两个图片的间距
            algorithm: 'binary-tree',//图片排列方式 Algorithm 有四个可选值分别为top-down、left-right、diagonal、alt-diagonal、binary-tree
            cssTemplate:function (data) { //生成css的模板文件
                var arr=[];
                data.sprites.forEach(function (sprite) {
                    arr.push("#pagelet-write .edui-default .edui-toolbar .edui-for-"+sprite.name+" .edui-icon"+
                    "{" +
                    "background: url('"+sprite.escaped_image+"');"+
                    "background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
                    "}\n");
                });
                return arr.join("");
            }

        }))
        .pipe(gulp.dest('./src/images'));
});
// sass
gulp.task('sassfile', function() {
    return gulp
        .src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(dgbl())
        .pipe(gulp.dest('./src/css'))
        .pipe(reload({stream: true}));
});
// 开启服务 并同步
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('src/sass/**/*.scss', ['sassfile']);
    gulp.watch('*.html').on('change', reload);
    gulp.watch('src/css/*.css').on('change', reload);
});

gulp.task('default', ['serve']);
