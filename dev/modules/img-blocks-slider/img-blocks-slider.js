'use strict';

import './img-blocks-slider.scss';

import './../img-block/img-block.js';

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const $slider = '.img-blocks-slider_slider';

$(document).ready(function () {
    $($slider).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="img-blocks-slider__arrows img-blocks-slider__arrows_prev"></button>',
        nextArrow: '<button class="img-blocks-slider__arrows img-blocks-slider__arrows_next"></button>',
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
