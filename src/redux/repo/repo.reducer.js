const INITIAL_STATE = {
  reposOnPage: [],
};

const repoReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case "GO_TO_FIRST_PAGE":
			return {
        ...state,
        reposOnPage: action.payload,
      };
		default:
			return state
	}
};

export default repoReducer;