"use strict";

import './top-menu.scss';

const button = 'top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const menu = 'top-menu__menu';

let menuActive = false;

$(document).ready(function () {
    $('.'+button).click(function () {
        menuActive = !menuActive;
        $('.'+menu).slideToggle();
        $('.'+button).toggleClass(activeButton);
    });
});
