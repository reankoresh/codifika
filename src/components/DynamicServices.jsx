import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  "Webs Ultra Rápidas",
  "Sistemas Inteligentes",
  "Tiendas Online que Convierten",
  "Apps Móviles",
  "Automatización con IA",
  "SEO Imparable",
  "Video Marketing Viral",
  "Social Media que Vende",
  "Branding de Alto Impacto",
  "Integraciones API",
  "Soporte 24/7",
  "Estrategias de Conversión",
  "E-commerce Escalable",
  "Landing Pages que Venden",
  "Analítica Avanzada"
];

export default function DynamicServices() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % services.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full flex items-center justify-center min-h-[120px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={services[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f967fb] via-[#6958d5] to-[#53bc28] py-2 text-center"
        >
          {services[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

<section
  class="min-h-screen bg-[#0a0a0c70] text-white p-4 md:p-8 font-sans relative z-10 overflow-hidden"
>
  <div
    class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse"
  >
  </div>
  <div
    class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] -z-10"
  >
  </div>

  <div
    class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 [perspective:1200px]"
  >
    <div class="md:col-span-3 flex flex-col gap-6">
      <div
        class="bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] flex flex-col justify-between h-80 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:[transform:rotateY(10deg)_translateZ(20px)] group"
      >
        <div>
          <div
            class="text-indigo-500 mb-4 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform"
          >
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"
              ><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              ></path></svg
            >
          </div>
          <h2 class="text-3xl font-bold leading-tight tracking-tight">
            Software de Impacto
          </h2>
        </div>
        <div class="text-sm text-gray-400">
          <p class="font-bold text-white/90">Codifika.mx</p>
          <p class="opacity-70">Innovación local, alcance global.</p>
        </div>
      </div>

      <div
        class="bg-white/[0.02] backdrop-blur-md p-6 rounded-[2rem] border border-white/5 shadow-xl hover:bg-white/[0.05] transition-all"
      >
        <p
          class="text-4xl font-black text-indigo-400 drop-shadow-[0_2px_10px_rgba(129,140,248,0.3)]"
        >
          12K
        </p>
        <p class="text-gray-400 text-sm mb-4">Usuarios impactados</p>
        <div class="flex -space-x-2">
          <img
            class="w-10 h-10 rounded-full border-2 border-[#0a0a0c] ring-1 ring-white/10"
            src="https://i.pravatar.cc/100?u=1"
            alt="User"
          />
          <img
            class="w-10 h-10 rounded-full border-2 border-[#0a0a0c] ring-1 ring-white/10"
            src="https://i.pravatar.cc/100?u=2"
            alt="User"
          />
          <img
            class="w-10 h-10 rounded-full border-2 border-[#0a0a0c] ring-1 ring-white/10"
            src="https://i.pravatar.cc/100?u=3"
            alt="User"
          />
        </div>
      </div>

      <button
        class="relative group bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-[2rem] overflow-hidden shadow-[0_15px_30px_-5px_rgba(79,70,229,0.5)] transition-all hover:scale-[1.03] hover:shadow-indigo-500/40"
      >
        <div
          class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        >
        </div>
        <span
          class="relative z-10 flex items-center justify-center gap-3 font-bold text-lg"
          >🚀 Iniciar Proyecto</span
        >
      </button>
    </div>

    <div class="md:col-span-6 flex flex-col gap-6">
      <div
        class="bg-gradient-to-b from-white/[0.08] to-transparent rounded-[3rem] p-[1px] h-full shadow-2xl"
      >
        <div
          class="bg-[#0f0f15]/90 backdrop-blur-3xl rounded-[3rem] flex flex-col items-center text-center overflow-hidden h-full border border-white/5 relative"
        >
          <div class="mt-12 px-6 relative z-10">
            <span
              class="bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full text-[10px] font-bold border border-indigo-500/20 uppercase tracking-[0.2em]"
              >Agencia de Desarrollo</span
            >
            <h1
              class="text-5xl md:text-7xl font-extrabold mt-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/30 tracking-tighter leading-none"
            >
              Tu Visión, <br /> Codificada.
            </h1>
          </div>

          <div class="relative mt-auto w-full flex justify-center py-16">
            <div
              class="absolute w-72 h-72 bg-indigo-500/25 blur-[100px] animate-pulse"
            >
            </div>
            <div
              class="w-56 h-56 bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 rounded-full shadow-[0_0_60px_rgba(79,70,229,0.5)] flex items-center justify-center animate-[bounce_5s_infinite] border-t-2 border-white/40 relative"
            >
              <div
                class="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]"
              >
              </div>
              <code
                class="text-white text-5xl font-black drop-shadow-2xl relative z-10 italic"
                >&lt;/&gt;</code
              >
            </div>
          </div>

          <div
            class="grid grid-cols-2 w-full border-t border-white/10 mt-auto bg-white/[0.01]"
          >
            <div
              class="p-8 border-r border-white/10 text-left hover:bg-white/[0.02] transition-colors"
            >
              <p class="font-bold text-indigo-300">Alta Velocidad</p>
              <p class="text-xs text-gray-500 mt-1">
                Optimización Core Web Vitals.
              </p>
            </div>
            <div class="p-8 text-left hover:bg-white/[0.02] transition-colors">
              <p class="font-bold text-purple-300">Escalabilidad</p>
              <p class="text-xs text-gray-500 mt-1">Nube y Microservicios.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:col-span-3 flex flex-col gap-6">
      <div
        class="bg-white/[0.03] p-6 rounded-[2.5rem] border border-white/10 flex justify-between items-center shadow-inner"
      >
        <span class="text-xs font-bold uppercase tracking-widest text-gray-400"
          >AI Engine</span
        >
        <div
          class="w-12 h-6 bg-[#0a0a0c] rounded-full relative border border-white/10"
        >
          <div
            class="absolute right-1 top-1 w-4 h-4 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full shadow-[0_0_10px_rgba(99,102,241,1)]"
          >
          </div>
        </div>
      </div>

      <div
        class="bg-white/[0.03] backdrop-blur-md p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center h-52 shadow-2xl group hover:-translate-y-2 transition-all duration-300"
      >
        <p
          class="text-6xl font-black text-white group-hover:scale-110 transition-transform duration-500"
        >
          99
        </p>
        <p
          class="text-indigo-400/80 text-center text-[10px] font-bold uppercase tracking-widest mt-3"
        >
          Lighthouse Performance
        </p>
      </div>

      <div
        class="bg-white/[0.02] p-8 rounded-[3rem] border border-white/5 flex-grow relative overflow-hidden group"
      >
        <h4
          class="font-bold mb-6 text-sm text-gray-400 uppercase tracking-widest"
        >
          Especialidades
        </h4>
        <div class="flex flex-wrap gap-2 relative z-10">
          <span
            class="bg-white/5 backdrop-blur-sm text-white/80 px-4 py-1.5 rounded-full text-[10px] border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default"
            >#React</span
          >
          <span
            class="bg-white/5 backdrop-blur-sm text-white/80 px-4 py-1.5 rounded-full text-[10px] border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default"
            >#NextJS</span
          >
          <span
            class="bg-white/5 backdrop-blur-sm text-white/80 px-4 py-1.5 rounded-full text-[10px] border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default"
            >#Tailwind</span
          >
        </div>
        <div
          class="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/30 transition-all duration-1000"
        >
        </div>
      </div>
    </div>
  </div>
</section>
