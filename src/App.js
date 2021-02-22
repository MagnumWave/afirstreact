import React, {useState,useEffect} from 'react';
import './App.css';
import Table from './Table.js';

const url = "https://api.github.com/users/MagnumWave";




// let myFetcher;
// var myCatcher;
// myFetcher = fetch(url).then(response => response.json()).then(blab => {
//   console.log(blab);
//   myCatcher = JSON.stringify(blab.blog)
  
// }).catch(err => console.log(err));

// console.log(myCatcher);
class App extends React.Component {
  

  constructor(props){
    super(props);
    this.state = {
      color: this.props.color,
      displayShit: false,
      start: 'table-starter',
      login: '',
      name: '',
      id: '',
      followers: '',
      blog: '',
      
    }
    
  }

  shitChanger = (what) => {
    this.setState({color: what});
  }

  shitDisplayer = () => {
    this.setState({displayShit: !this.state.displayShit})
  }

  

  shitLogger = () => {
    console.log(this.state.catcher);
  }

  componentDidMount(){
    fetch(url).then(response => response.json()).then(result => {
      console.log(result);
      this.setState({
        login: result.login,
        name: result.name,
        id: result.id,
        followers: result.followers,
        blog: result.blog,
      })
    });
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
        <div className="d-flex flex-column w-25">
          <button className="my-1 btn btn-danger rounded-pill shadow" onClick={() => this.shitChanger("red")}>Shit Changer</button>
          <button className="my-1 btn btn-danger rounded-pill shadow" onClick={() => this.shitGetter()}>Shit Getter</button>
          <button className="my-1 btn btn-danger rounded-pill shadow" onClick={() => this.shitLogger()}>Shit Logger</button>
          <label>Login:</label>
          <input type="text" value={this.state.login} disabled></input>
          <label>Nome:</label>
          <input type="text" value={this.state.name} disabled></input>
          <label>ID:</label>
          <input type="text" value={this.state.id} disabled></input>
          <label>Seguidores:</label>
          <input type="text" value={this.state.followers} disabled></input>
          <label>Site:</label>
          <input type="text" value={this.state.blog} disabled></input>
        </div>
        {/* <MeuHook/> */}
      </div>
      
    );
  }
}



export default App;
