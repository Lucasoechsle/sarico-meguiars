"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Car, Phone, Heart, Eye, Target, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function HomePage() {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Caravana Solidaria",
      subtitle: "Domingo 3 de Agosto - Ferial de Córdoba",
      description: "Evento gigante con Meguiar's. Conocé los mejores productos de car detailing del mundo.",
      cta: "Más Información",
      image: "/images/ImageCar.jpeg"
    },
    {
      id: 2,
      title: "Endurance Tire Gel",
      subtitle: "Brillo duradero para neumáticos",
      description: "Protección y brillo premium que dura semanas. El acabado perfecto para tus neumáticos.",
      cta: "Ver Producto",
      image: "/images/Endurance.jpeg"
    },
    {
      id: 3,
      title: "Hybrid Ceramic Wax",
      subtitle: "Protección cerámica avanzada",
      description: "La perfecta combinación de facilidad de aplicación y protección cerámica de larga duración.",
      cta: "Conocer Más",
      image: "/images/HybridCeramic.jpeg"
    },
    {
      id: 4,
      title: "Quick Detailer",
      subtitle: "Detallado rápido profesional",
      description: "Limpieza y brillo instantáneo entre lavados. Perfecto para mantenimiento diario.",
      cta: "Ver Detalles",
      image: "/images/QuickDetailer.jpeg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Cambia cada 5 segundos

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
      router.push("/")
    } else {
      router.push("/en")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/sarico-logo.svg" alt="Sarico Distri S.A." width={160} height={45} className="h-10 w-auto invert brightness-0" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/energia" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Energía
              </Link>
              <Link href="/car-detail" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Car Detail
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
      <section className="relative h-[95vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover transition-all duration-1000 brightness-110"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
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
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            prevSlide()
            console.log('Previous arrow clicked') // Para debug
          }}
          aria-label="Slide anterior"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 cursor-pointer border-2 border-white/20 hover:border-white/40"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
        
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            nextSlide()
            console.log('Next arrow clicked') // Para debug
          }}
          aria-label="Slide siguiente"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 cursor-pointer border-2 border-white/20 hover:border-white/40"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </section>

      {/* Hero Section */}
      <section className="pt-28 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-2">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Desde 2001 en Argentina
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Energía y
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Estetica Vehicular
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-300 font-semibold">Soluciones Profesionales</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Distribuimos las mejores marcas en{" "}
              <span className="text-yellow-400 font-semibold">baterías y sistemas energéticos</span>, y somos{" "}
              <span className="text-yellow-400 font-semibold">distribuidores oficiales de productos </span>
              Meguiar's. en Argentina
            </p>
            
            {/* Hero Images Section */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
              {/* Energía Image */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/20 group-hover:border-yellow-400/50 transition-all duration-300">
                  <Image
                    src="/images/ImageVarta.jpeg"
                    alt="División Energía - Baterías Varta de alta calidad"
                    width={400}
                    height={280}
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">División Energía</h3>
                    <p className="text-white/90 text-sm drop-shadow-lg">Baterías y sistemas energéticos</p>
                  </div>
                </div>
              </div>

              {/* Car Detail Image */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/20 group-hover:border-yellow-400/50 transition-all duration-300">
                  <Image
                    src="/images/ImageCar.jpeg"
                    alt="Distribuidores Oficiales Meguiar's - Car detailing profesional"
                    width={400}
                    height={280}
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">Distribuidores Oficiales Meguiar's</h3>
                    <p className="text-white/90 text-sm drop-shadow-lg">Car detailing profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 px-4 bg-black/40">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl font-black text-yellow-400">23+</div>
              <div className="text-gray-300 font-medium">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-yellow-400">8</div>
              <div className="text-gray-300 font-medium">Marcas Líderes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-yellow-400">54+</div>
              <div className="text-gray-300 font-medium">Productos Disponibles</div>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestra Empresa Section */}
      <section id="empresa" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="mx-auto text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Nuestra Empresa</h2>
                </div>
                <div className="space-y-6 text-white text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold">Sarico Distri S.A.</span> es una empresa argentina
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
      </section>
      {/* Main Sections */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestras <span className="text-yellow-400">Especialidades</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dos divisiones especializadas para cubrir todas tus necesidades energéticas y de cuidado automotriz
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Energía Section */}
            <Link href="/energia" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-gray-700 hover:border-yellow-400/50 p-10 h-[500px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mr-6">
                      <Zap className="h-10 w-10 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">División Energía</h3>
                      <p className="text-yellow-400 font-semibold">Sarico Distri S.A.</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Especialistas en <span className="text-white font-semibold">baterías y sistemas energéticos</span>{" "}
                      desde 2001. Distribuimos marcas líderes como Enerbat, Newmax, Varta, Moura y más.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Baterías para autos, motos y camiones
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Sistemas fotovoltaicos y energía solar
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Baterías de ciclado profundo
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Inversores y reguladores
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative z-10 flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold text-lg">
                  <span>Explorar Productos Energéticos</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
            {/* Car Detail Section */}
            <Link href="/car-detail" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border-2 border-gray-700 hover:border-yellow-400/50 p-10 h-[500px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-yellow-400 rounded-3xl flex items-center justify-center mr-6">
                      <Car className="h-10 w-10 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Distribuidores Oficiales Meguiar's</h3>
                      <p className="text-yellow-400 font-semibold">La marca líder mundial en car detailing</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Representamos con orgullo a{" "}
                      <span className="text-white font-semibold">Meguiar's</span>, la marca de estética vehicular 
                      más prestigiosa del mundo, con más de 120 años de innovación y excelencia profesional.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Distribución oficial y exclusiva en Argentina
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Tecnología y calidad mundial garantizada
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Soporte técnico especializado y capacitación
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Preferred por detailers profesionales mundialmente
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative z-10 flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold text-lg">
                  <span>Ver Productos de Car Detail</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl text-black/80 mb-10 leading-relaxed">
              Contáctanos para conocer más sobre nuestros productos energéticos o descubrí por qué somos los distribuidores oficiales 
              de Meguiar's, la marca líder mundial en car detailing profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-white font-bold px-10 py-4 text-lg shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                +54 0351 489 1900
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 text-lg bg-transparent font-bold"
              >
                info@saricodistri.com.ar
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/sarico-logo.svg"
                alt="Sarico Distri S.A."
                width={160}
                height={45}
                className="h-10 w-auto mb-4 invert brightness-0"
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
                <li>Dr. Eliseo Cantón 1860</li>
                <li>Córdoba, Argentina</li>
                <li className="text-yellow-400">+54 0351 489 1900</li>
                <li className="text-yellow-400">info@saricodistri.com.ar</li>
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