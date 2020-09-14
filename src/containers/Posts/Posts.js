import React, { Component } from "react";

import "../Posts/Posts.module.css";

import Post from "../../components/Post/Post";
import axios from "../../axios";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    console.log(this.props);
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

  handlePostSelected = (id) => {
    this.setState({ selectedPost: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={this.handlePostSelected.bind(this, post.id)}
            // {...this.props}
          />
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
