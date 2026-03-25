"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, CheckCircle2, ArrowRight, Calendar, FileText } from "lucide-react";

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

export default function BatteryCertificationsPage() {
  const [batteries, setBatteries] = useState<Battery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/csv/BATERIAS QR - Sarico CSV.csv")
      .then(res => res.text())
      .then(text => {
        const data = parseCSV(text);
        setBatteries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading CSV:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
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

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certificaciones INTI
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Baterías certificadas bajo la norma IRAM-AITA 13-A1:2014
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-white font-medium">{batteries.length} baterías certificadas</span>
          </div>
        </div>
      </section>

      {/* Grid de Baterías */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {batteries.map((battery) => (
              <div
                key={battery.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10"
              >
                {/* Header de la card */}
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 text-black">
                  <div className="flex items-center justify-between">
                    <span className="bg-black/20 px-3 py-1 rounded-full text-sm font-bold">
                      {battery.marca}
                    </span>
                    <CheckCircle2 className="w-6 h-6 text-black/60" />
                  </div>
                  <h3 className="text-xl font-black mt-3">{battery.modelo}</h3>
                  <p className="text-black/70 text-sm mt-1">{battery.descripcion}</p>
                </div>

                {/* Especificaciones */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Voltaje</p>
                      <p className="font-semibold text-white">{battery.voltaje}V</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Capacidad</p>
                      <p className="font-semibold text-white">{battery.capacidad_Ah} Ah</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">CCA</p>
                      <p className="font-semibold text-white">{battery.CCA_A} A</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">RC</p>
                      <p className="font-semibold text-white">{battery.RC_min} min</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <FileText className="w-4 h-4" />
                      <span>{battery.licencia_inti}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Válido hasta {battery.fecha_vencimiento}</span>
                    </div>
                  </div>

                  <Link
                    href={`/certificaciones/baterias/${battery.modelo}`}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all"
                  >
                    Ver Certificación
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
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