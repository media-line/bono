"use strict";

import './quantity.scss';

import React from 'react';
import { setOnPage } from './../../js/actions';
import { connect } from 'react-redux';

class Quantity extends React.Component {
    render() {
        const buttonList = this.props.quantity.map((value) =>
            <button key={value.id} className={value.id == this.props.quantityType ? "quantity__button quantity__button_active" : "quantity__button"} onClick={() => this.props.onClick(value.id)}>
                {value.value}
            </button>
        );

        return (
            <div className="quantity">
                {buttonList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quantity: state.quantity,
        quantityType: state.pagination.onPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (number) => {
            dispatch(setOnPage(number));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
