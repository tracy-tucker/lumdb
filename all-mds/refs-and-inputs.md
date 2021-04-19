# Refs
**Refs** - A reference to a DOM element. Makes it easier to interact with your DOM elements.
Typically used when you have a form.
THIS IS AN EXAMPLE OF AN UNCONTROLLED INPUT - The user is controlling what is inputed.

Types of inputs are text inputs, checkboxes, radio buttons, and (as mentioned) forms.

Example of using ref:

`<input type="text" ref={(input) => this.text = input } />`

This is the what the ref is doing:
```
const name = function(input) {
    this.input = input;
}
```

Meaning, the DOM element of this `input` is always going to be `this.text`.

# Controlled Inputs

With controlled inputs, React sets the value from the state.
When the user types into the input field, the `onChange` handler updates the state with hte input's value accessed from the event object: `event.target.value`

Example:
`<input type="text" onChange={this.updateInput} value={this.state.input}>`

`updateInput` is a function that handles state change with `setState`:

```
updateInput = (event) => {
    this.setState({
        input: event.target.value
    })
}
```