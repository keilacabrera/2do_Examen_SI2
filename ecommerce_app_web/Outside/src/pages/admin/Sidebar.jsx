import { Link } from "react-router-dom";
import { LuHouse, LuUsers, LuPackage, LuNotepadText, 
        LuChartNoAxesCombined, LuSettings, LuLogOut , 
        LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useSidebar } from "../../context/SidebarContext";

const menuItems = [
  { name: "Home", icon: <LuHouse size={20} />, path: "/" },
  { name: "Usuarios", icon: <LuUsers size={20} />, path: "/usuarios" },
  { name: "Productos", icon: <LuPackage size={20} />, path: "/productos" },
  { name: "Reportes", icon: <LuNotepadText size={20} />, path: "/reportes" },
  { name: "Estadísticas", icon: <LuChartNoAxesCombined size={20} />, path: "/estadisticas" },
  { name: "Ajustes", icon: <LuSettings size={20} />, path: "/ajustes" },
];

export default function Sidebar() {
  const { collapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-gray-900 text-gray-100 flex flex-col transition-all duration-300 z-40
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo + Botón */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <h1 className="text-lg font-bold">MiEmpresa</h1>}
        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
          {collapsed ? <LuChevronRight size={20} /> : <LuChevronLeft size={20} />}
        </button>
      </div>

      {/* Menú */}
      <nav className="flex-1 mt-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-4 border-t border-gray-800">
        <Link to="/logout" className="flex items-center gap-3 hover:text-red-400">
          <LuLogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}

