import "normalize.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../src';


ReactDOM.render(
    <div>

        <div
            style={{
                width: 400,
                margin: "10px auto",
                border: '1px solid #ccc',
                padding: 5
            }}
        >
            <div className="icons">
                <div><Icon type="search" /></div>
                <div><Icon type="loading" spin /></div>
            </div>
        </div>
    </div>
    , demo);