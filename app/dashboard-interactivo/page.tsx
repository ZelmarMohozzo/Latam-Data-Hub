"use client"

import { useState } from "react"
import { BarChart3, Menu, ExternalLink, Download, Share2 } from "lucide-react"
import Link from "next/link"

import { MobileMenu } from "@/components/mobile-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { PowerBIIframe } from "@/components/power-bi-iframe"

export default function DashboardInteractivoPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // URL de ejemplo - reemplaza con tu URL real de Power BI
  const powerBIUrl =
    "https://app.powerbi.com/view?r=eyJrIjoiYjMzZjY4YTEtZmY0Zi00ZGE4LWE4YzMtMzBkNzA5YzA5YzA5IiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9"

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
            <Link href="/dashboard-interactivo" className="font-medium text-primary">
              Dashboard Interactivo
            </Link>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-diagonal-light dark:bg-gradient-diagonal-dark pb-8 pt-24 md:pb-12 md:pt-32">
          <div className="absolute inset-0 bg-mesh-overlay opacity-20"></div>
          <div className="container relative">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                Dashboard <span className="text-foreground">Interactivo</span>
              </h1>
              <p className="mt-4 max-w-[800px] mx-auto text-white/80 md:text-xl">
                Explora nuestro dashboard de Power BI en tiempo real con datos interactivos y visualizaciones dinámicas
              </p>
            </div>

            {/* Controles del Dashboard */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
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
                <h2 className="text-2xl font-bold mb-2">Análisis de Burnout en Personal Médico</h2>
                <p className="text-muted-foreground">
                  Dashboard interactivo que muestra métricas en tiempo real del síndrome de burnout, fatiga mental y
                  balance vida-trabajo por especialidad médica.
                </p>
              </div>

              {/* Power BI Embed */}
              <PowerBIIframe
                src={powerBIUrl}
                title="Dashboard de Análisis de Burnout"
                height="800px"
                className="shadow-lg"
              />

              {/* Información adicional */}
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="bg-background/40 rounded-lg p-4 border">
                  <h3 className="font-semibold mb-2">📊 Datos en Tiempo Real</h3>
                  <p className="text-sm text-muted-foreground">
                    Los datos se actualizan automáticamente cada hora para proporcionar insights actuales.
                  </p>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border">
                  <h3 className="font-semibold mb-2">🔍 Filtros Interactivos</h3>
                  <p className="text-sm text-muted-foreground">
                    Utiliza los filtros del dashboard para explorar datos por especialidad, fecha y región.
                  </p>
                </div>
                <div className="bg-background/40 rounded-lg p-4 border">
                  <h3 className="font-semibold mb-2">📈 Visualizaciones Dinámicas</h3>
                  <p className="text-sm text-muted-foreground">
                    Haz clic en los gráficos para obtener detalles específicos y análisis profundos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instrucciones de Uso */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Cómo Usar el Dashboard</h2>
              <p className="mt-4 max-w-[600px] mx-auto text-muted-foreground">
                Guía rápida para aprovechar al máximo las funcionalidades interactivas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Explora los Filtros</h3>
                <p className="text-sm text-muted-foreground">
                  Utiliza los filtros laterales para segmentar los datos por especialidad médica o período de tiempo.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Interactúa con Gráficos</h3>
                <p className="text-sm text-muted-foreground">
                  Haz clic en barras, sectores o puntos para obtener información detallada y filtrar otros visuales.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Analiza Tendencias</h3>
                <p className="text-sm text-muted-foreground">
                  Observa las tendencias temporales y compara métricas entre diferentes especialidades médicas.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Exporta Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Utiliza las opciones de exportación para generar reportes PDF o compartir visualizaciones específicas.
                </p>
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
