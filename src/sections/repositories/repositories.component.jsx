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