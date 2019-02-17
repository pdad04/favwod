import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Preloader, Row, Col} from 'react-materialize';
import './css/styles.css';
import Header from './components/Header'
import AMRAP from './components/AMRAP';
import ForTime from './components/ForTime';
import Main from './components/Main';
import SavedWod from './components/SavedWod';
import SignIn from './components/SignIn';
import firebase from './base';
import CreateAccount from './components/CreateAccount';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      time: "",
      rounds: "",
      type: "",
      movements: [{name: ""}],
      user: null,
    };

  }

  componentDidMount(){
    this.database = firebase.database();
    firebase.auth().onAuthStateChanged(user => user ? this.setState({user: user.uid}) : this.setState({user: ""}));
    
  }

  addMovement = (e) => {
    e.preventDefault();
    this.setState( (prevState) => ({
        movements: [...prevState.movements, {name:""}]
    }))
  }

  removeMovement = (e) => {
    e.preventDefault();
    if(this.state.movements.length > 1){
      this.setState((prevState) => ({
        movements: prevState.movements.filter((el, index) => index !== prevState.movements.length-1)
      }))
    }
  }

  handleMovementInput = (e, idx) =>{
    const currentValue = e.currentTarget.value;
    const inputField = e.target.attributes.getNamedItem("name").value

    if(inputField === "time"){
      this.setState({time: currentValue})
    }else if(inputField === "rounds"){
      this.setState({rounds: currentValue})
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
    const wodType = type;
    // if(wodType ==="fortime"){
    //   this.setState({type: "For Time"})
    // }
    
    wodType === "fortime" ? this.setState({type: "For Time"}) : this.setState({type: "AMRAP"})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.database.ref(`${this.state.user}/wods/${Date.now()}`).set({
        movements: this.state.movements,
        time: this.state.time,
        rounds: this.state.rounds,
        type: this.state.type,
    });
  }

  currentUser = () => {
    firebase.auth().onAuthStateChanged(loggedUser => loggedUser ? this.setState({user: loggedUser.uid}) : this.setState({user: ""}));
  }

  signOut = () => {
    firebase.auth().signOut().then(() => console.log('Signed Out')).catch(error => console.log('an error occurred', error));
  }

  render() {
    const {user} = this.state;
    if(user === null){
      return(
        <div className="App">
          <Header />
          <Row className="valign-wrapper" style={{height:"100vh"}}>
            <Col s={12} offset="s6">
              <Preloader 
                size="big"
                color="red"
              />
            </Col>
          </Row>
        </div>
      )
    }
    return (
      <div className="App">
        <Header 
          user={this.state.user}
          signOut={this.signOut}
        />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={ Main } />
              <Route 
                path="/savedwod" 
                render={(props) => ( user ? <SavedWod firebase={this.database} user={this.state.user}/> : <Redirect to="/createaccount" />  )}
              />
              <Route
                path="/createaccount"
                render={(props) => 
                  ( user ? 
                    <Redirect to="/savedwod" /> 
                    : 
                    <CreateAccount {...props}
                      getUser={this.currentUser}
                    />)}
              />
              <Route
                path="/signin"
                render={(props) => 
                  (user ?
                    <Redirect to="/savedwod" />
                    :
                    <SignIn {...props}
                      getUser={this.currentUser}
                    />)}
              />
              <Route 
                path="/addwod/:type(amrap)" 
                render={(props) =>
                  (!user ? 
                  <Redirect to="/signin" /> 
                  :
                  <AMRAP {...props}
                    addMovement={this.addMovement}
                    removeMovement={this.removeMovement}
                    movements={this.state.movements}
                    handleMovementInput={(e,idx) => this.handleMovementInput(e,idx)}
                    handleSubmit={this.handleSubmit}
                    getType={(type) => this.getWodType(type)}
                  />)}
              />
              <Route 
                path="/addwod/:type(fortime)" 
                render={ (props) => 
                  (!user ?
                  <Redirect to="/signin" />
                    :
                  <ForTime {...props} 
                    addMovement={this.addMovement}
                    removeMovement={this.removeMovement}
                    movements={this.state.movements}
                    handleMovementInput={(e,idx) => this.handleMovementInput(e,idx)}
                    handleSubmit={this.handleSubmit}
                    getType={(type) => this.getWodType(type)}
                  />)} 
              />
            </Switch>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
