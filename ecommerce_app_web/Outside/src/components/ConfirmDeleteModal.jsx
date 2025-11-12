import { LuTrash2, LuSave, LuX, } from "react-icons/lu";
export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm, categoria }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-sm p-6">
          <button className="flex ml-33 p-4 bg-red-100 rounded-full">
            <LuTrash2 size={32} className="text-red-600" />
          </button>
        <h2 className="text-center text-xl font-semibold text-gray-900 mb-3">
          ¿Está seguro?
        </h2>
        <p className="text-gray-600 text-center mb-5">
          {/* ¿Seguro que deseas eliminar la categoría{" "}
          <span className="font-medium text-gray-800">
            {categoria?.nombre}
          </span> */}
          ¿Desea eliminar esta opción?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
