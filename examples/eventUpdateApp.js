import React from 'react';

// Access nested data with props.children
class App extends React.Component {
  constructor() {
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
      <div>
        <textarea
          cols="30"
          rows="10"
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update} //Touch Screen
          onTouchMove={this.update}  //Touch Screen
          onTouchEnd={this.update}  //Touch Screen
          onPaste={this.update}/>
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}
export default App
