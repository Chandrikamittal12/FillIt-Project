import React, { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //  SEND OTP
  const sendOtp = async () => {
    if (!email) {
      setMessage("Email is required");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/user/send-otp", { email });
      setMessage(res.data.message || "OTP sent successfully");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  //  VERIFY OTP
  const verifyOtp = async () => {
    if (!email || !otp) {
      setMessage("Email & OTP required");
      return;
    }

    try {
      setLoading(true);
      const res = await API.post("/user/verify-otp", { email, otp });
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 via-pink-200 to-purple-300 px-4 py-10">
      <div className="bg-linear-to-br from-rose-400/40 via-purple-500/40 to-rose-300/40 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-md border border-purple-300">
        
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">
          Verify Email
        </h2>

        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded-xl border-2 border-purple-400 focus:border-purple-600 focus:ring-1 focus:ring-purple-400 outline-none transition"
        />

        <button
          onClick={sendOtp}
          disabled={loading}
          className="w-full py-3 mb-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition-all"
        >
          Send OTP
        </button>

        <input
          type="text"
          placeholder="Enter 6 digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 mb-3 rounded-xl border-2 border-purple-400 focus:border-purple-600 focus:ring-1 focus:ring-purple-400 outline-none transition"
        />

        <button
          onClick={verifyOtp}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition-all"
        >
          Verify Email
        </button>

        {message && (
          <p className="text-center text-sm text-red-700 mt-4 font-medium">
            {message}
          </p>
        )}

        <p className="text-center mt-6 text-sm text-purple-700">
          Already user? <a href="/login" className="underline font-bold hover:text-purple-900 transition">Login</a>
        </p>

      </div>
    </section>
  );
};

export default VerifyEmail;


// import React, { useState } from "react";
// import API from "../../api/axios";
// import { useNavigate } from "react-router-dom";

// const VerifyEmail = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   //  SEND OTP
//   const sendOtp = async () => {
//     if (!email) {
//       setMessage("Email is required");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await API.post("/user/send-otp", { email });
//       setMessage(res.data.message || "OTP sent successfully");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   //  VERIFY OTP
//   const verifyOtp = async () => {
//     if (!email || !otp) {
//       setMessage("Email & OTP required");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await API.post("/user/verify-otp", { email, otp });
//       alert(res.data.message);
//       navigate("/login");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "OTP verification failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-700/50 via-rose-600/20 to-purple-700/50 px-4">
//       <div className="bg-linear-to-br from-rose-400/40 via-purple-500/40 to-rose-300 rounded-xl shadow-purple-300/30 p-6 w-full max-w-md border border-purple-300">

//         <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">
//           Verify Email
//         </h2>

//         <input
//           type="email"
//           placeholder="Enter registered email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-3 rounded-md bg-white border border-purple-300"
//         />

//         <button
//           onClick={sendOtp}
//           disabled={loading}
//           className="w-full py-2 rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold mb-4"
//         >
//           Send OTP
//         </button>

//         <input
//           type="text"
//           placeholder="Enter 6 digit OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           className="w-full p-3 mb-3 rounded-md bg-white border border-purple-300"
//         />

//         <button
//           onClick={verifyOtp}
//           disabled={loading}
//           className="w-full py-2 rounded-full bg-green-600 text-white font-semibold"
//         >
//           Verify Email
//         </button>

//         {message && (
//           <p className="text-center text-sm text-red-700 mt-4">
//             {message}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default VerifyEmail;
