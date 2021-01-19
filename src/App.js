import React from 'react';

import Header from './components/header/header.component'

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      organisationInfo: {
        blogUrl: '',
        gitUrl: '',
        descriptionUrl: '',
        locationUrl: '',
        repoCount: '',
      },
      repoInfo: {
        filteredState: "",
        sortByState: "",
        repoList: []
      }

    }
  };

  render() {
    {blogUrl, gitUrl} = this.state.organisationInfo;
    return (
      <div>
        <Header {...otherProps} />

        <div>Hello World</div>
      </div>
    );
  }
}

export default App;
