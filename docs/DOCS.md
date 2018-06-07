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
