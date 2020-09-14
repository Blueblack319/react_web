import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Posts/Posts.module.css";

import Post from "../../components/Post/Post";
import axios from "../../axios";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    axios({
      method: "get",
      url: "/posts",
    })
      .then((response) => {
        const posts = response.data.slice(0, 5);
        const updatePosts = posts.map((post) => {
          return {
            ...post,
            author: "Crazybirdz",
          };
        });
        this.setState({ posts: updatePosts });
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error);
      });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={this.props.match.url + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              // {...this.props}
            />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
