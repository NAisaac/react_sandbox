// a reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of current state
// and edits/updates the state and then returns the new state

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i), // before the one being updated
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) // after the one being updated
            ]
        default:
            return state;
    }
}

export default posts;