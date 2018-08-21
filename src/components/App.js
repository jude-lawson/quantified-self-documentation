import React, { Component } from 'react';
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
      <div className="App">
        <Header />
        <SectionsDrawer />
        <Main content={this.state.content} />
      </div>
    );
  }
}

export default App;
