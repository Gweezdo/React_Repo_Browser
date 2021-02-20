import { RepoActionTypes } from "./repo.types";

const INITIAL_STATE = {
  repoData: [
    {
      id:1,
    }
  ],
  currentPageNo: null,
  repoPageIndexStart: null,
  repoPageIndexEnd: null,
  lastPageNo: null,
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
    case RepoActionTypes.FETCHED_REPOS_SUCCEEDED:
      return {
        ...state,
        repoData: action.payload,
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

    case RepoActionTypes.FIRST_PAGE_DISPLAYED:
      const lastPageNo = Math.ceil(state.repoData.length / 30);
      return {
        ...state,
        currentPageNo: action.payload,
        repoPageIndexStart: 0,
        repoPageIndexEnd: 30,
        lastPageNo: lastPageNo,
      };

    case RepoActionTypes.LAST_PAGE_DISPLAYED:
      const pageNo = state.lastPageNo;
      const startIndex = pageNo * 30 - 1 - 30;
      const endIndex = state.repoData.length;
      return {
        ...state,
        currentPageNo: pageNo,
        repoPageIndexStart: startIndex,
        repoPageIndexEnd: endIndex,
      };

    default:
      return state;
  }
};

export default repoReducer;
