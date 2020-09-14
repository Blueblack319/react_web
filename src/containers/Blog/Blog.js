import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./Blog.css";
import Posts from "../Posts/Posts";
import NewPost from "../Posts/NewPost/NewPost";
import FullPost from "../Posts/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="home-active"
                  activeStyle={{
                    color: "#2ecc71",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: this.props.match.url + "new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  exact
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" render={() => <h1>Home</h1>} />
        <Route path="/new-post" exact render={() => <h1>New Post</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" component={FullPost} />
      </div>
    );
  }
}

export default withRouter(Blog);
