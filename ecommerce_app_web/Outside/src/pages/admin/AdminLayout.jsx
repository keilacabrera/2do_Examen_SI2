import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useSidebar } from "../../context/SidebarContext";

export default function DashboardLayout({ children }) {
  const { collapsed } = useSidebar();

  return (
    <div className="flex">
      <Sidebar />
      <div
        className={`flex-1 transition-all duration-300 
        ${collapsed ? "ml-20" : "ml-60"}`}
      >
        <Navbar />
        <main className="mt-16 p-6 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
