"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { BarChart3, X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onClose()
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-lg border-l border-slate-200">
        <SheetHeader className="border-b border-slate-200 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue-500 to-brand-green-500">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <SheetTitle className="text-lg font-heading font-bold text-slate-800">WIDE SCOPE ANALYTICS</SheetTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-slate-600">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mt-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-left px-4 py-3 text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-xl font-medium transition-all duration-200"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-left px-4 py-3 text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-xl font-medium transition-all duration-200"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("equipo")}
            className="text-left px-4 py-3 text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-xl font-medium transition-all duration-200"
          >
            Equipo
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-left px-4 py-3 text-slate-700 hover:text-brand-blue-600 hover:bg-brand-blue-50 rounded-xl font-medium transition-all duration-200"
          >
            Contacto
          </button>
        </nav>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="space-y-4">
            <button onClick={() => scrollToSection("contacto")} className="w-full btn-primary-modern text-center">
              Consulta Gratuita
            </button>
            <div className="text-center text-sm text-slate-600">
              <p>contacto@widescopeanalytics.com</p>
              <p>+598 99 123 456</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
