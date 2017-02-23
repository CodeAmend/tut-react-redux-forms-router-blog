import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, test} from '../actions/index';

class PostsIndex extends Component {
  // Lifecycle called one time just before component is going to be rendered to DOM.
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    if (!this.props) {
      return (<div>Not all </div>);
    }
    console.log(this.props);
    return (
      <div>List of blog posts</div>
    );
  }
};

export default connect(null, {fetchPosts})(PostsIndex);
