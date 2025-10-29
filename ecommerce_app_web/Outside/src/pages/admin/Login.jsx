import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu"; // íconos elegantes

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulación de autenticación
    if (email === "admin@tienda.com" && password === "123456") {
      setError("");
      console.log("Inicio de sesión exitoso ✅");
      // Aquí iría la redirección al panel o dashboard
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      {/* Fondo difuminado */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-50"
        style={{
          backgroundImage:
            "url('https://youtalkonline.com/wp-content/uploads/electrodom%C3%A9sticos-en-ingl%C3%A9s.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenedor */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 w-[90%] max-w-md sm:max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://e7.pngegg.com/pngimages/623/208/png-clipart-logo-graphic-design-interior-design-services-art-free-logo-design-template-web-design-free-logo-design-template.png"
            alt="Logo empresa"
            className="h-24 w-24 object-contain"
          />
        </div>

        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Iniciar Sesión
        </h2>

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-lg mb-4 animate-fadeIn">
            {error}
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/90"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/90 pr-10"
            />

            {/* Botón para mostrar/ocultar contraseña */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
