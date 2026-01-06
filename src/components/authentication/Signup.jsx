// import React, { useState } from "react";
// import API from "../../api/axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();

//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     role: "",
//     country: "",
//     state: "",
//     city: "",
//     gender: "",
//     username: "",
//     email: "",
//     mobile: "",
//     password: "",
//     terms: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // ================= STEP 1 =================
//   const handleNextStep1 = () => {
//     if (!formData.role) {
//       setErrors({ role: "Please select role" });
//       return;
//     }
//     setErrors({});
//     setStep(2);
//   };

//   // ================= STEP 2 =================
//   const handleNextStep2 = () => {
//     const err = {};
//     if (!formData.country) err.country = "Country required";
//     if (!formData.state) err.state = "State required";
//     if (!formData.city) err.city = "City required";
//     if (!formData.gender) err.gender = "Gender required";

//     if (Object.keys(err).length) {
//       setErrors(err);
//       return;
//     }
//     setErrors({});
//     setStep(3);
//   };

//   // ================= SUBMIT =================
//   const handleSubmit = async () => {
//     const err = {};
//     if (!formData.username) err.username = "Name required";
//     if (!formData.email) err.email = "Email required";
//     if (!formData.mobile) err.mobile = "Mobile required";
//     if (!formData.password) err.password = "Password required";
//     if (!formData.terms) err.terms = "Accept terms";

//     if (Object.keys(err).length) {
//       setErrors(err);
//       return;
//     }

//     try {
//       setLoading(true);

//       //  Signup
//       await API.post("/user/signup", formData);

//       //  Send OTP
//       await API.post("/user/send-otp", { email: formData.email });

//       //  Redirect to verify page
//       navigate("/verify-email", {
//         state: { email: formData.email },
//       });

//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//         "Signup failed"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-rose-300 via-purple-300 to-purple-400 flex items-center justify-center px-4 py-10">
//       <div className="bg-linear-to-br from-orange-300 to-rose-300 p-6 rounded-2xl shadow-xxl w-full max-w-xl border border-purple-300/70">

//         <h1 className="text-4xl font-bold text-center text-rose-900 mb-2">
//           FillIt
//         </h1>
//         <p className="text-center text-gray-700 mb-6">
//           Fast, secure & smart exam form filling portal
//         </p>

//         {/* ================= STEPS ================= */}
//         <div className="flex justify-center mb-8">
//           {[1, 2, 3].map((n) => (
//             <div key={n} className="flex items-center">
//               <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center
//                 ${step === n ? "border-purple-600 text-purple-600" : "border-gray-400 text-gray-500"}`}>
//                 {n}
//               </div>
//               {n !== 3 && <div className="w-10 h- bg-gray-400"></div>}
//             </div>
//           ))}
//         </div>

//         {/* ================= STEP 1 ================= */}
//         {step === 1 && (
//           <div className="space-y-4">
//             <select name="role" onChange={handleChange} className="w-full px-3 py-2 rounded-lg border-2">
//               <option value="">Select Role</option>
//               <option value="user">User</option>
//               <option value="employee">Employee</option>
//               <option value="subadmin">Subadmin</option>
//             </select>
//             {errors.role && <p className="text-red-600 text-sm">{errors.role}</p>}

//             <button onClick={handleNextStep1} className="w-full bg-purple-600 text-white py-2 rounded-lg">
//               Next
//             </button>
//           </div>
//         )}

//         {/* ================= STEP 2 ================= */}
//         {step === 2 && (
//           <div className="space-y-4">

//             <select name="country" value={formData.country} onChange={handleChange} className="w-full border-2 px-3 py-2 rounded-lg">
//               <option value="">Select Country</option>
//               <option value="India">India</option>
//             </select>
//             {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}

//             <select name="state" value={formData.state} onChange={handleChange} className="w-full border-2 px-3 py-2 rounded-lg">
//               <option value="">Select State</option>
//               <option value="Madhya Pradesh">Madhya Pradesh</option>
//             </select>
//             {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}

//             <select name="city" value={formData.city} onChange={handleChange} className="w-full border-2 px-3 py-2 rounded-lg">
//               <option value="">Select City</option>
//               <option value="Indore">Indore</option>
//             </select>
//             {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}

//             <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border-2 px-3 py-2 rounded-lg">
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}

//             <div className="flex justify-between">
//               <button onClick={() => setStep(1)} className="px-5 py-2 bg-purple-600 text-white rounded-lg">
//                 Previous
//               </button>
//               <button onClick={handleNextStep2} className="px-5 py-2 bg-purple-600 text-white rounded-lg">
//                 Next
//               </button>
//             </div>
//           </div>
//         )}


//         {/* ================= STEP 3 ================= */}
//         {step === 3 && (
//           <div className="space-y-4">
//             <input name="username" placeholder="Full Name" onChange={handleChange} className="w-full px-3 py-2 rounded-lg" />
//             <input name="email" placeholder="Email" onChange={handleChange} className="w-full px-3 py-2 rounded-lg" />
//             <input name="mobile" placeholder="Mobile" onChange={handleChange} className="w-full px-3 py-2 rounded-lg" />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full px-3 py-2 rounded-lg" />

//             <label className="flex gap-2 text-sm">
//               <input type="checkbox" name="terms" onChange={handleChange} />
//               Accept Terms & Conditions
//             </label>

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="w-full bg-green-600 text-white py-2 rounded-lg"
//             >
//               {loading ? "Processing..." : "Create Account"}
//             </button>
//           </div>
//         )}

//          {/* {step === 3 && (
//           <div className="space-y-4">

//             <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} className="w-full bg-purple-50 px-3 py-2 rounded-lg" />
//             {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}

//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full bg-purple-50 px-3 py-2 rounded-lg" />
//             {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

//             <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="w-full bg-purple-50 px-3 py-2 rounded-lg" />
//             {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}

//             <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full bg-purple-50 px-3 py-2 rounded-lg" />
//             {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}

//             <label className="flex items-center gap-2">
//               <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
//               <span>I accept Terms & Conditions</span>
//             </label>
//             {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}

//             <div className="flex justify-between">
//               <button onClick={() => setStep(2)} className="px-5 py-2 bg-purple-600 text-white rounded-lg">
//                 Previous
//               </button>
//               <button onClick={handleSubmit} disabled={loading} className="px-5 py-2 bg-green-600 text-white rounded-lg">
//                 {loading ? "Creating..." : "Create Account"}
//               </button>
//             </div>
//           </div>
//         )} */}

//         <p className="text-center mt-5 text-sm">
//           Already user? <a href="/login" className="underline font-bold">Login</a>
//         </p>

//       </div>
//       </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    country: "",
    state: "",
    city: "",
    gender: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= STEP 1 =================
  const handleNextStep1 = () => {
    if (!formData.role) {
      setErrors({ role: "Please select role" });
      return;
    }
    setErrors({});
    setStep(2);
  };

  // ================= STEP 2 =================
  const handleNextStep2 = () => {
    const err = {};
    if (!formData.country) err.country = "Country required";
    if (!formData.state) err.state = "State required";
    if (!formData.city) err.city = "City required";
    if (!formData.gender) err.gender = "Gender required";

    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setErrors({});
    setStep(3);
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    const err = {};
    if (!formData.username) err.username = "Name required";
    if (!formData.email) err.email = "Email required";
    if (!formData.mobile) err.mobile = "Mobile required";
    if (!formData.password) err.password = "Password required";
    if (!formData.terms) err.terms = "Accept terms";

    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    try {
      setLoading(true);

      //  Signup
      await API.post("/user/signup", formData);

      //  Send OTP
      await API.post("/user/send-otp", { email: formData.email });

      //  Redirect to verify page
      navigate("/verify-email", {
        state: { email: formData.email },
      });

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-pink-200 to-purple-300 flex items-center justify-center px-6 py-12">
      <div className="bg-linear-to-br from-purple-200 to-pink-200 p-8 rounded-3xl shadow-xl w-full max-w-md border border-purple-400">

        <h1 className="text-5xl font-bold text-center text-purple-800 mb-3">
          FillIt
        </h1>
        <p className="text-center text-gray-700 mb-8 text-md">
          Fast, secure & smart exam form filling portal
        </p>

        {/* ================= STEPS ================= */}
        <div className="flex justify-center mb-10">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center">
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                ${step === n ? "border-purple-700 text-purple-700" : "border-gray-400 text-gray-500"}`}>
                {n}
              </div>
              {n !== 3 && <div className="w-12 h-2px bg-gray-300"></div>}
            </div>
          ))}
        </div>

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="space-y-5">
            <select name="role" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-purple-500">
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="employee">Employee</option>
              <option value="subadmin">Subadmin</option>
            </select>
            {errors.role && <p className="text-red-600 text-sm">{errors.role}</p>}

            <button onClick={handleNextStep1} className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800 transition">
              Next
            </button>
          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <div className="space-y-4">
            <select name="country" value={formData.country} onChange={handleChange} className="w-full border-2 px-4 py-3 rounded-xl">
              <option value="">Select Country</option>
              <option value="India">India</option>
            </select>
            {errors.country && <p className="text-red-600 text-sm">{errors.country}</p>}

            <select name="state" value={formData.state} onChange={handleChange} className="w-full border-2 px-4 py-3 rounded-xl">
              <option value="">Select State</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
            </select>
            {errors.state && <p className="text-red-600 text-sm">{errors.state}</p>}

            <select name="city" value={formData.city} onChange={handleChange} className="w-full border-2 px-4 py-3 rounded-xl">
              <option value="">Select City</option>
              <option value="Indore">Indore</option>
            </select>
            {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}

            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border-2 px-4 py-3 rounded-xl">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-red-600 text-sm">{errors.gender}</p>}

            <div className="flex justify-between mt-3">
              <button onClick={() => setStep(1)} className="px-6 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
                Previous
              </button>
              <button onClick={handleNextStep2} className="px-6 py-2 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition">
                Next
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <div className="space-y-4">
            <input name="username"  placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2" />
            <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2" />
            <input name="mobile" placeholder="Mobile" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2" />

            <label className="flex gap-2 text-sm">
              <input type="checkbox" name="terms" onChange={handleChange} />
              Accept Terms & Conditions
            </label>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              {loading ? "Processing..." : "Create Account"}
            </button>
          </div>
        )}

        <p className="text-center mt-6 text-sm text-purple-800">
          Already user? <a href="/login" className="underline font-bold">Login</a>
        </p>

      </div>
    </div>
  );
}

export default Signup;


