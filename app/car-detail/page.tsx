"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Car, Sparkles, Shield, Droplets, Heart, Target, Zap, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function CarDetailPage() {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Caravana Solidaria",
      subtitle: "Domingo 3 de Agosto - Ferial de Córdoba",
      description: "Evento gigante con Meguiar's. Vení a conocer toda la línea de productos profesionales.",
      cta: "Información del Evento",
      image: "/images/ImageCar.jpeg"
    },
    {
      id: 2,
      title: "Endurance Tire Gel",
      subtitle: "Brillo duradero para neumáticos",
      description: "Protección y brillo premium que dura semanas. El acabado perfecto para tus neumáticos.",
      cta: "Ver Detalles",
      image: "/images/Endurance.jpeg"
    },
    {
      id: 3,
      title: "Hybrid Ceramic Wax",
      subtitle: "Protección cerámica avanzada",
      description: "La perfecta combinación de facilidad de aplicación y protección cerámica de larga duración.",
      cta: "Conocer Producto",
      image: "/images/HybridCeramic.jpeg"
    },
    {
      id: 4,
      title: "Quick Detailer",
      subtitle: "Detallado rápido profesional",
      description: "Limpieza y brillo instantáneo entre lavados. Perfecto para mantenimiento diario.",
      cta: "Ver Producto",
      image: "/images/QuickDetailer.jpeg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleToggle = () => {
    if (isEnglish) {
      router.push("/car-detail")
    } else {
      router.push("/en/car-detail")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/sarico-logo.svg"
                alt="Sarico Distri S.A."
                width={160}
                height={45}
                className="h-10 w-auto invert brightness-0"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Link>
              {/* Language Toggle */}
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
      
      {/* Carrousel Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-8 lg:px-16 h-full flex items-center">
          <div className="max-w-4xl ml-4 lg:ml-8">
            <div className="flex items-center space-x-2 text-yellow-400 font-semibold mb-4">
              {slides[currentSlide].id === 1 && <Calendar className="h-5 w-5" />}
              {slides[currentSlide].id === 1 && <span>Evento Especial</span>}
              {slides[currentSlide].id !== 1 && <span>Producto Meguiar's</span>}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              {slides[currentSlide].description}
            </p>
            
            {slides[currentSlide].id === 1 && (
              <div className="flex items-center space-x-2 text-white/80 mb-8">
                <MapPin className="h-6 w-6" />
                <span className="text-lg">Ferial de Córdoba - ¡Te esperamos!</span>
              </div>
            )}
            
            {slides[currentSlide].id !== 1 && (
              <Button 
                onClick={() => window.open('https://sarico.osapp.com.ar/', '_blank')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 text-xl cursor-pointer"
              >
                ¡Comprar Ahora!
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            )}
            
            {slides[currentSlide].id === 1 && (
              <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 text-xl rounded-lg inline-flex items-center">
                <Calendar className="mr-3 h-6 w-6" />
                ¡Nos vemos el 3 de Agosto!
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentSlide(index)
                console.log('Dot clicked:', index) // Para debug
              }}
              aria-label={`Ir al slide ${index + 1}`}
              className={`w-6 h-6 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black border-2 border-white/30 ${
                index === currentSlide 
                  ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 border-yellow-400' 
                  : 'bg-white/70 hover:bg-white/90 hover:shadow-lg hover:border-white/60'
              }`}
            />
          ))}
        </div>
        
        {/* Arrow Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </section>

      {/* Hero Section */}
      <section className="pt-32 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="text-left space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mb-8">
                <Car className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Distribuidores Oficiales
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {" "}
                  Meguiar's
                </span>
                <span className="block text-3xl md:text-4xl text-white/90 font-semibold mt-2">
                  La marca líder mundial en car detailing
                </span>
              </h1>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                En Sarico Distri representamos con orgullo a <span className="text-yellow-400 font-semibold">Meguiar's</span>, 
                la marca de productos de estética vehicular más prestigiosa del mundo, con más de 120 años de innovación 
                y excelencia en el cuidado automotriz profesional.
              </p>
            </div>
            
            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 group-hover:border-yellow-400/50 transition-all duration-300">
                  <Image
                    src="/images/ImageCar.jpeg"
                    alt="Profesional puliendo auto con productos Meguiar's"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-semibold text-lg drop-shadow-lg">
                      Detallado profesional con productos Meguiar's
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tecnología de Vanguardia</h3>
              <p className="text-white/70 leading-relaxed">
                Acceso exclusivo a las últimas innovaciones de Meguiar's, desarrolladas con más de un siglo de experiencia 
                en el cuidado automotriz profesional.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                <Droplets className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Calidad Mundial Garantizada</h3>
              <p className="text-white/70 leading-relaxed">
                Como distribuidores oficiales, garantizamos la autenticidad y calidad de cada producto Meguiar's, 
                respaldados por la confianza de profesionales en todo el mundo.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Soporte Técnico Especializado</h3>
              <p className="text-white/70 leading-relaxed">
                Ofrecemos capacitación, asesoramiento técnico y soporte continuo para talleres, detailers profesionales 
                y entusiastas del car care de alto nivel.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestros Valores Section */}
      <section id="valores" className="py-20 px-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nuestros Valores</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-2">
                Los valores son un conjunto de principios y creencias que guían el comportamiento de la empresa y sus colaboradores.
              </p>
              <p className="font-semibold text-white/90 text-lg">He aquí los nuestros:</p>
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
              ].map((valor) => (
                <div
                  key={valor.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${valor.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <valor.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl font-black text-white/30 group-hover:text-yellow-200 transition-colors duration-300">
                        {valor.id}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{valor.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm">{valor.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Section */}
      <section id="marcas" className="py-16 px-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">La Marca Líder Mundial</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Meguiar's es sinónimo de excelencia en el detallado automotriz desde 1901. Ser distribuidores oficiales 
              nos posiciona como referentes en productos de car care profesional en Argentina.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { src: "/brands/meguiars-logo.png", alt: "Meguiar's" },
              // futuras marcas acá
            ].map((brand, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 h-32 flex items-center justify-center border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <Image
                  src={brand.src}
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
      {/* Contact Form Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contacto Especializado</h2>
              <p className="text-white/60">
                ¿Sos un profesional del detailing o querés conocer más sobre los productos Meguiar's? 
                Como distribuidores oficiales, te brindamos asesoramiento técnico especializado.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Nombre completo"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Teléfono"
                    />
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                  placeholder="Email"
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="provincia"
                    required
                    className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 transition-all"
                  >
                    <option value="" className="bg-gray-800">
                      Provincia
                    </option>
                    <option value="buenos-aires" className="bg-gray-800">
                      Buenos Aires
                    </option>
                    <option value="catamarca" className="bg-gray-800">
                      Catamarca
                    </option>
                    <option value="chaco" className="bg-gray-800">
                      Chaco
                    </option>
                    <option value="chubut" className="bg-gray-800">
                      Chubut
                    </option>
                    <option value="cordoba" className="bg-gray-800">
                      Córdoba
                    </option>
                    <option value="corrientes" className="bg-gray-800">
                      Corrientes
                    </option>
                    <option value="entre-rios" className="bg-gray-800">
                      Entre Ríos
                    </option>
                    <option value="formosa" className="bg-gray-800">
                      Formosa
                    </option>
                    <option value="jujuy" className="bg-gray-800">
                      Jujuy
                    </option>
                    <option value="la-pampa" className="bg-gray-800">
                      La Pampa
                    </option>
                    <option value="la-rioja" className="bg-gray-800">
                      La Rioja
                    </option>
                    <option value="mendoza" className="bg-gray-800">
                      Mendoza
                    </option>
                    <option value="misiones" className="bg-gray-800">
                      Misiones
                    </option>
                    <option value="neuquen" className="bg-gray-800">
                      Neuquén
                    </option>
                    <option value="rio-negro" className="bg-gray-800">
                      Río Negro
                    </option>
                    <option value="salta" className="bg-gray-800">
                      Salta
                    </option>
                    <option value="san-juan" className="bg-gray-800">
                      San Juan
                    </option>
                    <option value="san-luis" className="bg-gray-800">
                      San Luis
                    </option>
                    <option value="santa-cruz" className="bg-gray-800">
                      Santa Cruz
                    </option>
                    <option value="santa-fe" className="bg-gray-800">
                      Santa Fe
                    </option>
                    <option value="santiago-del-estero" className="bg-gray-800">
                      Santiago del Estero
                    </option>
                    <option value="tierra-del-fuego" className="bg-gray-800">
                      Tierra del Fuego
                    </option>
                    <option value="tucuman" className="bg-gray-800">
                      Tucumán
                    </option>
                  </select>
                  <input
                    type="text"
                    name="ciudad"
                    required
                    className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                    placeholder="Ciudad"
                  />
                </div>
                <textarea
                  name="comentarios"
                  rows={3}
                  className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all resize-none"
                  placeholder="Comentarios (opcional)"
                ></textarea>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}