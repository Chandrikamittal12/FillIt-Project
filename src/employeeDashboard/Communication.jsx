import React, { useState } from "react";
import { Search, Send, User, MessageCircle } from "lucide-react";

const Communication = () => {
  const [query, setQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);

  const users = [
    { id: 1, name: "Amit Sharma", role: "User" },
    { id: 2, name: "Riya Patel", role: "Employee" },
    { id: 3, name: "Deepak Verma", role: "User" },
  ];

  const messagesDB = {
    1: [
      { sender: "admin", message: "Hello Amit, we need additional documents.", time: "10:20 AM", status: "seen" },
      { sender: "user", message: "Sure, I will upload it today.", time: "10:22 AM" },
    ],
    2: [
      { sender: "admin", message: "Riya, please check the new request assigned to you.", time: "9:50 AM", status: "delivered" },
    ],
    3: [
      { sender: "admin", message: "Deepak, your form is under review.", time: "8:10 AM", status: "seen" },
      { sender: "user", message: "Thanks for the update!", time: "8:20 AM" },
    ],
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    messagesDB[selectedChat].push({
      sender: "admin",
      message: newMessage,
      time: "Just now",
      status: "delivered",
    });

    setNewMessage("");
  };

  return (
    <div className="min-h-screen p-6 bg-white/30 text-gray-800 ">
      <h2 className="text-2xl font-semibold mb-6 text-purple-600">
        Communication
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ---------- LEFT SIDEBAR ---------- */}
        <div className="p-4 rounded-2xl h-[75vh] flex flex-col bg-purple-400/40 border border-purple-300/20 relative before:absolute before:inset-0 before:p-2px before:bg-linear-to-r before:from-orange-300 before:via-rose-300 before:to-purple-600 before:rounded-2xl before:-z-10 shadow-purple-400 shadow-2xl">

          {/* Search */}
          <div className="px-3 py-2 rounded-xl flex items-center gap-2 mb-4 bg-white border border-purple-600/90">
            <Search size={18} className="text-gray-800 " />
            <input
              type="text"
              placeholder="Search user..."
              className="bg-transparent outline-none w-full text-sm text-gray-800 placeholder-gray-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* bg-linear-to-br from-indigo-600 via-rose-400 to-indigo-600  */}
          {/* User List */}
          <div className="overflow-auto space-y-2">
            {filteredUsers.map((u) => (
              <div
                key={u.id}
                onClick={() => setSelectedChat(u.id)}
                className={`p-3 rounded-xl cursor-pointer transition-all relative
                  ${
                    selectedChat === u.id
                      ? "bg-linear-to-r from-orange-500 via-rose-500 to-purple-600 text-white shadow-[0_0_20px_rgba(255,80,0,0.4)]"
                      : "bg-white/40  hover:bg-white"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full 
                      ${
                        selectedChat === u.id
                          ? "bg-white/30"
                          : "bg-purple-600/20 text-purple-400"
                      }
                    `}
                  >
                    <User size={18} className="text-black"/>
                  </div>
                  <div>
                    <p className="font-medium">{u.name}</p>
                    <p className="text-xs text-gray-800">{u.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- CHAT WINDOW ---------- */}
        <div className="lg:col-span-2 p-4 rounded-2xl h-[75vh] flex flex-col bg-indigo-200 border border-purple-300/20 relative before:absolute before:inset-0 before:p-2px before:bg-linear-to-br before:from-orange-300 before:via-rose-200 before:to-purple-400 before:rounded-2xl before:-z-10 shadow-2xl shadow-purple-500">
           {/* bg-linear-to-br from-indigo-600 via-rose-300 to-indigo-600 */}
          {/* No Chat Selected */}
          {!selectedChat && (
            <div className="h-full flex flex-col items-center justify-center text-gray-800">
              <MessageCircle size={40} className="mb-2 text-purple-500" />
              <p>Select a user to start communication</p>
            </div>
          )}

          {/* Messages */}
          {selectedChat && (
            <>
              <div className="flex-1 overflow-auto p-2 space-y-4">
                {messagesDB[selectedChat].map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "admin" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-sm lg:max-w-md p-3 rounded-xl text-sm
                        ${
                          msg.sender === "admin"
                            ? "bg-linear-to-r from-purple-500 to-indigo-600 text-black shadow-[0_0_20px_rgba(128,0,255,0.4)]"
                            : "bg-white/40 text-black"
                        }
                      `}
                    >
                      <p>{msg.message}</p>
                      <p className="text-[10px] mt-1 text-black flex justify-between">
                        <span>{msg.time}</span>
                        {msg.status && (
                          <span className="text-black">{msg.status}</span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="mt-4 flex items-center gap-3 px-3 py-2 rounded-xl bg-white/70 border-2 border-gray-800 shadow-inner">
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-sm font-bold text-gray-800"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  onClick={sendMessage}
                  className="p-2 rounded-xl bg-indigo-800 hover:bg-purple-600 transition-all shadow-[0_0_25px_rgba(255,80,0,0.4)]"
                >
                  <Send size={18} className="text-white hover:text-black" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communication;
