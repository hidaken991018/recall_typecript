import Image from "next/image";
import { useState } from "react";

const customers = [
  {
    id: 1,
    name: "Ann Culhane",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Open",
    statusColor: "bg-indigo-100 text-indigo-600",
    rate: "$500.00",
    balance: "-$270.00",
    deposit: "$70.00",
    number: "5684236526",
    checked: false,
  },
  {
    id: 11,
    name: "Tatiana Mango",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "Paid",
    statusColor: "bg-green-100 text-green-700",
    rate: "$500.00",
    balance: "-$270.00",
    deposit: "$70.00",
    number: "5684236536",
    checked: false,
  },
  // ...他のデータも同様に追加...
];

function StatusTag({ status, color }: { status: string; color: string }) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>{status}</span>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(Array(customers.length).fill(false));

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <div className="flex w-full justify-between mb-4 gap-2">
        <div className="flex items-center bg-white border rounded-md px-3 py-2 shadow-sm w-80">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input
            className="outline-none w-full bg-transparent text-sm"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
          Add customer
        </button>
        <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
        </button>
      </div>
      <div className="overflow-x-auto w-full bg-white rounded-lg shadow">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">#</th>
              <th className="p-3">name</th>
              <th className="p-3">description</th>
              <th className="p-3">Status</th>
              <th className="p-3">Rate</th>
              <th className="p-3">Balance</th>
              <th className="p-3">Deposit</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => (
              <tr key={c.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 text-center"><input type="checkbox" checked={checked[i]} onChange={() => setChecked(checked => checked.map((v, idx) => idx === i ? !v : v))} /></td>
                <td className="p-3 text-right text-xs text-gray-500">{c.id}</td>
                <td className="p-3 font-medium text-gray-900">{c.name}</td>
                <td className="p-3 text-gray-700 max-w-xs truncate">{c.description}</td>
                <td className="p-3"><StatusTag status={c.status} color={c.statusColor} /></td>
                <td className="p-3 text-right">{c.rate}</td>
                <td className="p-3 text-right">{c.balance}</td>
                <td className="p-3 text-right">{c.deposit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between w-full mt-4 text-xs text-gray-500">
        <span>1-10 of 97</span>
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg></button>
          <span>1/10</span>
          <button className="p-1 rounded hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </div>
    </div>
  );
}
