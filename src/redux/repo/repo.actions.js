import { RepoActionTypes } from './repo.types';

export const fetchedReposSucceeded = (repoData) => ({
  type: RepoActionTypes.FETCHED_REPOS_SUCCEEDED,
  payload: repoData,
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
        payload: "sort=full_name&direction=desc",
      };
    case "Full Name (Z - A)":
      return {
        type: type,
        payload: "sort=full_name&direction=asc",
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