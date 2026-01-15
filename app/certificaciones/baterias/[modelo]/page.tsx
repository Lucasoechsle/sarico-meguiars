"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Award, 
  CheckCircle2, 
  ArrowLeft, 
  Zap, 
  Ruler, 
  FileText,
  Building2,
  Globe,
  Download
} from "lucide-react";

interface Battery {
  id: string;
  marca: string;
  modelo: string;
  descripcion: string;
  voltaje: string;
  capacidad_Ah: string;
  CCA_A: string;
  RC_min: string;
  largo_mm: string;
  ancho_mm: string;
  alto_mm: string;
  origen: string;
  norma: string;
  licencia_inti: string;
  fecha_emision: string;
  fecha_vencimiento: string;
  titular: string;
  cuit_titular: string;
  domicilio_titular: string;
  extiende: string;
  cuit_extiende: string;
  certificado_pdf_url: string;
  url_ficha_publica: string;
}

// Función para parsear CSV
function parseCSV(text: string): Battery[] {
  const lines = text.split("\n");
  const headers = lines[0].split(",");
  
  return lines.slice(1).filter(line => line.trim()).map(line => {
    const values = line.split(",");
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index]?.trim() || "";
    });
    return obj as Battery;
  });
}

export default function BatteryDetailPage() {
  const params = useParams();
  const modelo = params.modelo as string;
  
  const [battery, setBattery] = useState<Battery | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/csv/BATERIAS QR - Sarico CSV.csv")
      .then(res => res.text())
      .then(text => {
        const data = parseCSV(text);
        const found = data.find(b => b.modelo.toLowerCase() === modelo.toLowerCase());
        if (found) {
          setBattery(found);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading CSV:", err);
        setNotFound(true);
        setLoading(false);
      });
  }, [modelo]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (notFound || !battery) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Batería no encontrada</h1>
          <p className="text-gray-400 mb-6">El modelo "{modelo}" no existe en nuestro registro.</p>
          <Link
            href="/certificaciones/baterias"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todas las baterías
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/sarico-logo.svg"
              alt="Sarico"
              width={160}
              height={45}
              className="h-8 md:h-10 w-auto invert brightness-0"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">Inicio</Link>
            <Link href="/energia" className="text-white/80 hover:text-yellow-400 transition-colors font-medium">Energía</Link>
            <Link href="/certificaciones/baterias" className="text-yellow-400 font-medium">Certificaciones</Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Link 
            href="/certificaciones/baterias"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a certificaciones
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Award className="w-10 h-10 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certificación INTI
            </h1>
          </div>
          <p className="text-gray-400 text-sm mb-4">Res. 222/2025 - Secretaría de Industria y Comercio</p>
          
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-white font-medium">Certificado bajo norma {battery.norma}</span>
          </div>
        </div>
      </section>

      {/* Card Principal */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header de la batería */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-t-2xl p-6 md:p-8 text-black">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-black">{battery.marca}</h2>
                <p className="text-xl mt-1 font-bold">Modelo: {battery.modelo}</p>
                <p className="text-black/70 mt-2">{battery.descripcion}</p>
              </div>
              <div className="bg-black/20 px-4 py-2 rounded-lg text-center">
                <p className="text-xs text-black/60">ID:</p>
                <p className="font-black text-lg">{battery.id}</p>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-b-2xl border border-gray-700 border-t-0 p-6 md:p-8 space-y-8">
            
            {/* Especificaciones Técnicas */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <Zap className="w-5 h-5 text-yellow-400" />
                Especificaciones Técnicas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">Voltaje</p>
                  <p className="text-2xl font-bold text-white">{battery.voltaje}V</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">Capacidad</p>
                  <p className="text-2xl font-bold text-white">{battery.capacidad_Ah} Ah</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">CCA (Corriente de Arranque)</p>
                  <p className="text-2xl font-bold text-white">{battery.CCA_A} A</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">RC (Capacidad de Reserva)</p>
                  <p className="text-2xl font-bold text-white">{battery.RC_min} min</p>
                </div>
              </div>
            </div>

            {/* Dimensiones Físicas */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <Ruler className="w-5 h-5 text-yellow-400" />
                Dimensiones Físicas
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">Largo</p>
                  <p className="text-2xl font-bold text-white">{battery.largo_mm} mm</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">Ancho</p>
                  <p className="text-2xl font-bold text-white">{battery.ancho_mm} mm</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 text-center border border-gray-700">
                  <p className="text-sm text-gray-400">Alto</p>
                  <p className="text-2xl font-bold text-white">{battery.alto_mm} mm</p>
                </div>
              </div>
            </div>

            {/* Información de Certificación INTI */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <FileText className="w-5 h-5 text-yellow-400" />
                Información de Certificación INTI
              </h3>
              <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50 w-1/3">Licencia INTI</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.licencia_inti}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">Norma</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.norma}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">Fecha de Emisión</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.fecha_emision}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">Fecha de Vencimiento</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.fecha_vencimiento}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">Origen</td>
                      <td className="px-4 py-3 text-sm font-medium text-white flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        {battery.origen}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Información del Titular */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                <Building2 className="w-5 h-5 text-yellow-400" />
                Información del Titular
              </h3>
              <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50 w-1/3">Titular</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.titular}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">CUIT</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.cuit_titular}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">Domicilio</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.domicilio_titular}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">Extiende</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.extiende}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-400 bg-gray-800/50">CUIT (Extiende)</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{battery.cuit_extiende}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Botón de descarga */}
            <div className="pt-4 border-t border-gray-700">
              <a
                href="/certificado/IF-2025-125615339-APN-DO%25INTI.pdf"
                download
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors"
              >
                <Download className="w-5 h-5" />
                Descargar Certificado PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5493514891900"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full cursor-pointer hover:bg-green-600 transition-colors shadow-lg"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} SARICO DISTRI S.A.</p>
          <p className="text-sm mt-1">Eliseo Cantón 1860, Villa Páez, Córdoba</p>
          <p className="text-sm">CUIT: 30-70936877-6</p>
        </div>
      </footer>
    </div>
  );
}
