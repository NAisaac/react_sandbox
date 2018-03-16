import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// take state and expose them as props
function mapStateToProps (state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}
// take dispatch functions (action functions) and expose them as props
function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// use Connect to infuse Redux store's state and action creators into our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
