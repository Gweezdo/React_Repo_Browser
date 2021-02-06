import React from "react";
import { connect } from "react-redux";

import RepoCard from "../../components/repo-card/repo-card.component";

import "./repositories.styles.scss";

//imported actions
import { fetchedReposSucceeded } from "../../redux/repo/repo.actions";

class RepoSection extends React.Component {
  
  async componentDidMount() {
    //Fetching all repository data
    // const limitPerPage = 100;
    // const apiUrl =
    //   "https://api.github.com/orgs/catalyst/repos?client_id=2aa40990e1a443df17b4&client_secret=2bcb7c4c2b2791ab42691e123e847002b14400fb";

    const getRepos = async (pageNo = 1) => {
      const repoSetList = [];
      // let actualUrl = `${apiUrl}?page=${pageNo}&per_page=${limitPerPage}`;
      let actualUrl =
        "https://api.github.com/orgs/catalyst/repos?client_id=2aa40990e1a443df17b4&client_secret=2bcb7c4c2b2791ab42691e123e847002b14400fb?page=1&per_page=100";
      var apiResponce = await fetch(actualUrl);
      var apiResults = await apiResponce.json();

      for (var i = 0; i < apiResults.length; i++) {
        repoSetList.push({
          id: apiResults[i].id,
          name: apiResults[i].name,
          full_name: apiResults[i].full_name,
          html_url: apiResults[i].html_url,
          description: apiResults[i].description,
          fork: apiResults[i].fork,
          contributors_url: apiResults[i].contributors_url,
          created_at: apiResults[i].created_at,
          updated_at: apiResults[i].updated_at,
          stargazers_count: apiResults[i].stargazers_count,
          watchers_count: apiResults[i].watchers_count,
          language: apiResults[i].language,
          forks_count: apiResults[i].forks_count,
          license: apiResults[i].license, // or null if no license
          open_issues: apiResults[i].open_issues,
        });
      }
      return repoSetList;
    };

    const getEntireRepoList = async (pageNo = 1) => {
      const results = await getRepos(pageNo);
      console.log("Retreiving data from API for page : " + pageNo);

      if (results.length > 0) {
        return results.concat(await getEntireRepoList(pageNo + 1));
      } else {
        return results;
      }
    };

    // getEntireRepoList();

    (async () => {
      const entireList = await getEntireRepoList();
      // console.log(entireList);
      this.props.fetchedReposSucceeded(entireList);
    })();
  }

  render() {
    return (
      <div className="repo-section">
        {this.props.repos.repoData.slice(0, 30).map((repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </div>
      // <RepoCard/>
    );
  }
}

const mapStateToProps = (state) => ({
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedReposSucceeded: (repoData) =>
    dispatch(fetchedReposSucceeded(repoData))
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSection);
