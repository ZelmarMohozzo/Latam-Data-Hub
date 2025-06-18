import { BarChart3 } from "lucide-react"
import Link from "next/link"

import { DashboardShowcase } from "@/components/dashboard-showcase"
import NextImage from "next/image"

export default function DashboardsPage() {
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

      <main className="flex-1">
        {/* Hero Section with Purple-Blue Gradient */}
        <section className="relative overflow-hidden bg-purple-blue-gradient-diagonal pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="absolute inset-0 bg-mesh-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text">
                Nuestros <span className="text-white">Dashboards</span>
              </h1>
              <p className="mt-4 max-w-[800px] mx-auto text-white/80 md:text-xl">
                Explore nuestra colección de dashboards interactivos diseñados para transformar datos complejos en
                insights accionables
              </p>
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
                <h2 className="text-3xl font-bold tracking-tight">Tecnología de visualización avanzada</h2>
                <p className="mt-4 text-muted-foreground">
                  Nuestros dashboards están construidos con las tecnologías más avanzadas de visualización de datos,
                  permitiendo análisis complejos de forma intuitiva y accesible para todos los niveles de la
                  organización.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary mt-0.5">
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
                    <span>Visualizaciones interactivas que responden a las necesidades del usuario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary mt-0.5">
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
                    <span>Análisis en tiempo real con actualizaciones automáticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary mt-0.5">
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
                    <span>Personalización completa según las necesidades específicas de cada cliente</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-light/30 to-blue-light/30 rounded-xl blur-xl opacity-70"></div>
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-light/10 to-blue-light/10"></div>
                  <NextImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2022.16.22_a532d920.jpg-Y454wy3olYBUQXqPXDdaCCbd1y7wDr.jpeg"
                    alt="Dashboard avanzado"
                    width={1200}
                    height={675}
                    className="object-cover"
                  />
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
