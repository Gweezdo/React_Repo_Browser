import React from "react";

import "./custom-button.styles.scss";

import { ReactComponent as GitIcon } from "../../assets/github-icon_24px.svg";
import { ReactComponent as FirstPageIcon } from "../../assets/first-page-icon_24px.svg";
import { ReactComponent as PrevPageIcon } from '../../assets/prev-page-icon.svg';
import { ReactComponent as NextPageIcon } from '../../assets/next-page-icon.svg';
import { ReactComponent as LastPageIcon } from '../../assets/last-page-icon_24px.svg';


const iconToRender = (icon) => {
	switch (icon) {
    case "org-btn":
    case "repo-btn":
      return <GitIcon className="git-icon" />;
    case "nav-btn nav-btn-first":
      return <FirstPageIcon className="nav-icon" />;
    case "nav-btn nav-btn-prev":
      return <PrevPageIcon className="nav-icon" />;
    case "nav-btn nav-btn-next":
      return <NextPageIcon className="nav-icon" />;
    case "nav-btn nav-btn-last":
      return <LastPageIcon className="nav-icon" />;
    default:
      return;
  } 
}

const CustomButton = ({ className, children, ...buttonProps }) => (
  <button
    className={`${className} custom-button`}
    {...buttonProps}
  >
    {iconToRender(className)}
    {children}
  </button>
);
	
export default CustomButton;
	