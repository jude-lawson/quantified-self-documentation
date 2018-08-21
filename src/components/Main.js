import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Introduction from '../pages/Introduction';
import Setup from '../pages/Setup';

export default class Main extends Component {
  render() {
    return (
      <main>
        <article>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Introduction} />
          <Route path={process.env.PUBLIC_URL + '/introduction'} component={Introduction} />
          <Route path={process.env.PUBLIC_URL + '/setup'} component={Setup} />
        </article>
      </main>
    );
  }
}
