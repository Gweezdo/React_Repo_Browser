import React from "react";

import { ReactComponent as CatalystLogo } from "../../assets/catalyst-logo.svg";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./header.styles.scss";

const Header = ({ blogUrl, orgGitUrl }) => {
  console.log(blogUrl);
  return (
    <div className="header">
      <div className="logo-container">
        <CatalystLogo className="logo" />
      </div>
      <div className="button-container">
        <span className="view-blog-btn" onClick={() => window.open(blogUrl, "_blank")}>View blog</span>
        <CustomButton
          iconSwitch={"orgBtn"}
          orgBtn={true}
          onClick={() => window.open(orgGitUrl, "_blank")
        }
        >
          VIEW
        </CustomButton>
        <CustomButton
          iconSwitch={"navBtnNext"}
          navBtn={true}
          navBtnRight={true}
          onClick={() => window.open(orgGitUrl, "_blank")
        }
        >
          Next
        </CustomButton>
        <CustomButton
          iconSwitch={"repoBtn"}
          repoBtn={true}
          onClick={() => window.open(orgGitUrl, "_blank")
        }
        >
          VIEW
        </CustomButton>
      </div>
    </div>
  );
};

export default Header;
