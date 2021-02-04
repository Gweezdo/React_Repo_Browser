export const fetchedRepos = (repoData) => ({
	type: "FETCHED_REPOS_SUCCEEDED",
	payload: repoData
});


// This block of code should still be updated
export const goToFirstPage = () => ({
  type: "FIRST_PAGE_DISPLAYED",
  payload: 1,
});

export const goToLastPage = () => ({
  type: "LAST_PAGE_DISPLAYED",
});