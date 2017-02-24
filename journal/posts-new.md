![](./route-new.png)

###### A user can create a new post
* scaffold out the component used to create form
* add component to routes file as a new url

> we added a new route for the new post
> PostNew was created to be the new post component

* implement a button in the post index component
* Add the `form` to the PostNew component
  * when user submits it should call an actionCreator to save blog post
* create the ActionCreator and update our reducer


We installed redux-forms
* first we tell reduxForm what it is in charge of
```
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content']
})(PostNew);
```

* we wrap the Component
* we give the form a name (unique for potential multiple forms)
* we give it fields
* next we wite them up
