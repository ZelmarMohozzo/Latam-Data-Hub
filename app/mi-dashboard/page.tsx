"use client"

import { useState } from "react"
import { BarChart3, Menu } from "lucide-react"
import Link from "next/link"

import { MobileMenu } from "@/components/mobile-menu"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DashboardEstatico } from "@/components/dashboard-estatico"

export default function MiDashboardPage() {
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
                Visualización estática de mi dashboard de Power BI con imágenes de alta calidad
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-8 bg-background">
          <div className="container">
            <div className="bg-background/60 backdrop-blur-sm rounded-xl border p-6 shadow-xl">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Mi Dashboard Exportado</h2>
                <p className="text-muted-foreground">
                  Versión estática de mi dashboard de Power BI exportado como imágenes de alta resolución.
                </p>
              </div>

              <DashboardEstatico />
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
