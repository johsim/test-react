import React from 'react';
import ReactDOM from 'react-dom';

// Access nested data with props.children
class App extends React.Component {
  constructor() {
    super();
    this.state = {increasing: false}
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
  }


  update() {
    ReactDOM.render(<App val={this.props.val+1}/>, document.getElementById('root'))
  }
  render() {
    console.log(this.state.increasing)
    return (
      <button onClick={this.update.bind(this)}>
        {this.props.val}
      </button>
    )
  }
}

App.defaultProps = {val: 0}

export default App
