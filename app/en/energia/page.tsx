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
  Shield,
  Heart,
  SendHorizonal,
} from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function EnergiaPageEn() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-yellow-200/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="flex items-center space-x-3">
              <Image src="/sarico-logo.svg" alt="Sarico Distri S.A." width={160} height={45} className="h-8 md:h-12 lg:h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("marcas")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Brands
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                Contact
              </button>
              <Link
                href="/en"
                className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
              {/* Language Toggle */}
              <button
                onClick={handleToggle}
                className="ml-6 flex items-center bg-gray-100 border border-yellow-300 rounded-full px-4 py-1 text-sm text-gray-800 hover:bg-yellow-400 hover:text-black transition-colors"
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
      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
                  The energy of the
                  <span className="block bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                    future, today.
                  </span>
                </h1>
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-white/95 font-medium">Sarico Distri is synonymous with</p>
                  <p className="text-2xl lg:text-4xl font-bold text-white drop-shadow-lg">
                    Generation and Storage
                    <span className="block">of Energy.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/hero-energy.png"
                  alt="Renewable energy - Solar panels and wind turbines"
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
      {/* Brands Section */}
      <section id="marcas" className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Brands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with the best brands on the market to offer you superior quality energy solutions and cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/brands/enerbat-sg.png", alt: "Enerbat Silver Graphite" },
              { src: "/brands/newmax.png", alt: "Newmax" },
              { src: "/brands/varta.png", alt: "Varta" },
              { src: "/brands/moura.png", alt: "Moura" },
              { src: "/brands/enerbat-ca.png", alt: "Enerbat Energy Without Limits" },
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
      {/* Values Section */}
      <section id="valores" className="py-6 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Values</h2>
              <div className="space-y-4 text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                <p>
                  Values are a set of principles and beliefs that guide the behavior of the company and its collaborators.
                </p>
                <p className="font-semibold text-gray-900">Here are ours:</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  id: "01",
                  title: "PASSIONATE ATTITUDE FOR SERVICE",
                  content:
                    "When we interact with a client or supplier, whether internal or external, we listen with interest to understand them, respecting them and, above all, treating them as a Person. We put our greatest energy, joy, and dedication into always working as a team, being proud to belong to the company.",
                  icon: Heart,
                  gradient: "from-pink-400 to-rose-400",
                },
                {
                  id: "02",
                  title: "FULFILL WITH INTEGRITY",
                  content:
                    "We honor our obligations and commitments, with fortitude and upright conduct, being aware that our actions determine the promised result and added value. We also act with integrity according to our values, thinking that concern for others is an inspiring source of responsible acts.",
                  icon: Shield,
                  gradient: "from-blue-400 to-indigo-400",
                },
                {
                  id: "03",
                  title: "INITIATIVE TO IMPROVE AND INNOVATE",
                  content:
                    "We like to look for new ways of doing things and also to do new things, escaping conformity to achieve greater efficiency. We try to anticipate what may happen in the future, with boldness or simply deciding to do things as soon as possible.",
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
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${valor.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <valor.icon className="h-8 w-8 text-white" />
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
      {/* Main Products Section */}
      <section id="productos" className="py-6 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Battery className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our selection of high-quality energy products, designed to maximize efficiency and sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Battery FREE with CALCIUM */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/e1275a.jpg"
                  alt="E1275A"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">E1275A</h3>
              <p className="text-sm text-gray-500 mb-2">FREE Battery with CALCIUM</p>
              <p className="text-lg font-bold text-yellow-600">12 x 75</p>
            </div>
            {/* Silver Graphite Batteries */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/esg1275.jpg"
                  alt="ESG1275"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ESG1275</h3>
              <p className="text-sm text-gray-500 mb-2">Silver Graphite Batteries</p>
              <p className="text-lg font-bold text-yellow-600">12 x 75</p>
            </div>
            {/* Motorcycle Batteries */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/etx7l-bs.jpg"
                  alt="ETX7L-BS"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ETX7L-BS</h3>
              <p className="text-sm text-gray-500 mb-2">Motorcycle Batteries</p>
              <p className="text-lg font-bold text-yellow-600">12V</p>
            </div>
            {/* Deep Cycle Batteries */}
            <div className="group bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative mb-6 rounded-2xl p-4 h-40 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/epgs12120.jpg"
                  alt="EPGS12-120"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EPGS12-120</h3>
              <p className="text-sm text-gray-500 mb-2">Deep Cycle Batteries</p>
              <p className="text-lg font-bold text-yellow-600">12V - 120AH</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/en/productos">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                See All Our Products
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600 text-lg">
                Want to know more about energy products? Write to us and we will advise you.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="Phone"
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
                    <option value="">State/Province</option>
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
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all"
                  />
                </div>
                <textarea
                  name="comentarios"
                  rows={4}
                  placeholder="Comments (optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:border-yellow-500 transition-all resize-none"
                ></textarea>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contacto" className="py-6 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are here to help you with all your energy needs. Contact us and discover how we can boost your project.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
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
            {/* Social Media */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Social Media</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Follow us on our social networks to stay up to date with the latest news, products, and tips on renewable energy.
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
            <p className="font-semibold text-lg">© Copyright Sarico Distri S.A. All rights reserved</p>
            <p className="text-white">
              Developed by{' '}
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