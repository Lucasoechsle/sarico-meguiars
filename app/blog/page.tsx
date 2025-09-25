"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function BlogPage() {
    const pathname = usePathname()
    const router = useRouter()
    const isEnglish = pathname.startsWith("/en")
    // const [currentSlide, setCurrentSlide] = useState(0)

    // Slides data - comentado para uso futuro
    // const slides = [
    //   {
    //     id: 1,
    //     title: "Caravana Solidaria 2025",
    //     subtitle: "Domingo 3 de Agosto - Ferial de Córdoba",
    //     description: "Fue un evento gigante con Meguiar's donde miles de entusiastas del car detailing se reunieron para conocer los mejores productos del mundo.",
    //     cta: "Ver Galería",
    //     image: "/images/ImageCar.jpeg"
    //   },
    // ]

    // Carrusel functions - comentado para uso futuro
    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setCurrentSlide((prev) => (prev + 1) % slides.length)
    //   }, 6000)
    //   return () => clearInterval(timer)
    // }, [slides.length])

    // const nextSlide = () => {
    //   setCurrentSlide((prev) => (prev + 1) % slides.length)
    // }

    // const prevSlide = () => {
    //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    // }

    const handleToggle = () => {
        if (isEnglish) {
            router.push("/blog")
        } else {
            router.push("/en/blog")
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
                            <Link href="/blog" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                                Blog
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
            <section className="relative h-[95vh] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/ImageCar.jpeg"
                        alt="Caravana Solidaria 2025"
                        fill
                        className="object-cover brightness-110"
                        priority
                        quality={95}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-8 lg:px-16 h-full flex items-center">
                    <div className="max-w-4xl ml-4 lg:ml-8">
                        <div className="flex items-center space-x-2 text-yellow-400 font-semibold mb-4">
                            <Calendar className="h-5 w-5" />
                            <span>Evento Realizado</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
                            Caravana Solidaria 2025
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                            Domingo 3 de Agosto - Ferial de Córdoba
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                            Fue un evento gigante con Meguiar's donde miles de entusiastas del car detailing se reunieron para conocer los mejores productos del mundo.
                        </p>
                        <div className="flex items-center space-x-2 text-white/80 mb-8">
                            <MapPin className="h-6 w-6" />
                            <span className="text-lg">Ferial de Córdoba</span>
                        </div>
                        <div className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 text-xl rounded-lg inline-flex items-center">
                            <Calendar className="mr-3 h-6 w-6" />
                            ¡Evento Exitoso!
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            <section className="relative h-[95vh] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover transition-all duration-1000 brightness-110"
                  priority
                  quality={95}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
              </div>
              <div className="relative z-10 container mx-auto px-8 lg:px-16 h-full flex items-center">
                <div className="max-w-4xl ml-4 lg:ml-8">
                  <div className="flex items-center space-x-2 text-yellow-400 font-semibold mb-4">
                    {slides[currentSlide].id === 1 && <Calendar className="h-5 w-5" />}
                    {slides[currentSlide].id === 1 && <span>Evento Realizado</span>}
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
                      <span className="text-lg">Ferial de Córdoba</span>
                    </div>
                  )}
                  {slides[currentSlide].id !== 1 && (
                    <Button 
                      onClick={() => window.open('https://tienda.saricodistri.com.ar/', '_blank')}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 text-xl cursor-pointer"
                    >
                      ¡Comprar Ahora!
                      <ArrowLeft className="ml-3 h-6 w-6" />
                    </Button>
                  )}
                  {slides[currentSlide].id === 1 && (
                    <div className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 text-xl rounded-lg inline-flex items-center">
                      <Calendar className="mr-3 h-6 w-6" />
                      ¡Evento Exitoso!
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-6 h-6 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                      index === currentSlide 
                        ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 border-yellow-400' 
                        : 'bg-white/70 hover:bg-white/90 hover:shadow-lg hover:border-white/60'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </section>
            */}
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
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/sarico-distri/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/saricodistrisa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
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
                                <li>
                                    <Link href="/blog" className="hover:text-yellow-400 transition-colors">
                                        Blog
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