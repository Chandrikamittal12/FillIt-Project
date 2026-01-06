
import React, { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= LOGIN SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const res = await API.post("/user/login", formData);

      console.log("Login successfully:", res.data);

      // 🔐 token optional (agar backend bhej raha hai)
      if (res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
      }

      const role = res.data.user.role;

      //  ROLE BASED REDIRECT
      if (role === "employee") {
        navigate("/employee");
      } else if (role === "admin") {
        navigate("/admin");
      } else if (role === "subadmin") {
        navigate("/subAdmin");
      } else if (role === "user") {
        navigate("/user");
      } else {
        navigate("/");
      }

    } catch (err) {
      // backend validation errors
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({
          general: err.response?.data?.message || "Login failed",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 via-pink-200 to-purple-300 px-4 py-10">
      <div className="w-full max-w-md bg-linear-to-br from-rose-400/40 via-purple-500/40 to-rose-300/40 backdrop-blur-md border border-purple-300 p-8 rounded-2xl shadow-xl">

        <h2 className="text-4xl font-bold text-rose-900 text-center mb-6">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="text-purple-600 text-md font-semibold">Email Id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-purple-400 bg-white focus:border-purple-600 focus:ring-1 focus:ring-purple-400 outline-none transition"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-purple-600 text-md font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-purple-400 bg-white focus:border-purple-600 focus:ring-1 focus:ring-purple-400 outline-none transition"
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          {errors.general && (
            <p className="text-red-700 text-sm text-center font-medium">{errors.general}</p>
          )}
           
          <div className="text-right">
            <a href="/forgot" className="text-purple-600 text-sm font-medium hover:underline transition">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-purple-700 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium underline hover:text-purple-900 transition">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
//!old is gold 

// import React, { useState } from "react";
// import API from "../../api/axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ================= LOGIN SUBMIT =================
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors({});
//     setLoading(true);

//     try {
//       const res = await API.post("/user/login", formData);

//       console.log("Login success:", res.data);

//       // 🔐 token optional (agar backend bhej raha hai)
//       if (res.data.accessToken) {
//         localStorage.setItem("accessToken", res.data.accessToken);
//       }

//       const role = res.data.user.role;

//       //  ROLE BASED REDIRECT
//       if (role === "employee") {
//         navigate("/employee");
//       } else if (role === "admin") {
//         navigate("/admin");
//       } else if (role === "subadmin") {
//         navigate("/subAdmin");
//       } else if (role === "user") {
//         navigate("/user");
//       } else {
//         navigate("/");
//       }

//     } catch (err) {
//       // backend validation errors
//       if (err.response?.data?.errors) {
//         setErrors(err.response.data.errors);
//       } else {
//         setErrors({
//           general: err.response?.data?.message || "Login failed",
//         });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-200 via-purple-300 to-purple-400 px-4">
//       <div className="w-full max-w-md bg-linear-to-br from-orange-300 to-rose-300 border border-purple-300/70 p-8 rounded-2xl shadow-xxl">

//         <h2 className="text-4xl font-bold text-rose-900 text-center mb-6">
//           Login
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>

//           <div>
//             <label className="text-purple-600 text-md font-bold">Email Id</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-50 border border-purple-200"
//             />
//             {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="text-purple-600 text-md font-bold">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-50 border border-purple-200"
//             />
//             {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
//           </div>

//           {errors.general && (
//             <p className="text-red-700 text-sm text-center">{errors.general}</p>
//           )}
           
//            <div className="text-right">
//             <a href="/forgot" className="text-purple-600 text-sm font-medium hover:underline">
//              Forgot Password?
//           </a>
//            </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>

//         </form>
//           <p className="text-center text-purple-700 mt-6 text-sm">
//           Don’t have an account?{" "}
//        <a href="/signup" className="font-medium underline">
//          Sign up
//        </a>
//      </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// // import React, { useState } from "react";
// // import API from "../../api/axios";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     if (!email || !password) {
// //       setError("Email and password required");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const res = await API.post("/user/login", {
// //         email,
// //         password,
// //       });

// //       alert(res.data.message);

// //       // optional: token localStorage
// //       if (res.data.token) {
// //         localStorage.setItem("token", res.data.token);
// //       }

// //     } catch (err) {
// //       setError(err.response?.data?.message || "Login failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-200 via-purple-300 to-purple-400 px-4">
// //       <div className="w-full max-w-md bg-linear-to-br from-orange-300 to-rose-300 border border-purple-300/70 p-8 rounded-2xl shadow-xxl">

// //         <h2 className="text-4xl font-bold text-rose-900 text-center mb-6">
// //           Login
// //         </h2>

// //         <form className="space-y-5" onSubmit={handleLogin}>

// //           <div>
// //             <label className="text-purple-600 text-md font-bold">
// //               Email Id
// //             </label>
// //             <input
// //               type="email"
// //               placeholder="Enter your email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-50 text-gray-700 placeholder-gray-500 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
// //             />
// //           </div>

// //           <div>
// //             <label className="text-purple-600 text-md font-bold">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               placeholder="Enter your password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-50 text-gray-700 placeholder-gray-500 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
// //             />
// //           </div>

// //           {error && <p className="text-red-600 text-sm">{error}</p>}

// //           <div className="text-right">
// //             <a href="/forgot" className="text-purple-600 text-sm font-medium hover:underline">
// //               Forgot Password?
// //             </a>
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full py-2 bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
// //           >
// //             {loading ? "Logging in..." : "Login"}
// //           </button>

// //         </form>

// //         <p className="text-center text-purple-700 mt-6 text-sm">
// //           Don’t have an account?{" "}
// //           <a href="/signup" className="font-medium underline">
// //             Sign up
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// // //!this is old login page design
// // // import React from "react";

// // // const Login = () => {
// // //   return (
// // //     <div
// // //       className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-200 via-purple-300 to-purple-400
// // //        px-4"
// // //     >
// // //       {/* Card */}
// // //       <div
// // //         className="w-full max-w-md bg-linear-to-br from-orange-300  to-rose-300
        
// // //         border border-purple-300/70
// // //         p-8 rounded-2xl shadow-xxl"
// // //       >
// // //         {/* Heading */}
// // //         <h2 className="text-4xl font-bold text-rose-900  text-center mb-6">
// // //           Login
// // //         </h2>

// // //         {/* Form */}
// // //         <form className="space-y-5">
// // //           {/* Email */}
// // //           <div>
// // //             <label className="text-purple-600 text-md font-bold">Email Id </label>
// // //             <input
// // //               type="email"
// // //               placeholder="Enter your email"
// // //               className="w-full mt-1 px-4 py-2 rounded-lg
// // //               bg-purple-50 text-gray-700 placeholder-gray-500
// // //               border border-purple-200
// // //               focus:outline-none focus:ring-2 focus:ring-purple-400"
// // //             />
// // //           </div>

// // //           {/* Password */}
// // //           <div>
// // //             <label className="text-purple-600 text-md font-bold">Password</label>
// // //             <input
// // //               type="password"
// // //               placeholder="Enter your password"
// // //               className="w-full mt-1 px-4 py-2 rounded-lg
// // //               bg-purple-50 text-gray-700 placeholder-gray-500
// // //               border border-purple-200
// // //               focus:outline-none focus:ring-2 focus:ring-purple-400"
// // //             />
// // //           </div>

// // //           {/* Forgot link */}
// // //           <div className="text-right">
// // //             <a
// // //               href="/forgot"
// // //               className="text-purple-600 text-sm font-medium hover:underline"
// // //             >
// // //               Forgot Password?
// // //             </a>
// // //           </div>

// // //           {/* Button */}
// // //           <button
// // //             className="w-full py-2 bg-linear-to-r from-purple-500 to-blue-500
// // //             text-white font-semibold rounded-lg shadow-md
// // //             hover:opacity-90 transition"
// // //           >
// // //             Login
// // //           </button>
        
// // //         </form>

// // //         {/* Signup */}
// // //         <p className="text-center text-purple-700 mt-6 text-sm">
// // //           Don’t have an account?{" "}
// // //           <a href="/signup" className="font-medium underline">
// // //             Sign up
// // //           </a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
