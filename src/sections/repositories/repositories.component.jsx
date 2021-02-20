import React from "react";
import { connect } from "react-redux";

import RepoCard from "../../components/repo-card/repo-card.component";

import "./repositories.styles.scss";

//imported actions
import { fetchedReposSucceeded } from "../../redux/repo/repo.actions";

class RepoSection extends React.Component {
  async componentDidMount() {
    const { filterReposByUrl, sortReposByUrl } = this.props.repos;
    try {
      let url = `https://api.github.com/orgs/catalyst/repos?client_id=2aa40990e1a443df17b4&client_secret=2bcb7c4c2b2791ab42691e123e847002b14400fb?page=1&per_page=30&${filterReposByUrl}&${sortReposByUrl}`;
      const responce = await fetch(url);
      if (!responce.ok) {
        throw Error(responce.statusText);
      } else {
        var results = await responce.json();
        var repoSetList = [];

        for (var i = 0; i < results.length; i++) {
          repoSetList.push({
            id: results[i].id,
            name: results[i].name,
            full_name: results[i].full_name,
            html_url: results[i].html_url,
            description: results[i].description,
            fork: results[i].fork,
            contributors_url: results[i].contributors_url,
            created_at: results[i].created_at,
            updated_at: results[i].updated_at,
            stargazers_count: results[i].stargazers_count,
            watchers_count: results[i].watchers_count,
            language: results[i].language,
            forks_count: results[i].forks_count,
            license: results[i].license, // or null if no license
            open_issues: results[i].open_issues,
          });
        }

        this.props.fetchedReposSucceeded(repoSetList);
      }
    } catch (error) {
      console.log("Fetch to catalyst REPOSITORY api errored out!");
    }
  }

  render() {
    return (
      <div className="repo-section">
        {this.props.repos.repoData.map((repo) => (
          <RepoCard
            key={repo.id}
            // {...repo}
            name={repo.name}
            description={repo.description}
            updated_at={repo.updated_at}
            fork={repo.fork}
            created_at={repo.created_at}
            stargazers_count={repo.stargazers_count}
            watchers_count={repo.watchers_count}
            language={repo.language}
            forks_count={repo.forks_count}
            license={repo.license}
            open_issues={repo.open_issues}
            contributors_url={repo.contributors_url}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orgs: state.orgs,
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedReposSucceeded: (repoData) =>
    dispatch(fetchedReposSucceeded(repoData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSection);
