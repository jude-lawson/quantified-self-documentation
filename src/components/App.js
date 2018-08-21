import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../App.css';

import Header from './Header';
import SectionsDrawer from './SectionsDrawer';
import Main from './Main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      content: 'introduction'
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <SectionsDrawer />
          <Main content={this.state.content} />
        </div>
      </Router>
    );
  }
}

export default App;
