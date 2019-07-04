let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', async function(){
    return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.reload({stream: true}));
});

// gulp.task('scripts', async function() {
//     return gulp.src('app/js/main.js')
//            .pipe(browserSync.reload({ stream: true }));
// });

// gulp.task('code'), async function() {
//     return gulp.src('app/*.html')
//            .pipe(browserSync.reload({ stream: true }));
// }

gulp.task('browser-sync', async function() {
    browserSync({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('watch', function(){
    gulp.watch('src/input.scss', gulp.parallel('sass'));
    // gulp.watch('src/*.html', gulp.parallel('code'));
    // gulp.watch('src/main.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));

