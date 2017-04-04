"use strict";

import './top-menu.scss';

import isMobilejs from 'isMobilejs';

const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu__menu';
const $menuItem = '.top-menu__element';
const $menuTip = '.top-menu__tip';
const $menuLink = '.top-menu__link';
const $elementButtonParent = '.top-menu__element_parent';
const elementButtonActive = 'top-menu__element_active';
const $menuInner = '.top-menu__inner';
const $secondParent = '.top-menu__element_parent-second';
const $linkInner = '.top-menu__inner-link';


let menuWidth = 0;
let widthItems = 0;
let quantityItems = 0
let leftTip = 0
let halfTipWidth = 0
let tipWidth = 0;
let halfWidthPaddingItem = 0
let menuActive = false;
let marginLeftMenu = 0;

$(document).ready(function () {
    //рассчитываем месторасположение точки
    menuWidth = $($menu).outerWidth();
    $($menu).find($menuItem).each(function (key, value) {
        widthItems += $(this).outerWidth();
    });
    quantityItems = $($menu).find($menuItem).length;
    tipWidth = $($menu).find($menuTip).outerWidth();
    halfTipWidth = tipWidth/2;
    halfWidthPaddingItem = ($($menu).find($menuLink).outerWidth() - $($menu).find($menuLink).width())/2
    //leftTip = (menuWidth - widthItems)/quantityItems + halfTipWidth - halfWidthPaddingItem;
    leftTip = ((menuWidth - widthItems) / (quantityItems-1))/2 - halfTipWidth + halfWidthPaddingItem - 5;
    marginLeftMenu = leftTip - tipWidth;

    $($menu).find($menuTip).css('left', '-'+leftTip+'px');

    if (!isMobilejs.phone) {
        $($menu).css('margin-left', marginLeftMenu);
    }

    $($button).click(function () {
        menuActive = !menuActive;
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });

    if (isMobilejs.phone) {
        $($elementButtonParent).click(function () {
            $(this).toggleClass(elementButtonActive);
            $(this).find($menuInner).slideToggle();
        });
    }
});
