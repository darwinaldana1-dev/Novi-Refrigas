import { useState, useEffect } from 'react'
import {
  AirVent, Flame, Refrigerator, Wrench, ShieldCheck, Clock, BadgeDollarSign,
  Phone, Mail, MapPin, CheckCircle, Star, Truck, CreditCard, MessageCircle,
  ChevronRight, Sun, Moon, Menu, X, ThumbsUp, Zap, Award
} from 'lucide-react'

const WHATSAPP_NUMBER = '573145252746'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20una%20cotizaci%C3%B3n%20de%20sus%20servicios.`

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-float-btn group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl transition-colors duration-300">
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse-dot border-2 border-white dark:border-gray-900" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        ¡Escríbenos ahora!
      </span>
    </a>
  )
}

function Navbar({ darkMode, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: '¿Por qué elegirnos?', href: '#trust' },
    { label: 'Equipos', href: '#catalog' },
    { label: 'Servicios', href: '#services' },
    { label: 'Logística', href: '#logistics' },
    { label: 'Contacto', href: '#footer' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow">
            <AirVent className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
            Novi <span className="text-blue-600">Refrigas</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Alternar modo oscuro"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 dark:from-blue-900 dark:via-blue-800 dark:to-gray-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-400/40 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Servicio profesional garantizado
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Expertos en Refrigeración, Aire Acondicionado y Gasodomésticos.
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-4 leading-relaxed">
            Instalación, reparación y mantenimiento de equipos domésticos e industriales con total garantía.
          </p>
          <p className="text-base text-blue-200 mb-10 flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-400" />
            Sin sobrecostos sorpresa, con puntualidad y un excelente servicio postventa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotiza por WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300"
            >
              Ver servicios
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-sm">
            {[
              { value: '6–8', label: 'meses garantía' },
              { value: '100%', label: 'sin costos ocultos' },
              { value: '5★', label: 'satisfacción' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-blue-200 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const points = [
    {
      icon: <BadgeDollarSign className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      title: 'Precios justos y transparentes',
      desc: 'Cotizaciones claras desde el inicio, sin costos ocultos ni sorpresas de último momento. Lo que presupuestamos es lo que pagas.',
    },
    {
      icon: <Clock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
      bg: 'bg-indigo-50 dark:bg-indigo-900/30',
      title: 'Puntualidad y orden garantizados',
      desc: 'Trabajamos con total limpieza y respeto por tu espacio. Llegamos a tiempo y dejamos todo en perfecto estado.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-green-600 dark:text-green-400" />,
      bg: 'bg-green-50 dark:bg-green-900/30',
      title: 'Garantía real de 6 a 8 meses',
      desc: 'Acompañamiento postventa y garantía en mano de obra. Estamos contigo mucho después de finalizado el servicio.',
    },
  ]

  return (
    <section id="trust" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest">Por qué elegirnos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Tu tranquilidad es nuestra prioridad
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Resolvemos los problemas más comunes del sector con un servicio honesto y profesional.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map(p => (
            <div key={p.title} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
              <div className={`w-14 h-14 ${p.bg} rounded-xl flex items-center justify-center mb-5`}>
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CatalogCard({ icon, title, badge, items, note }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
          {badge && <span className="text-blue-200 text-xs mt-0.5 block">{badge}</span>}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
          </div>
        ))}
        {note && (
          <div className="mt-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-3 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-100 dark:border-blue-800">
            {note}
          </div>
        )}
      </div>
      <div className="px-6 pb-6">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
        >
          Cotizar ahora
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

function Catalog() {
  return (
    <section id="catalog" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest">Catálogo de equipos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Equipos de las mejores marcas
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Venta, instalación y entrega de equipos de refrigeración, climatización y calentadores.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CatalogCard
            icon={<AirVent className="w-6 h-6 text-white" />}
            title="Aires Acondicionados"
            badge="Domésticos e industriales"
            items={[
              'Marcas: Mirage, LG, Samsung, Trane, York, Mabe, Midea',
              'Incluye 3 metros de tubería de cobre',
              'Cable de señal incluido',
              'Transporte sin costo en Valle de Aburrá',
              'Instalación profesional disponible',
            ]}
            note="Disponibles en diferentes capacidades BTU según tu espacio."
          />
          <CatalogCard
            icon={<Flame className="w-6 h-6 text-white" />}
            title="Calentadores de Agua"
            badge="A gas y sin tanque"
            items={[
              'Marcas: Bosch, Rheem, Bocherini, Challenger',
              'Capacidades: desde 5.5L hasta 21L',
              'Calentadores a gas natural y propano',
              'Instalación y conexión segura',
              'Ideal para uso doméstico e industrial',
            ]}
            note="Consulta disponibilidad de referencia y capacidad exacta."
          />
          <CatalogCard
            icon={<Refrigerator className="w-6 h-6 text-white" />}
            title="Refrigeración Industrial"
            badge="Frío comercial y agroindustrial"
            items={[
              'Neveras industriales de alta capacidad',
              'Cuartos fríos modulares',
              'Sistemas de refrigeración comercial',
              'Asesoría técnica en dimensionamiento',
              'Instalación especializada incluida',
            ]}
            note="Soluciones a medida para negocios y empresas."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, price, desc, highlight }) {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-2xl p-7 border transition-all duration-300 hover:shadow-lg flex flex-col gap-4 ${highlight ? 'border-blue-500 dark:border-blue-400 ring-2 ring-blue-500/20' : 'border-gray-100 dark:border-gray-700'}`}>
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
          Más solicitado
        </span>
      )}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-tight">{title}</h3>
          {price && <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">{price}</p>}
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
      >
        Solicitar servicio <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest">Servicios especializados</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Todo lo que tu equipo necesita
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Desde la instalación inicial hasta el mantenimiento preventivo y la asesoría técnica presencial.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Instalación Profesional"
            desc="Instalación de aires acondicionados y calentadores garantizando conexiones seguras, herméticas y cumpliendo con todas las normas técnicas."
            highlight
          />
          <ServiceCard
            icon={<ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Mantenimiento Preventivo y Predictivo"
            price="Desde $90.000 hasta $400.000 COP"
            desc="Limpieza profunda, revisión de componentes, recarga de gas y diagnóstico completo del equipo para alargar su vida útil y eficiencia."
          />
          <ServiceCard
            icon={<ThumbsUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Asesoría Técnica Presencial"
            price="Visita: $60.000 COP (¡exonerable!)"
            desc="Un técnico visita tu hogar o empresa para diagnosticar y recomendar la mejor solución. El costo de la visita no se cobra si adquieres el servicio o equipo."
          />
        </div>
      </div>
    </section>
  )
}

function Logistics() {
  return (
    <section id="logistics" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-widest">Cobertura y pagos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Llegamos a todo el país
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Envíos seguros, métodos de pago flexibles y total transparencia en cada operación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl">Cobertura de envío</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 font-semibold mb-1">
                  <Truck className="w-4 h-4" /> Valle de Aburrá
                </div>
                <p className="text-blue-100 text-sm">Entrega en 1 día hábil · Envío sin costo</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 font-semibold mb-1">
                  <Truck className="w-4 h-4" /> Resto del país
                </div>
                <p className="text-blue-100 text-sm">1 a 3 días hábiles vía Servientrega o Envía</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Métodos de pago</h3>
            </div>
            <div className="space-y-3">
              {[
                { icon: '💵', label: 'Efectivo' },
                { icon: '🏦', label: 'Transferencia Bancolombia' },
                { icon: '📦', label: 'Pago contra entrega' },
              ].map(m => (
                <div key={m.label} className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <span className="text-xl">{m.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{m.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Modalidades:</strong> Pago 100% anticipado o anticipo + saldo al finalizar el servicio.
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800 text-center">
          <Award className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">¿Tienes alguna duda sobre el proceso?</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-5">Nuestro equipo está listo para orientarte sin compromiso.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <AirVent className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Novi <span className="text-blue-400">Refrigas</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Especialistas en instalación, mantenimiento y venta de equipos de refrigeración, aire acondicionado y calentadores de agua.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos
            </a>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5">Contacto directo</h4>
            <div className="space-y-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">314 525 2746</div>
                  <div className="text-xs text-gray-500">Línea WhatsApp</div>
                </div>
              </a>
              <a href="mailto:novirefrigas@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">novirefrigas@gmail.com</div>
                  <div className="text-xs text-gray-500">Correo electrónico</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">Valle de Aburrá, Colombia</div>
                  <div className="text-xs text-gray-500">Cobertura nacional</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5">Horario de atención</h4>
            <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Lunes – Sábado</span>
                <span className="text-white font-semibold text-sm">6:00 AM – 6:00 PM</span>
              </div>
              <div className="h-px bg-gray-700" />
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Domingo</span>
                <span className="text-gray-500 text-sm">Cerrado</span>
              </div>
              <div className="h-px bg-gray-700" />
              <div className="mt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Disponibles ahora para cotizar</span>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {['Aires Acondicionados', 'Calentadores de Agua', 'Refrigeración Industrial', 'Mantenimiento Preventivo', 'Asesoría Técnica'].map(s => (
                <a key={s} href="#services" className="block text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  › {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Novi Refrigas. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-400" />
            Calidad y confianza en refrigeración y climatización
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main>
        <Hero />
        <TrustSection />
        <Catalog />
        <Services />
        <Logistics />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
