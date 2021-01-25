import React from "react";

import { ReactComponent as CatalystLogo } from "../../assets/catalyst-logo.svg";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./header.styles.scss";

const Header = ({ blogUrl, orgGitUrl }) => (
  <div className="header">
    <div className="logo-container">
      <CatalystLogo className="logo" />
    </div>
    <div className="button-container">
      <div
        className="view-blog-btn"
        onClick={() => window.open(blogUrl, "_blank")}
      >
        <u>View blog</u>
      </div>
      {console.log(orgGitUrl)}
      <CustomButton
        className="org-btn"
        onClick={() => window.open(orgGitUrl, "_blank")}
      >
        VIEW
      </CustomButton>
    </div>
  </div>
);

export default Header;
