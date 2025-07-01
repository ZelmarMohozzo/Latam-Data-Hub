"use client"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

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
