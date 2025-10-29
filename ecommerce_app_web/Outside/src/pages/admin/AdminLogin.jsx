import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ email, password });
        // Aquí iría la lógica de autenticación con el backend (Django)

        const response = await fetch('http://localhost:8000/api/admin-login/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.status === 200) {
            toast.success(data.message);
            // localStorage.setItem("adminToken", data.token);
            // localStorage.setItem("adminUser", email);
            setTimeout(() => {

                window.location.href = "/dashboard"; // Redirigir al dashboard
            }, 2000);


        } else {
            toast.error(data.message);
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm sm:max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img
                        src="https://c0.klipartz.com/pngpicture/973/11/gratis-png-logo-phoenix-illustration-phoenix-logo-design-phoenix-illustration-thumbnail.png" // cambia esto por tu logotipo real
                        alt="Logo empresa"
                        className="h-20 w-20 object-contain"
                    />
                </div>

                {/* Título */}
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
                    Iniciar Sesión
                </h2>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-800 text-sm font-medium mb-1">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="ejemplo@correo.com"
                            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 text-sm font-medium mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="********"
                            className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                        Ingresar
                    </button>
                </form>

                {/* Pie (opcional) */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    © {new Date().getFullYear()} ElectroSHOP. Todos los derechos reservados.
                </p>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}
