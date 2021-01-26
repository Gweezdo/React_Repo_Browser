let link = "<https://api.github.com/organizations/47789/repos?page=12>";

// let regex = new RegExp(/=([^;]*)>/);
let regex = new RegExp(/(?<==).*?(?=>)/);
const url = link.split("=")

const pageNo = parseInt(link.match(regex));
console.log(pageNo);
console.log(typeof(pageNo));

this.state = {
  repoInfo: [
    {
      id: 758869,
      name: "brause",
      full_name: "catalyst/brause",
      html_url: "https://github.com/catalyst/brause",
      description: "EPP CLI test client - non validating",
      fork: "true",
      contributors_url:
        "https://api.github.com/repos/catalyst/brause/contributors",
      created_at: "2010-07-06T02:02:01Z",
      updated_at: "2010-07-06T03:46:45Z",
      stargazers_count: 1,
      watchers_count: 1,
      language: "Perl",
      forks_count: 1,
      license: { name: "" }, // or null if no license
      open_issues: 0,
    },
  ],
};



for(let i=1; i<=pageNo; i++){
	console.log(`${url[0]}=${i}>`);
}


