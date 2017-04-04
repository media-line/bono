"use strict";

export const SET_SORT_TYPE = 'SET_SORT_TYPE';
export const SET_SORT_FIELD = 'SET_SORT_FIELD';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGES = 'SET_PAGES';
export const SET_POST_QUANTITY = 'SET_POST_QUANTITY';
export const SET_ON_PAGE = 'SET_ON_PAGE';


export function setSortType(value) {
  return { type: SET_SORT_TYPE, value };
}

export function setSortField(id) {
  return { type: SET_SORT_FIELD, id };
}

export function setSearchString(string) {
  return { type: SET_SEARCH_STRING, string };
}

export function setPage(number) {
  return { type: SET_PAGE, number };
}

export function setPages(number) {
  return { type: SET_PAGES, number };
}

export function setPostQuantity(number) {
  return { type: SET_POST_QUANTITY, number };
}

export function setOnPage(number) {
  return { type: SET_ON_PAGE, number };
}

export function requestPosts() {
  return { type: REQUEST_POSTS };
}

export function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    data: json
  }
}

export function fetchData() {
    return dispatch => {
        dispatch(requestPosts());

        return fetch(`/ajax/find.php`)
        //return fetch(`/test.html`)
        .then(response => response.json())
        .then(json => {
            dispatch(receivePosts(json));
        });
    }
}
