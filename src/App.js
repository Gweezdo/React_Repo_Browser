import React from 'react';

import Header from './components/header/header.component'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organisationInfo: {
        blogUrl: "",
        orgGitUrl: "",
        orgName: "",
        orgDescription: "",
        orgLocation: "",
        orgRepoCount: null,
      },
      repoInfo: {
        filteredState: "",
        sortByState: "",
        repoList: []
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
        this.setState({ blogUrl: orgInfo.blog });
        this.setState({ orgGitUrl: orgInfo.html_url });
        this.setState({ orgName: orgInfo.name });
        this.setState({ orgDescription: orgInfo.description });
        this.setState({ orgLocation: orgInfo.location });
        this.setState({ orgRepoCount: orgInfo.public_repos });
        console.log(this.state.blogUrl)
      }
    }catch (error) {
      console.log("Fetch to catalyst ORGANISATION api errored out!")
    }
    
    //Fetching all repository data
    try{
      const repoResponce = await fetch("https://api.github.com/orgs/catalyst/repos");
      if(!repoResponce.ok){
        throw Error(repoResponce.statusText);
      }else{
        const repoInfo = await repoResponce.json();
        this.setState({ repoList: repoInfo });
      }
    }catch (error){
      console.log("Fetch to catalyst REPOSITORY api errored out!")
    }
  };

  render() {
    // console.log(blogUrl)
    return (
      <div>
        <Header blogUrl={this.state.blogUrl} orgGitUrl={this.state.orgGitUrl} />

      
      </div>
    );
  }
}

export default App;
