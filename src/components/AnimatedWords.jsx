import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Empresas", "Visionarios", "Líderes Digitales"];

export default function AnimatedWords() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f967fb] via-[#6958d5] to-[#53bc28] py-2"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}