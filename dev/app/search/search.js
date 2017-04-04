"use strict";

import './search.scss';

import React from 'react';
import { connect } from 'react-redux';

import { setSearchString } from './../../js/actions';


class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search__form">
                    <input type="text" className="search__input" placeholder="Поиск по сайту" value={this.props.search} onChange={this.props.onChange} />
                    <button className="search__button"></button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.searchString
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            dispatch(setSearchString(e.target.value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
