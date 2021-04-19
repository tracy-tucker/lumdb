**Constructer** - When the component is first created, the constructor is called. DO NOT have access to *this*. You this one for most situations. Used to initialize state, although not used as often with new React. Developers can just initialize the state (`state = {}`).

**ComponentWillMount** - Fired before the component renders. Has access to *this*. You this one to make changes to your state without a second render. Not used very often. **NEW NOTE** This component is now **UNSAFE** with newer versions of React. The new syntax = UNSAFE_componentWillMount.

**Render** - It constructs itself and it WillMount. The process of mounting the component.

**ComponentDidMount** - After component is mounted (rendered). This triggers a re-render because the component has rendered and state has changed. Used alot with third party APIs that require the DOM to be loaded FIRST before calling the API. Also used with CSS animations.

**ComponentWillReceiveProps** Available BEFORE the component receives props.

**ShouldComponentUpdate** - Not used often, but allows you to have control over whether a component is rendered or not. Depends on next props and next state and compares to current props and current state so you can decide on whether or not to update the component at all.

**ComponentDidUpdate** - Invoked immediately after a render takes place.

**ComponentWillUnmount** - Used right before a component is destroyed from the React hierarchy.

**ComponentDidCatch** - Used for handling errors. New to React 16.

**Deprecated Lifecycle Methods**
`componentWillMount`
`componentWillRecieveProps`
`componentWillUpdate`

These lifecycle methods have often been misunderstood and subtly misused; furthermore, we anticipate that their potential misuse may be more problematic with async rendering. Because of this, we will be adding an “UNSAFE_” prefix to these lifecycles in an upcoming release. (Here, “unsafe” refers not to security but instead conveys that code using these lifecycles will be more likely to have bugs in future versions of React, especially once async rendering is enabled.)

By version 17.0, React will remove `componentWillMount`, `componentWillReceiveProps` and `componentWillUpdate` all together and only the `UNSAFE_` names will work.

To test some of these, place the following code AFTER `class App extends Component {`

```
constructor(props) {
    super(props);
    console.log('constructor')
  }

  UNSAFE_componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('mounted')
  }
  ```