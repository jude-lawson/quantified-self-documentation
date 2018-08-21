import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../App.css';

import Header from './Header';
import SectionsDrawer from './SectionsDrawer';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SectionsDrawer />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
