// Redux can only have 1 reducer, so here we combine all the reducers

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
