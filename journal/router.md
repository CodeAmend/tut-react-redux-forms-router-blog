Routes can be nested like:
```
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
  </Route>
```
* In order to see nested routes you must:
  * {this.props.children} in target component


![](./blog-overview.png)


![](./route-home.png)

![](./route-posts.png)

![](./route-new.png)
