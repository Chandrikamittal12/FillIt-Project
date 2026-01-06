// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3000/api/v1",
//   withCredentials: true, // 👈 cookies ke liy
// });

// export default API;
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true
});

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;
    if (err.response.status === 401 && !original._retry) {
      original._retry = true;
      const { data } = await API.get("/auth/refresh");
      localStorage.setItem("accessToken:", data.accessToken);
      original.headers.Authorization = `Bearer ${data.accessToken}`;
      return API(original);
    }
    return Promise.reject(err);
  });


//  API.interceptors.request.use(
//   (config)=>{

//     return config;
//   },
//   (error)=>{
//     return Promise.reject(error);
//       }
//  );
//  API.interceptors.response.use(
//   (response)=>{
//     return response;  
//   },
//   (error)=>{
//     if(error.response.status===401){
//       window.location.href="/login";
//     }
//   }


// );

export default API;
