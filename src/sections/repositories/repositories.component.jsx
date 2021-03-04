import React from "react";
import { connect } from "react-redux";

import RepoCard from "../../components/repo-card/repo-card.component";

import "./repositories.styles.scss";

//imported actions
import { fetchReposAsync } from "../../redux/repo/repo.actions";


class RepoSection extends React.Component {
  componentDidMount() {
    const { filterReposByUrl, sortReposByUrl, repoURL, pageNoFirst } = this.props.repos;
    this.props.fetchReposAsync(
      filterReposByUrl,
      sortReposByUrl,
      repoURL,
      pageNoFirst
    );
  }
  componentDidUpdate(prevProps, prevState) {
    const { filterReposByUrl, sortReposByUrl, repoURL } = this.props.repos;
    // console.log(`PrevProps = ${prevProps.repos.filterReposByUrl}`)
    // console.log(`NewProps = ${filterReposByUrl}`)
    if(prevProps.repos.filterReposByUrl !== filterReposByUrl){
      this.props.fetchReposAsync(filterReposByUrl, sortReposByUrl, repoURL);
    }
    if (prevProps.repos.sortReposByUrl !== sortReposByUrl) {
      this.props.fetchReposAsync(filterReposByUrl, sortReposByUrl, repoURL);
    }
    // if (prevProps.repos.repoData.length >1) {
    //   // this.props.fetchContAsync(this.props.repos.repoData);
    // }

  }

  render() {
    const { repoData } = this.props.repos;

    return (
      <div className="repo-section">
        {repoData.map((repo) => (
          <RepoCard
            key={repo.id}
            {...repo}
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
  fetchReposAsync: (filterReposByUrl, sortReposByUrl, repoURL) =>
    dispatch(fetchReposAsync(filterReposByUrl, sortReposByUrl, repoURL)),
  // fetchContAsync: (repoData) => dispatch(fetchContAsync(repoData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSection);
