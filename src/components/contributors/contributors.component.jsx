// import React from "react";

// const GetContributors = async (url) => {
//   try {
//     const responce = await fetch(url);
//     if (!responce.ok) {
//       throw Error(responce.statusText);
//     } else {
//       var cont_list = [];
// 			const result = await responce.json();
// 			console.log(result)
//       // console.log(result.headers);
//       for (var i = 0; i < result.length; i++) {
//         cont_list.push(result[i].login);
//         // console.log("result[i].login: " + i + result[i].login);
//         if (i === 4) {
//           break;
//         }
//       }
//       // console.log(cont_list)
//       // return cont_list;
// 			return (
// 				<div className="contributor-stats">
// 					<h6 className="contributor-title">Top Contributors:</h6>
// 					<ul className="contributor-list">
// 						{cont_list.length
// 							? cont_list.map((cont, index) => (
// 									<li className={"contr"} key={index}>
// 										{`${cont}`}
// 									</li>
// 								))
// 							: null}
// 					</ul>
// 				</div>
// 			);
//     }
//   } catch (error) {
//     console.log("Fetch to catalyst CONTRIBUTORS api errored out!");
//   }

// };

// export default GetContributors;
