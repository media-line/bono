var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('compile', function() {
    gulp.src('public/js/newsSlider.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/slider-news'));
    
    gulp.src('public/css/newsSlider.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/slider-news'));
    
    
    gulp.src('public/js/search.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/search.form/bono'));
    
    gulp.src('public/css/search.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/search.form/bono'));
    
    
    gulp.src('public/js/services.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/services'));
    
    gulp.src('public/css/services.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/services'));
    
    
    gulp.src('public/js/slider.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/slider'));
    
    gulp.src('public/css/slider.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/slider'));
    
    
    gulp.src('public/js/topMenu.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/menu/top-menu'));
    
    gulp.src('public/css/topMenu.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/menu/top-menu'));
    return true;
});

