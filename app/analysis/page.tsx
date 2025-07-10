"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BarChart3, Menu } from "lucide-react"
import Link from "next/link"

import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { SalesDashboard } from "@/components/sales-dashboard"

export default function AnalysisPage() {
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
                <span className="text-xl font-bold tracking-tight">WIDE SCOPE ANALYTICS</span>
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
            <Link href="/analysis" className="font-medium text-primary">
              Análisis de Datos
            </Link>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-hero-gradient-light dark:bg-hero-gradient-dark pb-8 pt-24 md:pb-12 md:pt-32">
          <div className="container relative">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text-light dark:glow-text-dark">
                Dashboard de <span className="text-primary">Ventas</span>
              </h1>
              <p className="mt-4 max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Análisis completo de tus ventas con visualizaciones interactivas
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-8 bg-background">
          <div className="container">
            <SalesDashboard />
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
        </div>
      </footer>
    </div>
  )
}
