import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostNew extends Component {
  render() {
    const {handleSubmit} = this.props;
    const {title, categories, content} = this.props.fields;

    function hasDanger(name) {
      if(name.touched && name.invalid) {
        return 'has-danger';
      }
      return ''
    }
    function hasError(name) {
      return name.touched ? name.error : '';
    }

    return (

      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${hasDanger(title)}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {hasError(title)}
          </div>
        </div>

        <div className={`form-group ${hasDanger(categories)}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {hasError(categories)}
          </div>
        </div>

        <div className={`form-group ${hasDanger(content)}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {hasError(content)}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if(!values.title) {
    errors.title = 'Enter a title!';
  }

  if(!values.categories) {
    errors.categories = 'Enter some categories!';
  }

  if(!values.content) {
    errors.content = 'Enter some content!';
  }

  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostNew);
