import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import PostsList from './bundles/posts/PostsList';
import PostDetails from './bundles/posts/PostDetails';
import CreatePost from './bundles/posts/CreatePost';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <PostsList />
      </Route>
      <Route exact path="/posts/new" component={CreatePost} />
      <Route exact path="/posts/:id" component={PostDetails} />
    </Switch>
  );
}
