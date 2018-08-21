import React, { Component } from 'react';

import Introduction from '../pages/Introduction';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let content;

    switch(this.props.content) {
      case 'introduction':
        content = <Introduction />
        break;
      default:
        content = <Introduction />
    }

    return (
      <main>
        <article>
          {content}
        </article>
      </main>
    );
  }
}
