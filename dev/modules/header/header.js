"use strict";

import './header.scss';

import './../logo/logo.js';
import './../contact/contact.js';
import './../cabinet-button/cabinet-button.js';

const $header = '.header';

let headerHeight = '';
let promiseHeaderHeight = '';
let promiseHeaderHeightResize = '';

let resizeTimer;


function setHeaderHeight ($header, headerHeight) {
    return new Promise((resolve) => {
        headerHeight = $($header).outerHeight();
        resolve(headerHeight);
    });
}

$(window).on('load', function () {
    promiseHeaderHeight = setHeaderHeight ($header, headerHeight);

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            promiseHeaderHeightResize = setHeaderHeight ($header, headerHeight);
        }, 250);
    });
});

export {promiseHeaderHeight, promiseHeaderHeightResize};
