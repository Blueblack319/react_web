import React, { Component } from "react";
import { Route, NavLink, withRouter, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
import Posts from "../Posts/Posts";
import NewPost from "../Posts/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
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
                    pathname: "/new-post",
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
        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
