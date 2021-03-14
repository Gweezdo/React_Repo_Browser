import React from 'react';

import './navigation.section.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component';
import {
  fetchReposAsync,
  currentPageNo,
  firstBtnActive,
  prevBtnActive,
  nextBtnActive,
  lastBtnActive,
} from "../../redux/repo/repo.actions";
import { useSelector } from "react-redux";
import store from "../../redux/store";

const NavSection = (props) => {
  const state = useSelector((state) => state.repos);

	const changePage = (pageNo) => {
    return store.dispatch(fetchReposAsync(state.repoURL, pageNo, state.filterReposByUrl, state.sortReposByUrl))
	};
  
	return (
    <div className="nav-footer">
      <div className="navigation-container">
        <CustomButton
          className={
            state.firstButtonIsActive
              ? `nav-btn nav-btn-first`
              : `nav-btn nav-btn-first nav-disabled`
          }
          onClick={() => {
            changePage(state.pageNoFirst);
            store.dispatch(currentPageNo(state.pageNoFirst));
            store.dispatch(firstBtnActive(false));
            store.dispatch(prevBtnActive(false));
            store.dispatch(lastBtnActive(true));
            store.dispatch(nextBtnActive(true));
          }}
        >
          First
        </CustomButton>

        <CustomButton
          
          className={
            state.prevButtonIsActive
              ? "nav-btn nav-btn-prev"
              : "nav-btn nav-btn-prev nav-disabled"
          }
          onClick={() => {
            changePage(state.pageNoPrev);
            store.dispatch(currentPageNo(state.pageNoPrev));
            if (state.pageNoCurrent === state.pageNoPrev) {
              store.dispatch(prevBtnActive(false));
              store.dispatch(firstBtnActive(false));
            }
          }}
        >
          Prev
        </CustomButton>

        <CustomButton
          className={
            state.nextButtonIsActive
              ? "nav-btn nav-btn-next"
              : "nav-btn nav-btn-next nav-disabled"
          }
          onClick={() => {
            changePage(state.pageNoNext);
            store.dispatch(currentPageNo(state.pageNoNext));
            store.dispatch(prevBtnActive(true));
            store.dispatch(firstBtnActive(true));
          }}
        >
          Next
        </CustomButton>

        <CustomButton
          className={
            state.lastButtonIsActive
              ? "nav-btn nav-btn-last"
              : "nav-btn nav-btn-last nav-disabled"
          }
          onClick={() => {
            changePage(state.pageNoLast);
            store.dispatch(currentPageNo(state.pageNoLast));
              store.dispatch(lastBtnActive(false));
              store.dispatch(nextBtnActive(false));
              store.dispatch(firstBtnActive(true));
              store.dispatch(prevBtnActive(true));
          }}
        >
          Last
        </CustomButton>
      </div>
    </div>
  );

}

export default NavSection;