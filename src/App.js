import React from 'react';

import Header from './components/header/header.component';
import OrgSection from './sections/organisation/organisation.component';
import RepoSection from './sections/repositories/repositories.component';
import NavSection from './sections/navigation/navigation.section';
// This is a test on branching

import './App.css';

class App extends React.Component {
  
  render() {
    // console.log(blogUrl)
    return (
      <div>
        <Header/>
        <OrgSection/>
        <RepoSection />
        <NavSection />
        </div>
        );
  }
};

export default App;
