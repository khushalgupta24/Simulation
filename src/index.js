import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import Lesson from './components/Lesson';

import store from './redux/store';
import { Provider } from 'react-redux';

window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Lesson />
  </Provider>
);
