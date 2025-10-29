import { LuBell, LuMenu } from "react-icons/lu";
import { useSidebar } from "../../context/SidebarContext";

export default function Navbar() {
  const { toggleSidebar, collapsed } = useSidebar();

  return (
    <header className={`fixed  right-0 h-16 bg-white border-b flex items-center justify-between transition-all duration-300
      px-4 z-30 ${collapsed ? "ml-20" : "ml-60"}`}>
      <div className="flex items-center gap-3">
        {/* Botón para abrir/cerrar sidebar en mobile */}
        {/* <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 md:hidden">
          <LuMenu size={20} />
        </button> */}
        <h2 className="font-semibold text-lg">Panel de Gestión</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <LuBell size={20} />
        </button>
        <img
          src="https://i.pravatar.cc/100"
          alt="Usuario"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
