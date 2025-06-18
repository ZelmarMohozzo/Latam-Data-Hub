import NextImage from "next/image"
import Link from "next/link"
import { ChevronRight, BarChart3, PieChart, LineChart, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">APPSU</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#contacto" className="font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
            <Link href="#pyme" className="font-medium transition-colors hover:text-primary">
              PYME
            </Link>
            <Link href="/dashboards" className="font-medium transition-colors hover:text-primary">
              Dashboards
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex btn-primary-custom">Solicitar Demo</button>
            <Button variant="outline" size="icon" className="md:hidden">
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
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-purple-blue-gradient pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 bg-mesh-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text">
                    Transformamos datos en <span className="text-white">decisiones</span>
                  </h1>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    APPSU ofrece soluciones avanzadas de análisis de datos con Power BI para empresas que buscan
                    optimizar su toma de decisiones.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <button className="btn-gradient-custom btn-pulse flex items-center justify-center gap-2 text-lg">
                    Comenzar ahora
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button className="btn-secondary-custom flex items-center justify-center gap-2">
                    <Link href="/dashboards" className="flex items-center gap-2">
                      Ver dashboards
                    </Link>
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-light/30 to-blue-light/30 rounded-full blur-3xl"></div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl">
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2022.16.22_a532d920.jpg-Y454wy3olYBUQXqPXDdaCCbd1y7wDr.jpeg"
                    alt="Dashboard de análisis"
                    width={1280}
                    height={720}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboards" className="relative overflow-hidden bg-background py-16 md:py-24">
          <div className="absolute inset-0 bg-purple-blue-radial opacity-10"></div>
          <div className="container relative">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Dashboards</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Visualizaciones potentes que transforman datos complejos en insights accionables
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-light/10 to-blue-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <NextImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2021.46.36_32260467.jpg-S37a2QUUclf4qmFuFKajZ5Lwbg6K6a.jpeg"
                  alt="Dashboard de análisis"
                  width={1200}
                  height={675}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-light/10 to-blue-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <NextImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2022.15.08_aa881fe9.jpg-6skZnOs4HCNKitw7t6377Pds3vzmnp.jpeg"
                  alt="Dashboard de análisis"
                  width={1200}
                  height={675}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button className="btn-primary-custom flex items-center gap-2">
                <Link href="/dashboards" className="flex items-center gap-2">
                  Ver galería completa
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Soluciones completas de análisis de datos para impulsar su negocio
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Análisis de Datos</h3>
                <p className="mt-2 text-muted-foreground">
                  Transformamos sus datos en insights valiosos para tomar decisiones informadas.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Dashboards Personalizados</h3>
                <p className="mt-2 text-muted-foreground">
                  Creamos dashboards interactivos adaptados a las necesidades específicas de su empresa.
                </p>
              </div>
              <div className="group rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Consultoría Financiera</h3>
                <p className="mt-2 text-muted-foreground">
                  Asesoramiento experto para optimizar sus procesos financieros mediante análisis de datos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PYME Section */}
        <section id="pyme" className="relative overflow-hidden bg-purple-blue-gradient-diagonal py-16 md:py-24">
          <div className="absolute inset-0 bg-mesh-overlay opacity-20"></div>
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Soluciones para PYMES
                  </h2>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Ofrecemos soluciones de análisis de datos accesibles y escalables diseñadas específicamente para
                    pequeñas y medianas empresas.
                  </p>
                </div>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Planes adaptados a su presupuesto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Implementación rápida y sin complicaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Soporte técnico continuo</span>
                  </li>
                </ul>
                <div>
                  <button className="btn-gradient-custom flex items-center gap-2">
                    Solicitar información
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-light/30 to-blue-light/30 rounded-full blur-3xl"></div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-xl">
                  <NextImage
                    src="/placeholder.svg?height=720&width=1280&text=Soluciones+PYME"
                    alt="Soluciones para PYMES"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-blue-radial opacity-10"></div>
          <div className="container relative">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctenos</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
                Estamos listos para ayudarle a transformar sus datos en decisiones estratégicas
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
                    <p className="text-muted-foreground">contacto@appsu.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Dirección</h3>
                    <p className="text-muted-foreground">Av. Principal 123, Ciudad</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-background/40 backdrop-blur-sm p-6 shadow-lg">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="su@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Asunto
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Asunto de su mensaje"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Escriba su mensaje aquí"
                    />
                  </div>
                  <button type="submit" className="btn-primary-custom w-full">
                    Enviar mensaje
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
            <span className="text-lg font-bold">APPSU</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 APPSU. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                className="h-5 w-5"
              >
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
