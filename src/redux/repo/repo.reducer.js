const INITIAL_STATE = {
	repoData: [],
	currentPageNo: null,
	repoPageIndexStart: null,
	repoPageIndexEnd: null,
	lastPageNo: null,
	firstButtonIsActive: false,
	lastButtonIsActive: true,
	filterReposBy: null,
	sortReposBy: null,
};

const repoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case "FETCHED_REPOS_SUCCEEDED":
      return {
        ...state,
        repoData: action.payload,
      };
    case "FIRST_PAGE_DISPLAYED":
			const lastPageNo = Math.ceil(state.repoData.length/30)
      return {
        ...state,
				currentPageNo: action.payload,
				repoPageIndexStart: 0,
				repoPageIndexEnd: 30,
				lastPageNo: lastPageNo,
      };
    case "LAST_PAGE_DISPLAYED":
			const pageNo = state.lastPageNo
			const startIndex = (pageNo * 30) - 1 - 30
			const endIndex =  state.repoData.length
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