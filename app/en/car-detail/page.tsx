"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Car, Sparkles, Shield, Droplets, Heart, Zap } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export default function CarDetailPageEn() {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")

  const handleToggle = () => {
    if (isEnglish) {
      router.push("/car-detail")
    } else {
      router.push("/en/car-detail")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="flex items-center space-x-3">
              <Image
                src="/sarico-logo.svg"
                alt="Sarico Distri S.A."
                width={160}
                height={45}
                className="h-8 md:h-12 lg:h-10 w-auto invert brightness-0"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-white/80 hover:text-yellow-400 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("marcas")}
                className="text-white/80 hover:text-yellow-400 font-medium transition-colors"
              >
                Brands
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-white/80 hover:text-yellow-400 font-medium transition-colors"
              >
                Contact
              </button>
              <Link href="/en" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
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
      {/* Hero Section */}
      <section id="inicio" className="pt-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Car Detail
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Products
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              We distribute the complete line of Meguiar's products in Argentina for professional automotive detailing and care.
            </p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Premium Detailing</h3>
              <p className="text-white/70 leading-relaxed">Products for deep cleaning, professional finish, and exceptional shine.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                <Droplets className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Specialized Washing</h3>
              <p className="text-white/70 leading-relaxed">Shampoo, degreasers, and solutions for safe and effective washing.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Protection</h3>
              <p className="text-white/70 leading-relaxed">
                Sealants, waxes, and coatings to keep your car protected and shiny.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values Section */}
      <section id="valores" className="py-20 px-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-2">
                Values are a set of principles and beliefs that guide the behavior of the company and its collaborators.
              </p>
              <p className="font-semibold text-white/90 text-lg">Here are ours:</p>
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
              ].map((valor) => (
                <div
                  key={valor.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
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
                    <p className="text-white/70 leading-relaxed text-sm">{valor.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <section id="marcas" className="py-16 px-4 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Brands</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We work with recognized brands to offer you the highest quality car detail products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { src: "/brands/meguiars-logo.png", alt: "Meguiar's" },
              // future brands here
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
      <section id="contacto" className="py-12 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
              <p className="text-white/60">Want to know more about Meguiar's products? Write to us and we will advise you.</p>
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
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Phone"
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
                      State/Province
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
                    placeholder="City"
                  />
                </div>
                <textarea
                  name="comentarios"
                  rows={3}
                  className="placeholder:text-white w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all resize-none"
                  placeholder="Comments (optional)"
                ></textarea>
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-3"
                  >
                    Send
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