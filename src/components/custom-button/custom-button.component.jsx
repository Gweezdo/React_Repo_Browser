import React from "react";

import "./custom-button.styles.scss";

import { ReactComponent as GitIcon } from "../../assets/github-icon_24px.svg";
import { ReactComponent as FirstPageIcon } from "../../assets/first-page-icon_24px.svg";
import { ReactComponent as PrevPageIcon } from '../../assets/prev-page-icon.svg';
import { ReactComponent as NextPageIcon } from '../../assets/next-page-icon.svg';
import { ReactComponent as LastPageIcon } from '../../assets/last-page-icon_24px.svg';


const iconToRender = (icon) => {
	switch (icon) {
		case "orgBtn":
		case "repoBtn":
			return <GitIcon className="git-icon"/>;
		case "navBtnFirst":
			return <FirstPageIcon className="first-page-icon" />;
		case "navBtnPrev":
			return <PrevPageIcon className="prev-page-icon" />;
		case "navBtnNext":
			return <NextPageIcon className="next-page-icon" />;
		case "navBtnLast":
			return <LastPageIcon className="last-page-icon" />;
		default:
			return;	
	} 
}

const CustomButton = ({
  iconSwitch,
  orgBtn,
  repoBtn,
  navBtn,
  navBtnRight,
  children,
}) => (
  <button
    className={`${orgBtn ? "org-btn" : ""} 
			${repoBtn ? "repo-btn" : ""} 
			${navBtn ? "nav-btn" : ""} 
			${navBtnRight ? "nav-btn-right" : ""} custom-button`}
  >
    {iconToRender(iconSwitch)}
    {children}
  </button>
);
	
	export default CustomButton;
	