import React from "react";

const GetContributors = (list) => {
	console.log(list);
	return (
		<div className="contributor-stats">
			<h6 className="contributor-title">Top Contributors:</h6>
			<ul className="contributor-list">
				{list.length
					? list.map((cont, index) => (
							<li className={"contr"} key={index}>
								{cont}
							</li>
						))
					: "null1"
				}
			</ul>
		</div>
	);
};

export default GetContributors;
