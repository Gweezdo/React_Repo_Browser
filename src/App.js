import React from 'react';

import Header from './components/header/header.component';
import OrgSection from './sections/organisation/organisation.component';
import RepoSection from './sections/repositories/repositories.component'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organisationInfo: {
        id: null,
        blogUrl: "",
        orgGitUrl: "",
        orgName: "",
        orgDescription: "",
        orgLocation: "",
        orgRepoCount: null,
      },
      repoInfo: {
        filteredState: "All",
        sortByState: "",
      },
      RepoList: [],
    }

    
    // Takes a URL with "page=<max no of pages>" included inside URL  
    // const getAllRepos = async (url) => {
    //   const finalRepoList = [];
    //   try {
    //     const responce = await fetch(url);
    //     if (!responce.ok) {
    //       throw Error(responce.statusText);
    //     } else {
    //       //regex to extract total page number from url
    //       let regex = new RegExp(/(?<==).*?(?=>)/);
    //       const urlSlice = url.split("=");
    //       const maxPageCount = parseInt(url.match(regex));
          
    //       for (let i = 2; i <= maxPageCount; i++) {
    //         const tempURL = `${urlSlice[0]}=${i}>`;
    //         finalRepoList.append(getRepoSet(tempURL));
    //       }
    //     }
    //   }catch (error) {
    //     console.log("Fetch to catalyst REPOSITORY api errored out!");
    //   }
    //   return finalRepoList;
    // }
    
    
    
  };
  
  async getRepoSet(tempURL) {
    const repoSetList = [];
      const tempResponce = await fetch(tempURL);
        const repoInfo = await tempResponce.json();
        repoInfo.map((repo) => 
            repoSetList.append(
              {
                id: repo.id,
                name: repo.name,
                full_name: repo.full_name,
                html_url: repo.html_url,
                description: repo.description,
                fork: repo.fork,
                contributors_url: repo.contributors_url,
                created_at: repo.created_at,
                updated_at: repo.updated_at,
                stargazers_count: repo.stargazers_count,
                watchers_count: repo.watchers_count,
                language: repo.language,
                forks_count: repo.forks_count,
                license: repo.license, // or null if no license
                open_issues: repo.open_issues,
              }
            )  
          );
    return repoSetList;
  };
  
  async componentDidMount() {
    //Fetching all organisation data
    try {
      const orgResponce = await fetch("https://api.github.com/orgs/catalyst");
      if(!orgResponce.ok){
        throw Error(orgResponce.statusText);
      }else{
        const orgInfo = await orgResponce.json();
        console.log(orgInfo.headers);
        this.setState({ id: orgInfo.id });
        this.setState({ blogUrl: orgInfo.blog });
        this.setState({ orgGitUrl: orgInfo.html_url });
        this.setState({ orgName: orgInfo.name });
        this.setState({ orgDescription: orgInfo.description });
        this.setState({ orgLocation: orgInfo.location });
        this.setState({ orgRepoCount: orgInfo.public_repos });
      }
    }catch (error) {
      console.log("Fetch to catalyst ORGANISATION api errored out!")
    }
    
    //Fetching all repository data
    try {
      const repoResponce = await fetch(
        "https://api.github.com/orgs/catalyst/repos"
      );
      if (!repoResponce.ok) {
        throw Error(repoResponce.statusText);
      } else {
        var finalRepoList = [];
        const repoInfo = await repoResponce.json();
        this.setState({ finalRepoList: repoInfo });

        const linkHeaders = repoResponce.headers.get("link");
        const url = linkHeaders.split(",");

        let regex = new RegExp(/(?<==).*?(?=>)/);
        const urlSlice = url[1].split("=");
        const maxPageCount = parseInt(url.match(regex));

        for (let i = 2; i <= maxPageCount; i++) {
          const tempURL = `${urlSlice[0]}=${i}>`;
          var temp = this.getRepoSet(tempURL)
          finalRepoList.append(temp);
        }

        this.setState({RepoList: repoInfo.append(finalRepoList)})
        console.log("Final repo list: " + this.state.RepoList);
      }
    } catch (error) {
      console.log("Fetch to catalyst REPOSITORY api errored out - RepoData!");
    }
  };
  
  

  render() {
    // console.log(blogUrl)
    return (
      <div>
        <Header blogUrl={this.state.blogUrl} orgGitUrl={this.state.orgGitUrl} />
        <OrgSection
          orgDescription={this.state.orgDescription}
          orgLocation={this.state.orgLocation}
          orgRepoCount={this.state.orgRepoCount}
        />
        <RepoSection/>
      </div>
    );
  }
}

export default App;
