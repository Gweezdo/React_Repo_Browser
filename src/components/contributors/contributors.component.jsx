import React from "react";

const GetContributors = (list) => {
	
	return (
		<div className="contributor-stats">
		<h6 className="contributor-title">Top Contributors:</h6>
		<ul className="contributor-list">
		{list
			? list.map((cont, index) => (
				<li className={"contr"} key={index}>
				{console.log("cont" + cont)}
					{cont}
					</li>
					))
          : "null"}
					</ul>
    </div>
  );
};

export default GetContributors;
