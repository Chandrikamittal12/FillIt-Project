// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     mobile: "",
//     role: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/api/v1/user/signup", formData);
//       alert("Signup successful");
//     } catch (err) {
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 to-purple-50">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

//         <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
//           Create Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* Row 1 */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="label">Username</label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 className="input"
//                 placeholder="Enter username"
//                 required
//               />
//             </div>

//             <div>
//               <label className="label">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 className="input"
//                 placeholder="Enter email"
//                 required
//               />
//             </div>
//           </div>

//           {/* Row 2 */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 className="input"
//                 placeholder="Enter password"
//                 required
//               />
//             </div>

//             <div>
//               <label className="label">Mobile Number</label>
//               <input
//                 type="text"
//                 name="mobile"
//                 onChange={handleChange}
//                 className="input"
//                 placeholder="Enter mobile"
//               />
//             </div>
//           </div>

//           {/* Row 3 */}
//           <div>
//             <label className="label">Role</label>
//             <input
//               type="text"
//               name="role"
//               onChange={handleChange}
//               className="input"
//               placeholder="Enter role"
//             />
//           </div>

//           {/* Checkbox */}
//           <div className="flex items-center gap-2 text-sm text-gray-600">
//             <input type="checkbox" required />
//             <span>
//               I agree to the{" "}
//               <span className="text-indigo-600 cursor-pointer">
//                 Terms & Conditions
//               </span>
//             </span>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
