import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
  // Lifecycle called one time just before component is going to be rendered to DOM.
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <Link to={"posts/" + post.id}>
          <li className="list-group-item" key={post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
