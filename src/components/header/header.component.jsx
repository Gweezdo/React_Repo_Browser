import React from 'react';

import {ReactComponent as CatalystLogo} from '../../assets/catalyst-logo.svg';

import './header.styles.scss';

const Header = ({ organisationInfo: { blogUrl, gitUrl } }) => (
  <div className="header">
    <div className="logo-container">
      <CatalystLogo className="logo" />
    </div>

    <div className="button-container">
      <a href={blogUrl}>View Blog</a>
      <CustomButton className="custom-button" {gitUrl} />
    </div>
  </div>
);

export default Header;