import React from 'react';

class Comment extends React.Component {
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>comment.user</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }

    render() { 
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form className="comment-form">
                    <input type="text" placeholder="author" />
                    <input type="text" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
          )
    }
}
 
export default Comment;