"use strict";

import './detail-contact.scss';

import scriptjs from 'scriptjs';

import './../../modules/contact/contact';
import './../../modules/form/form';

const mapContainer = 'detail-contact__map';

let map;
let placemark;

$(document).ready(function() {
    scriptjs('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                center: [30, 30],
                zoom: 9,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
            });

            placemark = new ymaps.Placemark([30, 30], {
                balloonContent: '220980 г.Минск ул. Машиностроителей 30 офис 564'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/marker.png',
                iconImageSize: [40, 60],
                iconImageOffset: [-20, -60]
            });

            map.geoObjects.add(placemark);

            map.behaviors.disable('scrollZoom');
        }
    });
});
