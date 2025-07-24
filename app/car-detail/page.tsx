import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Car, Sparkles, Shield, Droplets } from "lucide-react"
import Image from "next/image"

export default function CarDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/meguiars-logo.png" alt="Meguiar's" width={160} height={50} className="h-12 w-auto" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Productos de
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Car Detail
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Distribuimos la línea completa de productos Meguiar's en Argentina para el detallado y cuidado automotriz profesional.
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
              <h3 className="text-2xl font-bold text-white mb-4">Detailing Premium</h3>
              <p className="text-white/70 leading-relaxed">  Productos para limpieza profunda, acabado profesional y brillo excepcional.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                <Droplets className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lavado Especializado</h3>
              <p className="text-white/70 leading-relaxed">Shampoo, desengrasantes y soluciones para un lavado seguro y efectivo.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Protección</h3>
              <p className="text-white/70 leading-relaxed">
                Selladores, ceras y recubrimientos para mantener tu auto protegido y reluciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Contacto</h2>
              <p className="text-white/60">¿Querés conocer más sobre los productos Meguiar's? Escribinos y te asesoramos.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Nombre completo"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                      placeholder="Teléfono"
                    />
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                  placeholder="Email"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="provincia"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 transition-all"
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
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all"
                    placeholder="Ciudad"
                  />
                </div>

                <textarea
                  name="comentarios"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 transition-all resize-none"
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
