export default function SearchBar({ search, setSearch, setPage }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // reiniciar a la primera página al buscar
  };

  return (
    <div className="w-full sm:w-64">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Buscar categoría..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
