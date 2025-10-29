export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-80 shadow-lg text-center">
        <p className="text-gray-800 mb-6">{message}</p>
        <div className="flex justify-center gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
