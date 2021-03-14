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
      repoURL,
      pageNoFirst,
      filterReposByUrl,
      sortReposByUrl,
    );
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      filterReposByUrl,
      sortReposByUrl,
      repoURL,
      pageNoFirst,
    } = this.props.repos;
    
    if(prevProps.repos.filterReposByUrl !== filterReposByUrl){
      console.log(prevProps.repos.filterReposByUrl);
      console.log(filterReposByUrl);
      this.props.fetchReposAsync(
        repoURL,
        pageNoFirst,
        filterReposByUrl,
        sortReposByUrl
      );
    }
    if (prevProps.repos.sortReposByUrl !== sortReposByUrl) {
      console.log(prevProps.repos.sortReposByUrl);
      this.props.fetchReposAsync(
        repoURL,
        pageNoFirst,
        filterReposByUrl,
        sortReposByUrl
      );
    }
  }

  render() {
    console.log("repositories.component render()")
    const { repoData, hasFetched } = this.props.repos;


    return (
      <div className="repo-section">
        {hasFetched ? (
          repoData.map((repo, index) => (
            <RepoCard key={repo.id} index={index} {...repo} />
          ))
        ) : (
          <div className="loading-animation">LOADING</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orgs: state.orgs,
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReposAsync: (repoURL, pageNo, filterReposByUrl, sortReposByUrl) =>
    dispatch(
      fetchReposAsync(repoURL, pageNo, filterReposByUrl, sortReposByUrl)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSection);
