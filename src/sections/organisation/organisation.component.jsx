import React from "react";
import { connect } from "react-redux";
import { fetchedOrgData } from "../../redux/org/org.actions";
import Dropdown from "../../components/dropdown/dropdown.component";

import "./organisation.styles.scss";

class OrgSection extends React.Component {
  //Fetching all organisation data
  async componentDidMount() {
    try {
      const orgResponce = await fetch(this.props.orgs.orgURL);
      if (!orgResponce.ok) {
        throw Error(orgResponce.statusText);
      } else {
        const orgInfo = await orgResponce.json();
        console.log("orgInfo fetched");
        this.props.fetchedOrgData(orgInfo);
      }
    } catch (error) {
      console.log("Fetch to catalyst ORGANISATION api errored out!");
    }
  }

  render() {
    const {
      pageNoFirst,
      pageNoLast,
      pageNoNext,
      pageNoPrev,
      pageNoCurrent,
      filterHidden,
      sortbyHidden,
    } = this.props.repos;
    const { orgDescription, orgLocation, orgRepoCount } = this.props.orgs;
    return (
      <div className="org-section">
        <div className="org-info-container">
          <h1 className="org-description">{orgDescription}</h1>
          <h2 className="org-location">{orgLocation}</h2>
        </div>
        <div className="repo-info-container">
          <span className="org-repo-count">{orgRepoCount} Repositories</span>
          <div className="filter-sort-container">
            <Dropdown
              className="filter-dropdown"
              title={"Filter"}
              content={["All", "Forked", "Not Forked"]}
              toggleHidden={filterHidden}
              type={"Filter"}
            ></Dropdown>

            <Dropdown
              className="sort-dropdown"
              title={"Sort By"}
              content={[
                "Created Time (New to Old)",
                "Created Time (Old to New)",
                "Full Name (A - Z)",
                "Full Name (Z - A)",
                "Updated Time (New to Old)",
                "Updated Time (Old to New)",
              ]}
              toggleHidden={sortbyHidden}
              type={"SortBy"}

            ></Dropdown>
          </div>
        </div>
        <div className="page-numbers">
          <div>First {pageNoFirst}</div>
          <div>Prev {pageNoPrev}</div>
          <div>Current {pageNoCurrent}</div>
          <div>Next {pageNoNext}</div>
          <div>Last {pageNoLast}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  orgs: state.orgs,
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedOrgData: (orgData) => dispatch(fetchedOrgData(orgData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgSection);
 