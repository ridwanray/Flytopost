import React from 'react';
import ReactDOM from 'react-dom';
import Flytopost from './Components/App/Flytopost';
import {provider} from 'redux';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
ReactDOM.render(<Flytopost/>, document.getElementById('app'));