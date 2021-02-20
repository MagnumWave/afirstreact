import React from 'react';
import './App.css';
import Table from './Table.js'



class App extends React.Component {
  

  constructor(props){
    super(props);
    this.state = {
      color: this.props.color,
      displayShit: false,
      start: 'table-starter'
    }
  }

  shitChanger = (what) => {
    this.setState({color: what});
  }

  shitDisplayer = () => {
    this.setState({displayShit: !this.state.displayShit})
  }

  render(){
    let incomingShit;
    if (this.state.displayShit){
      incomingShit = <Table show={false}/>;
    } else {
      incomingShit = <Table show={true}/>;
    }
    

    return(
      <div>
        <h1>Title of the App</h1>
        <div>
          here comes the body of the app. my initial color is {this.props.color} <br></br>
          my actual color is {this.state.color}
        </div>
        <div className="red-container container">
          <h6>Here something new will display</h6>
          <button className="py-2 px-3 shadow rounded-pill button-display" onClick={() => this.shitDisplayer()}>Shit Displayer</button>
          {incomingShit}
        </div>
        <p>click below to change that shit</p>
        <button className="btn btn-danger rounded-pill shadow" onClick={() => this.shitChanger("red")}>Shit Changer</button>
      </div>
    );
  }
}



export default App;
