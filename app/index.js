import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import {browserHistory} from 'react-router';
import configStore from './config/store';
import _Root from './containers/_Root';
const store = configStore();

ReactDOM.render(<_Root history={browserHistory} store={store} />, 
                  document.getElementById('app'));