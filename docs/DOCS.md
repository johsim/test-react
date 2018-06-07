# REACT

## DOM
Programming interface for HTML and XML documents. It represents the pace so that program can chagne the document structure, style or contents.

```js
var paragraphs = document.getElementsByTagName("P");
```

A diff is done to a shadow DOM, so that the elements that are changed is updated

`node` is how DOM calls an element

## Callback function

Function that's passed to another function

## Stateless component
Cannot contain a state

```js
const App = ()  => <h1>Hello World</h1>
```

## Prop

Values that are ment to be sent in as static values to the component

## State

Represents values that are managed and updated by the component

## React Components

A React component can output or render other React Components

## Arrow function (es6 spec)
```js
    blah  => "this is" + blah
    // means
    function (blah) {
        return "this is" + blah
    }
```

## Mount

Add a new element to the DOM tree == MOUNT

## Keyword Will/did

Will = before render
Did = after render

Like Setup/Teardown thing


## List actions

Act on an existing list.



### map

Let a function act on each element in the list and return a new list.

```javascript
    a = [1, 2, 3]
    let a_new = a.map( (number) => number * 2)
    console.log(a_new) // expects [2, 4 ,6]
```

### forEach

Does not let you change the list, but still act on each element

```javascript
    a = [1, 2, 3]
    a.forEach( (number) => console.log(number)) // expects 1 2 3
```

### filter

Returns a list with the elements where the filter function returns true

```javascript
    a = [1, 2, 3]
    let a_new = a.filter( (number) => number > 1)
    console.log(a_new) // expects [2, 3]
```

# REDUX

Everything is stored as a state. The only way to change the state tree is to dispatch actions.

## Reducer

A reducer handles actions and update the previous state to next state.

```javascript
import { createStore } from 'redux';

const counter = (state = 0, action) => { // state=0 is initial state
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state + 1
        default:
            return state // Handles other actions
    }
}
```

## Combine Reducers

A good pattern in Redux is to let different subreducers handle different parts
of the state tree.

There is also a function called `CombineReducers` that handles this
functionality.

## Store

Holds the complete state tree of the application. Has a reducer as input

```javascript
const store = createStore(counter); // creates
```

## Subscribe

If set to render, the render function runs everytime state changes

```javascript
store.subscribe(render);

```

## Spread operator

Expands an array to fit to fit arguments in a function.


```javascript
const fn = (x,y,z) => x + y + z

let x = [1,2,3]

console.log(fn(...x)) //expects 6
```

## Best practices

Having a component use getState(...)  is bad practice, because it makes the components
difficult to test.

## Provider

The provider has one purpose, to “provide” the store to its child components.

## Context

Context can be used to implicitly pass the store down to child components.
It's dependency injection.


## connect

Connects the store to the component.

Handles context, i.e makes the store available to the component.

Makes the component subscribe to the changes of the state (when component is mounted)

Unsubscribes to the state when the component is unmounted.

Pass the props (with the state included) and the dispatch action as input to the component

```javascript
const App = ({bla, dispatch}) => {
    <div>
        <button onClick={dispatch}> {bla} </button>
    </div>
}


export default connect( // Creates a container component
  (bla: State): state.bla., // map state to props, will be updated everytime state changes
   dispatchBlah: () => dispatch({type: BLA}),
  }), // function that is used to dispatch actions
)(App); // Presentational component to be connected to the redux store
```

## Action creators

If an action is dispatched from different places, it can be a good idea
to declare it separately, to make sure it's dispatched the same way across the
application. It also makes the app more maintainable.
