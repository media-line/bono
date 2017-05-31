var gulp = require('gulp');
var rename = require("gulp-rename");

var path = {
                detailContact: 'news.detail/contacts',
                detailNews: 'news/news/bitrix/news.detail/.default',
                detailPersonal: 'news/personal/bitrix/news.detail/.default',
                listClients: 'news.list/clients',
                listNews: 'news/news/bitrix/news.list/.default',
                listPersonal: 'news/personal/bitrix/news.list/.default',
                detailPortfolio: 'photogallery/portfolio/bitrix/photogallery.detail.list.ex/.default',
                listPortfolio: 'photogallery/portfolio/bitrix/photogallery.section.list/.default',
                listProducts: 'news.list/products',
                newsSlider: 'news.list/slider-news',
                pagination: 'system.pagenavigation/.default',
                search: 'search.form/bono',
                serviceDetail: 'news.detail/service',
                services: 'news.list/services',
                slider: 'news.list/slider',
                topMenu: 'menu/top-menu',
                breadcrumbs: 'breadcrumb/bono',
                detailEvent: 'news.detail/event',
            }
            
var pathExcludeJS = ['listPortfolio', 'detailPortfolio'];
var pathExcludeCSS = [];

gulp.task('compile', function() {
    for (var name in path) {
        if (pathExcludeJS.indexOf(name) == -1) {
            gulp.src('public/js/'+name+'.js')
            .pipe(rename('script.min.js'))
            .pipe(gulp.dest('public/ml-bono/components/bitrix/'+path[name]));
        }
        
        if (pathExcludeCSS.indexOf(name) == -1) {
            gulp.src('public/css/'+name+'.css')
            .pipe(rename('style.min.css'))
            .pipe(gulp.dest('public/ml-bono/components/bitrix/'+path[name]));
        }
    }
    
    
    gulp.src('public/js/detailPortfolio.js')
        .pipe(rename('detailPortfolio.min.js'))
        .pipe(gulp.dest('public/ml-bono/components/bitrix/photogallery/portfolio/bitrix/photogallery.detail.list.ex/.default'));
    
    
    gulp.src('public/css/mainpage.css')
        .pipe(rename('mainpage.min.css'))
        .pipe(gulp.dest('public/ml-bono/'));
        
    gulp.src('public/css/pageInner.css')
        .pipe(rename('pageinner.min.css'))
        .pipe(gulp.dest('public/ml-bono/'));
        
    gulp.src('public/css/common.css')
        .pipe(rename('common.min.css'))
        .pipe(gulp.dest('public/ml-bono/'));
        
        
        
    gulp.src('public/js/mainpage.js')
        .pipe(rename('mainpage.min.js'))
        .pipe(gulp.dest('public/ml-bono/js/'));
        
    gulp.src('public/js/pageInner.js')
        .pipe(rename('pageinner.min.js'))
        .pipe(gulp.dest('public/ml-bono/js/'));
        
    gulp.src('public/js/common.js')
        .pipe(rename('common.min.js'))
        .pipe(gulp.dest('public/ml-bono/js/'));
    return true;
});

