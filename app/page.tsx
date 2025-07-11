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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">DATA SAPE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
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
        {/* Hero Section - Carousel */}
        <section className="relative overflow-hidden bg-hero-gradient-light dark:bg-hero-gradient-dark pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {/* Slide 1 - Análisis Inteligente */}
              <CarouselItem>
                <div className="container relative">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                          Análisis Inteligente para tu <span className="text-primary">Negocio</span>
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Visualizá tus ingresos, egresos y resultados en tiempo real con dashboards modernos y
                          personalizados.
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
              </CarouselItem>

              {/* Slide 2 - Control Total */}
              <CarouselItem>
                <div className="container relative">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                          Control Total de tus <span className="text-green-500">Finanzas</span>
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Monitoreá cada peso que entra y sale de tu negocio. Tomá decisiones informadas con datos
                          precisos.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <button className="btn-gradient-custom btn-pulse flex items-center justify-center gap-2 text-lg">
                          Solicitar Demo
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="btn-secondary-custom flex items-center justify-center gap-2">
                          <Link href="#contacto" className="flex items-center gap-2">
                            Contactanos
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl">
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-green-500/20 to-blue-500/20">
                          <div className="text-center p-8">
                            <DollarSign className="h-24 w-24 mx-auto mb-4 text-green-500" />
                            <h3 className="text-2xl font-bold text-foreground mb-2">Control Financiero</h3>
                            <p className="text-muted-foreground">Gestión completa de ingresos y egresos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3 - Reportes Automáticos */}
              <CarouselItem>
                <div className="container relative">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                          Reportes <span className="text-purple-500">Automáticos</span> y Precisos
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Recibí informes detallados sin esfuerzo. Nuestro sistema genera reportes automáticos para que
                          te enfoques en hacer crecer tu negocio.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <button className="btn-gradient-custom btn-pulse flex items-center justify-center gap-2 text-lg">
                          Ver Reportes
                          <TrendingUp className="h-5 w-5" />
                        </button>
                        <button className="btn-secondary-custom flex items-center justify-center gap-2">
                          <Link href="#equipo" className="flex items-center gap-2">
                            Nuestro Equipo
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl">
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                          <div className="text-center p-8">
                            <LineChart className="h-24 w-24 mx-auto mb-4 text-purple-500" />
                            <h3 className="text-2xl font-bold text-foreground mb-2">Reportes Inteligentes</h3>
                            <p className="text-muted-foreground">Análisis automático de tendencias</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 4 - Para Negocios Uruguayos */}
              <CarouselItem>
                <div className="container relative">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                          Diseñado para <span className="text-blue-500">Negocios Uruguayos</span>
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Entendemos la realidad local. Nuestras soluciones están pensadas específicamente para
                          emprendedores y pymes uruguayas.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <button className="btn-gradient-custom btn-pulse flex items-center justify-center gap-2 text-lg">
                          Conocé más
                          <MapPin className="h-5 w-5" />
                        </button>
                        <button className="btn-secondary-custom flex items-center justify-center gap-2">
                          <Link href="#nosotros" className="flex items-center gap-2">
                            ¿Por qué nosotros?
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl">
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                          <div className="text-center p-8">
                            <PieChart className="h-24 w-24 mx-auto mb-4 text-blue-500" />
                            <h3 className="text-2xl font-bold text-foreground mb-2">Solución Local</h3>
                            <p className="text-muted-foreground">Adaptado a la realidad uruguaya</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* Navigation dots - positioned at the bottom of the hero section */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg"></div>
          </div>
        </section>

        {/* Nosotros Section */}
        <section id="nosotros" className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Por qué DATA SAPE?</h2>
              <p className="mt-4 max-w-[800px] text-muted-foreground md:text-xl">
                Entendemos las necesidades de los negocios uruguayos
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Simplificamos tu gestión financiera</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    En muchos negocios uruguayos, los números se manejan con planillas o a mano, lo que complica tener
                    una visión clara del rendimiento.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nuestro servicio te ofrece paneles visuales y fáciles de usar para que puedas ver tus ingresos,
                    gastos, ganancias y evolución financiera en un solo lugar, en tiempo real.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ideal para emprendedores, pymes y comercios que quieren profesionalizar su gestión sin enredarse con
                    sistemas complejos.
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
                Soluciones adaptadas a la realidad de tu negocio
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Dashboards Financieros</h3>
                <p className="mt-2 text-muted-foreground">
                  Visualizá tus ingresos, gastos y ganancias en paneles fáciles de entender.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Análisis de Rendimiento</h3>
                <p className="mt-2 text-muted-foreground">
                  Identificá qué productos o servicios te generan más rentabilidad.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-500">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Reportes Automáticos</h3>
                <p className="mt-2 text-muted-foreground">
                  Recibí reportes semanales y mensuales sin tener que hacer nada.
                </p>
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

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Gino Berrutti */}
              <div className="group relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="aspect-square w-full overflow-hidden rounded-full">
                  {" "}
                  {/* Added rounded-full here */}
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1750355031950-jaksgFz8U2wCNUas24C1oTPvc4w0gF.jpeg"
                    alt="Gino Berrutti"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gino Berrutti</h3>
                  <p className="text-primary font-medium mb-3">Data Analytics, Dashboards</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Especialista en análisis de datos y creación de dashboards interactivos para la toma de decisiones
                    empresariales.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/gino-berrutti-a2098131b/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>

              {/* Paula Martinez */}
              <div className="group relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="aspect-square w-full overflow-hidden rounded-full">
                  {" "}
                  {/* Added rounded-full here */}
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1740942310344-TVju6zbzpEg6f9BXg2fE3wmj1mwt8a.jpeg"
                    alt="Paula Martinez"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Paula Martinez</h3>
                  <p className="text-primary font-medium mb-3">Data Analyst, Machine Learning</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Experta en análisis de datos y machine learning, enfocada en generar insights predictivos para
                    negocios.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/paula-martinez-b1176b7a/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Link>
                </div>
              </div>

              {/* Zelmar Mohozzo */}
              <div className="group relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="aspect-square w-full overflow-hidden rounded-full">
                  {" "}
                  {/* Added rounded-full here */}
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1751334784723-Nhrvl0XohEdFzwE7xmIgb6BslIS2h7.jpeg"
                    alt="Zelmar Mohozzo"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Zelmar Mohozzo</h3>
                  <p className="text-primary font-medium mb-3">Development, Backend y Frontend</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Desarrollador full-stack especializado en crear aplicaciones web robustas y experiencias de usuario
                    excepcionales.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/zelmar-mohozzo/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
            <span className="text-lg font-bold">DATA SAPE</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 DATA SAPE. Todos los derechos reservados.
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
