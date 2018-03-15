// action creator literally creates and returns an action object

// like button a.k.a. increment 
export function increment(post_index) {
    return {
        type: 'INCREMENT_LIKES',
        post_index
    }
}
// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}
// remove comment
export function removeComment(postId, comment_index) {
    return {
        type: 'REMOVE_COMMENT',
        comment_index,
        postId
    }
}
