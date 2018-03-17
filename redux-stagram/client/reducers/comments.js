// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state
// and then returns an updated state

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            console.log('adding comment');
            // return state with new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            console.log('removing comment')
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1) 
            ]; 
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    console.log(action);
    if(typeof action.postId !== 'undefined') {
         return {
             // take current state
             ...state,
             // overwrite with the new comment
             [action.postId]: postComments(state[action.postId], action)
         }
    }
    return state;
}

export default comments;