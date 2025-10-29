export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm, categoria }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-sm p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Confirmar eliminación
        </h2>
        <p className="text-gray-600 mb-5">
          ¿Seguro que deseas eliminar la categoría{" "}
          <span className="font-medium text-gray-800">
            {categoria?.nombre}
          </span>
          ? Esta acción no se puede deshacer.
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
