// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// function ProgressReport() {
//   const data = [
//     { month: "January", score: 89 },
//     { month: "Febuary", score: 75 },
//     { month: "March", score: 90 },
//     { month: "August", score: 20 },
//     { month: "September", score: 110 },
//     { month: "July", score: 45 },
//   ];

//   return (
//     <section className=" flex justify-center flex-col items-center generalPadding h-[100svh]">
//       <h1 className=" responsiveHeader font-bold">Progress Bar</h1>

//       <ResponsiveContainer width="100%" height="90%">
//         <LineChart
//           width={500}
//           height={400}
//           data={data}
//           syncId="anyId"
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="score"
//             stroke="#8884d8"
//             fill="#8884d8"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </section>
//   );
// }

// export default ProgressReport;
