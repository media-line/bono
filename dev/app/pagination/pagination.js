"use strict";

import './pagination.scss';

import { connect } from 'react-redux';
import React from 'react';

import { setPage } from './../../js/actions';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate () {
        let currentPage = this.props.currentPage;
        if (this.props.currentPage != 0) {
            if (this.props.currentPage > Math.ceil(this.props.postQuantity/this.props.onPage)) {
                this.props.setPage(Math.ceil(this.props.postQuantity/this.props.onPage));
            }
        } else {
            if (this.props.postQuantity > 0) {
                this.props.setPage(1);
            }
        }
    }

    render() {
        let pagination = [];
        if (Math.ceil(this.props.postQuantity/this.props.onPage) > 1) {
            for (let i=1; i <= Math.ceil(this.props.postQuantity/this.props.onPage); i++) {
                pagination.push(
                    <div key={i} className="pagination__item">
                        <span className={i == this.props.currentPage ? 'pagination__link pagination__link_current' : 'pagination__link'} onClick={() => this.props.setPage(i)}>
                            {i}
                        </span>
                    </div>
                );
            }
        }

        return (
            <div className="pagination">
                {pagination}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let onPage = 0;
    state.quantity.forEach((item, i) => {
        if (item.id == state.pagination.onPage) {
            onPage = item.value;
        }
    });

    return {
        currentPage: state.pagination.currentPage,
        onPage: onPage,
        postQuantity: state.postQuantity,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (number) => {
            dispatch(setPage(number));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
