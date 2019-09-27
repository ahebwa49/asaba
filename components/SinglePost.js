import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import SinglePostPage from "./SinglePostPage";

const SINGLE_BLOGPOST_QUERY = gql`
  query SINGLE_BLOGPOST_QUERY($id: ID!) {
    blogPost(id: $id) {
      id
      title
      proTipOne
      proTipTwo
      description
    }
  }
`;

class SinglePost extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={SINGLE_BLOGPOST_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          console.log(data);
          if (loading) return <p>loading...</p>;
          if (error) return <p>Error:(</p>;

          return <SinglePostPage post={data.blogPost} />;
        }}
      </Query>
    );
  }
}
export default SinglePost;
