import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";

const ALL_BLOGPOSTS_QUERY = gql`
  query ALL_BLOGPOSTS_QUERY {
    blogPosts {
      id
      title
      proTipOne
      proTipTwo
      description
    }
  }
`;

class BlogPosts extends Component {
  render() {
    return (
      <Query query={ALL_BLOGPOSTS_QUERY}>
        {({ data, loading, error }) => {
          console.log(data);
          if (loading) return <p>loading...</p>;
          if (error) return <p>Error:(</p>;
          return (
            <div>
              {data.blogPosts.map(post => (
                <Link
                  key={post.id}
                  href={{
                    pathname: "/post",
                    query: { id: post.id }
                  }}
                >
                  <div id="blogpost" className="blogpost">
                    {post.title}
                    <div>{post.description.split(" ").length} words</div>
                  </div>
                </Link>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default BlogPosts;
