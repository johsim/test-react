# Docs

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
