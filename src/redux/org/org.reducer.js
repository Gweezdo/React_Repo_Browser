const INITIAL_STATE = {
  orgURL:
    "https://api.github.com/orgs/catalyst?&access_token=61b5c343bbeba909441efe4160a6c679d32e69f3",
  id: null,
  blogUrl: null,
  orgGitUrl: null,
  orgName: null,
  orgDescription: null,
  orgLocation: null,
  orgRepoCount: null,
};

const orgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCHED_ORG_DATA_SUCCEEDED":
      return {
        ...state,
        id: action.payload.id,
        blogUrl: action.payload.blog,
        orgGitUrl: action.payload.html_url,
        orgName: action.payload.name,
        orgDescription: action.payload.description,
        orgLocation: action.payload.location,
        orgRepoCount: action.payload.public_repos,
      };
    default:
      return state;
  }
};			

export default orgReducer;