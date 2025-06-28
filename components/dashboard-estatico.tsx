"use client"

import { useState } from "react"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Aquí subes las imágenes de tu dashboard exportadas desde Power BI
const dashboardImages = [
  {
    id: 1,
    title: "Vista General",
    description: "Resumen ejecutivo de métricas principales",
    image: "/dashboard-page-1.png", // Sube tu imagen aquí
  },
  {
    id: 2,
    title: "Análisis Detallado",
    description: "Desglose por categorías y tendencias",
    image: "/dashboard-page-2.png", // Sube tu imagen aquí
  },
  {
    id: 3,
    title: "Métricas de Rendimiento",
    description: "KPIs y indicadores clave",
    image: "/dashboard-page-3.png", // Sube tu imagen aquí
  },
]

export function DashboardEstatico() {
  const [selectedImage, setSelectedImage] = useState<(typeof dashboardImages)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % dashboardImages.length
    setSelectedImage(dashboardImages[newIndex])
    setCurrentIndex(newIndex)
  }

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + dashboardImages.length) % dashboardImages.length
    setSelectedImage(dashboardImages[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full">
      {/* Galería de imágenes del dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {dashboardImages.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl border bg-background/30 backdrop-blur-md shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 duration-300 cursor-pointer"
            onClick={() => {
              setSelectedImage(item)
              setCurrentIndex(index)
            }}
          >
            <div className="aspect-video w-full overflow-hidden">
              <NextImage
                src={item.image}
                alt={item.title}
                width={1200}
                height={675}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/80 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="bg-black/30 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <ZoomIn className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para vista ampliada */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <div className="relative aspect-video w-full">
                <NextImage src={selectedImage.image} alt={selectedImage.title} fill className="object-contain" />
              </div>

              {/* Controles de navegación */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Información */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-2xl font-bold text-white">{selectedImage.title}</h2>
                <p className="text-white/80 mt-2">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Botón de descarga */}
      <div className="flex justify-center mt-8">
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Descargar Dashboard Completo (PDF)
        </Button>
      </div>
    </div>
  )
}
