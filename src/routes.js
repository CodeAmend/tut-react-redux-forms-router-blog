import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostsShow from './components/posts_show';

import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
)
