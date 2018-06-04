import React from 'react';
import PropTypes from 'prop-types';

// Can contain state
class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
        <b>Bold</b>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App
