"use client"

import { useState } from "react"
import { BarChart3, Menu } from "lucide-react"
import Link from "next/link"

import { MobileMenu } from "@/components/mobile-menu"
import { DashboardShowcase } from "@/components/dashboard-showcase"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <Link href="/#pyme" className="font-medium transition-colors hover:text-primary">
              PYME
            </Link>
            <Link href="/dashboards" className="font-medium text-primary">
              Dashboards
            </Link>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section with Purple-Blue Gradient */}
        <section className="relative overflow-hidden bg-gradient-diagonal-light dark:bg-gradient-diagonal-dark pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="absolute inset-0 bg-mesh-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                Nuestros <span className="text-foreground">Dashboards</span>
              </h1>
              <p className="mt-4 max-w-[800px] mx-auto text-white/80 md:text-xl">
                Explore nuestra colección de dashboards interactivos diseñados para transformar datos complejos en
                insights accionables para el sector salud y análisis médico
              </p>
            </div>

            {/* Categorías de análisis */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-4 text-center border border-red-500/30">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-red-200 text-sm">Análisis de Burnout</div>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-md rounded-lg p-4 text-center border border-blue-500/30">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-blue-200 text-sm">Patrones de Sueño</div>
              </div>
              <div className="bg-orange-500/20 backdrop-blur-md rounded-lg p-4 text-center border border-orange-500/30">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-orange-200 text-sm">Análisis de Depresión</div>
              </div>
              <div className="bg-green-500/20 backdrop-blur-md rounded-lg p-4 text-center border border-green-500/30">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-green-200 text-sm">Hábitos y Comparativos</div>
              </div>
            </div>

            {/* Dashboard Showcase Component */}
            <DashboardShowcase />
          </div>
        </section>

        {/* Descripción de la tecnología */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-blue-radial opacity-10"></div>
          <div className="container relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Análisis Especializado en Salud Mental</h2>
                <p className="mt-4 text-muted-foreground">
                  Nuestros dashboards están especializados en el análisis de datos del sector salud, con un enfoque
                  particular en el bienestar del personal médico, síndrome de burnout y factores de riesgo psicosocial.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l11 11Z" />
                      </svg>
                    </div>
                    <span>Análisis integral del síndrome de burnout en personal médico por especialidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    </div>
                    <span>Monitoreo de patrones de sueño y factores de riesgo psicosocial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span>Análisis demográfico y de hábitos del personal sanitario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M9 12l2 2 4-4" />
                        <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 1 0-8.953 8.953c.549-.055.998-.398.998-.95" />
                      </svg>
                    </div>
                    <span>Métricas de balance vida-trabajo y recomendaciones de intervención</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-xl blur-xl opacity-70"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2022.58.36_a45ad130.jpg-c2la7J271JPqweCwU6bPQjIXV2o11O.jpeg"
                    alt="Dashboard de análisis de burnout"
                    width={1200}
                    height={675}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de insights clave */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Insights Clave del Análisis</h2>
              <p className="mt-4 max-w-[600px] mx-auto text-muted-foreground">
                Principales hallazgos del análisis de burnout en personal médico
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border">
                <div className="text-3xl font-bold text-red-500 mb-2">49.52%</div>
                <div className="text-lg font-semibold mb-2">Nivel Medio de Burnout</div>
                <p className="text-muted-foreground text-sm">
                  Casi la mitad del personal médico presenta niveles medios de síndrome de burnout
                </p>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border">
                <div className="text-3xl font-bold text-orange-500 mb-2">Oncología</div>
                <div className="text-lg font-semibold mb-2">Especialidad Más Afectada</div>
                <p className="text-muted-foreground text-sm">
                  Medicina preventiva y salud pública presenta los mayores niveles de burnout
                </p>
              </div>
              <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6 border">
                <div className="text-3xl font-bold text-blue-500 mb-2">7h</div>
                <div className="text-lg font-semibold mb-2">Promedio de Sueño</div>
                <p className="text-muted-foreground text-sm">
                  Promedio de horas de sueño del personal médico analizado
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
