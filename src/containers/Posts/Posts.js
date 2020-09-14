import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";

import "../Posts/Posts.module.css";

import Post from "../../components/Post/Post";
import FullPost from "../../containers/Posts/FullPost/FullPost";
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

  handlePostSelected = (id) => {
    this.props.history.push("/posts/" + id);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            title={post.title}
            author={post.author}
            key={post.id}
            clicked={this.handlePostSelected.bind(this, post.id)}
          />
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default withRouter(Posts);
