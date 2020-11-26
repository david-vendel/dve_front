import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import './index.css';
import Layout from './components/Layout';
import Home from './Pages/Home';
import ObchodnePodmienky from './Pages/ObchodnePodmienky';
import { Router, Route, Switch } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';

const App = () => {
    const history = createBrowserHistory();

    // Initialize google analytics page view tracking
    history.listen((location) => {
        ReactGA.initialize('G-KQ85GHF6KQ');
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });

    return (
        <Router history={history}>
            {/* <ScrollToTop /> */}
            <CookieConsent buttonText="Rozumiem">
                Tento web používa súbory cookies. Prechádzaním webu vyjadrujete
                súhlas s ich používaním.
            </CookieConsent>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/obchodne-podmienky"
                        component={ObchodnePodmienky}
                    />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
