// import { Select, Space } from "antd";

// export default function Input({ children, comment, num, input }) {
//   const options = [];
//   for (let i = 10; i < 36; i++) {
//     options.push({
//       label: i.toString(36) + i,
//       value: i.toString(36) + i,
//     });
//   }

//   const handleChange = (value) => {
//     console.log(`selected ${value}`);
//   };

//   return (
//     <li className=" w-[90%]">
//       <div className=" flex">
//         <label
//           className=" Text24px mr-6 block w-[40%] min-w-[20rem] md:leading-9"
//           htmlFor={`input${num}`}
//         >
//           {children} <br />
//           {comment ? (
//             <small className=" Text16px italic leading-4 md:leading-7 ">
//               {comment}
//             </small>
//           ) : (
//             ""
//           )}
//         </label>

//         {input === "dropDown" && (
//           <Space
//             style={{
//               width: "35%",
//             }}
//             direction="vertical"
//             wrap
//           >
//             <Select
//               defaultValue="lucy"
//               style={{
//                 width: "100%",
//               }}
//               onChange={handleChange}
//               options={[
//                 {
//                   value: "jack",
//                   label: "Jack",
//                 },
//                 {
//                   value: "lucy",
//                   label: "Lucy",
//                 },
//                 {
//                   value: "Yiminghe",
//                   label: "yiminghe",
//                 },
//                 {
//                   value: "disabled",
//                   label: "Disabled",
//                   disabled: true,
//                 },
//               ]}
//             />
//           </Space>
//         )}
//         {input === "multipleSelection" && (
//           <Space
//             style={{
//               width: "35%",
//             }}
//             direction="vertical"
//           >
//             <Select
//               mode="multiple"
//               allowClear
//               style={{
//                 width: "100%",
//               }}
//               placeholder="Please select"
//               defaultValue={["a10", "c12"]}
//               onChange={handleChange}
//               options={options}
//             />
//           </Space>
//         )}
//         {input === "number" && (
//           <input
//             className=" h-[2.8rem] w-[35%] min-w-[15rem] rounded-lg py-[.7rem] pl-[1.5rem] ring-1 ring-[#D9DADB] active:ring-black "
//             type={input}
//             id={`input${num}`}
//             max={10}
//             min={0}
//             name={`input${num}`}
//           />
//         )}
//         {input === "radio" && <input type={input} id={`input${num}`} />}
//       </div>
//     </li>
//   );
// }
