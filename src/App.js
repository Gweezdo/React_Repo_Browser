import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import OrgSection from './sections/organisation/organisation.component';
// import RepoSection from './sections/repositories/repositories.component';

//Imported actions
import { fetchedOrgData } from './redux/org/org.actions';

import './App.css';

class App extends React.Component {
 
  async componentDidMount() {
    //Fetching all organisation data
    try {
      const orgResponce = await fetch("https://api.github.com/orgs/catalyst");
      if(!orgResponce.ok){
        throw Error(orgResponce.statusText);
      }else{
        const orgInfo = await orgResponce.json();
        // console.log(orgInfo.headers);
        console.log("orgInfo fetched");
        this.props.fetchedOrgData(orgInfo);
      }
    }catch (error) {
      console.log("Fetch to catalyst ORGANISATION api errored out!")
    }
  };
  
  render() {
    // console.log(blogUrl)
    return (
      <div>
        <Header
          blogUrl={this.props.orgs.blogUrl}
          orgGitUrl={this.props.orgs.orgGitUrl}
        />
        <OrgSection
          orgDescription={this.props.orgs.orgDescription}
          orgLocation={this.props.orgs.orgLocation}
          orgRepoCount={this.props.orgs.orgRepoCount}
        />
      </div>
      //<RepoSection /> move up
    );
  }
};

const mapStateToProps = state => ({
  orgs: state.orgs
})

const mapDispatchToProps = (dispatch) => ({
  fetchedOrgData: orgData => dispatch(fetchedOrgData(orgData))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
