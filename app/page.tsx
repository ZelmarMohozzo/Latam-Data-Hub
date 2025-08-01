"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactForm } from "@/components/contact-form"
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Menu,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Database,
  Brain,
  Code,
  Zap,
  FileSpreadsheet,
  Monitor,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header Sticky */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "header-sticky shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-green-500">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-slate-800">WIDE SCOPE ANALYTICS</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-slate-700 hover:text-brand-blue-600 font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-slate-700 hover:text-brand-blue-600 font-medium transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="text-slate-700 hover:text-brand-blue-600 font-medium transition-colors"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-slate-700 hover:text-brand-blue-600 font-medium transition-colors"
              >
                Contacto
              </button>
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </header>

      {/* Hero Carousel Section */}
      <section id="inicio" className="pt-24 pb-16 section-animate">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1: Optimización Comercial */}
                <div className="w-full flex-shrink-0">
                  <div
                    className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 relative overflow-hidden rounded-3xl"
                    style={{
                      backgroundImage: `url("/Diseno-sin-titulo-64.jpg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
                    <div className="relative z-10 space-y-8 text-white">
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-brand-blue-500 to-brand-green-500 text-white px-4 py-2">
                          🏪 Optimización Comercial
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
                          Impulsá tu{" "}
                          <span className="bg-gradient-to-r from-brand-blue-300 to-brand-green-300 bg-clip-text text-transparent">
                            almacén
                          </span>{" "}
                          con decisiones basadas en datos
                        </h1>
                        <p className="text-xl leading-relaxed">
                          Diseñado para comercios de cercanía que quieren crecer de forma ordenada, anticiparse a
                          pérdidas y aprovechar oportunidades.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => scrollToSection("servicios")} className="btn-primary-modern group">
                          Explorar Servicios
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button onClick={() => scrollToSection("contacto")} className="btn-outline-modern-light">
                          Contactar Ahora
                        </button>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                        {/* The image itself is now the background, so this div can be empty or contain other elements */}
                        <div className="w-full h-80 object-cover"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2: Qué Ofrecemos */}
                <div className="w-full flex-shrink-0">
                  <div
                    className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16"
                    style={{
                      backgroundImage: 'url("/toma-de-decisiones.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-brand-green-500 to-brand-blue-500 text-white px-4 py-2">
                          📊 QUE OFRECEMOS
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-slate-800 leading-tight">
                          Gestión{" "}
                          <span className="bg-gradient-to-r from-brand-green-600 to-brand-blue-600 bg-clip-text text-transparent">
                            inteligente
                          </span>{" "}
                          de tu negocio
                        </h1>
                        <div className="space-y-4 text-lg text-slate-600">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-brand-green-600 mt-1 flex-shrink-0" />
                            <span>Gestión eficiente de inventario y rotación de productos</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-brand-green-600 mt-1 flex-shrink-0" />
                            <span>Identificación de artículos con bajo movimiento y recomendaciones de mejora</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-brand-green-600 mt-1 flex-shrink-0" />
                            <span>Promociones estacionales sugeridas según patrones de compra</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-6 w-6 text-brand-green-600 mt-1 flex-shrink-0" />
                            <span>Panel visual con reportes claros de ventas y márgenes</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => scrollToSection("servicios")} className="btn-primary-modern group">
                          Ver Detalles
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="bg-transparent p-8 h-80 flex items-center justify-center">
                          <TrendingUp className="h-32 w-32 text-brand-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3: Pack Distribuidoras */}
                <div className="w-full flex-shrink-0">
                  <div
                    className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16 relative overflow-hidden rounded-3xl"
                    style={{
                      backgroundImage: `url(${"/logistica-optimizada.png"})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
                    <div className="relative z-10 space-y-8 text-white">
                      <div className="space-y-4">
                        <Badge className="bg-gradient-to-r from-purple-500 to-brand-blue-500 text-white px-4 py-2">
                          🚚 Pack Distribuidoras Eficientes
                        </Badge>
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
                          Estrategia, logística y{" "}
                          <span className="bg-gradient-to-r from-purple-300 to-brand-blue-300 bg-clip-text text-transparent">
                            rentabilidad
                          </span>{" "}
                          en un solo sistema inteligente
                        </h1>
                        <p className="text-xl leading-relaxed mb-6">
                          Diseñado para distribuidoras que quieren operar con precisión y visión comercial a largo
                          plazo.
                        </p>
                        <div className="space-y-3 text-lg">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                            <span>Rutas logísticas optimizadas según comportamiento histórico</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                            <span>Inventarios actualizados por cliente, región o canal</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                            <span>Análisis de reposición, rotación y puntos críticos de pérdida</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                            <span>Segmentación inteligente para campañas y condiciones personalizadas</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mt-6 text-slate-800">
                          <p className="leading-relaxed">
                            💡 <strong>Gracias al análisis predictivo</strong>, te ayudamos a anticipar la demanda,
                            detectar fugas en la operación y convertirlas en oportunidades de ganancia.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => scrollToSection("contacto")} className="btn-primary-modern group">
                          Solicitar Demo
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="w-full h-80 object-cover"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-brand-blue-600" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Carousel Arrows */}
            <button
              onClick={() => setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-slate-700 rotate-180" />
            </button>
            <button
              onClick={() => setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-slate-700" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-center space-x-8 pt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">50+</div>
              <div className="text-sm text-slate-600">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">98%</div>
              <div className="text-sm text-slate-600">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-800">24/7</div>
              <div className="text-sm text-slate-600">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">Tecnologías que Dominamos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Utilizamos las herramientas más avanzadas del mercado para crear soluciones robustas y escalables
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            <div className="tech-logo group">
              <Database className="h-8 w-8 text-brand-blue-600 group-hover:text-brand-blue-700" />
            </div>
            <div className="tech-logo group">
              <Brain className="h-8 w-8 text-brand-green-600 group-hover:text-brand-green-700" />
            </div>
            <div className="tech-logo group">
              <Code className="h-8 w-8 text-yellow-600 group-hover:text-yellow-700" />
            </div>
            <div className="tech-logo group">
              <Zap className="h-8 w-8 text-brand-blue-600 group-hover:text-brand-blue-700" />
            </div>
            <div className="tech-logo group">
              <FileSpreadsheet className="h-8 w-8 text-brand-green-600 group-hover:text-brand-green-700" />
            </div>
            <div className="tech-logo group">
              <Monitor className="h-8 w-8 text-purple-600 group-hover:text-purple-700" />
            </div>
            <div className="tech-logo group">
              <BarChart3 className="h-8 w-8 text-brand-blue-600 group-hover:text-brand-blue-700" />
            </div>
            <div className="tech-logo group">
              <TrendingUp className="h-8 w-8 text-brand-green-600 group-hover:text-brand-green-700" />
            </div>
            <div className="tech-logo group">
              <DollarSign className="h-8 w-8 text-yellow-600 group-hover:text-yellow-700" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 mt-8 text-center">
            <div className="text-sm font-medium text-slate-700">Power BI</div>
            <div className="text-sm font-medium text-slate-700">Machine Learning</div>
            <div className="text-sm font-medium text-slate-700">Python</div>
            <div className="text-sm font-medium text-slate-700">Node.js</div>
            <div className="text-sm font-medium text-slate-700">Excel</div>
            <div className="text-sm font-medium text-slate-700">Visual Studio</div>
            <div className="text-sm font-medium text-slate-700">JavaScript</div>
            <div className="text-sm font-medium text-slate-700">Next.js</div>
            <div className="text-sm font-medium text-slate-700">IA</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 section-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-slate-800 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas de análisis de datos adaptadas a las necesidades específicas de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="section-card group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-500 to-brand-green-600">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">Dashboards Interactivos</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  Visualizaciones en tiempo real que transforman datos complejos en insights accionables para tu equipo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">Análisis Predictivo</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  Utilizamos machine learning para predecir tendencias y ayudarte a tomar decisiones estratégicas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-500 to-brand-green-600">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">Consultoría Estratégica</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  Acompañamiento personalizado para implementar una cultura data-driven en tu organización.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">Análisis Financiero</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  Control total de ingresos, egresos y rentabilidad con reportes automatizados y alertas inteligentes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-500 to-brand-green-600">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">Integración de Datos</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  Conectamos todas tus fuentes de datos en una plataforma unificada para una visión 360° de tu negocio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">Inteligencia Artificial</CardTitle>
                </div>
                <CardDescription className="text-slate-600">
                  Implementamos soluciones de IA para automatizar procesos y generar insights avanzados de tus datos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Ver más <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios-detalle">
              <Button className="btn-secondary-modern">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-white/50 backdrop-blur-sm section-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-slate-800 mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Profesionales especializados en análisis de datos, con experiencia en diversos sectores y tecnologías de
              vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="section-card text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-brand-blue-100">
                  <AvatarImage src="/placeholder-user.jpg" alt="Ana García" />
                  <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 text-white">
                    AG
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-heading">Ana García</CardTitle>
                <CardDescription className="text-brand-blue-600 font-medium">Data Scientist Senior</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Especialista en machine learning con 8+ años de experiencia en análisis predictivo y visualización de
                  datos.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium transition-colors mt-4"
                >
                  Contactar <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-brand-green-100">
                  <AvatarImage src="/placeholder-user.jpg" alt="Carlos Rodríguez" />
                  <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-brand-green-500 to-brand-green-600 text-white">
                    CR
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-heading">Carlos Rodríguez</CardTitle>
                <CardDescription className="text-brand-green-600 font-medium">
                  Business Intelligence Lead
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Experto en Power BI y Tableau, con amplia experiencia en la creación de dashboards ejecutivos y
                  reportes automatizados.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-brand-green-600 hover:text-brand-green-700 font-medium transition-colors mt-4"
                >
                  Contactar <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            <Card className="section-card text-center">
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-100">
                  <AvatarImage src="/placeholder-user.jpg" alt="María López" />
                  <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    ML
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-heading">María López</CardTitle>
                <CardDescription className="text-purple-600 font-medium">Data Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Especialista en arquitectura de datos y ETL, con experiencia en cloud computing y big data
                  technologies.
                </p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors mt-4"
                >
                  Contactar <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 section-animate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-slate-800 mb-4">Contactanos</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ¿Listo para transformar tus datos en ventaja competitiva? Hablemos sobre tu proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="section-card">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">Email</h3>
                    <p className="text-slate-600">contacto@widescopeanalytics.com</p>
                    <p className="text-slate-600">soporte@widescopeanalytics.com</p>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-500 to-brand-green-600">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">Teléfono</h3>
                    <p className="text-slate-600">+598 99 123 456</p>
                    <p className="text-slate-600">+598 2 123 4567</p>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">Ubicación</h3>
                    <p className="text-slate-600">Montevideo, Uruguay</p>
                    <p className="text-slate-600">Atendemos todo el país</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-blue-50 to-brand-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-heading font-semibold text-slate-800 mb-4">¿Por qué elegirnos?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green-600" />
                    <span className="text-slate-700">Experiencia local en el mercado uruguayo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green-600" />
                    <span className="text-slate-700">Tecnologías de última generación</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green-600" />
                    <span className="text-slate-700">Soporte 24/7 en español</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-green-600" />
                    <span className="text-slate-700">ROI garantizado en 6 meses</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-card">
              <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6">Solicita una Consulta Gratuita</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-green-500">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-heading font-bold">WIDE SCOPE ANALYTICS</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transformamos datos en decisiones inteligentes para impulsar el crecimiento de tu negocio.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Li</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Tw</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Fb</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dashboards Interactivos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Análisis Predictivo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Consultoría Estratégica
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Análisis Financiero
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integración de Datos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#equipo" className="hover:text-white transition-colors">
                    Nuestro Equipo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Prensa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contacto@widescopeanalytics.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+598 99 123 456</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Montevideo, Uruguay</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">© 2024 Wide Scope Analytics. Todos los derechos reservados.</p>
              <div className="flex space-x-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
