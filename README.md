# First project with Auth0 and React

This repo is based on the very good Auth0 and React tutorial provided on 
the Auth0 site available [here](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/)

### Execution notes

I am likely to forget the syntax for creating a new React app so I wanted
to have it in the notes.

```bash
npx create-react-app <foo>
```

Examples on the web include lots of legacy React guidance before ES6 class
based concepts were fully developed or adopted.  As a result the idiomatic
way to set initial state is not crystal clear as a beginner hunting for 
examples.  I found this [stack overflow post](https://stackoverflow.com/questions/30668326/what-is-the-difference-between-using-constructor-vs-getinitialstate-in-react-r)
to be helpful.  The specific guidance that cleared things up was this syntax for 
initializing the constructor for ES6 classes and **NOT** using `getInitialState()`.
Additionally, I appreciated the comment *In the constructor, you should always assign to `this.state` directly. Note that this is the only place where this is allowed. You should use `this.setState()`*

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }
}
```