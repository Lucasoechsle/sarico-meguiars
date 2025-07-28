"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Zap,
  Battery,
  ArrowRight,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Target,
  Heart,
  SendHorizonal,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function EnergiaPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-yellow-200/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/sarico-logo.svg" alt="Sarico Distri S.A." width={160} height={45} className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("marcas")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Marcas
              </button>
              <button
                onClick={() => scrollToSection("valores")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Valores
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Contacto
              </button>
              <Link
                href="/"
                className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  La energía del
                  <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                    futuro, hoy.
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-white/95 font-medium">Sarico Distri es sinónimo de</p>
                  <p className="text-2xl lg:text-4xl font-bold text-white drop-shadow-lg">
                    Generación y Almacenamiento
                    <span className="block">de Energía.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/hero-energy.png"
                  alt="Energía renovable - Paneles solares y turbinas eólicas"
                  width={700}
                  height={500}
                  className="relative w-full max-w-2xl h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      {/* Marcas Section */}
      <section id="marcas" className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nuestras Marcas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trabajamos con las mejores marcas del mercado para ofrecerte soluciones energéticas de calidad superior y
              tecnología de vanguardia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/brands/enerbat-sg.png", alt: "Enerbat Silver Graphite" },
              { src: "/brands/newmax.png", alt: "Newmax" },
              { src: "/brands/varta.png", alt: "Varta" },
              { src: "/brands/moura.png", alt: "Moura" },
              { src: "/brands/enerbat-ca.png", alt: "Enerbat Energía Sin Límites" },
              { src: "/brands/gcl.png", alt: "GCL" },
              { src: "/brands/schneider-electric.png", alt: "Schneider Electric" },
              { src: "/brands/th100.png", alt: "TH100" },
            ].map((brand, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 h-32 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={brand.alt}
                  width={140}
                  height={70}
                  className="max-h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Nuestra Empresa Section */}
      {/* <section id="empresa" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Nuestra Empresa</h2>
                </div>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold text-gray-900">Sarico Distri S.A.</span> es una empresa argentina
                    fundada en <span className="font-semibold text-yellow-600">2001</span>, con el propósito inicial de
                    comercializar baterías para vehículos, incluyendo motos, autos, camiones y ómnibus. Nuestro amplio
                    catálogo también incluyó lubricantes, equipamiento para lubricentros, y una destacada línea de
                    productos de cosmética automotor y car-detailing.
                  </p>
                  <p>
                    En <span className="font-semibold text-yellow-600">2015</span>, ampliamos aún más nuestra oferta al
                    incorporar la comercialización de baterías y equipamiento para sistemas fotovoltaicos, en apoyo a
                    las energías alternativas.
                  </p>
                  <p>
                    En Sarico, estamos comprometidos en ofrecer a nuestros clientes el mejor servicio posible. Contamos
                    con un equipo de profesionales altamente capacitados, listos para asesorarlo en la solución adecuada
                    a sus necesidades.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 mr-3" />
                    <h3 className="text-2xl font-bold">PROPÓSITO</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    Generamos oportunidades de negocios comprometidos con las personas.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 mr-3 text-yellow-600" />
                    <h3 className="text-2xl font-bold text-gray-900">MISIÓN</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Distribuimos marcas líderes para satisfacer la demanda de clientes, proveedores y colaboradores.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 mr-3 text-yellow-600" />
                    <h3 className="text-2xl font-bold text-gray-900">VISIÓN</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Ser la mejor opción en distribución, por valor agregado e innovación tecnológica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Nuestros Valores Section */}
      <section id="valores" className="py-6 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Nuestros Valores</h2>
              <div className="space-y-4 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <p>
                  Los valores son un conjunto de principios y creencias que guían el comportamiento de la empresa y sus
                  colaboradores.
                </p>
                <p className="font-semibold text-gray-900">He aquí los nuestros:</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  id: "01",
                  title: "ACTITUD APASIONADA POR EL SERVICIO",
                  content:
                    "Cuando nos relacionamos con un cliente o proveedor, ya sea interno o externo, lo escuchamos con interés para comprenderlo, respetándolo y, ante todo, tratándolo como Persona. Ponemos nuestra mayor energía, alegría y dedicación para trabajar siempre en equipo al estar orgullosos de pertenecer a la empresa.",
                  icon: Heart,
                  gradient: "from-pink-400 to-rose-400",
                },
                {
                  id: "02",
                  title: "CUMPLIR CON INTEGRIDAD",
                  content:
                    "Honramos nuestras obligaciones y compromisos, con entereza y rectitud de conducta, siendo conscientes que de nuestro actuar depende el resultado y valor agregado prometido. También actuamos con integridad de acuerdo a nuestros valores, pensando que la preocupación por los demás, es una fuente inspiradora de actos responsables.",
                  icon: Target,
                  gradient: "from-blue-400 to-indigo-400",
                },
                {
                  id: "03",
                  title: "INICIATIVA PARA MEJORAR E INNOVAR",
                  content:
                    "Nos gusta buscar nuevas formas de hacer las cosas y también hacer cosas nuevas, escapando al conformismo para lograr una mayor eficiencia. Tratamos de anticiparnos a lo que pueda ocurrir en el futuro, con audacia o simplemente decidirnos a hacer las cosas cuanto antes.",
                  icon: Zap,
                  gradient: "from-yellow-400 to-orange-400",
                },
              ].map((valor, index) => (
                <div
                  key={valor.id}
                  className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${valor.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <valor.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl font-black text-gray-200 group-hover:text-yellow-200 transition-colors duration-300">
                        {valor.id}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{valor.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{valor.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Productos Principales Section */}
      <section id="productos" className="py-6 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Battery className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nuestros Productos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra selección de productos energéticos de alta calidad, diseñados para maximizar la
              eficiencia y sostenibilidad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Batería FREE con CALCIO */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/e1275a.jpg"
                  alt="E1275A"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E1275A</h3>
              <p className="text-sm text-gray-500 mb-2">Batería FREE con CALCIO</p>
              <p className="text-lg font-bold text-yellow-600">12 x 75</p>
            </div>
            {/* Baterías Silver Graphite */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/esg1275.jpg"
                  alt="ESG1275"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ESG1275</h3>
              <p className="text-sm text-gray-500 mb-2">Baterías Silver Graphite</p>
              <p className="text-lg font-bold text-yellow-600">12 x 75</p>
            </div>
            {/* Baterías para Motos */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/etx7l-bs.jpg"
                  alt="ETX7L-BS"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ETX7L-BS</h3>
              <p className="text-sm text-gray-500 mb-2">Baterías para Motos</p>
              <p className="text-lg font-bold text-yellow-600">12V</p>
            </div>
            {/* Baterías de Ciclado Profundo */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/epgs12120.jpg"
                  alt="EPGS12-120"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EPGS12-120</h3>
              <p className="text-sm text-gray-500 mb-2">Baterías de Ciclado Profundo</p>
              <p className="text-lg font-bold text-yellow-600">12V - 120AH</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/productos">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Ver Todos Nuestros Productos
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <SendHorizonal className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
              <p className="text-gray-600 text-lg">
                ¿Querés conocer más sobre los productos Meguiar's? Escribinos y te asesoramos.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="provincia"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                  >
                    <option value="">Provincia</option>
                    <option value="buenos-aires">Buenos Aires</option>
                    <option value="catamarca">Catamarca</option>
                    <option value="chaco">Chaco</option>
                    <option value="chubut">Chubut</option>
                    <option value="cordoba">Córdoba</option>
                    <option value="corrientes">Corrientes</option>
                    <option value="entre-rios">Entre Ríos</option>
                    <option value="formosa">Formosa</option>
                    <option value="jujuy">Jujuy</option>
                    <option value="la-pampa">La Pampa</option>
                    <option value="la-rioja">La Rioja</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="misiones">Misiones</option>
                    <option value="neuquen">Neuquén</option>
                    <option value="rio-negro">Río Negro</option>
                    <option value="salta">Salta</option>
                    <option value="san-juan">San Juan</option>
                    <option value="san-luis">San Luis</option>
                    <option value="santa-cruz">Santa Cruz</option>
                    <option value="santa-fe">Santa Fe</option>
                    <option value="santiago-del-estero">Santiago del Estero</option>
                    <option value="tierra-del-fuego">Tierra del Fuego</option>
                    <option value="tucuman">Tucumán</option>
                  </select>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    placeholder="Ciudad"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                  />
                </div>
                <textarea
                  name="comentarios"
                  rows={4}
                  placeholder="Comentarios (opcional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all resize-none"
                ></textarea>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contacto" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contacto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte con todas tus necesidades energéticas. Contáctanos y descubre cómo podemos
              impulsar tu proyecto.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Información de Contacto */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Sarico Distri SA</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-lg">Dr. Eliseo Cantón 1860 (Esq. Arturo Orgaz)</p>
                    <p className="text-gray-600 text-lg">Córdoba, X5003AHB</p>
                    <p className="text-gray-600 text-lg">Argentina</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold text-lg">+54 0351 489 1900</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-900 font-semibold text-lg">info@saricodistri.com.ar</p>
                </div>
              </div>
            </div>
            {/* Redes Sociales */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Redes Sociales</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Síguenos en nuestras redes sociales para estar al día con las últimas novedades, productos y consejos
                sobre energías renovables.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/saricodistrisa/" target="_blank"
                  className="group w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/SaricoDistriSA/" target="_blank"
                  className="group w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto text-center">
          <div className="space-y-2 text-white">
            <p className="font-semibold text-lg">© Copyright Sarico Distri S.A. Todos los derechos reservados</p>
            <p className="text-white">
              Desarrollado por{' '}
              <a
                href="https://codeflex.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline"
              >
                Codeflex S.A.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}