/**
 * Created by olivier on 2016-03-26.
 */

import React, { Component } from 'react';
import { Router as ReactRouter, Route, IndexRoute, Link, browserHistory } from 'react-router';

export default class Router extends Component{
    static propTypes = {
        history : React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.history = props.history || browserHistory;
    }

    render() {
        return (
            <ReactRouter history={this.history}>
                { /* Enter routes here*/ }
            </ReactRouter>
        )
    }
}