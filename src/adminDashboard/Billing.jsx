import { useState } from "react";
import { Download, IndianRupee, Search } from "lucide-react";

const Billing = () => {
  const [search, setSearch] = useState("");

  const invoices = [
    { id: "INV-1001", user: "Amit Sharma", amount: 499, date: "12 Jan 2025", method: "UPI", status: "Paid" },
    { id: "INV-1002", user: "Riya Patel", amount: 299, date: "14 Jan 2025", method: "Credit Card", status: "Pending" },
    { id: "INV-1003", user: "Deepak Verma", amount: 799, date: "10 Jan 2025", method: "Wallet", status: "Failed" },
    { id: "INV-1004", user: "Karan Patel", amount: 1499, date: "20 Jan 2025", method: "Debit Card", status: "Paid" },
  ];

  const filtered = invoices.filter(
    (inv) =>
      inv.user.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 text-gray-200">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-semibold text-purple-600">
          Billing & Invoice Management
        </h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-800" size={18} />
          <input
            type="text"
            placeholder="Search invoice or user..."
            className="bg-white text-gray-800 pl-10 pr-4 py-2 rounded-xl w-72
                       outline-none border border-indigo-500 
                       focus:ring-2 focus:ring-purple-500 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* INVOICE CARD WITH GRADIENT BORDER */}
      <div
        className="
          p-2 rounded-2xl border-2
          border-rose-400/30
          shadow-[0_0_25px_rgba(138,0,255,0.25)]
        "
      >
        <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-5 text-black bg-linear-to-r from-orange-600 to-purple-600  bg-clip-text">
            Invoice Records
          </h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="w-full border-collapse text-gray-800">
              <thead className="bg-rose-500/30 text-black">
                <tr>
                  <th className="py-3 px-4 text-left">Invoice ID</th>
                  <th className="py-3 px-4 text-left">User</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Payment Method</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Download</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((inv) => (
                  <tr
                    key={inv.id}
                    className="border-t border-gray-600 hover:bg-purple-300 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">{inv.id}</td>
                    <td className="py-3 px-4">{inv.user}</td>
                    <td className="py-3 px-4">{inv.date}</td>

                    {/* Amount */}
                    <td className="py-3 px-4 flex items-center gap-1 text-gray-800">
                      <IndianRupee size={14} />
                      {inv.amount}
                    </td>

                    <td className="py-3 px-4 text-gray-800">{inv.method}</td>

                    {/* STATUS BADGE */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs ${
                          inv.status === "Paid"
                            ? "bg-green-600/20 text-green-600"
                            : inv.status === "Pending"
                            ? "bg-blue-600/20 text-indigo-700"
                            : "bg-red-600/20 text-red-800"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </td>

                    {/* DOWNLOAD */}
                    <td className="py-3 px-4">
                      <button
                        className="
                          flex items-center gap-2 px-3 py-1 rounded-lg
                          bg-linear-to-r from-purple-600/20 to-indigo-600/20
                          text-indigo-800 hover:scale-105 
                          hover:from-purple-700/30 hover:to-indigo-600/30
                          transition-all
                        "
                      >
                        <Download size={18} />
                        <span className="text-sm">Invoice</span>
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan="7" className="py-4 text-center text-gray-800 italic">
                      No invoices found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Billing;
