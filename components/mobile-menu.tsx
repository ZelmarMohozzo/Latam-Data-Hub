"use client"
import Link from "next/link"
import { X, ShoppingCart, Building2, Truck, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <ThemeToggle />
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
          <span className="sr-only">Cerrar menú</span>
        </Button>
      </div>
      <nav className="container flex flex-col items-center justify-center gap-8 py-8">
        <Link href="/" className="text-2xl font-medium transition-colors hover:text-primary" onClick={onClose}>
          Inicio
        </Link>
        <Link href="/#nosotros" className="text-2xl font-medium transition-colors hover:text-primary" onClick={onClose}>
          Nosotros
        </Link>
        <div className="flex flex-col items-center gap-4">
          <span className="text-xl font-medium text-muted-foreground">Nuestros Servicios</span>
          <Separator className="w-32" />
          <div className="flex flex-col items-center gap-3">
            <Link href="#" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary" onClick={onClose}>
              <ShoppingCart className="h-5 w-5 text-green-500" />
              Optimización Comercial
            </Link>
            <Link href="#" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary" onClick={onClose}>
              <Building2 className="h-5 w-5 text-blue-500" />
              Retail Estratégico
            </Link>
            <Link href="#" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary" onClick={onClose}>
              <Truck className="h-5 w-5 text-orange-500" />
              Pack Distribuidoras
            </Link>
            <Link href="#" className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary" onClick={onClose}>
              <Monitor className="h-5 w-5 text-purple-500" />
              Panel de Control
            </Link>
          </div>
        </div>
        <Link href="/#equipo" className="text-2xl font-medium transition-colors hover:text-primary" onClick={onClose}>
          Nuestro Equipo
        </Link>
        <Link href="/#contacto" className="text-2xl font-medium transition-colors hover:text-primary" onClick={onClose}>
          Contacto
        </Link>
        <Link href="/analysis" className="text-2xl font-medium transition-colors hover:text-primary" onClick={onClose}>
          Dashboards
        </Link>
        <Button className="mt-4 btn-primary-custom">Solicitar Demo</Button>
      </nav>
    </div>
  )
}
