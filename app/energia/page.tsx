"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Battery,
  ArrowRight,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Heart,
} from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export default function EnergiaPage() {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else if (sectionId === "empresa") {
      router.push("/")
    }
  }

  const handleToggle = () => {
    if (isEnglish) {
      router.push("/energia")
    } else {
      router.push("/en/energia")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/sarico-logo.svg" alt="Sarico Distri S.A." width={160} height={45} className="h-8 md:h-12 lg:h-10 w-auto invert brightness-0" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/#empresa" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Nosotros
              </Link>
              <Link href="/energia" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Energía
              </Link>
              <Link href="/car-detail" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Estetica Vehicular
              </Link>
              <button
                onClick={handleToggle}
                className="ml-6 flex items-center bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-white hover:bg-yellow-400 hover:text-black transition-colors"
                aria-label="Switch language"
              >
                <span className={isEnglish ? "font-bold" : "opacity-60"}>EN</span>
                <span className="mx-2">|</span>
                <span className={!isEnglish ? "font-bold" : "opacity-60"}>ES</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section id="inicio" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-10 pt-16 pb-16 md:pt-20 md:pb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[70vh] max-w-7xl mx-auto">
            <div className="text-left space-y-8 px-2 lg:px-4">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  La energía del
                  <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                    futuro, hoy.
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-white/95 font-medium">Sarico Distri es sinónimo de</p>
                  <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">
                    Generación y Almacenamiento
                    <span className="block">de Energía.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-center px-4 lg:px-4">
              <div className="relative group w-full max-w-md lg:max-w-lg">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 group-hover:border-yellow-300/70 transition-all duration-300">
                  <Image
                    src="/Image 12.jpeg"
                    alt="Baterías Varta - Energía confiable y duradera"
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-base drop-shadow-lg">
                      Baterías de alta calidad para todas tus necesidades energéticas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>
      {/* Marcas Section */}
      <section id="marcas" className="py-12 px-4 bg-black/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nuestras Marcas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-32 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20"
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
      {/*       <section id="valores" className="py-6 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Nuestros Valores</h2>
              <div className="space-y-4 text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                <p>
                  Los valores son un conjunto de principios y creencias que guían el comportamiento de la empresa y sus
                  colaboradores.
                </p>
                <p className="font-semibold text-white">He aquí los nuestros:</p>
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
                  icon: Shield,
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
                  className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${valor.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <valor.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{valor.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{valor.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <section id="productos" className="py-6 pb-16 px-4 bg-black/40">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Battery className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nuestros Productos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra selección de productos energéticos de alta calidad, diseñados para maximizar la
              eficiencia y sostenibilidad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/e1275a.jpg"
                  alt="E1275A"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">E1275A</h3>
              <p className="text-sm text-gray-300 mb-2">Batería FREE con CALCIO</p>
              <p className="text-lg font-bold text-yellow-400">12 x 75</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/esg1275.jpg"
                  alt="ESG1275"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ESG1275</h3>
              <p className="text-sm text-gray-300 mb-2">Baterías Silver Graphite</p>
              <p className="text-lg font-bold text-yellow-400">12 x 75</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/etx7l-bs.jpg"
                  alt="ETX7L-BS"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ETX7L-BS</h3>
              <p className="text-sm text-gray-300 mb-2">Baterías para Motos</p>
              <p className="text-lg font-bold text-yellow-400">12V</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="images/epgs12120.jpg"
                  alt="EPGS12-120"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">EPGS12-120</h3>
              <p className="text-sm text-gray-300 mb-2">Baterías de Ciclado Profundo</p>
              <p className="text-lg font-bold text-yellow-400">12V - 120AH</p>
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
      {/*       <section id="contacto" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <SendHorizonal className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
              <p className="text-gray-300 text-lg">
                ¿Querés conocer más sobre nuestros productos energéticos? Escribinos y te asesoramos.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 shadow-xl">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-semibold">¡Mensaje enviado exitosamente!</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Nos pondremos en contacto contigo pronto para brindarte información sobre nuestros productos energéticos.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Error al enviar el mensaje</span>
                  </div>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              )}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder-gray-300 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-yellow-400 transition-all"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder-gray-300 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-yellow-400 transition-all"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder-gray-300 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-yellow-400 transition-all"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="provincia"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 text-white bg-white/10 backdrop-blur-sm focus:outline-none focus:border-yellow-400 transition-all"
                  >
                    <option value="" className="bg-gray-800 text-white">Provincia</option>
                    <option value="buenos-aires" className="bg-gray-800 text-white">Buenos Aires</option>
                    <option value="catamarca" className="bg-gray-800 text-white">Catamarca</option>
                    <option value="chaco" className="bg-gray-800 text-white">Chaco</option>
                    <option value="chubut" className="bg-gray-800 text-white">Chubut</option>
                    <option value="cordoba" className="bg-gray-800 text-white">Córdoba</option>
                    <option value="corrientes" className="bg-gray-800 text-white">Corrientes</option>
                    <option value="entre-rios" className="bg-gray-800 text-white">Entre Ríos</option>
                    <option value="formosa" className="bg-gray-800 text-white">Formosa</option>
                    <option value="jujuy" className="bg-gray-800 text-white">Jujuy</option>
                    <option value="la-pampa" className="bg-gray-800 text-white">La Pampa</option>
                    <option value="la-rioja" className="bg-gray-800 text-white">La Rioja</option>
                    <option value="mendoza" className="bg-gray-800 text-white">Mendoza</option>
                    <option value="misiones" className="bg-gray-800 text-white">Misiones</option>
                    <option value="neuquen" className="bg-gray-800 text-white">Neuquén</option>
                    <option value="rio-negro" className="bg-gray-800 text-white">Río Negro</option>
                    <option value="salta" className="bg-gray-800 text-white">Salta</option>
                    <option value="san-juan" className="bg-gray-800 text-white">San Juan</option>
                    <option value="san-luis" className="bg-gray-800 text-white">San Luis</option>
                    <option value="santa-cruz" className="bg-gray-800 text-white">Santa Cruz</option>
                    <option value="santa-fe" className="bg-gray-800 text-white">Santa Fe</option>
                    <option value="santiago-del-estero" className="bg-gray-800 text-white">Santiago del Estero</option>
                    <option value="tierra-del-fuego" className="bg-gray-800 text-white">Tierra del Fuego</option>
                    <option value="tucuman" className="bg-gray-800 text-white">Tucumán</option>
                  </select>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    placeholder="Ciudad"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder-gray-300 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-yellow-400 transition-all"
                  />
                </div>
                <textarea
                  name="comentarios"
                  rows={4}
                  placeholder="Comentarios (opcional)"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 text-white placeholder-gray-300 bg-white/10 backdrop-blur-sm focus:outline-none focus:border-yellow-400 transition-all resize-none"
                ></textarea>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section id="contacto" className="py-6 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte con todas tus necesidades energéticas. Contáctanos y descubre cómo podemos
              impulsar tu proyecto.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-xl border-2 border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8">Sarico Distri SA</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Dr. Eliseo Cantón 1860 (Esq. Arturo Orgaz)</p>
                    <p className="text-gray-300 text-lg">Córdoba, X5003AHB</p>
                    <p className="text-gray-300 text-lg">Argentina</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg">+54 0351 489 1900</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white font-semibold text-lg">info@saricodistri.com.ar</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-xl border-2 border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8">Redes Sociales</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
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
      </section> */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/sarico-logo.svg"
                alt="Sarico Distri S.A."
                width={160}
                height={45}
                className="h-6 md:h-8 lg:h-7 w-auto mb-4 invert brightness-0"
              />
              <p className="text-gray-400 leading-relaxed">
                Más de 20 años distribuyendo las mejores marcas en energía y representando con orgullo a Meguiar's,
                la marca líder mundial en productos de car detailing profesional.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Nuestras Divisiones</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/energia" className="hover:text-yellow-400 transition-colors">
                    División Energía
                  </Link>
                </li>
                <li>
                  <Link href="/car-detail" className="hover:text-yellow-400 transition-colors">
                    Distribuidores Oficiales Meguiar's
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-yellow-400 transition-colors">
                    Catálogo de Productos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.google.com/maps/search/Dr.+Eliseo+Cantón+1860,+Córdoba,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Córdoba, Argentina
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/Dr.+Eliseo+Cantón+1860,+Córdoba,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                  >
                    Dr. Eliseo Cantón 1860
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5493514891900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-300 transition-colors cursor-pointer"
                  >
                    +54 0351 489 1900
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@saricodistri.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-300 transition-colors cursor-pointer"
                  >
                    info@saricodistri.com.ar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sarico Distri S.A. Todos los derechos reservados.</p>
            <p className="text-gray-400">
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