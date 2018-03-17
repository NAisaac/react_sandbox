import React from 'react';

class Comment extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    handleRemove(i) {
        this.props.removeComment(this.props.params.postId, i);
    }

    render() { 
        return (
            <div className="comments">
                {this.props.postComments.map((comment, i) => {
                    // render individual comment
                    return (
                        <div className="comment" key={i}>
                            <p>
                                <strong>{comment.user}</strong>
                                {comment.text}
                                <button 
                                    className="remove-comment" 
                                    onClick={() => this.handleRemove(i)}
                                >&times;
                                </button>
                            </p>
                        </div>
                    );
                })}
                <form ref="commentForm" className="comment-form"  onSubmit={this.handleSubmit}>
                    <input ref="author" type="text" placeholder="author" />
                    <input ref="comment" type="text" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
          )
    }
}
 
export default Comment;