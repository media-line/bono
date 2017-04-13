"use strict";

import './table.scss';

import HeadCell from './../head-cell/head-cell';
import EmployeeItem from './../employee-item/employee-item';
import { setSortType, setSortField, setPostQuantity } from './../../js/actions';
import { connect } from 'react-redux';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.setPostQuantity = this.setPostQuantity.bind(this);
    }

    componentDidUpdate () {
        this.setPostQuantity(this.props.employees.length);
    }

    setPostQuantity (number) {
        this.props.setPostQuantity(number);
    }

    render() {
        const headFieldsList = this.props.fields.map((field) =>
            <HeadCell key={field.id} title={field.name} sort={field.code==this.props.sortField ? this.props.sortType : null} onClick={() => this.props.onFieldClick(field.code, this.props.sortField, this.props.sortType)} />
        );

        let employeesList;
        if (this.props.isFetching) {
            employeesList = <div key="0" className="table__loading">Загрузка....</div>;
        } else {
            if (this.props.currentPageEmployees.length > 0) {
                employeesList = this.props.currentPageEmployees.map((employee) =>
                    <EmployeeItem key={employee.id} fio={employee.fio} job={employee.job} realPhone={employee.realPhone} phone={employee.phone} email={employee.email} organization={employee.organization} functional={employee.functional} />
                );
            } else {
                employeesList = <div key="0" className="table__empty">По данному запросу ничего не найдено</div>;
            }
        }

        return (
            <div className="table">
                <div className="table__header">
                    <div className="table__header-row">
                        {headFieldsList}
                    </div>
                </div>

                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="table__animate"
                    className="table__body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {employeesList}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let unsortEmployees = state.employees.data;
    let sortEmployees = [];
    let currentPageEmployees = [];

    unsortEmployees.forEach( (item, i) => {
        if (state.searchString.length > 0) {
            for (let key in item) {
                if (String(item[key]).toLowerCase().indexOf(state.searchString.toLowerCase()) != -1) {
                    sortEmployees.push(item);
                    break;
                }
            }
        } else {
            sortEmployees.push(item);
        }
    });

    function compare(first, second) {
        if (first[state.sortField] < second[state.sortField]) {
            return state.sortType == 'asc' ? -1 : 1;
        }
        if (first[state.sortField] > second[state.sortField]) {
            return state.sortType == 'asc' ? 1 : -1;
        }
        return 0;
    }
    sortEmployees.sort(compare);

    let onPage = 0;
    let firstPost = 0;
    let lastPost = 0;
    state.quantity.forEach((item, i) => {
        if (item.id == state.pagination.onPage) {
            onPage = item.value;
        }
    });
    firstPost = onPage*state.pagination.currentPage - onPage;
    lastPost = onPage*state.pagination.currentPage;
    for (let i = firstPost; i < lastPost; i++) {
        if (sortEmployees[i] != undefined) {
            currentPageEmployees.push(sortEmployees[i]);
        }
    }

    return {
        sortType: state.sortType,
        sortField: state.sortField,
        fields: state.fields,
        employees: sortEmployees,
        currentPageEmployees: currentPageEmployees,
        isFetching: state.employees.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFieldClick: (code, currentCode, currentType) => {
            if (currentCode == code) {
                if (currentType == 'asc') {
                    dispatch(setSortType('desc'));
                } else {
                    dispatch(setSortType('asc'));
                }
            } else {
                dispatch(setSortType('asc'));
                dispatch(setSortField(code));
            }
        },

        setPostQuantity: (number) => {
            dispatch(setPostQuantity(number));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
