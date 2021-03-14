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

import { toggleShowArr } from '../../redux/repo/repo.actions';
import { useSelector } from "react-redux";
import store from "../../redux/store";

const licenseHandeler = (props) => {
  if(props.license === null){
    return <span className="stat-text">License: No License</span>
  }else if (props.license){
    return <span className="stat-text">License: {props.license.name}</span>
  }
}

const forkedHandeler = (props) => {
  if(props.fork){
    return 'Yes'
  } else{
    return 'No'
  }
}


const minsOrHrs = (minutes, hours) => {
  if (minutes < 10 && hours < 10) {
    let mins_hrs = "0" + hours.toString() + ": 0" + minutes.toString();
    return mins_hrs;
  }
  if (hours < 10) {
    let mins_hrs = "0" + hours.toString() + ":" + minutes.toString();
    return mins_hrs;
  }
  if (minutes < 10) {
    let mins_hrs = hours.toString() + ": 0" + minutes.toString();
    return mins_hrs;
  }
  let mins_hrs = hours.toString() + ":" + minutes.toString();
  return mins_hrs;
}

const timeHandeler = (time) => {
  var date = new Date(Date.parse(time));
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  return ` ${day.toString()}/${month.toString()}/${year.toString()} ${minsOrHrs(
    minutes,
    hours
  )}`;
}

const RepoCard = (props) => {
const state = useSelector((state) => state.repos);
  return (
    <div className="repo-card">
      <div className="top-section">
        <h4 className="repo-title">{props.name}</h4>
        <h5 className="repo-description">{props.description}</h5>
        <div className="btm-container">
          <div className="btm-left-container">
            <span className="update-text">
              Updated: {timeHandeler(props.updated_at)}
            </span>
            <div className="fork-container">
              <span className="fork-separator">|</span>
              <ForkIcon className="forked-icon" />
              <span className="fork-info">Forked: {forkedHandeler(props)}</span>
            </div>
          </div>
          <div className="btm-right-container">
            <div>
              <div
                className="show-info"
                onClick={() => {
                  const newArr = state.showArr.slice();
                  newArr[props.index] = !state.showArr[props.index];
                  console.log(`clicked: ${props.index}`);
                  console.log(newArr);
                  store.dispatch(toggleShowArr(newArr));
                }}
              >
                {state.showArr[props.index] ? (
                  <div className="show-less">
                    <ShowMoreIcon className="show-less-icon"></ShowMoreIcon>
                    <span className="show-text">Show Less</span>
                  </div>
                ) : (
                  <div className="show-more">
                    <ShowMoreIcon className="show-more-icon"></ShowMoreIcon>
                    <span className="show-text">Show More</span>
                  </div>
                )}
              </div>
            </div>
            <CustomButton
              className="repo-btn"
              onClick={() => window.open(props.html_url, "_blank")}
            >
              VIEW
            </CustomButton>
          </div>
        </div>
      </div>
      <div
        className={
          state.showArr[props.index]
            ? `bottom-section`
            : `bottom-section repo-card-hidden`
        }
      >
        <hr className="line" />
        <div className="repo-info-container">
          <div className="repo-stats">
            <h6 className="stats-title">Repo Stats</h6>
            <div className="stats-container">
              <div className="stats-left">
                <div className="stat-flex">
                  <StarIcon className="stat-icon" />
                  <span className="stat-text">
                    Stargazers: {props.stargazers_count}
                  </span>
                </div>
                <div className="stat-flex">
                  <WatchIcon className="stat-icon" />
                  <span className="stat-text">
                    Watchers: {props.watchers_count}
                  </span>
                </div>
                <div className="stat-flex">
                  <LanguageIcon className="stat-icon" />
                  <span className="stat-text">Language: {props.language}</span>
                </div>
                <div className="stat-flex">
                  <LicenseIcon className="stat-icon" />
                  {licenseHandeler(props)}
                </div>
              </div>

              <div className="stats-right">
                <div className="stat-flex">
                  <ForkIcon className="stat-icon" />
                  <span className="stat-text">Forks: {props.forks_count}</span>
                </div>
                <div className="stat-flex">
                  <IssueIcon className="stat-icon" />
                  <span className="stat-text">Issues: {props.open_issues}</span>
                </div>
                <div className="stat-flex">
                  <CalendarIcon className="stat-icon" />
                  <span className="stat-text">
                    Created: {timeHandeler(props.created_at)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contributor-stats">
            <h6 className="contributor-title">Top Contributors:</h6>
            <ul className="contributor-list">
              {props.contributor_arr.length > 0
                ? props.contributor_arr.map((cont, index) => (
                    <li className="contr" key={index}>
                      {cont}
                    </li>
                  ))
                : "No Contributors"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;