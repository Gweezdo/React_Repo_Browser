import React from "react";
import { useSelector } from 'react-redux';

import { ReactComponent as CatalystLogo } from "../../assets/catalyst-logo.svg";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./header.styles.scss";

const Header = () => {
  const state = useSelector(state => state.orgs)
  return (
  <div className="header">
    <div className="logo-container">
      <CatalystLogo className="logo" />
    </div>
    <div className="button-container">
      <div
        className="view-blog-btn"
        onClick={() => window.open(state.blogUrl, "_blank")}
      >
        <u>View blog</u>
      </div>
      {console.log(state.orgGitUrl)}
      <CustomButton
        className="org-btn"
        onClick={() => window.open(state.orgGitUrl, "_blank")}
      >
        VIEW
      </CustomButton>
    </div>
  </div>
)};

export default Header;
