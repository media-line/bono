"use strict";

import './slider.scss';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';

const $slider = '.slider';
const $dots = '.slider__dots';
const $dot = '.slider__dot';
const dotActive = 'slider__dot_active';

function setSlide (active) {
    $($slider).slick('slickGoTo', active);
}

function setActiveDot (active) {
    $($dot).removeClass(dotActive);

    $($dots).each(function () {
        $(this).find($dot).eq(active).addClass(dotActive);
    });
}

$(document).ready(function () {
    $($slider).slick({
        arrows: false,
        fade: true,
        slidesToShow: 1,
    });

    $($dot).click(function () {
        setSlide ($(this).index());
        setActiveDot ($(this).index());
    });

    $($slider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setActiveDot (nextSlide);
    });
});
