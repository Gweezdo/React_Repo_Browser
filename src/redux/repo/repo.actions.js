import axios from 'axios';
import { RepoActionTypes } from './repo.types';

export const fetchReposAsync = (filterReposByUrl, sortReposByUrl) => {
  return dispatch => {
    dispatch(fetchReposPending());
    const url = `https://api.github.com/orgs/catalyst/repos?access_token=26fc0562eb44eac198849d4557d9064c906607d9&page=1&per_page=8&${filterReposByUrl}&${sortReposByUrl}`;
    axios
      .get(url)
      .then((res) => {
        let list = [];
        let results = res.data;

        for (var i = 0; i < results.length; i++) {
          let obj = {
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
            contributor_arr: [],
          };

          let cont_url = results[i].contributors_url;

          axios
            .get(cont_url)
            .then((cont_res) => {
              let cont_arr = cont_res.data;
              let state_arr = [];
              for (var j = 0; j < cont_arr.length; j++) {
                state_arr.push(cont_arr[j].login);
                if (j === 4) {
                  break;
                }
              }
              obj.contributor_arr = state_arr;

              list.push(obj);
            })
            .catch((error) => console.log("This is my error " + error));
        }
        dispatch(fetchReposFulfilled(list));
      })
      .catch((error) => dispatch(fetchReposRejected(error)));
  }
};

export const fetchReposPending = () => ({
  type: RepoActionTypes.FETCH_REPOS_PENDING,
});

export const fetchReposFulfilled = (data) => ({
  type: RepoActionTypes.FETCH_REPOS_FULFILLED,
  payload: data
});

export const fetchReposRejected = (error) => ({
  type: RepoActionTypes.FETCH_REPOS_REJECTED,
  payload: error
});

export const toggleFilterDropdownHidden = () => ({
  type: RepoActionTypes.TOGGLE_FILTER_DROPDOWN_HIDDEN,
});

export const filterReposBy = (item) => ({
  type: RepoActionTypes.FILTER_REPOS_BY,
  payload: item,
});

export const filterReposByUrl = (item) => {
  const type = RepoActionTypes.FILTER_REPOS_BY_URL
  switch (item) {
    case "All":
      return {
        type: type,
        payload: "type=all",
      };
    case "Forked":
      return {
        type: type,
        payload: "type=forks",
      };
    case "Not Forked":
      return {
        type: type,
        payload: "type=sources",
      };
    default:
      return {
        type: type,
        payload: "type=all",
      };
  }
}

export const sortReposBy = (item) => ({
  type: RepoActionTypes.SORT_REPOS_BY,
  payload: item,
});

export const sortReposByUrl = (item) => {
  const type = RepoActionTypes.SORT_REPOS_BY_URL;
  switch (item) {
    case "Created Time (New to Old)":
      return {
        type: type,
        payload: "sort=created&direction=desc",
      };
    case "Created Time (Old to New)":
      return {
        type: type,
        payload: "sort=created&direction=asc",
      };
    case "Full Name (A - Z)":
      return {
        type: type,
        payload: "sort=full_name&direction=asc",
      };
    case "Full Name (Z - A)":
      return {
        type: type,
        payload: "sort=full_name&direction=desc",
      };
    case "Updated Time (New to Old)":
      return {
        type: type,
        payload: "sort=updated&direction=desc",
      };
    case "Updated Time (Old to New)":
      return {
        type: type,
        payload: "sort=updated&direction=asc",
      };      
    default:
      return {
        type: type,
        payload: "nan",
      };
  }    
}


export const toggleSortbyDropdownHidden = () => ({
  type: RepoActionTypes.TOGGLE_SORTBY_DROPDOWN_HIDDEN,
});


// This block of code should still be updated
export const goToFirstPage = () => ({
  type: RepoActionTypes.FIRST_PAGE_DISPLAYED,
  payload: 1,
});

export const goToLastPage = () => ({
  type: RepoActionTypes.LAST_PAGE_DISPLAYED,
});