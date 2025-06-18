import { BarChart3 } from "lucide-react"
import Link from "next/link"

import { DashboardGallery } from "@/components/dashboard-gallery"

export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Link href="/galeria" className="font-medium text-primary">
              Galería
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Galería de <span className="text-primary">Dashboards</span>
              </h1>
              <p className="mt-4 max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Explore nuestra colección de dashboards interactivos diseñados para transformar datos complejos en
                insights accionables
              </p>
            </div>

            {/* Dashboard Gallery Component */}
            <DashboardGallery />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
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
