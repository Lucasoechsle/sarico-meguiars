"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"
import Image from "next/image"
import { useState, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"

const productos = [
  {
    id: 2,
    name: "E1245A",
    image: "images/e1245a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 45",
  },
  {
    id: 4,
    name: "E1255AA",
    image: "images/e1255a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 55",
  },
  {
    id: 5,
    name: "E1265A",
    image: "images/e1265a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 65",
  },
  {
    id: 6,
    name: "E1265AA",
    image: "images/e1265aa.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 65 Alta",
  },
  {
    id: 7,
    name: "E1275A",
    image: "images/e1275a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 75",
  },
  {
    id: 8,
    name: "E1275AA",
    image: "images/e1275aa.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 75 Alta",
  },
  {
    id: 9,
    name: "E1275AR",
    image: "images/e1275ar.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 80",
  },
  {
    id: 10,
    name: "E1275AT",
    image: "images/e1275at.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 75 AT",
  },
  {
    id: 11,
    name: "E1290AT",
    image: "images/e1290at.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 90",
  },
  {
    id: 13,
    name: "E12110A",
    image: "images/e12110a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 110",
  },
  {
    id: 14,
    name: "E12160A",
    image: "images/e12160a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 160",
  },
  {
    id: 15,
    name: "E12180A",
    image: "images/e12180a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 180",
  },
  {
    id: 16,
    name: "E12200A",
    image: "images/e12200a.jpg",
    brand: "enerbat",
    category: "Batería FREE con CALCIO",
    denominación: "12 x 200",
  },
  {
    id: 17,
    name: "ESG1250",
    image: "images/esg1250.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 50",
  },
  {
    id: 18,
    name: "ESG1260",
    image: "images/esg1260.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 60",
  },
  {
    id: 19,
    name: "ESG1265",
    image: "images/esg1265.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 65",
  },
  {
    id: 20,
    name: "ESG1270",
    image: "images/esg1270.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 70",
  },
  {
    id: 21,
    name: "ESG1275",
    image: "images/esg1275.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 75",
  },
  {
    id: 22,
    name: "ESG1285",
    image: "images/esg1285.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 85",
  },
  {
    id: 23,
    name: "ESG1295",
    image: "images/esg1295.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 95",
  },
  {
    id: 24,
    name: "ESG12100",
    image: "images/esg12100.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 100",
  },
  {
    id: 25,
    name: "ESG12110",
    image: "images/esg12110.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 110",
  },
  {
    id: 26,
    name: "ESG12180",
    image: "images/esg12180.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 180",
  },
  {
    id: 27,
    name: "ESG12180BI",
    image: "images/esg12180bi.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 180",
  },
  {
    id: 29,
    name: "ESGEFB2",
    image: "images/esgefb2.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 65",
  },
  {
    id: 30,
    name: "ESGEFB3",
    image: "images/esgefb3.jpg",
    brand: "enerbat",
    category: "Baterías Silver Graphite",
    denominación: "12 x 75",
  },
  {
    id: 31,
    name: "ETX4L-BS",
    image: "images/etx4l-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 33,
    name: "ETX5L-BS",
    image: "images/etx5l-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 34,
    name: "ETX6.5-BS",
    image: "images/etx6.5-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 35,
    name: "ETX7L-BS",
    image: "images/etx7l-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 36,
    name: "ETX7A-BS",
    image: "images/etx7a-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 37,
    name: "ETX9-BS",
    image: "images/etx9-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 38,
    name: "EB7D",
    image: "images/eb7d.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 39,
    name: "EBZ12-4-1",
    image: "images/ebz12-4-1.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 40,
    name: "ET7D-4",
    image: "images/et7d-4.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 41,
    name: "ET9A-3",
    image: "images/et9a-3.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 42,
    name: "ET10-3",
    image: "images/et10-3.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 43,
    name: "ET12-4",
    image: "images/et12-4.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 44,
    name: "EB9-B",
    image: "images/eb9-b.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 45,
    name: "ETX14-BS",
    image: "images/etx14-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 46,
    name: "ETX20L-BS",
    image: "images/etx20l-bs.jpg",
    brand: "enerbat",
    category: "Baterías para Motos",
    denominación: "12V",
  },
  {
    id: 47,
    name: "EP12-7.0",
    image: "images/ep12-7.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 7AH",
  },
  {
    id: 48,
    name: "EP12-9.0",
    image: "images/ep12-9.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 9AH",
  },
  {
    id: 49,
    name: "EP12-20",
    image: "images/ep12-20.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 20AH",
  },
  {
    id: 50,
    name: "EP12-33",
    image: "images/ep12-33.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 33AH",
  },
  {
    id: 51,
    name: "EPGS12-120",
    image: "images/epgs12120.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 120AH",
  },
  {
    id: 52,
    name: "EPGS12-200",
    image: "images/epgs12200.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 200AH",
  },
  {
    id: 53,
    name: "EPGS12-250",
    image: "images/epgs12250.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 250AH",
  },
  {
    id: 54,
    name: "60PzV600",
    image: "images/6opzv600.jpg",
    brand: "enerbat",
    category: "Baterías de Ciclado Profundo",
    denominación: "12V - 600AH",
  },
  {
    id: 55,
    name: "BM 6225",
    image: "images/051_bm6225.jpg",
    brand: "newmax",
    category: "Baterías BM",
    denominación: "6V - 225AH",
  },
  {
    id: 56,
    name: "BM 6240",
    image: "images/051_bm6240.jpg",
    brand: "newmax",
    category: "Baterías BM",
    denominación: "6V - 240AH",
  },
  {
    id: 57,
    name: "BM 8190",
    image: "images/051_bm8190.jpg",
    brand: "newmax",
    category: "Baterías BM",
    denominación: "8V - 190AH",
  },
  {
    id: 60,
    name: "BM 12165",
    image: "images/051_bm12165.jpg",
    brand: "newmax",
    category: "Baterías BM",
    denominación: "12V - 165AH",
  },
  {
    id: 63,
    name: "SG 1200H",
    image: "images/051_sg1200.jpg",
    brand: "newmax",
    category: "Baterías SG",
    denominación: "12V - 120AH",
  },
  {
    id: 64,
    name: "SG 1500H",
    image: "images/newmax_sg1500h.jpg",
    brand: "newmax",
    category: "Baterías SG",
    denominación: "12V - 150AH",
  },
  {
    id: 65,
    name: "SG 2000H",
    image: "images/051_sg2000h.jpg",
    brand: "newmax",
    category: "Baterías SG",
    denominación: "12V - 200AH",
  },
]

export default function ProductosPage() {
  const [selectedFilter, setSelectedFilter] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  const { paginatedProducts, totalPages, totalProducts } = useMemo(() => {
    let filtered = productos

    // Filtrar por marca
    if (selectedFilter !== "todos") {
      filtered = filtered.filter((product) => product.brand === selectedFilter)
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.denominación.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    const totalProducts = filtered.length
    const totalPages = Math.ceil(totalProducts / productsPerPage)
    const startIndex = (currentPage - 1) * productsPerPage
    const paginatedProducts = filtered.slice(startIndex, startIndex + productsPerPage)

    return { paginatedProducts, totalPages, totalProducts }
  }, [selectedFilter, searchTerm, currentPage])

  const getBrandColor = (brand: string) => {
    switch (brand) {
      case "enerbat":
        return "bg-gradient-to-br from-blue-500 to-blue-600"
      case "newmax":
        return "bg-gradient-to-br from-green-500 to-green-600"
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-600"
    }
  }

  const getBrandName = (brand: string) => {
    switch (brand) {
      case "enerbat":
        return "Enerbat"
      case "newmax":
        return "Newmax"
      default:
        return brand
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Resetear página cuando cambien filtros
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    setCurrentPage(1)
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname.startsWith("/en")

  const handleToggle = () => {
    if (isEnglish) {
      router.push("/productos")
    } else {
      router.push("/en/productos")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-yellow-200/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/sarico-logo.svg" alt="Sarico Distri S.A." width={160} height={45} className="h-8 md:h-12 lg:h-10 w-auto" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/energia"
                className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
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
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Catálogo de
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Productos
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explora nuestra gama completa de baterías y productos energéticos de alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleFilterChange("todos")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedFilter === "todos"
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-600"
                    }`}
                >
                  Todos los Productos ({productos.length})
                </button>
                <button
                  onClick={() => handleFilterChange("enerbat")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedFilter === "enerbat"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600"
                    }`}
                >
                  Enerbat ({productos.filter((p) => p.brand === "enerbat").length})
                </button>
                <button
                  onClick={() => handleFilterChange("newmax")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedFilter === "newmax"
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-green-400 hover:text-green-600"
                    }`}
                >
                  Newmax ({productos.filter((p) => p.brand === "newmax").length})
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-3 w-80 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {paginatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-yellow-200"
                  >
                    {/* Product Image */}
                    <div className="relative mb-6 bg-gray-50 rounded-2xl p-4 h-48 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image ? `/${product.image}` : "/placeholder.svg?height=150&width=150"}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Brand Badge */}
                      <div
                        className={`absolute top-3 right-3 ${getBrandColor(product.brand)} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}
                      >
                        {getBrandName(product.brand)}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {product.name}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">Categoría:</span>
                          <span className="text-sm text-gray-700 font-semibold">{product.category}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 font-medium">Denominación:</span>
                          <span className="text-sm font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-lg">
                            {product.denominación}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No se encontraron productos</h3>
                <p className="text-gray-600 mb-8">
                  Intenta ajustar los filtros o el término de búsqueda para encontrar lo que buscas.
                </p>
                <Button
                  onClick={() => {
                    handleFilterChange("todos")
                    setSearchTerm("")
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold"
                >
                  Ver Todos los Productos
                </Button>
              </div>
            )}
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <div className="flex items-center space-x-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-600"
                      }`}
                  >
                    Anterior
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)

                    if (!showPage) {
                      // Show ellipsis
                      if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <span key={page} className="px-2 text-gray-400">
                            ...
                          </span>
                        )
                      }
                      return null
                    }

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === page
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-600"
                          }`}
                      >
                        {page}
                      </button>
                    )
                  })}

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-400 hover:text-yellow-600"
                      }`}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}