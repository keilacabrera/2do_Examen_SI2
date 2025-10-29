import React, { useState } from "react";
import UserTable from "../../components/UserTable";
import UserModal from "../../components/UserModal";
import { LuPlus, LuSquarePen, LuTrash2 } from "react-icons/lu";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "Carlos Pérez", phone: "78945612", email: "carlos@example.com", status: "Activo", role: "Administrador" },
    { id: 2, name: "Lucía Fernández", phone: "78451236", email: "lucia@example.com", status: "Inactivo", role: "Cliente" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSave = (userData) => {
    if (userData.id) {
      setUsers(users.map(u => (u.id === userData.id ? userData : u)));
    } else {
      setUsers([...users, { ...userData, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>
          <button
            onClick={() => { setSelectedUser(null); setModalOpen(true); }}
            className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition"
          >
            <LuPlus size={18} /> Nuevo usuario
          </button>
        </div>

        <UserTable
          users={users}
          onEdit={(user) => { setSelectedUser(user); setModalOpen(true); }}
          onDelete={handleDelete}
        />
      </div>

      {modalOpen && (
        <UserModal
          user={selectedUser}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
