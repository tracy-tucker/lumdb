# Props and PropTypes

You need to use a series of rules to know which props are coming in to your component.

`npm install prop-types`

This allows us to specify what actual props we are expecting.

Using prop-types, you can set up static propTypes. If anything outside of the static props tries to pass in, the app will complain and throw an error.

```
static propTypes = {
    movie: PropTypes.object
}
```
Using `shape` allows you to define
```
static propTypes = {
    movie: PropTypes.shape({
        // Shape is a method that allows you to pass in another object that you can define specific props.
        title: PropTypes.string
    })
}
```

## PropDefault and PropType Rules
1. You should have a PropType for every single prop that is used in your component.
2. You must either have `isRequired` or `defaultProp` for each used prop. You will be alerted every single time on debugging if the wrong prop type is trying to pass in or get through.

```
export default class Movie extends Component {
    // Define your prop types
    // .isRequired on EVERY REQUIRED PROP. Does not crash app,
    // but will not display error object.
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        desc: PropTypes.string
    }
    // You cannot have defaultProps on nested props.
    static defaultProps = {
        desc: 'Description not available'
    }
    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}
```