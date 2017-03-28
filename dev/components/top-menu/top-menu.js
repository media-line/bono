"use strict";

import './top-menu.scss';

import isMobilejs from 'isMobilejs';

const button = 'top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const menu = 'top-menu__menu';
const $elementButtonParent = '.top-menu__element_parent';

let menuActive = false;

$(document).ready(function () {
    $('.'+button).click(function () {
        menuActive = !menuActive;
        $('.'+menu).slideToggle();
        $('.'+button).toggleClass(activeButton);
    });

    if (isMobilejs.tablet || isMobilejs.phone) {
        $($elementButtonParent).click(function () {
            return false;
        });
    }
});
