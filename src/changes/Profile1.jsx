import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateAge } from "../slice/profile/profileSlice";

const Profile1 = () => {
  const dispatch = useDispatch();

  // counter jaisa selector
  const name = useSelector((state) => state.profile.name);
  const age = useSelector((state) => state.profile.age);

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between shadow-md">
        <h1 className="text-xl font-semibold">WELCOME {name}</h1>
        {/* <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold">
          {name}
        </button> */}
      </nav>

      {/* Profile Card */}
      <div className="flex justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Profile Details
          </h2>

          <p className="mb-2">
            <strong>Name:</strong> {name}
          </p>
          <p className="mb-6">
            <strong>Age:</strong> {age}
          </p>

          {/* Update Name */}
          <input
            type="text"
            placeholder="Enter name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
            onClick={() => dispatch(updateName(inputName))}
          >
            Update Name
          </button>

          {/* Update Age */}
          <input
            type="number"
            placeholder="Enter age"
            value={inputAge}
            onChange={(e) => setInputAge(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />

          <button
            className="w-full bg-green-500 text-white py-2 rounded-lg"
            onClick={() => dispatch(updateAge(Number(inputAge)))}
          >
            Update Age
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
