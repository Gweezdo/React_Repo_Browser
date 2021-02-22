import React from "react";

const GetContributors = (list) => {
	console.log(list);
	var cont_list = [];
  list.list.then((res) => {
    for (var i in res) {
			cont_list.push(res[i]);
    }
		console.log(cont_list);

  });
	return (
		<div className="contributor-stats">
		<h6 className="contributor-title">Top Contributors:</h6>
		<ul className="contributor-list">
		{cont_list
			? cont_list.map((cont, index) => (
				<li className={"contr"} key={index}>
				{console.log("cont" + cont)}
					{cont}
					</li>
					))
          : "null1"}
					</ul>
    </div>
  );
};

export default GetContributors;
