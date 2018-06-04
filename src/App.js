import React from 'react';
import ReactDOM from 'react-dom';

// Access nested data with props.children
class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    console.log('componentWillMount') //only fire once (in this case)
  }
  render(){
    console.log('render')
    return <button onClick={this.update}>{this.state.val}</button>
  }
  componentDidMount() {
    console.log('componentDidMount') //only fire once after first render (in this case)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount') //only fire once after first render (in this case)
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
