var gulp = require('gulp');
var rename = require("gulp-rename");

var path = {
                detailContact: 'news.detail/contacts',
                detailNews: 'news/news/bitrix/news.detail/.default',
                detailPersonal: 'news.detail/personal',
                listClients: 'news.list/clients',
                listNews: 'news/news/bitrix/news.list/.default',
                listPersonal: 'news.list/personal',
                listPortfolio: 'news.list/portfolio',
                listProducts: 'news.list/products',
                newsSlider: 'news.list/slider-news',
                pagination: 'pagination/bono',
                search: 'search.form/bono',
                serviceDetail: 'news.detail/service',
                services: 'news.list/services',
                slider: 'news.list/slider',
                topMenu: 'menu/top-menu',
                breadcrumbs: 'breadcrumb/bono',
            }

gulp.task('compile', function() {
    for (var name in path) {
        gulp.src('public/js/'+name+'.js')
        .pipe(rename('script.js'))
        .pipe(gulp.dest('public/ml-bono/components/bitrix/'+path[name]));
        
        gulp.src('public/css/'+name+'.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/ml-bono/components/bitrix/'+path[name]));
    }
    
    gulp.src('public/css/mainpage.css')
        .pipe(rename('mainpage.css'))
        .pipe(gulp.dest('public/ml-bono/'));
        
    gulp.src('public/css/pageInner.css')
        .pipe(rename('pageinner.css'))
        .pipe(gulp.dest('public/ml-bono/'));
        
    gulp.src('public/css/common.css')
        .pipe(rename('common.css'))
        .pipe(gulp.dest('public/ml-bono/'));
        
        
        
    gulp.src('public/js/mainpage.js')
        .pipe(rename('mainpage.js'))
        .pipe(gulp.dest('public/ml-bono/'));
        
    gulp.src('public/js/pageInner.js')
        .pipe(rename('pageinner.js'))
        .pipe(gulp.dest('public/ml-bono/'));
        
    gulp.src('public/js/common.js')
        .pipe(rename('common.js'))
        .pipe(gulp.dest('public/ml-bono/'));
    return true;
});

