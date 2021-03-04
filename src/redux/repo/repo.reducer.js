import { RepoActionTypes } from "./repo.types";

const INITIAL_STATE = {
  repoURL:
    "https://api.github.com/orgs/catalyst/repos?access_token=2fee951e4313e8097351121b1c994836e7ee6f5c&page=1&per_page=3",
  
  fetching: false,
  fetched: false,
  error: null,
  repoData: [],
  pageNoFirst: "page=1",
  pageNoLast: null,
  pageNoNext: null,
  pageNoPrev: null,
  repoPageIndexStart: null,
  repoPageIndexEnd: null,
  firstButtonIsActive: false,
  lastButtonIsActive: true,
  filterReposBy: "All",
  filterReposByUrl: "all",
  sortReposBy: "Created Time (New to Old)",
  sortReposByUrl: "sort=created&direction=desc",
  filterHidden: false,
  sortbyHidden: false,
};

const repoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepoActionTypes.FETCH_REPOS_PENDING:
      return {
        ...state,
        fetching: true,
      };

    case RepoActionTypes.FETCH_REPOS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        repoData: action.payload,
      };

    case RepoActionTypes.FETCH_REPOS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case RepoActionTypes.TOGGLE_FILTER_DROPDOWN_HIDDEN:
      return {
        ...state,
        filterHidden: !state.filterHidden,
      };

    case RepoActionTypes.TOGGLE_SORTBY_DROPDOWN_HIDDEN:
      return {
        ...state,
        sortbyHidden: !state.sortbyHidden,
      };

    case RepoActionTypes.FILTER_REPOS_BY:
      return {
        ...state,
        filterReposBy: action.payload,
      };

    case RepoActionTypes.FILTER_REPOS_BY_URL:
      return {
        ...state,
        filterReposByUrl: action.payload,
      };

    case RepoActionTypes.SORT_REPOS_BY:
      return {
        ...state,
        sortReposBy: action.payload,
      };

    case RepoActionTypes.SORT_REPOS_BY_URL:
      return {
        ...state,
        sortReposByUrl: action.payload,
      };

    case RepoActionTypes.FIRST_PAGE_NO:
      return {
        ...state,
        pageNoFirst: action.payload,
      };

    case RepoActionTypes.LAST_PAGE_NO:
      return {
        ...state,
        pageNoLast: action.payload,
      };

    case RepoActionTypes.NEXT_PAGE_NO:
      return {
        ...state,
        pageNoNext: action.payload,
      };

    case RepoActionTypes.PREV_PAGE_NO:
      return {
        ...state,
        pageNoPrev: action.payload,
      };

    default:
      return state;
  }
};

export default repoReducer;
