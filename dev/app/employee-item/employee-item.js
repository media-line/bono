"use strict";

import './employee-item.scss';

import React from 'react';

class EmployeeItem extends React.Component {
    render() {
        let phone;
        let email;

        if (this.props.realPhone != '-') {
            phone = <a href={"tel:" + this.props.realPhone}>{this.props.phone}</a>;
        } else {
            phone = <span>{this.props.phone}</span>;
        }

        if (this.props.email != '-') {
            email = <a href={"mailto:" + this.props.email}>{this.props.email}</a>;
        } else {
            email = <span>{this.props.email}</span>;
        }


        return (
            <div className="employee-item">
                <div className="employee-item__cell">
                    {this.props.fio}
                </div>

                <div className="employee-item__cell">
                    {this.props.job}
                </div>

                <div className="employee-item__cell employee-item__cell_phone">
                    {phone}
                </div>

                <div className="employee-item__cell">
                    {email}
                </div>

                <div className="employee-item__cell">
                    {this.props.organization}
                </div>

                <div className="employee-item__cell">
                    {this.props.functional}
                </div>
            </div>
        );
    }
}

export default EmployeeItem;
