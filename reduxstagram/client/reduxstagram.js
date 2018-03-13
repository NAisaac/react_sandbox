// any time something is imported from 'name' this means it's coming from node_modules
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';

render(<Main/>, document.getElementById('root'));


