"use strict";

import './top-menu.scss';

import isMobilejs from 'isMobilejs';

const button = 'top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const menu = 'top-menu__menu';
const $elementButtonParent = '.top-menu__element_parent';
const elementButtonActive = 'top-menu__element_active';
const $menuInner = '.top-menu__inner';

let menuActive = false;

$(document).ready(function () {
    $('.'+button).click(function () {
        menuActive = !menuActive;
        $('.'+menu).slideToggle();
        $('.'+button).toggleClass(activeButton);
    });

    if (isMobilejs.tablet || isMobilejs.phone) {
        $($elementButtonParent).click(function () {
            $(this).toggleClass(elementButtonActive);
            $(this).find($menuInner).slideToggle();
            return false;
        });
    }
});
