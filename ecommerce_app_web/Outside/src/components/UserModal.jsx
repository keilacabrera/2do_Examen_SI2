import React, { useState, useEffect } from "react";

export default function UserModal({ user, onSave, onClose }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    phone: "",
    email: "",
    status: "Activo",
    role: "",
  });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 flex bg-black/50 justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-11/12 md:w-1/2 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {form.id ? "Editar Usuario" : "Nuevo Usuario"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Teléfono</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Estado</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Rol</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Seleccione un rol</option>
                <option>Administrador</option>
                <option>Empleado</option>
                <option>Cliente</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
