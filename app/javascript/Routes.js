import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import PostsList from './bundles/posts/PostsList';
import PostDetails from './bundles/posts/PostDetails';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <PostsList />
      </Route>
      <Route exact path="/posts/:id" component={PostDetails} />
    </Switch>
  );
}
