import React from 'react';

import Header from './components/header/header.component';
import OrgSection from './sections/organisation/organisation.component';
// import RepoSection from './sections/repositories/repositories.component';

import './App.css';

class App extends React.Component {
  
  render() {
    // console.log(blogUrl)
    return (
      <div>
        <Header/>
        <OrgSection/>
        </div>
        );
        // <RepoSection />
  }
};

export default App;
