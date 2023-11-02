import React from 'react';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { combineReducers, applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './sagas';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const reducer = combineReducers({reducers});
export const InitialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [applyMiddleware(...middleware)];
const store = createStore(reducer,InitialState,composeEnhancers(...enhancers), )

sagaMiddleware.run(rootSaga);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
