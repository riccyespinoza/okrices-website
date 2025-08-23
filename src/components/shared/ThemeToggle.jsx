"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="flex items-center justify-center w-10 h-10 rounded-full border border-borderColor bg-bg transition-colors duration-300 hover:bg-hover dark:border-white"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400" size={20} />
      ) : (
        <FiMoon className="text-blue-600" size={20} />
      )}
    </motion.button>
  );
}
