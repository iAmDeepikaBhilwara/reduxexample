import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import './index.css';
import App from './components/App';
import Display from './components/Display';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
    <Display/>
  </Provider>,
  document.getElementById('root')
)
