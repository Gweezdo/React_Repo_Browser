import React from 'react';

import { ReactComponent as FilterSortIcon } from '../../assets/filter-sort-icon_24px.svg'; 
//imported actions
import {
  filterReposAsync,
  sortReposAsync,
  toggleFilterDropdownHidden,
  toggleSortbyDropdownHidden,
} from "../../redux/repo/repo.actions";


import { useSelector } from "react-redux";
import store from '../../redux/store';

import './dropdown.styles.scss'

const Dropdown = ({
  title,
  content,
  toggleHidden,
  type,
}) => {
  const state = useSelector((state) => state.repos);

  const dropdownActionDispatch = () => {
    if (type === "Filter") {
      store.dispatch(toggleFilterDropdownHidden());
    } else if (type === "SortBy") {
      store.dispatch(toggleSortbyDropdownHidden());
    }
  };



  return (
    <div className="container">
      <span className="dropdown-title">{title}</span>
      <button
        className="dropdown-btn"
        onClick={dropdownActionDispatch}
        // onBlur={dropdownActionDispatch}
      >
        <span>
          {type === "Filter"
            ? state.filterReposBy
            : type === "SortBy"
            ? state.sortReposBy
            : null}
        </span>
        <FilterSortIcon className="filter-sort-icon" />
      </button>
      {toggleHidden ? (
        <div className="dropdown-content">
          {content.map((item, index) => (
            <span
              key={index}
              className="item"
              onClick={() => {
                if (type === "Filter") {
                  store.dispatch(filterReposAsync(item));
                } else if (type === "SortBy") {
                  store.dispatch(sortReposAsync(item));
                }
              }}
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;

