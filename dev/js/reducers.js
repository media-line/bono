"use strict";

import { SET_SORT_TYPE, SET_SORT_FIELD, SET_ON_PAGE, REQUEST_POSTS, RECEIVE_POSTS, SET_SEARCH_STRING, SET_PAGE, SET_PAGES, SET_POST_QUANTITY } from './actions';

const initialState = {
    fields: [
        {id: 1, name: 'Фио', code: 'fio'},
        {id: 2, name: 'Должность', code: 'job'},
        {id: 3, name: 'Мобильный', code: 'phone'},
        {id: 4, name: 'Email', code: 'email'},
        {id: 5, name: 'Место работы', code: 'organization'},
        {id: 6, name: 'Основной функционал', code: 'functional'},
    ],
    quantity: [
        {id: 1, value: 10},
        {id: 2, value: 25},
        {id: 3, value: 50},
        {id: 4, value: 100},
    ],
    sortType: 'asc',
    sortField: 'fio',
    searchString: '',
    quantityType: 1,
    postQuantity: 0,
    pagination: {
        currentPage: 1,
        onPage: 1,
        pages: 1,
    },
    employees: {
        isFetching: false,
        data: [],
    }
};

function sortType (state = initialState.sortType, action) {
    switch (action.type) {
        case SET_SORT_TYPE:
            return action.value;
        default:
            return state;
    }
}

function sortField (state = initialState.sortField, action) {
    switch (action.type) {
        case SET_SORT_FIELD:
            return action.id;
        default:
            return state;
    }
}

function quantity (state = initialState.quantity, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function searchString (state = initialState.searchString, action) {
    switch (action.type) {
        case SET_SEARCH_STRING:
            return action.string;
        default:
            return state;
    }
}

function pagination (state = initialState.pagination, action) {
    switch (action.type) {
        case SET_PAGE:
            return Object.assign({}, state, {
                currentPage: action.number
            });
        case SET_PAGES:
            return Object.assign({}, state, {
                pages: action.number
            });
        case SET_ON_PAGE:
            return Object.assign({}, state, {
                onPage: action.number
            });
        default:
            return state;
    }
}

function postQuantity (state = initialState.postQuantity, action) {
    switch (action.type) {
        case SET_POST_QUANTITY:
            return action.number;
        default:
            return state;
    }
}


function fields (state = initialState.fields, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function employees (state = initialState.employees, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });
        default:
            return state;
    }
}

const reducers = {
    sortType,
    sortField,
    quantity,
    searchString,
    fields,
    employees,
    pagination,
    postQuantity
}

export default reducers;
