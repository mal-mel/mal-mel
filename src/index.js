import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './compoments/app';
import ErrorBoundry from './compoments/error-boundry';

import { ApiServiceProvider } from './compoments/api-service-context';
import ApiService from './services/api-service';

import store from './store';


const apiService = new ApiService();

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundry>
            <ApiServiceProvider value={ apiService }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ApiServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
