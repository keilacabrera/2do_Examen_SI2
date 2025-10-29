import VoiceSearch from "../components/VoiceSearch";

export default function CategoriaHeader({ search, setSearch }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">Categorías</h1>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* 🔍 Buscador por texto */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar categorías..."
          className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* 🎙️ Búsqueda por voz */}
        <VoiceSearch onSearch={(text) => setSearch(text)} />
      </div>
    </div>
  );
}
