import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Brain,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function MakeliaWebsite() {
  return (
    <div className="bg-[#06142E] text-white font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-[#06142E]/95 backdrop-blur border-b border-yellow-700/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="MAKELIA"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-3x1 font-bold tracking-wide text-[#D4AF37] leading-none">
                MAKELIA
              </h1>

              <p className="text-sm text-gray-300">
                Consultora Psicológica
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#inicio" className="px-5 py-2 rounded-full text-base font-semibold tracking-wide hover:bg-[#D4AF37] hover:text-[#06142E] transition duration-300">
              Inicio
            </a>

            <a href="#nosotros" className="px-5 py-2 rounded-full text-base font-semibold tracking-wide hover:bg-[#D4AF37] hover:text-[#06142E] transition duration-300">
              Nosotros
            </a>

            <a href="#servicios" className="px-5 py-2 rounded-full text-base font-semibold tracking-wide hover:bg-[#D4AF37] hover:text-[#06142E] transition duration-300">
              Servicios
            </a>

            <a href="#contacto" className="px-5 py-2 rounded-full text-base font-semibold tracking-wide hover:bg-[#D4AF37] hover:text-[#06142E] transition duration-300">
              Contacto
            </a>
          </nav>

          <a
            href="https://wa.me/51937617449"
            target="_blank"
            className="bg-[#D4AF37] text-[#06142E] px-5 py-3 rounded-full font-bold hover:scale-105 transition duration-300 shadow-xl flex items-center justify-center text-center"
          >
            Agendar cita
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen flex items-center pt-32 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-[#D4AF37] uppercase tracking-[8px] mb-4">
              Tu equilibrio empieza aquí
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Bienestar emocional y psicológico para ti
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              En MAKELIA brindamos acompañamiento psicológico profesional
              en Trujillo, ofreciendo terapias personalizadas para ayudarte
              a recuperar tu bienestar emocional, fortalecer tu autoestima
              y mejorar tu calidad de vida.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/51943165856"
                target="_blank"
                className="bg-[#D4AF37] text-[#06142E] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Reservar cita
              </a>

              <a
                href="#servicios"
                className="border border-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-[#06142E] transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-full"></div>

            <img
              src="/hero-psychology.jpg"
              alt="Psicología"
              className="relative rounded-[60px] shadow-2xl border border-yellow-700/20"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="nosotros"
        className="py-24 px-6 bg-[#081B3A]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <img
            src="/about.jpg"
            alt="Nosotros"
            className="rounded-[30px] shadow-2xl"
          />

          <div>
            <p className="text-[#D4AF37] uppercase tracking-[8px] mb-4">
              Sobre nosotros
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Atención psicológica humana y profesional
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Somos una consultora psicológica especializada en brindar
              apoyo emocional, orientación terapéutica y acompañamiento
              profesional a niños, adolescentes, adultos y parejas.
            </p>

            <p className="text-gray-300 leading-relaxed mb-10">
              Nuestro enfoque busca ayudarte a encontrar equilibrio,
              tranquilidad y crecimiento personal mediante terapias
              adaptadas a tus necesidades.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-[#0B2147] p-6 rounded-3xl border border-yellow-700/20">
                <Brain className="text-[#D4AF37] mb-4" size={40} />

                <h3 className="font-bold text-xl mb-3">
                  Terapias modernas
                </h3>

                <p className="text-gray-400 text-sm">
                  Técnicas actualizadas y atención personalizada.
                </p>
              </div>

              <div className="bg-[#0B2147] p-5 md:p-6 rounded-3xl border border-yellow-700/20">
                <ShieldCheck className="text-[#D4AF37] mb-4" size={50} />

                <h3 className="font-bold text-xl md:text-x1 mb-3 leading-tight break-words">
                  Confidencialidad
                </h3>

                <p className="text-gray-400 text-sm">
                  Espacios seguros y totalmente privados.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="servicios"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-[#D4AF37] uppercase tracking-[8px] mb-4">
              Servicios
            </p>

            <h2 className="text-5xl font-bold">
              Especialidades psicológicas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#0B2147] p-10 rounded-[30px] border border-yellow-700/20 hover:scale-105 transition">
              <Brain className="text-[#D4AF37] mb-6" size={50} />

              <h3 className="text-2xl font-bold mb-4">
                Terapia Individual
              </h3>

              <p className="text-gray-400">
                Ansiedad, estrés, depresión, autoestima y crecimiento personal.
              </p>
            </div>

            <div className="bg-[#0B2147] p-10 rounded-[30px] border border-yellow-700/20 hover:scale-105 transition">
              <HeartHandshake className="text-[#D4AF37] mb-6" size={50} />

              <h3 className="text-2xl font-bold mb-4">
                Terapia de Pareja
              </h3>

              <p className="text-gray-400">
                Mejora de comunicación, vínculos y resolución de conflictos.
              </p>
            </div>

            <div className="bg-[#0B2147] p-10 rounded-[30px] border border-yellow-700/20 hover:scale-105 transition">
              <Users className="text-[#D4AF37] mb-6" size={50} />

              <h3 className="text-2xl font-bold mb-4">
                Terapia Familiar
              </h3>

              <p className="text-gray-400">
                Fortalecimiento emocional y armonía familiar.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contacto"
        className="py-24 px-6 bg-[#081B3A]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-[#D4AF37] uppercase tracking-[8px] mb-4">
              Contacto
            </p>

            <h2 className="text-5xl font-bold mb-8">
              Agenda tu consulta psicológica
            </h2>

            <div className="space-y-6 text-gray-300">

              <div className="flex items-center gap-4">
                <Phone className="text-[#D4AF37]" />
                <span>937617449 - 966109949</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#D4AF37]" />
                <span>
                  makeliacolsultorapsicologica@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#D4AF37]" />
                <span>Trujillo, Perú</span>
              </div>

            </div>
          </div>

          <form className="bg-[#0B2147] p-10 rounded-[30px] border border-yellow-700/20 space-y-6">

            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full bg-[#06142E] border border-gray-700 rounded-2xl p-4 outline-none focus:border-[#D4AF37]"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full bg-[#06142E] border border-gray-700 rounded-2xl p-4 outline-none focus:border-[#D4AF37]"
            />

            <textarea
              placeholder="Escribe tu mensaje"
              rows="5"
              className="w-full bg-[#06142E] border border-gray-700 rounded-2xl p-4 outline-none focus:border-[#D4AF37]"
            ></textarea>

            <button
              className="w-full bg-[#D4AF37] text-[#06142E] py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Enviar mensaje
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-yellow-700/20 text-center text-gray-400">
        <p>
          © 2026 MAKELIA - Consultora Psicológica | Trujillo, Perú
        </p>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/51937617449"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-5 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <MessageCircle size={35} />
      </a>

    </div>
  );
}