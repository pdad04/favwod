import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/styles.css';
import Header from './components/Header'
import AMRAP from './components/AMRAP';
import ForTime from './components/ForTime';
import Main from './components/Main';
import SavedWod from './components/SavedWod';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/AMRAP" component={AMRAP} />
              <Route path="/FORTIME" component={ForTime} />
            </Switch>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
