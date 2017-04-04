"use strict";

import './head-cell.scss';

import React from 'react';

class HeadCell extends React.Component {
    render() {
        return (
            <div className={this.props.sort ? "head-cell head-cell_active-" + this.props.sort : 'head-cell'} onClick={this.props.onClick} >
                <span className="head-cell__wrapper">{this.props.title}</span>
            </div>
        );
    }
}

export default HeadCell;
