"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Car, Phone, Heart, Eye, Target } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export default function HomePageEn() {
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")

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
            <Link href="/en" className="flex items-center space-x-3">
              <Image src="/sarico-logo.svg" alt="Sarico Distri S.A." width={160} height={45} className="h-10 w-auto invert brightness-0" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/en/energia" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
                Energy
              </Link>
              <Link href="/en/car-detail" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">
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
      {/* Hero Section */}
      <section className="pt-28 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-2">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Since 2001 in Argentina
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Energy and
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Car Detail
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-300 font-semibold">Professional Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              We distribute the best brands in
              <span className="text-yellow-400 font-semibold"> batteries and energy systems</span>, and we are
              <span className="text-yellow-400 font-semibold">official distributors of Meguiar's products</span>
              in Argentina.
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12 px-4 bg-black/40">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl font-black text-yellow-400">23+</div>
              <div className="text-gray-300 font-medium">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-yellow-400">8</div>
              <div className="text-gray-300 font-medium">Leading Brands</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-yellow-400">54+</div>
              <div className="text-gray-300 font-medium">Available Products</div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Company Section */}
      <section id="empresa" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="mx-auto text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Our Company</h2>
                </div>
                <div className="space-y-6 text-white text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold">Sarico Distri S.A.</span> is an Argentinian company
                    founded in <span className="font-semibold text-yellow-600">2001</span>, initially focused on
                    marketing batteries for vehicles, including motorcycles, cars, trucks, and buses. Our extensive
                    catalog also included lubricants, equipment for lube centers, and a prominent line of
                    automotive cosmetics and car-detailing products.
                  </p>
                  <p>
                    In <span className="font-semibold text-yellow-600">2015</span>, we further expanded our offering by
                    incorporating the marketing of batteries and equipment for photovoltaic systems, supporting
                    alternative energies.
                  </p>
                  <p>
                    At Sarico, we are committed to providing our clients with the best possible service. We have a team
                    of highly trained professionals, ready to advise you on the right solution for your needs.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 mr-3" />
                    <h3 className="text-2xl font-bold">PURPOSE</h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    We create business opportunities committed to people.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Eye className="h-8 w-8 mr-3 text-yellow-600" />
                    <h3 className="text-2xl font-bold text-gray-900">MISSION</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We distribute leading brands to meet the demand of clients, suppliers, and collaborators.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 border-2 border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 mr-3 text-yellow-600" />
                    <h3 className="text-2xl font-bold text-gray-900">VISION</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the best option in distribution, for added value and technological innovation.
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
              Our <span className="text-yellow-400">Specialties</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two specialized divisions to cover all your energy and car care needs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Energy Section */}
            <Link href="/en/energia" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-2 border-gray-700 hover:border-yellow-400/50 p-10 h-[500px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl flex items-center justify-center mr-6">
                      <Zap className="h-10 w-10 text-black" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Energy Division</h3>
                      <p className="text-yellow-400 font-semibold">Sarico Distri S.A.</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Specialists in <span className="text-white font-semibold">batteries and energy systems</span>{" "}
                      since 2001. We distribute leading brands such as Enerbat, Newmax, Varta, Moura, and more.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Batteries for cars, motorcycles, and trucks
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Photovoltaic systems and solar energy
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Deep cycle batteries
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Inverters and regulators
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative z-10 flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold text-lg">
                  <span>Explore Energy Products</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
            {/* Car Detail Section */}
            <Link href="/en/car-detail" className="group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border-2 border-gray-700 hover:border-yellow-400/50 p-10 h-[500px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-yellow-400 rounded-3xl flex items-center justify-center mr-6">
                      <Car className="h-10 w-10 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">Car Detail Division</h3>
                      <p className="text-yellow-400 font-semibold">Powered by Meguiar's</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      We distribute the complete line of
                      <span className="text-white font-semibold"> Meguiar's products </span>
                      for automotive care and detailing, ideal for professionals and enthusiasts.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        High-end waxes, cleaners, and polishes
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Products for interiors, exteriors, and engines
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Ideal for workshops, detailers, and fans
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        Meguiar's guaranteed quality
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative z-10 flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold text-lg">
                  <span>See Car Detail Products</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Ready to get started?</h2>
            <p className="text-xl text-black/80 mb-10 leading-relaxed">
              Contact us to learn more about our energy products or the professional Meguiar's line for car detail
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
                Over 20 years distributing the best brands in energy and Meguiar's car detail products.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Our Divisions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/en/energia" className="hover:text-yellow-400 transition-colors">
                    Energy Division
                  </Link>
                </li>
                <li>
                  <Link href="/en/car-detail" className="hover:text-yellow-400 transition-colors">
                    Car Detail Division
                  </Link>
                </li>
                <li>
                  <Link href="/en/productos" className="hover:text-yellow-400 transition-colors">
                    Product Catalog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dr. Eliseo Cantón 1860</li>
                <li>Córdoba, Argentina</li>
                <li className="text-yellow-400">+54 0351 489 1900</li>
                <li className="text-yellow-400">info@saricodistri.com.ar</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Sarico Distri S.A. All rights reserved.</p>
            <p className="text-gray-400">
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