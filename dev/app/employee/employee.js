"use strict";

import './employee.scss';

import React from 'react';
import { connect } from 'react-redux';

import { fetchData, setPostQuantity } from './../../js/actions';

import Search from './../search/search';
import Quantity from './../quantity/quantity';
import Table from './../table/table';
import Pagination from './../pagination/pagination';

import 'whatwg-fetch';

class Employee extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div className="employee">
                <div className="employee__header">
                    <div className="employee__quantity">
                        Показать записи:

                        <div className="employee__quantity-block">
                            <Quantity />
                        </div>
                    </div>

                    <div className="employee__search">
                        <Search />
                    </div>
                </div>

                <Table />

                <Pagination />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchData());
        },

        setPostQuantity: () => {
            dispatch(setPostQuantity());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
