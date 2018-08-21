import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Introduction from '../pages/Introduction';
import Setup from '../pages/Setup';

export default class Main extends Component {
  render() {
    return (
      <main>
        <article>
          <Route exact path='/' component={Introduction} />
          <Route path='/introduction' component={Introduction} />
          <Route path='/setup' component={Setup} />
        </article>
      </main>
    );
  }
}
