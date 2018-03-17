import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component {
    render() { 
        // get the post from postId in path provided by the router
        const postId = this.props.params.postId;
        // get the post by first finding post index with the code === postId
        const postIndex = this.props.posts.findIndex(post => post.code === postId)
        const post = this.props.posts[postIndex];
        // get the comment with postId, if there are no comments, then default to []
        const postComments = this.props.comments[postId] || []
        return (
            <div className="single-photo">
                <Photo 
                    postIndex={postIndex} 
                    post={post} 
                    {...this.props} 
                /> 
                <Comment 
                    postComments={postComments} 
                    {...this.props} 
                />
            </div>
        )
    }
}
 
export default Single;
