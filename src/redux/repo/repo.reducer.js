import { RepoActionTypes } from "./repo.types";

const INITIAL_STATE = {
  repoURL:
    "https://api.github.com/orgs/catalyst/repos?&access_token=61b5c343bbeba909441efe4160a6c679d32e69f3&per_page=3",

  fetching: false,
  fetched: false,
  hasFetched: false,
  error: null,
  repoData: [],
  showArr: [],
  pageNoFirst: "page=1",
  pageNoLast: null,
  pageNoNext: null,
  pageNoPrev: null,
  pageNoCurrent: "page=1",
  firstButtonIsActive: false,
  prevButtonIsActive: false,
  nextButtonIsActive: true,
  lastButtonIsActive: true,
  filterReposBy: "All",
  filterReposByUrl: "all",
  sortReposBy: "Created Time (New to Old)",
  sortReposByUrl: "sort=created&direction=desc",
  filterHidden: false,
  sortbyHidden: false,
  index: 0,
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
        repoData: action.payload,
        fetching: false,
        fetched: true,
      };

    case RepoActionTypes.FETCH_REPOS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case RepoActionTypes.UPDATE_SHOW_ARR:
      return {
        ...state,
        showArr: action.payload,
      };

    case RepoActionTypes.TOGGLE_FILTER_DROPDOWN_HIDDEN:
      return {
        ...state,
        filterHidden: !state.filterHidden,
      };

    case RepoActionTypes.TOGGLE_SHOW_ARR:
      return {
        ...state,
        showArr: action.payload,
      };

    case RepoActionTypes.HAS_FETCHED:
      return {
        ...state,
        hasFetched: action.payload,
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

    case RepoActionTypes.CURRENT_PAGE_NO:
      return {
        ...state,
        pageNoCurrent: action.payload,
      };

    case RepoActionTypes.FIRST_BTN_ACTIVE:
      return {
        ...state,
        firstButtonIsActive: action.payload,
      };

    case RepoActionTypes.PREV_BTN_ACTIVE:
      return {
        ...state,
        prevButtonIsActive: action.payload,
      };

    case RepoActionTypes.NEXT_BTN_ACTIVE:
      return {
        ...state,
        nextButtonIsActive: action.payload,
      };

    case RepoActionTypes.LAST_BTN_ACTIVE:
      return {
        ...state,
        lastButtonIsActive: action.payload,
      };

    // case RepoActionTypes.TOGGLE_REPO_CARD_HIDDEN:
    //   let index = action.payload
    //   var hidden = state.repoData[index].repoCardHidden
    //   return {
    //     ...state,
    //     hidden: !hidden,
    //   };

    default:
      return state;
  }
};

export default repoReducer;
