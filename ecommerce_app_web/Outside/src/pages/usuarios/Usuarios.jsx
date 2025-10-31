import { useState } from "react";
import UserTable from "../../components/UserTable";
import { NavLink, Link } from "react-router-dom";
import { LuPlus} from "react-icons/lu";

export default function Usuarios() {
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
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className=" bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>
          <Link to="/usuarios/add">
            <button
            // onClick={() => { setSelectedUser(null); setModalOpen(true); }}
            className="mt-3 sm:mt-0 w-40 inline-flex items-center gap-1 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition"
          >
            <LuPlus size={18} /> Nuevo usuario
          </button>
          </Link>
        </div>

        <UserTable
          users={users}
          onEdit={(user) => { setSelectedUser(user); setModalOpen(true); }}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}