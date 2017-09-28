let gulp = require('gulp');
let connect = require('gulp-connect');
let sass = require('gulp-sass');

gulp.task('server', ['sass'] ,function(){
    connect.server({
        root:'./',
        port: 8888,
        livereload: true
    })
      gulp.watch(['index.html', './js/*.js', 'css/style.css'], ['html'])
      gulp.watch(['./scss/*scss'], ['sass'])
})
gulp.task('html', function(cb){
    gulp.src('./index.html').pipe(connect.reload())
    cb()
})
gulp.task('sass', function(cb){
    gulp.src('scss/*.scss').pipe(sass()).pipe(gulp.dest('./css/'))
    cb()
})