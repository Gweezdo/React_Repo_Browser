import React from 'react';

import './navigation.section.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component';

const NavSection = (props) => {

	const someFunction = () => {
		console.log("This will take user to first page")
	}

	return (
    <div className="nav-footer">
      <div className="navigation-container">
        <CustomButton
          className="nav-btn nav-btn-first"
          onClick={() => someFunction}
        >
          First
        </CustomButton>

        <CustomButton
          className="nav-btn nav-btn-prev"
          onClick={() => someFunction}
        >
          Prev
        </CustomButton>

        <CustomButton
          className="nav-btn nav-btn-next"
          onClick={() => someFunction}
        >
          Next
        </CustomButton>

        <CustomButton
          className="nav-btn nav-btn-last"
          onClick={() => someFunction}
        >
          Last
        </CustomButton>
      </div>
    </div>
  );

}

export default NavSection;