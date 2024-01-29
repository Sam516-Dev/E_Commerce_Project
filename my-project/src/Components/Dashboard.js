// import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f7f4f7;
//   padding: 1rem;
//   margintop: 10px;
// `;

// const DataPanel = styled.div`
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   border-radius: 0.5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   height: 32px;
//   width: 90%;
//   margin: 0.5rem;
//   padding: 1rem;
// `;

// const ProgressContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1rem;
// `;

// const ProgressItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-right: 0.5rem;
// `;

// const ProgressBar = styled.div`
//   height: 16px;
//   width: 6px;
//   background-color: #f0f0f0;
//   border-top-left-radius: 0.5rem;
//   border-top-right-radius: 0.5rem;

//   & > div {
//     border-top-left-radius: 0.5rem;
//     border-top-right-radius: 0.5rem;
//   }
// `;

// const DataCard = ({ title, value, change, progress }) => {
//   return (
//     <DataPanel>
//       <div className="text-sm font-medium text-violet-600 my-2">{title}</div>
//       <div className="class flex items-center">
//         <div className="text-3xl font-bold text-gray-700">{value}</div>
//         <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
//           <div className="text-xs bg-green-200 px-2 rounded-lg">{change}</div>
//         </div>
//       </div>
//       <div className="w-full h-1 rounded bg-gray-300 my-1">
//         <div
//           style={{ width: progress }}
//           className="h-1 rounded bg-green-500"
//         ></div>
//       </div>
//       <div className="text-xs font-medium text-gray-400">Weekly Goal</div>
//       <ProgressContainer>
//         {progress.map((item, index) => (
//           <ProgressItem key={index}>
//             <ProgressBar>
//               <div style={{ height: item, backgroundColor: "green" }}></div>
//             </ProgressBar>
//             <div className="text-xs font-medium ml-2 text-gray-500">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
//             </div>
//           </ProgressItem>
//         ))}
//       </ProgressContainer>
//     </DataPanel>
//   );
// };

// const Dashboard = () => {
//   return (
//     <Container>
//       <DataCard
//         title="Total Income"
//         value="$2,30,568"
//         change="+ 78%"
//         progress={[10, 20, 30, 40, 50, 60, 70]}
//       />
//       <DataCard
//         title="Engaged Users"
//         value="32.78%"
//         change="- 7%"
//         progress={[20, 30, 40, 50, 60, 70, 80]}
//       />
//       <DataCard
//         title="Weekly Income"
//         value="$6,568"
//         change="+ 54%"
//         progress={[30, 40, 50, 60, 70, 80, 90]}
//       />
//       <DataCard
//         title="Weekly Users"
//         value="16,568"
//         change="- 8.7%"
//         progress={[40, 50, 60, 70, 80, 90, 100]}
//       />
//     </Container>
//   );
// };

// export default Dashboard;
