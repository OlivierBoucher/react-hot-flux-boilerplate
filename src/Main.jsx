/**
 * Created by olivier on 2016-03-26.
 */

import Polyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';
import Store from './stores/AbstractStore';

ReactDOM.render(
    (<Router />),
    document.getElementById('root')
);