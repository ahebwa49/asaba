import React, { Component } from "react";

class SinglePostPage extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <div className="title">{post.title}</div>
        <hr />
        <div className="description">{post.description}</div>
      </div>
    );
  }
}
export default SinglePostPage;
