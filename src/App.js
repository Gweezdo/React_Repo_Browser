import React from 'react';

import Header from './components/header/header.component';
import OrgSection from './sections/organisation/organisation.component';
import RepoSection from './sections/repositories/repositories.component'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organisationInfo: {
        id: null,
        blogUrl: "",
        orgGitUrl: "",
        orgName: "",
        orgDescription: "",
        orgLocation: "",
        orgRepoCount: null,
      },
      repoInfo: {
        filteredState: "All",
        sortByState: "",
      }
    }
  };

  async componentDidMount() {
    //Fetching all organisation data
    try {
      const orgResponce = await fetch("https://api.github.com/orgs/catalyst");
      if(!orgResponce.ok){
        throw Error(orgResponce.statusText);
      }else{
        const orgInfo = await orgResponce.json();
        this.setState({ id: orgInfo.id });
        this.setState({ blogUrl: orgInfo.blog });
        this.setState({ orgGitUrl: orgInfo.html_url });
        this.setState({ orgName: orgInfo.name });
        this.setState({ orgDescription: orgInfo.description });
        this.setState({ orgLocation: orgInfo.location });
        this.setState({ orgRepoCount: orgInfo.public_repos });
      }
    }catch (error) {
      console.log("Fetch to catalyst ORGANISATION api errored out!")
    }
    
  };

  render() {
    // console.log(blogUrl)
    return (
      <div>
        <Header blogUrl={this.state.blogUrl} orgGitUrl={this.state.orgGitUrl} />
        <OrgSection
          orgDescription={this.state.orgDescription}
          orgLocation={this.state.orgLocation}
          orgRepoCount={this.state.orgRepoCount}
        />
        <RepoSection/>
      </div>
    );
  }
}

export default App;
