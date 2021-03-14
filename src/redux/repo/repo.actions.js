import axios from 'axios';
import { RepoActionTypes } from './repo.types';


export const getHeaders = (headers) =>{
  return dispatch => {
    const headersArr = headers.split(",").map(el => (el.split(";")))
  
    for (var i=0; i< headersArr.length; i++){
      var regex = /^page=/
      switch (headersArr[i][1]) {
        case ' rel="first"':
          const firstArr = headersArr[i][0].split('&');
          for (var j = 0; j < firstArr.length; j++) {
            if (regex.test(firstArr[j])) {
              dispatch(firstPageNo(firstArr[j]));
            }
          }
          continue;

        case ' rel="next"':
          const nextArr = headersArr[i][0].split("&");
          for (var k = 0; k < nextArr.length; k++) {
            if (regex.test(nextArr[k])) {
              dispatch(nextPageNo(nextArr[k]));
            }
          }
          continue;

        case ' rel="prev"':
          const prevArr = headersArr[i][0].split("&");

          for (var l = 0; l < prevArr.length; l++) {
            if (regex.test(prevArr[l])) {
              dispatch(prevPageNo(prevArr[l]));
            }
          }
          continue;

        case ' rel="last"':
          const lastArr = headersArr[i][0].split('&');
          for (var m = 0; m < lastArr.length; m++) {

            if (regex.test(lastArr[m])) {
              dispatch(lastPageNo(lastArr[m]));
            }
          }
          continue;

        default:
          return;
      }
    }  
  }
}

export const fetchReposAsync = (repoURL, pageNo, filterReposByUrl, sortReposByUrl) => {
  return (dispatch) => {
    dispatch(fetchReposPending());
    dispatch(hasFetched(false))
    const url = `${repoURL}&${pageNo}&${filterReposByUrl}&${sortReposByUrl}`;
    axios
      .get(url)
      .then((res) => {
        let list = [];
        let showArr = [];
        let results = res.data;
        let headers = res.headers.link;
        dispatch(getHeaders(headers));

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
            repoCardHidden: true,
          };

          let cont_url = results[i].contributors_url;

          // iterative async call to get contributors
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
              showArr.push(false);
            })
            .catch((error) => console.log("This is my error " + error));
        }
        
        dispatch(fetchReposFulfilled(list));
        dispatch(updateShowArr(showArr))
        setTimeout(() => {
          dispatch(hasFetched(true));
        }, 500);
      })
      .catch((error) => dispatch(fetchReposRejected(error)));

    };
};

export const filterReposAsync = (item) =>{
  return dispatch => {
    dispatch(filterReposBy(item));
    dispatch(filterReposByUrl(item));
    dispatch(toggleFilterDropdownHidden());
  }
}

export const sortReposAsync = (item) => {
  return (dispatch) => {
    dispatch(sortReposBy(item));
    dispatch(sortReposByUrl(item));
    dispatch(toggleSortbyDropdownHidden());
  };
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

export const updateShowArr = (boolArr) => ({
  type: RepoActionTypes.UPDATE_SHOW_ARR,
  payload: boolArr,
});

export const toggleFilterDropdownHidden = () => ({
  type: RepoActionTypes.TOGGLE_FILTER_DROPDOWN_HIDDEN,
});

export const toggleShowArr = (arr) => ({
  type: RepoActionTypes.TOGGLE_SHOW_ARR,
  payload: arr,
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

export const hasFetched = (bool) => ({
  type: RepoActionTypes.HAS_FETCHED,
  payload: bool
});


// This block of code should still be updated
export const firstPageNo = (firstPageNo) => ({
  type: RepoActionTypes.FIRST_PAGE_NO,
  payload: firstPageNo,
});

export const lastPageNo = (lastPageNo) => ({
  type: RepoActionTypes.LAST_PAGE_NO,
  payload: lastPageNo,
});

export const nextPageNo = (nextPageNo) => ({
  type: RepoActionTypes.NEXT_PAGE_NO,
  payload: nextPageNo,
});

export const prevPageNo = (prevPageNo) => ({
  type: RepoActionTypes.PREV_PAGE_NO,
  payload: prevPageNo,
});

export const currentPageNo = (currentPageNo) => ({
  type: RepoActionTypes.CURRENT_PAGE_NO,
  payload: currentPageNo,
});

export const firstBtnActive = (isActive) => ({
  type: RepoActionTypes.FIRST_BTN_ACTIVE,
  payload: isActive,
});

export const prevBtnActive = (isActive) => ({
  type: RepoActionTypes.PREV_BTN_ACTIVE,
  payload: isActive,
});

export const nextBtnActive = (isActive) => ({
  type: RepoActionTypes.NEXT_BTN_ACTIVE,
  payload: isActive,
});

export const lastBtnActive = (isActive) => ({
  type: RepoActionTypes.LAST_BTN_ACTIVE,
  payload: isActive,
});

// export const toggleRepoCardHidden = (index) => ({
//   type: RepoActionTypes.TOGGLE_REPO_CARD_HIDDEN,
//   payload: index,
// });