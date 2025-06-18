"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Datos de ejemplo para los dashboards destacados
const featuredDashboards = [
  {
    id: 1,
    title: "Dashboard Financiero",
    description: "Análisis completo de KPIs financieros con visualización de tendencias y proyecciones",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Financiero+Destacado",
  },
  {
    id: 2,
    title: "Dashboard de Ventas",
    description: "Seguimiento de ventas por región, producto y canal con análisis de conversión",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Ventas+Destacado",
  },
  {
    id: 3,
    title: "Dashboard de Marketing",
    description: "Métricas de campañas de marketing y análisis de retorno de inversión",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Marketing+Destacado",
  },
]

export function DashboardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Función para navegar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDashboards.length)
  }

  // Función para navegar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredDashboards.length - 1 : prevIndex - 1))
  }

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  // Pausar autoplay al hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border bg-background/50 shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {featuredDashboards.map((dashboard) => (
          <div key={dashboard.id} className="w-full flex-shrink-0">
            <div className="relative aspect-video w-full">
              <Image src={dashboard.image || "/placeholder.svg"} alt={dashboard.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white">{dashboard.title}</h3>
                <p className="mt-2 text-white/80 max-w-2xl">{dashboard.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 hover:text-white"
        onClick={(e) => {
          e.preventDefault()
          prevSlide()
        }}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 hover:text-white"
        onClick={(e) => {
          e.preventDefault()
          nextSlide()
        }}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Siguiente</span>
      </Button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {featuredDashboards.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentIndex === index ? "bg-white w-6" : "bg-white/50",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
