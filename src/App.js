import React from 'react';

import Header from './components/header/header.component'

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'organisation-info': {
        'blog-url': '',
        'git-url': '',
        'description-url': '',
        'location-url': '',
        'repo-count': '',
      },
      'repo-info': {
        'filtered-state': "",
        'sort-by-state': ""
      }

    }
  };

  render() {
    return (
      <div>
        <Header />

        <div>Hello World</div>
      </div>
    );
  }
}

export default App;
