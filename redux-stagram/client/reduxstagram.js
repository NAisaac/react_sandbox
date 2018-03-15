// any time something is imported from 'name' this means it's coming from node_modules
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// Bind React with Redux; Provider will expose store to the application 
import { Provider } from 'react-redux';
import store, { history } from './store';

// nested 
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

);

render(router, document.getElementById('root'));


