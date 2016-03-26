/**
 * Created by olivier on 2016-03-26.
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';

ReactDOM.render(
    (<Router />),
    document.getElementById('root')
);