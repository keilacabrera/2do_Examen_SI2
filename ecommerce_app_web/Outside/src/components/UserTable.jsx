import React from "react";
import { LuSquarePen, LuTrash2 } from "react-icons/lu";

export default function UserTable({ users, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-3">Nombre</th>
            <th className="px-4 py-3">Teléfono</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3">Rol</th>
            <th className="px-4 py-3 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b border-gray-400 text-gray-700 hover:bg-gray-50">
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.phone}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${user.status === "Activo" ? "bg-green-200 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3 text-center space-x-2">
                <div className="flex justify-center gap-2">
                  <button
                  onClick={() => onEdit(user)}
                  className="p-2 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200"
                >
                  <LuSquarePen size={18} />
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                >
                  <LuTrash2 size={18} />
                </button>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <p className="text-center text-gray-500 py-6">No hay usuarios registrados.</p>
      )}
    </div>
  );
}
