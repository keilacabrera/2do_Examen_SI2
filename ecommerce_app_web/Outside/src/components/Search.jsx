import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu"; // ícono opcional

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() !== "") {
            navigate(`/buscar/${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar productos..."
                    className="border border-gray-300 rounded-l-lg px-3 py-2 w-64 focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                >
                    <LuSearch size={18} />
                </button>
            </form>
        </div>

    );
}
