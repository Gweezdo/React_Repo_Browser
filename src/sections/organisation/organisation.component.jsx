import React from 'react';

import './organisation.styles.scss';

const OrgSection = ({ orgDescription, orgLocation, orgRepoCount }) => (
  <div className="org-section">
    <div className="org-info-container">
      <h1 className="org-description">{orgDescription}</h1>
      <h2 className="org-location">{orgLocation}</h2>
    </div>
    <div className="repo-info-container">
      <span className="org-repo-count">{orgRepoCount} Repositories</span>
      <div className="filter-sort-container">
        <div className="filter-dropdown">Filter dropdown</div>
        <div className="sort-dropdown">Sort dropdown</div>
      </div>
    </div>
  </div>
);

export default OrgSection;