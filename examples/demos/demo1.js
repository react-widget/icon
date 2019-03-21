import React, { Component } from 'react';
import icons from './icons.json';
import Icon from '../../src/index';


export default class DEMO extends Component {

    render() {
        return (
            <div>
                {
                    icons.map(icon => (
                        <div className="icon-item">
                            <Icon type={icon} />
                            <div>{icon}</div>
                        </div>
                    ))
                }
            </div >

        )

    }
}
