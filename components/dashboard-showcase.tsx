"use client"

import { useState } from "react"
import NextImage from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Datos de los dashboards
const dashboards = [
  {
    id: 1,
    title: "Análisis de Patrones de Sueño",
    description: "Distribución de pacientes por calidad de sueño y antecedentes familiares",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2022.16.22_a532d920.jpg-Y454wy3olYBUQXqPXDdaCCbd1y7wDr.jpeg",
    category: "patrones-sueño",
  },
  {
    id: 2,
    title: "Hábitos Dietéticos y Consumo",
    description: "Análisis de pacientes por hábitos dietéticos y consumo de alcohol",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2022.15.08_aa881fe9.jpg-6skZnOs4HCNKitw7t6377Pds3vzmnp.jpeg",
    category: "habitos-dieteticos",
  },
  {
    id: 3,
    title: "Análisis de Depresión por Nivel Educativo",
    description: "Porcentaje de depresión y distribución por nivel educativo",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2021.46.36_32260467.jpg-S37a2QUUclf4qmFuFKajZ5Lwbg6K6a.jpeg",
    category: "depresion",
  },
  {
    id: 4,
    title: "Comparación de Pacientes 2006",
    description: "Análisis comparativo de pacientes por hábitos y consumo",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-06-09%20a%20las%2021.46.10_102c86da.jpg-PilmBwkfmtMIEbc5YS2Niz786m81Aq.jpeg",
    category: "comparacion",
  },
]

export function DashboardShowcase() {
  const [selectedDashboard, setSelectedDashboard] = useState<(typeof dashboards)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleOpenDashboard = (dashboard: (typeof dashboards)[0], index: number) => {
    setSelectedDashboard(dashboard)
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + dashboards.length) % dashboards.length
    setSelectedDashboard(dashboards[newIndex])
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % dashboards.length
    setSelectedDashboard(dashboards[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dashboards.map((dashboard, index) => (
          <div
            key={dashboard.id}
            className="group relative overflow-hidden rounded-xl border border-white/20 bg-background/30 backdrop-blur-md shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 cursor-pointer"
            onClick={() => handleOpenDashboard(dashboard, index)}
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-light/20 to-blue-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <NextImage
                src={dashboard.image || "/placeholder.svg"}
                alt={dashboard.title}
                width={1200}
                height={675}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                <div>
                  <h3 className="text-xl font-bold text-white">{dashboard.title}</h3>
                  <p className="text-white/80 mt-2">{dashboard.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-30">
              <div className="bg-purple-light/30 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <ZoomIn className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para ver el dashboard en detalle */}
      <Dialog open={!!selectedDashboard} onOpenChange={(open) => !open && setSelectedDashboard(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden bg-background/95 backdrop-blur-md border-none shadow-2xl">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-50 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white"
              onClick={() => setSelectedDashboard(null)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>

            {selectedDashboard && (
              <div className="relative">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <NextImage
                    src={selectedDashboard.image || "/placeholder.svg"}
                    alt={selectedDashboard.title}
                    width={1920}
                    height={1080}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">{selectedDashboard.title}</h2>
                  <p className="text-white/80 mt-2">{selectedDashboard.description}</p>
                </div>
              </div>
            )}

            <div className="absolute left-0 top-0 bottom-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevious()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Anterior</span>
              </Button>
            </div>

            <div className="absolute right-0 top-0 bottom-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
          </div>

          <div className="p-4 flex justify-center gap-2">
            {dashboards.map((dashboard, index) => (
              <button
                key={dashboard.id}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                onClick={() => {
                  setSelectedDashboard(dashboard)
                  setCurrentIndex(index)
                }}
                aria-label={`Ver dashboard ${dashboard.title}`}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
