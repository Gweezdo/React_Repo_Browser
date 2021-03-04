const INITIAL_STATE = {
  orgURL:
    "https://api.github.com/orgs/catalyst?&access_token=2fee951e4313e8097351121b1c994836e7ee6f5c",
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