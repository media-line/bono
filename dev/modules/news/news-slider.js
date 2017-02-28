'use strict';

import './news-slider.scss';

import './../single-news/single-news.js';

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const $slider = '.news-slider__row';

$(document).ready(function () {
    console.log($($slider) );
    $($slider).slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});
