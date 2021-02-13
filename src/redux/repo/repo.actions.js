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
  payload: item
});

export const sortReposBy = (item) => ({
  type: RepoActionTypes.SORT_REPOS_BY,
  payload: item,
});

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