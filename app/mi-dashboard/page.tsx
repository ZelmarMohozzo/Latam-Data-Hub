"use client"

import { useState } from "react"
import { BarChart3, Menu, ExternalLink, Download, Share2 } from "lucide-react"
import Link from "next/link"

import { MobileMenu } from "@/components/mobile-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MiDashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 🔥 AQUÍ PONES TU URL DE POWER BI
  const miPowerBIUrl = "PEGA_AQUI_TU_URL_DE_POWER_BI"

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold tracking-tight">APPSU</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="/#contacto" className="font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Link href="/dashboards" className="font-medium transition-colors hover:text-primary">
              Dashboards
            </Link>
            <Link href="/mi-dashboard" className="font-medium text-primary">
              Mi Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black pb-8 pt-24 md:pb-12 md:pt-32">
          <div className="container relative">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Mi Dashboard <span className="text-primary">Personalizado</span>
              </h1>
              <p className="mt-4 max-w-[800px] mx-auto text-white/80 md:text-xl">
                Dashboard interactivo creado con Power BI - Explora los datos en tiempo real
              </p>
            </div>

            {/* Controles del Dashboard */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open(miPowerBIUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Abrir en Power BI
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="h-4 w-4 mr-2" />
                Exportar PDF
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-8 bg-background">
          <div className="container">
            <div className="bg-background/60 backdrop-blur-sm rounded-xl border p-6 shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Mi Dashboard de Power BI</h2>
                <p className="text-muted-foreground">
                  Descripción personalizada de tu dashboard y qué insights proporciona.
                </p>
              </div>

              {/* 🔥 AQUÍ SE MUESTRA TU DASHBOARD */}
              <div className="relative overflow-hidden rounded-lg border shadow-lg">
                <iframe
                  src={miPowerBIUrl}
                  title="Mi Dashboard de Power BI"
                  width="100%"
                  height="800px"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full"
                />
              </div>

              {/* Información adicional */}
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="bg-background/40 rounded-lg p-4 border">
                  <h3 className="font-semibold mb-2">📊 Datos Actualizados</h3>
                  <p className="text-sm text-muted-foreground">
                    Los datos se actualizan según la configuración de tu dataset en Power BI.
                  </p>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border">
                  <h3 className="font-semibold mb-2">🔍 Interactividad Completa</h3>
                  <p className="text-sm text-muted-foreground">
                    Utiliza todos los filtros y funciones interactivas de tu dashboard original.
                  </p>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border">
                  <h3 className="font-semibold mb-2">📱 Responsive</h3>
                  <p className="text-sm text-muted-foreground">
                    El dashboard se adapta automáticamente a diferentes tamaños de pantalla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">APPSU</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 APPSU. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
