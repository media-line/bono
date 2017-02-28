'use strict';

import './news-slider.scss';

import './../single-news/single-news.js';

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const $slider = '.news-slider__slick';

$(document).ready(function () {
    $($slider).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="news-slider__arrows news-slider__arrows_prev"></button>',
        nextArrow: '<button class="news-slider__arrows news-slider__arrows_next"></button>',
        draggable: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                draggable: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
});
