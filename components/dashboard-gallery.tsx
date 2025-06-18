"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos de ejemplo para los dashboards
const dashboards = [
  {
    id: 1,
    title: "Dashboard Financiero",
    description: "Análisis completo de KPIs financieros con visualización de tendencias y proyecciones",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Financiero",
    category: "finanzas",
  },
  {
    id: 2,
    title: "Dashboard de Ventas",
    description: "Seguimiento de ventas por región, producto y canal con análisis de conversión",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Ventas",
    category: "ventas",
  },
  {
    id: 3,
    title: "Dashboard de Marketing",
    description: "Métricas de campañas de marketing y análisis de retorno de inversión",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Marketing",
    category: "marketing",
  },
  {
    id: 4,
    title: "Dashboard de Recursos Humanos",
    description: "Análisis de rendimiento, rotación y satisfacción del personal",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+RRHH",
    category: "rrhh",
  },
  {
    id: 5,
    title: "Dashboard de Operaciones",
    description: "Monitoreo de procesos operativos y eficiencia en la cadena de suministro",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Operaciones",
    category: "operaciones",
  },
  {
    id: 6,
    title: "Dashboard de Logística",
    description: "Seguimiento de envíos, rutas y optimización de inventario",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Logística",
    category: "operaciones",
  },
  {
    id: 7,
    title: "Dashboard de Redes Sociales",
    description: "Análisis de engagement, crecimiento y conversión en redes sociales",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Redes+Sociales",
    category: "marketing",
  },
  {
    id: 8,
    title: "Dashboard de Presupuesto",
    description: "Control presupuestario con análisis de desviaciones y proyecciones",
    image: "/placeholder.svg?height=720&width=1280&text=Dashboard+Presupuesto",
    category: "finanzas",
  },
]

// Categorías únicas para los filtros
const categories = Array.from(new Set(dashboards.map((dashboard) => dashboard.category)))

export function DashboardGallery() {
  const [selectedDashboard, setSelectedDashboard] = useState<(typeof dashboards)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Filtrar dashboards por categoría
  const filteredDashboards =
    activeCategory === "all" ? dashboards : dashboards.filter((dashboard) => dashboard.category === activeCategory)

  return (
    <div className="w-full">
      {/* Filtros por categoría */}
      <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveCategory}>
        <div className="flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="all" className="text-sm">
              Todos
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Contenido de la galería */}
        <TabsContent value={activeCategory} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDashboards.map((dashboard) => (
              <div
                key={dashboard.id}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-lg transition-all hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedDashboard(dashboard)}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={dashboard.image || "/placeholder.svg"}
                    alt={dashboard.title}
                    width={1280}
                    height={720}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <ZoomIn className="h-4 w-4" />
                      Ver detalles
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{dashboard.title}</h3>
                  <p className="mt-2 text-muted-foreground line-clamp-2">{dashboard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Modal para ver el dashboard en detalle */}
      <Dialog open={!!selectedDashboard} onOpenChange={(open) => !open && setSelectedDashboard(null)}>
        <DialogContent className="max-w-5xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{selectedDashboard?.title}</DialogTitle>
            <DialogDescription>{selectedDashboard?.description}</DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
            {selectedDashboard && (
              <Image
                src={selectedDashboard.image || "/placeholder.svg"}
                alt={selectedDashboard.title}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = dashboards.findIndex((d) => d.id === selectedDashboard?.id)
                const prevIndex = (currentIndex - 1 + dashboards.length) % dashboards.length
                setSelectedDashboard(dashboards[prevIndex])
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = dashboards.findIndex((d) => d.id === selectedDashboard?.id)
                const nextIndex = (currentIndex + 1) % dashboards.length
                setSelectedDashboard(dashboards[nextIndex])
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
