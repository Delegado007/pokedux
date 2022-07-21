import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux/es/exports';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
//con thunk podemos agregar logica asincrona a los actions creator
const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(
  rootReducer,
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
