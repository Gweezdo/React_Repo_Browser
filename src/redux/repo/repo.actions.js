import axios from 'axios';
import { RepoActionTypes } from './repo.types';

export const fetchReposAsync = (filterReposByUrl, sortReposByUrl) => {
  return dispatch => {
    dispatch(fetchReposPending());
    //access_token=78ffc5da66b7ea9369c88a2762fe9eb71c7fca1b
    const url = `https://api.github.com/orgs/catalyst/repos?client_id=2aa40990e1a443df17b4&client_secret=a6bd18121a97d7df05f31a1734702aa2e3a8a3fd&page=1&per_page=30&${filterReposByUrl}&${sortReposByUrl}&`;
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

// export const fetchContAsync = (repoData) => {
//   return dispatch => {
//     dispatch(fetchContPending())
//     const cont_list = [];

//     for(var i=0; i<repoData.length; i++){
      
//       axios
//         .get(repoData[i].contributors_url)
//         .then((res) => {
//           var temp_list = [];
//           for (var j = 0; j < res.data.length; j++) {
//             temp_list.push(res.data[j].login);
//             if (j === 4) {
//               break;
//             }
//           }
//           cont_list.push(temp_list);
//         })
//         .catch((error) => dispatch(fetchContRejected(error)));
//       }
//       dispatch(fetchContFulfilled(cont_list))
//     }

//   }

// export const fetchContPending = () => ({
//   type: RepoActionTypes.FETCH_CONTRIBUTORS_PENDING,
// });

// export const fetchContFulfilled = (data) => ({
//   type: RepoActionTypes.FETCH_CONTRIBUTORS_FULFILLED,
//   payload: data,
// });

// export const fetchContRejected = (error) => ({
//   type: RepoActionTypes.FETCH_CONTRIBUTORS_REJECTED,
//   payload: error,
// });



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