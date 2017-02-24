import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostNew extends Component {
  render() {
    const {handleSubmit} = this.props;
    const {title, categories, content} = this.props.fields;
    console.log(title);
    return (
      
      <form onSubmit={this.handleSubmit}>
        <h3>Create A New Post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
})(PostNew);
