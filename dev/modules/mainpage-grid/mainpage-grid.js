'use strict';

import './mainpage-grid.scss';

import './../two-column-grid/two-column-grid';
import './../info/info';

import isMobile from 'ismobilejs';

const $leftColumn = '.mainpage-grid__info-list';
const $rightColumn = '.mainpage-grid__content';
const $content = '.mainpage-grid__wrapper';
const $readmore = '.mainpage-grid__readmore';
const $readmoreBlock = '.mainpage-grid__readmore-block';
const readmoreBlockActive = 'mainpage-grid__readmore-block_active';

let heightLeftColumn = 0;
let heightContentColumn = 0;
let readmoreHeight = 40;
let readmoreTextOpen = 'Читать подробнее';
let readmoreTextClose = 'Скрыть';

$(document).ready(function () {
    heightLeftColumn = $($leftColumn).outerHeight();
    heightContentColumn = $($content).outerHeight();

    if (isMobile.phone) {
        $($content).css('height', (heightLeftColumn + readmoreHeight)*2 + 'px');
    } else {
        $($content).css('height', heightLeftColumn + readmoreHeight + 'px');
    }

    $($readmore).click(function () {
        if ($(this).closest($readmoreBlock).hasClass(readmoreBlockActive)) {

            if (isMobile.phone) {
                $($content).css('height', (heightLeftColumn + readmoreHeight)*2 + 'px');
            } else {
                $($content).css('height', heightLeftColumn + readmoreHeight + 'px');
            }
            
            $(this).closest($readmoreBlock).removeClass(readmoreBlockActive);
            $(this).html(readmoreTextOpen);
        } else {
            $($content).css('height', heightContentColumn + 'px');
            $(this).closest($readmoreBlock).addClass(readmoreBlockActive);
            $(this).html(readmoreTextClose);
        }
    });
});
