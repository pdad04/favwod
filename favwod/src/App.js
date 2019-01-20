import React, { Component } from 'react';
// import './App.css';
import './css/styles.css';
import Header from './components/Header'
import AMRAP from './components/AMRAP';
import ForTime from './components/ForTime';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ForTime />
      </div>
    );
  }
}

export default App;
