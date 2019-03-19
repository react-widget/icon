import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import "./style/index.scss";

export default class Icon extends Component {
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.string.isRequired,
        spin: PropTypes.bool,
    }

    static defaultProps = {
        prefixCls: 'rw-icon',
        spin: false,
    }

    render() {
        const { prefixCls, type, spin, className, ...other } = this.props;
        return <i {...other} className={classNames(prefixCls, `${prefixCls}-${type}`, className, { [`${prefixCls}-spin`]: spin })} />;
    }
}
