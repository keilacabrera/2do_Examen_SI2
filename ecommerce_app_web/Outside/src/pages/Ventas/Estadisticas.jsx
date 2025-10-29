import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { LuTrendingUp, LuUsers, LuDollarSign, LuShoppingBag } from "react-icons/lu";

const dataVentas = [
  { mes: "Ene", ventas: 4000, ganancias: 2400 },
  { mes: "Feb", ventas: 3000, ganancias: 2210 },
  { mes: "Mar", ventas: 5000, ganancias: 3000 },
  { mes: "Abr", ventas: 4780, ganancias: 2900 },
  { mes: "May", ventas: 5890, ganancias: 3200 },
  { mes: "Jun", ventas: 6390, ganancias: 4100 },
  { mes: "Jul", ventas: 7000, ganancias: 4500 },
];

const resumen = [
  {
    icon: <LuDollarSign size={22} />,
    titulo: "Ventas Totales",
    valor: "Bs 245,000",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <LuTrendingUp size={22} />,
    titulo: "Ganancias",
    valor: "Bs 82,000",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <LuUsers size={22} />,
    titulo: "Usuarios Nuevos",
    valor: "324",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <LuShoppingBag size={22} />,
    titulo: "Productos Vendidos",
    valor: "1,842",
    color: "bg-orange-100 text-orange-600",
  },
];

const ultimosReportes = [
  { id: 1, fecha: "2025-10-01", tipo: "Venta", detalle: "Pedido #1023", total: "Bs 250" },
  { id: 2, fecha: "2025-10-02", tipo: "Nuevo usuario", detalle: "Registro de Juan Pérez", total: "-" },
  { id: 3, fecha: "2025-10-03", tipo: "Venta", detalle: "Pedido #1024", total: "Bs 390" },
  { id: 4, fecha: "2025-10-04", tipo: "Producto", detalle: "Nuevo producto agregado", total: "-" },
];

export default function Estadisticas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      {/* Título */}
      <h1 className="text-3xl font-semibold text-gray-800 ml-5 mt-5">Reportes y Estadísticas</h1>

      {/* Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {resumen.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="flex items-center justify-between p-4 bg-white rounded-2xl shadow"
          >
            <div className="card">
              <p className="text-gray-500 text-sm">{item.titulo}</p>
              <p className="text-xl font-semibold text-gray-800">{item.valor}</p>
            </div>
            <div className={`p-3 rounded-full ${item.color}`}>{item.icon}</div>
          </motion.div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de líneas */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white p-4 rounded-2xl shadow h-80"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Ventas mensuales
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataVentas}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ventas" stroke="#2563eb" strokeWidth={3} />
              <Line type="monotone" dataKey="ganancias" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Gráfico de barras */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white p-4 rounded-2xl shadow h-80"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Comparativa de ventas y ganancias
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataVentas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="ventas" fill="#3b82f6" />
              <Bar dataKey="ganancias" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Últimos reportes */}
      <motion.div
        // whileHover={{ scale: 1.01 }}
        className="bg-white p-4 rounded-2xl shadow"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Últimos reportes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700">
                <th className="p-3">Fecha</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Detalle</th>
                <th className="p-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {ultimosReportes.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{r.fecha}</td>
                  <td className="p-3 font-medium text-gray-800">{r.tipo}</td>
                  <td className="p-3 text-gray-700">{r.detalle}</td>
                  <td className="p-3 text-right text-gray-800">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
