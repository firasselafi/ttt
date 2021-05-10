import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
       divs: []     // set initial state with one div
    }
  }

  addNewRow(){
    let nDivs = this.state.divs.slice(0);
    nDivs.push('newDiv');
    this.setState({divs: nDivs });
  }

  render() {
    return (
      <div>
      <button onClick={() => this.addNewRow()}>Add Row</button>

      {this.state.divs.map((elm, i) => <div key={i}>elm</div>)}
    </div>
    )
  }
}

export default Appointments