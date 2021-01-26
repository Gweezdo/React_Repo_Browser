import React from 'react';

import './repo-card.styles.scss';

import { ReactComponent as ForkIcon } from '../../assets/fork-icon_20px.svg';
import { ReactComponent as ShowMoreIcon } from "../../assets/show-more-icon.svg";
import { ReactComponent as StarIcon } from "../../assets/star-icon_20px.svg";
import { ReactComponent as WatchIcon } from "../../assets/watchers-icon_20px.svg";
import { ReactComponent as LanguageIcon } from "../../assets/language-icon_20px.svg";
import { ReactComponent as LicenseIcon } from "../../assets/license-icon_20px.svg";
import { ReactComponent as IssueIcon } from "../../assets/issues-icon_20px.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon_20px.svg";

import CustomButton from '../../components/custom-button/custom-button.component';


const RepoCard = (props) => {
	return (
    <div className="repo-card">
      <div className="top-section">
        <h4 className="repo-title">props.repo.name</h4>
        <h5 className="repo-description">props.repo.description</h5>
        <div className="btm-container">
          <div className="btm-left-container">
            <span className="update-text">Updated: props.repo.time</span>
            <div className="fork-container">
              <span className="fork-separator">|</span>
              <ForkIcon className="forked-icon" />
              <span className="fork-info">Forked from: prop.repo...</span>
            </div>
          </div>
          <div className="btm-right-container">
            <div className="show-info">
              <ShowMoreIcon className="show-more-icon" />
              <span className="show-text">Show more</span>
            </div>
            <CustomButton className="repo-btn">VIEW</CustomButton>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <hr className="line" />
        <div className="repo-info-container">
          <div className="repo-stats">
            <h6 className="stats-title">Repo Stats</h6>
            <div className="stats-container">
              <div className="stats-left">
                <div className="stat-flex">
                  <StarIcon className="stat-icon" />
                  <span className="stat-text">Stargazers</span>
                </div>
                <div className="stat-flex">
                  <WatchIcon className="stat-icon" />
                  <span className="stat-text">Watchers</span>
                </div>
                <div className="stat-flex">
                  <LanguageIcon className="stat-icon" />
                  <span className="stat-text">prop.repo.language</span>
                </div>
                <div className="stat-flex">
                  <LicenseIcon className="stat-icon" />
                  <span className="stat-text">prop.repo.license</span>
                </div>
								</div>

								<div className="stats-right">
									<div className="stat-flex">
										<ForkIcon className="stat-icon" />
										<span className="stat-text">props.repo.fork</span>
									</div>
									<div className="stat-flex">
										<IssueIcon className="stat-icon" />
										<span className="stat-text">props.repo.issues</span>
									</div>
									<div className="stat-flex">
										<CalendarIcon className="stat-icon" />
										<span className="stat-text">function(props.repo.time)</span>
									</div>
								
								
							</div>
            </div>
					</div>
					
					<div className="contributor-stats">
            <h6 className="contributor-title">Top Contributors:</h6>
            <ul className="contributor-list">
            <li className="contr1"></li>
            <li className="contr2"></li>
            <li className="contr3"></li>
            <li className="contr4"></li>
            <li className="contr5"></li>
            </ul>
					</div>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;