import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import { instance } from "../../axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
    error: false,
  };
  componentDidMount = () => {
    instance({
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
            clicked={this.handlePostSelected.bind(this, post.id)}
          />
        );
      });
    }
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost selectedId={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
