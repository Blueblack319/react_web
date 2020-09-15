import React, { Component, Suspense } from "react";
import { Route, NavLink, withRouter, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "../Posts/Posts";
// import NewPost from "../Posts/NewPost/NewPost";
// import asyncComponent from "../../hoc/asyncComponent";

// const AsyncComponent = asyncComponent(() => import("../Posts/NewPost/NewPost"));
const NewPost = React.lazy(() => import("../Posts/NewPost/NewPost"));

class Blog extends Component {
  // state = {
  //   auth: true,
  // };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="home-active"
                  activeStyle={{
                    color: "#2ecc71",
                    textDecoration: "underline",
                  }}
                >
                  Posts
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
        <Switch>
          {/* {this.state.auth ? (
            <Route path="/new-post" exact component={AsyncComponent} />
          ) : null} */}
          <Route path="/posts" component={Posts} />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/new-post" exact component={NewPost} />
          </Suspense>
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
