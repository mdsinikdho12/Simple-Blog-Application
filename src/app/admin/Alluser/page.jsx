"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">All Users</h1>
      <p className="text-center text-gray-600">List of all registered users</p>

      <table className="min-w-full mt-4 border">
        <thead>
          <tr className="bg-[#103355] text-white">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u._id} className="text-center">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{u.name}</td>
              <td className="py-2 px-4 border">{u.email}</td>
              <td className="py-2 px-4 border">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
