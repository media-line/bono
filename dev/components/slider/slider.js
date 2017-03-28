"use strict";

import './slider.scss';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import {promiseHeaderHeight, promiseHeaderHeightResize} from './../../modules/header/header';

const $slider = '.slider';
const $slide = '.slider__slide';
const $dots = '.slider__dots';
const $dot = '.slider__dot';
const dotActive = 'slider__dot_active';


let resizeTimer;

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

    $($slider).slick('reinit');

    $($dot).click(function () {
        setSlide ($(this).index());
        setActiveDot ($(this).index());
    });

    $($slider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setActiveDot (nextSlide);
    });
});

$(window).on('load', function () {
    promiseHeaderHeight.then(
        result => {
            $($slide).height($(window).outerHeight() - result);
            $($dots).height($(window).outerHeight() - result);
            $($slider).slick('reinit');
        }
    );

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            promiseHeaderHeightResize.then(
                result => {
                    $($slide).height($(window).outerHeight() - result);
                    $($dots).height($(window).outerHeight() - result);
                    $($slider).slick('reinit');
                }
            );
        }, 250);
    });
});
