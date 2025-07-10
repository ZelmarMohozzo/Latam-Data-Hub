"use client"

import { useState } from "react"
import NextImage from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  BarChart3,
  PieChart,
  LineChart,
  Mail,
  Phone,
  MapPin,
  Menu,
  TrendingUp,
  DollarSign,
  Eye,
  ChevronDown,
  ShoppingCart,
  Building2,
  Truck,
  Monitor,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">WIDE SCOPE ANALYTICS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium transition-colors hover:text-primary">
                Nuestros Servicios
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-green-500" />
                  <span>Optimización Comercial</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-500" />
                  <span>Retail Estratégico</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-orange-500" />
                  <span>Pack Distribuidoras</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-purple-500" />
                  <span>Panel de Control</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#nosotros" className="font-medium transition-colors hover:text-primary">
              Nosotros
            </Link>
            <Link href="#equipo" className="font-medium transition-colors hover:text-primary">
              Nuestro Equipo
            </Link>
            <Link href="#contacto" className="font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Link href="/analysis" className="font-medium transition-colors hover:text-primary">
              Dashboards
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="hidden md:flex btn-primary-custom">Solicitar Demo</button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-hero-gradient-light dark:bg-hero-gradient-dark pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                    Análisis Inteligente para tu <span className="text-primary">Negocio</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transformamos datos en decisiones estratégicas con análisis avanzado y visualizaciones inteligentes para impulsar tu crecimiento empresarial.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <button className="btn-gradient-custom btn-pulse flex items-center justify-center gap-2 text-lg">
                    Comenzar ahora
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button className="btn-secondary-custom flex items-center justify-center gap-2">
                    <Link href="/analysis" className="flex items-center gap-2">
                      Ver ejemplos
                    </Link>
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full blur-3xl"></div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500/20 to-green-500/20">
                    <div className="text-center p-8">
                      <BarChart3 className="h-24 w-24 mx-auto mb-4 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground mb-2">Dashboard en Tiempo Real</h3>
                      <p className="text-muted-foreground">Visualización de datos financieros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nosotros Section */}
        <section id="nosotros" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Por qué WIDE SCOPE ANALYTICS?</h2>
              <p className="mt-4 max-w-[800px] text-muted-foreground md:text-xl">
                Soluciones de análisis de datos diseñadas para impulsar el crecimiento de tu negocio
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Transformamos datos en decisiones estratégicas</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nuestras soluciones de análisis avanzado te permiten identificar patrones, tendencias y oportunidades
                    ocultas en tus datos empresariales.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Con dashboards interactivos y reportes automatizados, obtienes insights accionables que impulsan
                    la eficiencia operativa y el crecimiento sostenible.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Desde optimización comercial hasta análisis predictivo, nuestras herramientas se adaptan a las
                    necesidades específicas de tu industria.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-500" />
                    <div className="text-2xl font-bold">Ingresos</div>
                    <div className="text-sm text-muted-foreground">En tiempo real</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <div className="text-2xl font-bold">Egresos</div>
                    <div className="text-sm text-muted-foreground">Control total</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <Eye className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <div className="text-2xl font-bold">Resultados</div>
                    <div className="text-sm text-muted-foreground">Visión clara</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl blur-xl"></div>
                <div className="relative bg-background/60 backdrop-blur-sm rounded-xl border p-8 shadow-xl">
                  <h4 className="text-xl font-bold mb-4">Beneficios para tu negocio:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-500 mt-0.5">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Decisiones basadas en datos reales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-500 mt-0.5">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Ahorro de tiempo en reportes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-500 mt-0.5">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Identificación rápida de oportunidades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-500 mt-0.5">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Control financiero profesional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Soluciones especializadas para cada tipo de negocio
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Optimización Comercial</h3>
                <p className="mt-2 text-muted-foreground">
                  Para comercios de cercanía que buscan crecer de forma ordenada y anticiparse a pérdidas.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Retail Estratégico</h3>
                <p className="mt-2 text-muted-foreground">
                  Para supermercados y cadenas que necesitan eficiencia, previsión y decisiones rentables.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Pack Distribuidoras</h3>
                <p className="mt-2 text-muted-foreground">
                  Estrategia, logística y rentabilidad en un solo sistema inteligente.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-500">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Panel de Control</h3>
                <p className="mt-2 text-muted-foreground">
                  Dashboards personalizados con métricas clave para la toma de decisiones estratégicas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Dashboards Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Dashboards de Análisis <span className="text-primary">Profundo</span>
              </h2>
              <p className="mt-4 max-w-[800px] text-muted-foreground md:text-xl">
                Visualizaciones interactivas y análisis en tiempo real para una comprensión completa de tu negocio
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-16">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Análisis Financiero Avanzado</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Dashboards interactivos que te permiten explorar tus datos financieros desde múltiples perspectivas.
                    Identifica tendencias, patrones estacionales y oportunidades de crecimiento.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                    <BarChart3 className="h-8 w-8 text-blue-500 mb-2" />
                    <h4 className="font-semibold text-blue-400">Ventas por Período</h4>
                    <p className="text-sm text-muted-foreground">Análisis temporal detallado</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20">
                    <PieChart className="h-8 w-8 text-green-500 mb-2" />
                    <h4 className="font-semibold text-green-400">Distribución de Ingresos</h4>
                    <p className="text-sm text-muted-foreground">Por categorías y productos</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                    <LineChart className="h-8 w-8 text-purple-500 mb-2" />
                    <h4 className="font-semibold text-purple-400">Tendencias Predictivas</h4>
                    <p className="text-sm text-muted-foreground">Proyecciones futuras</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20">
                    <TrendingUp className="h-8 w-8 text-orange-500 mb-2" />
                    <h4 className="font-semibold text-orange-400">KPIs Dinámicos</h4>
                    <p className="text-sm text-muted-foreground">Métricas en tiempo real</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
                <div className="relative bg-background/60 backdrop-blur-sm rounded-xl border p-6 shadow-xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <h4 className="text-xl font-bold mb-2">Dashboard Interactivo</h4>
                      <p className="text-muted-foreground mb-4">Explora datos en tiempo real</p>
                      <Link href="/analysis">
                        <button className="btn-primary-custom">
                          Ver Demo en Vivo
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Features Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/5 to-blue-600/5 hover:from-blue-500/10 hover:to-blue-600/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold">Análisis de Ventas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Visualiza el rendimiento de ventas por día, mes, categoría y producto con gráficos interactivos.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Evolución temporal de ventas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Comparativas por período</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Filtros dinámicos avanzados</span>
                  </li>
                </ul>
              </div>

              <div className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-green-500/5 to-green-600/5 hover:from-green-500/10 hover:to-green-600/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <PieChart className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold">Segmentación Inteligente</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Analiza tu base de clientes y productos con segmentaciones automáticas y personalizadas.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span>Clientes por valor y frecuencia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span>Productos más rentables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span>Análisis de comportamiento</span>
                  </li>
                </ul>
              </div>

              <div className="group p-6 rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-purple-600/5 hover:from-purple-500/10 hover:to-purple-600/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <LineChart className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold">Predicciones Avanzadas</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Utiliza machine learning para predecir tendencias futuras y optimizar tu estrategia.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>Forecasting de ventas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>Detección de anomalías</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    <span>Recomendaciones automáticas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link href="/analysis">
                  <button className="btn-gradient-custom btn-pulse flex items-center justify-center gap-2">
                    Explorar Dashboard Demo
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </Link>
                <button className="btn-secondary-custom">
                  Solicitar Demo Personalizada
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section */}
        <section id="equipo" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Equipo</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Profesionales especializados en análisis de datos y desarrollo
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Gino Berrutti */}
              <div className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-500/5 to-blue-600/5 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 hover:from-blue-500/10 hover:to-blue-600/10 duration-300">
                <div className="aspect-square w-full overflow-hidden">
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1750355031950-jaksgFz8U2wCNUas24C1oTPvc4w0gF.jpeg"
                    alt="Gino Berrutti"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Gino Berrutti</h3>
                  <p className="text-blue-500 font-medium text-sm mb-3">Data Analytics, Dashboards</p>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                    Especialista en análisis de datos y creación de dashboards interactivos.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/gino-berrutti-a2098131b/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>

              {/* Paula Martinez */}
              <div className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-green-500/5 to-green-600/5 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 hover:from-green-500/10 hover:to-green-600/10 duration-300">
                <div className="aspect-square w-full overflow-hidden">
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740942310344-TVju6zbzpEg6f9BXg2fE3wmj1mwt8a.jpeg"
                    alt="Paula Martinez"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Paula Martinez</h3>
                  <p className="text-green-500 font-medium text-sm mb-3">Data Analyst, Machine Learning</p>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                    Experta en análisis de datos y machine learning para insights predictivos.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/paula-martinez-b1176b7a/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>

              {/* Zelmar Mohozzo */}
              <div className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-purple-500/5 to-purple-600/5 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 hover:from-purple-500/10 hover:to-purple-600/10 duration-300">
                <div className="aspect-square w-full overflow-hidden">
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1751334784723-Nhrvl0XohEdFzwE7xmIgb6BslIS2h7.jpeg"
                    alt="Zelmar Mohozzo"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Zelmar Mohozzo</h3>
                  <p className="text-purple-500 font-medium text-sm mb-3">Development, Backend y Frontend</p>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                    Desarrollador full-stack especializado en aplicaciones web robustas.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/zelmar-mohozzo/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                ¿Listo para profesionalizar la gestión de tu negocio?
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground">contacto@datasape.uy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground">+598 99 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Ubicación</h3>
                    <p className="text-muted-foreground">Montevideo, Uruguay</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Nombre
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business" className="text-sm font-medium leading-none">
                      Tipo de Negocio
                    </label>
                    <input
                      id="business"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Ej: Restaurante, Tienda, Consultorio"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Contanos sobre tu negocio y qué te gustaría mejorar"
                    />
                  </div>
                  <button type="submit" className="btn-primary-custom w-full">
                    Solicitar Demo Gratuita
                  </button>
                </form>
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
            <span className="text-lg font-bold">WIDE SCOPE ANALYTICS</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 WIDE SCOPE ANALYTICS. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
