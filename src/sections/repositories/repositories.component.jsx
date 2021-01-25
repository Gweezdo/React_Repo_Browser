import React from 'react';

import './repositories.styles.scss';

import RepoCard from '../../components/repo-card/repo-card.component';

class RepoSection extends React.Component {
  constructor() {
    super();

    this.state = {
      repoList: [],
    };
  }

  async componentDidMount() {
    //Fetching all repository data
    try {
      const repoResponce = await fetch(
        "https://api.github.com/orgs/catalyst/repos"
      );
      if (!repoResponce.ok) {
        throw Error(repoResponce.statusText);
      } else {
        const repoInfo = await repoResponce.json();
        this.setState({ repoList: repoInfo });
        console.log(this.state.repoList);
      }
    } catch (error) {
      console.log("Fetch to catalyst REPOSITORY api errored out!");
    }
  }
  
  render() {
    return (
      <div className="repo-section">
        <RepoCard/>
      </div>
      // {this.state.repoList.map((repo) => (<RepoCard key={repo.id} repo={repo}/>))}
    )
  }
}

export default RepoSection;