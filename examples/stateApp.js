import React from 'react';

// Can contain state
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
   }
  }
  update( e ){ // custom method e=event
    this.setState({txt: e.target.value})
  }
  render() {
    let txt = this.state.txt
    let cat = this.state.cat
    return (
      <div>
        <h1>{txt} - {cat} </h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) => // updates the state of our parent component
      <input type="text" onChange={props.update} />

export default App
