import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// let's get some data
import comments from './data/comments';
import posts from './data/posts';

// create a default data object
// ES6 allows this shorthand when key & value name are the same
const defaultState = { 
    posts, 
    comments 
};

// create redux store where all the state lives
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
