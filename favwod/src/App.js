import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/styles.css';
import Header from './components/Header'
import AMRAP from './components/AMRAP';
import ForTime from './components/ForTime';
import Main from './components/Main';
import SavedWod from './components/SavedWod';
import firebase from './base';

class App extends Component {

  state = {
    time: "",
    rounds: "",
    type: "",
    movements: [{name: ""}],
  };

  componentDidMount(){
    this.database = firebase.database();
  }

  addMovement = (e) => {
    e.preventDefault();
    this.setState( (prevState) => ({
        movements: [...prevState.movements, {name:""}]
    }))
  }

  handleMovementInput = (e, idx) =>{
    const currentValue = e.currentTarget.value;

    if(e.currentTarget.type === 'number'){
        this.setState({time: currentValue});
    }else{
      this.setState(prevState => {
          prevState.movements.map((movement,index) => {
              if(idx === index){
                  return movement.name = currentValue;
              }else{
                  return movement;
              }
          });
      });
    }
  }

  getWodType = (type) =>{
    console.log(type);
    this.setState({type: type})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.database.ref(`wods/${Date.now()}`).set({
        movements: this.state.movements,
        time: this.state.time,
        type: this.state.type,
    });
  } 

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route 
                path="/addwod/:type(amrap)" 
                render={(props) => 
                <AMRAP {...props}
                  addMovement={this.addMovement}
                  movements={this.state.movements}
                  handleMovementInput={(e,idx) => this.handleMovementInput(e,idx)}
                  handleSubmit={this.handleSubmit}
                  getType={(type) => this.getWodType(type)}
                />}
              />
              <Route 
                path="/addwod/:type(fortime)" 
                render={ (props) => 
                <ForTime {...props} 
                  addMovement={this.addMovement}
                  movements={this.state.movements}
                  handleMovementInput={(e,idx) => this.handleMovementInput(e,idx)}
                  handleSubmit={this.handleSubmit}
                  getType={(type) => this.getWodType(type)}
                  />} 
              />
            </Switch>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
