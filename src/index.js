import React  from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible'
import './index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'
import * as serviceWorker from './serviceWorker';
import Root from './router/router'

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

