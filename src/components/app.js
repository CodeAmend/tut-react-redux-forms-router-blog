import React, { Component } from 'react';
import Posts from '../components/posts_index';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Header malarkey</h1>
        {this.props.children}
        <h5>Footer stuff</h5>
      </div>

    );
  }
}
