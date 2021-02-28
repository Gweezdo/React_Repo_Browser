import React from "react";
import { connect } from "react-redux";

import RepoCard from "../../components/repo-card/repo-card.component";

import "./repositories.styles.scss";

//imported actions
import { fetchReposAsync } from "../../redux/repo/repo.actions";


class RepoSection extends React.Component {
  componentDidMount() {
    const { filterReposByUrl, sortReposByUrl } = this.props.repos;
    this.props.fetchReposAsync(filterReposByUrl, sortReposByUrl);
  }
  componentDidUpdate(prevProps, prevState) {
    const { filterReposByUrl, sortReposByUrl } = this.props.repos;
    // console.log(`PrevProps = ${prevProps.repos.filterReposByUrl}`)
    // console.log(`NewProps = ${filterReposByUrl}`)
    if(prevProps.repos.filterReposByUrl !== filterReposByUrl){
      this.props.fetchReposAsync(filterReposByUrl, sortReposByUrl);
    }
    if (prevProps.repos.sortReposByUrl !== sortReposByUrl) {
      this.props.fetchReposAsync(filterReposByUrl, sortReposByUrl);
    }
  }

  render() {
    const { repoData } = this.props.repos;
    // this.props.fetchReposAsync(
    //   this.props.repos.filterReposByUrl,
    //   this.props.repos.sortReposByUrl
    // );

    return (
      <div className="repo-section">
        {repoData.map((repo) => (
          <RepoCard
            key={repo.id}
            {...repo}
            // name={repo.name}
            // description={repo.description}
            // updated_at={repo.updated_at}
            // fork={repo.fork}
            // created_at={repo.created_at}
            // stargazers_count={repo.stargazers_count}
            // watchers_count={repo.watchers_count}
            // language={repo.language}
            // forks_count={repo.forks_count}
            // license={repo.license}
            // open_issues={repo.open_issues}
            // contributors_url={repo.contributors_url}
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
  fetchReposAsync: (filterReposByUrl, sortReposByUrl) =>
    dispatch(fetchReposAsync(filterReposByUrl, sortReposByUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSection);
