import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import App from './App';
import ObchodnePodmienky from './Pages/ObchodnePodmienky';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

document.addEventListener(
    'keydown',
    function (e) {
        if (e.keyCode === 119) {
            // F8
            debugger;
        }
    },
    {
        capture: true,
    }
);

// ReactGA.initialize('G-KQ85GHF6KQ', {
//     debug: false,
// });

// history.listen((location) => {
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname);
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
